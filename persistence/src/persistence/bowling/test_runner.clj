(ns persistence.bowling.test_runner
  (require [datomic.api :as d]
           [persistence.bowling.fetcher :as fetcher]
           [persistence.bowling.identifier :as identifier])
  (:import (java.util UUID)))

(defn assertEquals [expected actual name]
  (if (= expected actual)
    (println "SUCCESS: " name)
    (println "FAILED: " name "\n\texpected " actual " to equal " expected)))

(defn query_for_frames_and_pins []
  (let [datoms [["roll-db-id" :roll/pins "pins"]
                ["roll-db-id" :roll/frame-index "frame"]
                ["other-roll-db-id" :roll/frame-index "frame"]
                ["roll-db-id" :roll/game "game-db-id"]
                ["roll-db-id" :roll/game "other-game-db-id"]
                ["game-db-id" :game/name "game-name"]
                ["game-db-id" :game/identifier "game-identifier"]]]
    (assertEquals
      '(["pins" "frame" "game-name"])
      (seq (d/q identifier/by-identifier datoms "game-identifier"))
      "querying for frames and pins")))

(defn fetch_games []
  (let [game1-identifier (UUID/randomUUID)
        game2-identifier (UUID/randomUUID)
        datoms [[1 :roll/pins 2]
                [1 :roll/frame-index 1]
                [1 :roll/game "game1-db-id"]
                [1 :roll/game "game2-db-id"]
                [4 :roll/pins 9]
                [4 :roll/frame-index 2]
                [4 :roll/game "game1-db-id"]
                ["game1-db-id" :game/name "game1-name"]
                ["game1-db-id" :game/identifier game1-identifier]
                ["game2-db-id" :game/name "game2-name"]
                ["game2-db-id" :game/identifier game2-identifier]]]
    (assertEquals
      (set [[[2, 9] "game1-name" game1-identifier] [[2] "game2-name" game2-identifier]])
      (set (map #(identity [(.getRolls %) (.getName %) (.getIdentifier %)])
        (map fetcher/gamify (group-by last (fetcher/fetch-games datoms)))))
      "fetch_games")))

(defn runTests []
  (query_for_frames_and_pins)
  (fetch_games))




