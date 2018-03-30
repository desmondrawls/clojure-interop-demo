(ns bowling-alley.handlers
  (:require [ajax.core :refer [GET]]
            [re-frame.core :as re-frame]
            [bowling-alley.db :as db]))

(enable-console-print!)

(defn normalize [games]
  (into {}
    (for [game games]
      (let [key-game (clojure.walk/keywordize-keys game)]
        [(:identifier key-game) (dissoc key-game :identifier)]))))

(defn normalize-game
  [game]
  (let [key-game (clojure.walk/keywordize-keys game)]
    {(:identifier key-game) (dissoc key-game :identifier)}))

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
  :submit
  (fn [db [_]]
    (-> db (assoc-in [:inputs :submitted] true))))

(re-frame/register-handler
  :set-rolls-input
  (fn [db [_ rolls]]
    (-> db (assoc-in [:inputs :rolls] rolls))))

(re-frame/register-handler
  :set-name-input
  (fn [db [_ name]]
    (println "assoc: " name)
    (-> db (assoc-in [:inputs :name] name))))

(re-frame/register-handler
  :clear-inputs
  (fn [db [_]]
    (println "CLEARING")
    (-> db
      (assoc-in [:inputs :rolls] "")
      (assoc-in [:inputs :name] "")
      (assoc-in [:inputs :submitted] false))))

(re-frame/register-handler
  :set-rolls
  (fn [db [_ rolls name identifier]]
    (println "set rolls: " name " : " rolls)
    (re-frame/dispatch [:score-game rolls identifier])
    (-> db
      (assoc-in [:games identifier :rolls] rolls)
      (assoc-in [:games identifier :name] name))))

(re-frame/register-handler
  :score-game
  (fn [db [_ rolls identifier]]
    (ajax.core/POST
      "http://localhost:8000/requests/rolls"
      {:params {:rolls rolls}
       :format :json
       :headers {"Content-Type" "text/plain"}
       :handler #(re-frame/dispatch [:process-scoring-response %1 identifier])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-scoring-response
  (fn [db [_ response identifier]]
    (let [right (get (js->clj response) "right")
          left (get (js->clj response) "left")]
      (-> db
        (assoc :loading? false)
        (assoc-in [:games identifier :score] (or right (first left)))))))

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
          identifier (get game "identifier")
          key-game (get (normalize-game game) identifier)]
      (re-frame/dispatch [:score-game (:rolls key-game) identifier])
      (-> db
        (assoc :loading? false)
        (assoc-in [:games identifier] key-game)))))

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
