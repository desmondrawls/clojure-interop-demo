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

(defn parse-rolls
  [rolls]
  (map js/parseInt (clojure.string/split rolls #",")))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :save-game
  (fn [db [_ name rolls]]
    (ajax.core/POST
      "http://localhost:8000/games"
      {:params {:rolls rolls :name name}
       :format :json
       :headers {"Content-Type" "application/json"
                 "Accept" "application/json"}
       :handler       #(re-frame/dispatch [:stop-loading])
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
  (fn [db [_ rolls-input name]]
    (let [rolls (parse-rolls rolls-input)]
      (re-frame/dispatch [:score-game rolls name])
      (assoc-in db [:games name :rolls] rolls))))

(re-frame/register-handler
  :score-game
  (fn [db [_ rolls name]]
    (ajax.core/POST
      "http://localhost:8000/requests/rolls"
      {:params {:rolls rolls}
       :format :json
       :headers {"Content-Type" "text/plain"}
       :handler       #(re-frame/dispatch [:process-scoring-response %1 name])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-scoring-response
  (fn [db [_ response name]]
    (-> db
      (assoc :loading? false)
      (assoc-in [:games name :score] (get (js->clj response) "right")))))

(re-frame/register-handler
  :fetch-games
  (fn [db [_ rolls name]]
    (ajax.core/GET
      "http://localhost:8000/source/games"
      {:format :json
       :handler       #(re-frame/dispatch [:process-fetch-response %1])
       :error-handler #(re-frame/dispatch [:bad-response %1])})
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/register-handler
  :process-fetch-response
  (fn [db [_ response]]
    (let [games (normalize (get (js->clj response) "value"))]
      (println games)
      (score-games games)
      (-> db
        (assoc :loading? false)
        (assoc-in [:games] games)))))

(defn score-games
  [games]
  (doseq [game games]
    (println "GAME SEQ: " game)
    (let [rolls (:rolls (second game))
          name (first game)]
      (re-frame/dispatch [:score-game rolls name]))))

(re-frame/register-handler
 :bad-response
 (fn [db [_ _]]
   (-> db
       (assoc :loading? false)
       (assoc :error true)
       (assoc-in [:user :repos] [])
       (assoc-in [:user :profile] {}))))
