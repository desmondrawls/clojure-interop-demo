(ns recording_studio.bowling.identifier
  (:gen-class :methods [^:static [game_identifier [] bowling.GameIdentifier]])
  (:use [clojure.core]
        :reload)
  (require [recording_studio.db.connection :as connection]
           [datomic.api :as d])
  (:import (bowling Game GameIdentifier Success Failure CommonErrors)))

(def by-identifier '[:find ?pins ?frame-index ?name
                     :in $ ?identifier
                     :where
                     [?n :roll/pins ?pins]
                     [?n :roll/frame-index ?frame-index]
                     [?n :roll/game ?g]
                     [?g :game/name ?name]
                     [?g :game/identifier ?identifier]])

(defn identify-game
  [identifier]
  (d/q by-identifier (connection/db) identifier))

(defn -game_identifier
  []
  (reify GameIdentifier
    (identify [this identifier]
      (let [game (identify-game identifier)]
        (if (not-empty game)
          (-> game
            (as-> game (sort-by second game))
            (as-> sorted_game (map first sorted_game))
            (as-> sorted_rolls (map #(.intValue %) sorted_rolls))
            (Game. (last (first game)) identifier)
            Success.)
          (Failure. '(CommonErrors/DEAD_END)))))))
