(ns bowling-alley.handlers
  (:require [re-frame.core :as re-frame]
            [bowling-alley.db :as db]
            [bowling-alley.scorer :as scorer]
            [bowling-alley.remoting :as remote]))

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

(re-frame/register-handler
  :save-game
  (fn [db [_ rolls name identifier]]
    (remote/save rolls name identifier)
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
    (remote/roll rolls name identifier)
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
    (remote/fetch rolls name)
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
