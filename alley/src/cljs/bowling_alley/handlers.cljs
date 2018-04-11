(ns bowling-alley.handlers
  (:require [ajax.core :refer [GET]]
            [re-frame.core :as re-frame]
            [bowling-alley.db :as db]
            [bowling-alley.scorer :as scorer]
            [scoring.either :as either]))

(enable-console-print!)

(defn normalize [games]
  (into {}
    (for [game games]
      (let [key-game (clojure.walk/keywordize-keys game)]
        [(:identifier key-game) key-game]))))

(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/register-handler
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(defn save-remotely [rolls name identifier]
  (ajax.core/POST
    "http://localhost:8000/games"
    {:params {:rolls rolls :name name :identifier identifier}
     :format :json
     :headers {"Content-Type" "application/json"
               "Accept" "application/json"}
     :handler #(re-frame/dispatch [:stop-loading])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(re-frame/register-handler
  :save-game
  (fn [db [_ rolls name identifier]]
    (save-remotely rolls name identifier)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :identify-game
  (fn [db [_ local-identifier global-identifier]]
    (-> db (assoc-in [:games local-identifier :identifier] global-identifier))))

(re-frame/register-handler
  :stop-loading
  (fn [db [_]]
    (-> db (assoc :loading? false))))

(re-frame/register-handler
  :set-inputs
  (fn [db [_ timestamp rolls name submitted]]
    (-> db (assoc-in [:inputs timestamp] {:rolls rolls :name name :submitted submitted}))))

(defn response-to-result [response]
  (let [right (get (js->clj response) "value")
        left (get (js->clj response) "errors")]
    (if right (either/Right right) (either/Left left))))

(defn score-remotely [rolls]
  (ajax.core/GET
    (str "http://localhost:8000/games/score")
    {:params {:rolls (clojure.string/join "&rolls=" rolls)}
     :format :json
     :headers {"Content-Type" "text/plain"}
     :handler #(re-frame/dispatch [:process-scoring-result (response-to-result %1) rolls])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn score-locally [rolls]
  (re-frame/dispatch [:process-scoring-result (scorer/score-game rolls) rolls]))

(re-frame/register-handler
  :score-game
  (fn [db [_ rolls]]
    (score-locally rolls)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-scoring-result
  (fn [db [_ result rolls]]
    (-> db
      (assoc :loading? false)
      (assoc-in [:roll-validities rolls] result))))

(re-frame/register-handler
  :roll
  (fn [db [_ rolls name identifier]]
    (ajax.core/GET
      (str "http://localhost:8000/games/rolls/new")
      {:params {:rolls (clojure.string/join "&rolls=" rolls)}
       :format :json
       :headers {"Content-Type" "application/json"}
       :handler #(re-frame/dispatch [:process-rolling-response %1 identifier name])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-rolling-response
  (fn [db [_ response identifier name]]
    (let [rolls (get (js->clj response) "value")]
      (re-frame/dispatch [:score-game rolls])
      (-> db
        (assoc :loading? false)
        (assoc-in [:games identifier] {:rolls rolls :name name})))))

(re-frame/register-handler
  :fetch-games
  (fn [db [_ rolls name]]
    (ajax.core/GET
      "http://localhost:8000/source/games"
      {:format :json
       :handler #(re-frame/dispatch [:process-fetch-response %1])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(defn score-games
  [games]
  (doseq [game games]
    (let [rolls (:rolls (second game))
          identifier (first game)]
      (re-frame/dispatch [:score-game rolls identifier]))))

(re-frame/register-handler
  :process-fetch-response
  (fn [db [_ response]]
    (let [games (normalize (get (js->clj response) "value"))]
      (score-games games)
      (-> db
        (assoc :loading? false)
        (assoc-in [:games] games)))))

(re-frame/register-handler
  :bad-response
  (fn [db [_ _]]
    (-> db
      (assoc :loading? false)
      (assoc :error true)
      (assoc-in [:user :repos] [])
      (assoc-in [:user :profile] {}))))
