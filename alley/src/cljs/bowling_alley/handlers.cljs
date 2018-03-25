(ns bowling-alley.handlers
  (:require [ajax.core :refer [GET]]
            [re-frame.core :as re-frame]
            [bowling-alley.db :as db]))

(enable-console-print!)

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :set-rolls
  (fn [db [_ rolls name]]
    (re-frame/dispatch [:score-game rolls name])
    (assoc-in db [:games name :rolls] rolls)))

(re-frame/register-handler
  :score-game
  (fn [db [_ rolls name]]
    (ajax.core/POST
      "http://localhost:8000/requests/rolls"
      {:params {:rolls (map js/parseInt (clojure.string/split rolls #","))}
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
 :bad-response
 (fn [db [_ _]]
   (-> db
       (assoc :loading? false)
       (assoc :error true)
       (assoc-in [:user :repos] [])
       (assoc-in [:user :profile] {}))))
