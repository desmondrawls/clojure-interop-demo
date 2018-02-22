(ns recording_studio.bowling.test_runner
  (require [datomic.api :as d]
           [recording_studio.bowling.identifier :as identifier]))

(defn assertEquals [expected actual name]
  (if (= expected actual)
    (println "SUCCESS: " name)
    (println "FAILED: " name "\n\texpected " actual " to equal " expected)))

(defn testQuery []
  (let [datoms [["roll-db-id" :roll/pins "pins"]
                ["roll-db-id" :roll/frame-index "frame"]
                ["other-roll-db-id" :roll/frame-index "frame"]
                ["roll-db-id" :roll/game "game-db-id"]
                ["roll-db-id" :roll/game "other-game-db-id"]
                ["game-db-id" :game/identifier "game-identifier"]]]
  (assertEquals
    '(["pins" "frame" "game-identifier"])
    (seq (d/q identifier/by-identifier datoms "game-identifier"))
    "querying for frames and pins")))

(defn runTests []
  (testQuery)
  (assertEquals 1 1 "one is equal to one"))




