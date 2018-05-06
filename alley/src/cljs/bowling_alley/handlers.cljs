(ns bowling-alley.handlers
  (:require [re-frame.core :as re-frame]
            [bowling-alley.db :as db]
            [scoring.either :as either]
            [day8.re-frame.async-flow-fx]
            [bowling-alley.remoting :as remote]))

(enable-console-print!)

(defn boot-flow
  []
  {:first-dispatch [:fetch-games]
   :rules [{:when :seen? :events :fetch-games :dispatch [:refresh-with-delay]}]})

(re-frame/reg-event-fx
  :refresh-with-delay
  (fn [_ [_ _]]
    (.setTimeout js/window
      (fn [] (re-frame/dispatch [:refresh-games]))
      5000)))

(re-frame/reg-event-fx
  :refresh-games
  (fn [_ [_ _]]
    {:async-flow (boot-flow)}))

(defn response->result [response]
  (let [right (:value response)
        left (:errors response)]
    (if right (either/Right right) (either/Left left))))

(defn normalize [games]
  (into {}
    (for [game games]
      (let [key-scored-game (clojure.walk/keywordize-keys game)
            key-game (:game key-scored-game)]
        [(:identifier key-game) key-scored-game]))))

(re-frame/reg-event-db
  :initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/reg-event-db
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  :save-game
  (fn [db [_ rolls name identifier]]
    (remote/save rolls name identifier)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/reg-event-db
  :identify-game
  (fn [db [_ local-identifier global-identifier]]
    (-> db (assoc-in [:games local-identifier :identifier] global-identifier))))

(re-frame/reg-event-db
  :stop-loading
  (fn [db [_]]
    (-> db (assoc :loading? false))))

(re-frame/reg-event-db
  :set-inputs
  (fn [db [_ timestamp rolls name submitted]]
    (-> db (assoc-in [:inputs timestamp] {:rolls rolls :name name :submitted submitted}))))

(re-frame/reg-event-db
  :score-game
  (fn [db [_ rolls]]
    (remote/score rolls)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/reg-event-db
  :process-scoring-result
  (fn [db [_ result rolls]]
    (-> db
      (assoc :loading? false)
      (assoc-in [:scores rolls] result))))

(re-frame/reg-event-db
  :roll
  (fn [db [_ rolls name identifier]]
    (remote/roll rolls name identifier)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(re-frame/reg-event-db
  :process-rolling-response
  (fn [db [_ response identifier name]]
    (let [rolls (get (js->clj response) "value")]
      (re-frame/dispatch [:score-game rolls])
      (-> db
        (assoc :loading? false)
        (assoc-in [:games identifier] {:rolls rolls :name name})))))

(re-frame/reg-event-db
  :fetch-games
  (fn [db [_ _ _]]
    (remote/fetch)
    (-> db
      (assoc :loading? true)
      (assoc :error false))))

(defn score-games
  [games]
  (doseq [game games]
    (let [rolls (:rolls (:game (second game)))
          score (:score (second game))
          result (response->result score)]
      (print "SCORE: " score)
      (print "RESULT: " result)
      (re-frame/dispatch [:process-scoring-result result rolls]))))

(defn map-values [m f]
  (into {} (for [[k v] m] [k (f v)])))

(re-frame/reg-event-db
  :process-fetch-response
  (fn [db [_ response]]
    (let [scored-games (normalize (get (js->clj response) "value"))
          games (map-values scored-games :game)]
      (score-games scored-games)
      (-> db
        (assoc :loading? false)
        (assoc-in [:games] (merge games (:games db)))))))

(re-frame/reg-event-db
  :bad-response
  (fn [db [_ _]]
    (-> db
      (assoc :loading? false)
      (assoc :error true)
      (assoc-in [:user :repos] [])
      (assoc-in [:user :profile] {}))))