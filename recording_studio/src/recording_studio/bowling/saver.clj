(ns recording-studio.bowling.saver
  (:import (bowling GameSaver)
           (bowling Game))
  (:gen-class :methods [^:static [game_saver [] bowling.GameSaver]])
  (:use [clojure.core]
        :reload)
  (require [recording_studio.db.connection :as connection]
           [clojure.reflect :as r]
           [datomic.api :as d]))

(defn save-game [game]
  (let [rolls (.getRolls game)
        identifier (.getIdentifier game)
        temporary-game-id "temporary-game-id"
        game-datom {:db/id temporary-game-id
                    :game/identifier identifier}
        roll-datoms (map-indexed (fn [frame-index pins] {:roll/game temporary-game-id
                                                         :roll/pins (Long. pins)
                                                         :roll/frame-index (Long. frame-index)}) rolls)]
    (d/transact (connection/connect) (conj roll-datoms game-datom))))

(defn -game_saver []
  (reify GameSaver
    (save [this game]
      (-> (save-game game)
          clojure.pprint/pprint))))
