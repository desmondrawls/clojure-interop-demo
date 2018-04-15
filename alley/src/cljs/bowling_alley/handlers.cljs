(ns bowling-alley.handlers
  (:require [re-frame.core :as re-frame]
            [bowling-alley.db :as db]
            [scoring.scorer :as scorer]
            [day8.re-frame.async-flow-fx]
            [bowling-alley.remoting :as remote]))

(enable-console-print!)

(defn normalize [games]
  (into {}
    (for [game games]
      (let [key-game (clojure.walk/keywordize-keys game)]
        [(:identifier key-game) key-game]))))

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

(defn score-locally [rolls]
  (re-frame/dispatch [:process-scoring-result (scorer/score-game rolls) rolls]))

(re-frame/reg-event-db
  :score-game
  (fn [db [_ rolls]]
    (score-locally rolls)
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
    (let [rolls (:rolls (second game))]
      (re-frame/dispatch [:score-game rolls]))))

(re-frame/reg-event-db
  :process-fetch-response
  (fn [db [_ response]]
    (let [games (normalize (get (js->clj response) "value"))]
      (score-games games)
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