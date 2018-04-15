(ns persistence.bowling.fetcher
  (:gen-class :methods [^:static [games_fetcher [] bowling.GamesFetcher]])
  (:use [clojure.core]
        :reload)
  (require [persistence.db.connection :as connection]
           [datomic.api :as d])
  (:import (bowling Game GamesFetcher Success Failure CommonErrors)))

(def query '[:find ?pins ?frame-index ?name ?identifier
                     :in $
                     :where
                     [?n :roll/pins ?pins]
                     [?n :roll/frame-index ?frame-index]
                     [?n :roll/game ?g]
                     [?g :game/name ?name]
                     [?g :game/identifier ?identifier]])

(defn fetch-games
  [db]
  (d/q query db))

(defn gamify
  [game]
  (let [frames (second game)
        name (nth (first frames) 2)]
    (-> frames
      (as-> frames (sort-by second frames))
      (as-> sorted_frames (map first sorted_frames))
      (as-> sorted_rolls (map #(.intValue %) sorted_rolls))
      (Game. name (first game)))))

(defn fetch
  [db]
  (let [games (fetch-games db)]
    (if (not-empty games)
      (Success. (map gamify (group-by last games)))
      (Failure. '(CommonErrors/DEAD_END)))))

(defn -games_fetcher
  []
  (reify GamesFetcher
    (fetch [this]
      (fetch (connection/db)))))
