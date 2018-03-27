(ns bowling-alley.handlers
  (:require [ajax.core :refer [GET]]
            [re-frame.core :as re-frame]
            [bowling-alley.db :as db]))

(enable-console-print!)

(defn normalize [games]
  (into {}
    (for [game games]
      (let [key-game (clojure.walk/keywordize-keys game)]
        [(:name key-game) (dissoc key-game :name)]))))

(defn normalize-game
  [game]
  (let [key-game (clojure.walk/keywordize-keys game)]
    {(:name key-game) (dissoc key-game :name)}))

(re-frame/register-handler
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/register-handler
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :save-game
  (fn [db [_ rolls name identifier]]
    (ajax.core/POST
      "http://localhost:8000/games"
      {:params {:rolls rolls :name name :identifier identifier}
       :format :json
       :headers {"Content-Type" "application/json"
                 "Accept" "application/json"}
       :handler #(re-frame/dispatch [:stop-loading])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :stop-loading
  (fn [db [_]]
    (-> db (assoc :loading? false))))

(re-frame/register-handler
  :set-rolls
  (fn [db [_ rolls name identifier]]
    (re-frame/dispatch [:score-game rolls name])
    (assoc-in db [:games name :rolls] rolls)
    (assoc-in db [:games name :identifier] identifier)))

(re-frame/register-handler
  :score-game
  (fn [db [_ rolls name]]
    (ajax.core/POST
      "http://localhost:8000/requests/rolls"
      {:params {:rolls rolls}
       :format :json
       :headers {"Content-Type" "text/plain"}
       :handler #(re-frame/dispatch [:process-scoring-response %1 name])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-scoring-response
  (fn [db [_ response name]]
    (let [right (get (js->clj response) "right")
          left (get (js->clj response) "left")]
      (-> db
        (assoc :loading? false)
        (assoc-in [:games name :score] (or right (first left)))))))

(re-frame/register-handler
  :roll
  (fn [db [_ rolls name identifier]]
    (ajax.core/GET
      (str "http://localhost:8000/games/" identifier "/rolls/new")
      {:params {:rolls (clojure.string/join "&rolls=" rolls) :name name}
       :format :json
       :headers {"Content-Type" "application/json"}
       :handler #(re-frame/dispatch [:process-rolling-response %1])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-rolling-response
  (fn [db [_ response]]
    (let [game (get (js->clj response) "value")
          name (get game "name")
          key-game (get (normalize-game game) name)]
      (re-frame/dispatch [:score-game (:rolls key-game) name])
      (-> db
        (assoc :loading? false)
        (assoc-in [:games name] key-game)))))

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
          name (first game)]
      (re-frame/dispatch [:score-game rolls name]))))

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
