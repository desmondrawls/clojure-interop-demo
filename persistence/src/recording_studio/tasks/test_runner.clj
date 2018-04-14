(ns recording_studio.tasks.test_runner
  (:gen-class)
  (:require [recording_studio.bowling.test_runner :as bowling]))

(defn runTests
  [& args]
  (println "TESTING:\n\n")
  (bowling/runTests)
  (System/exit 0))


