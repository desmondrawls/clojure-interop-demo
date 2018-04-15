(ns persistence.tasks.test_runner
  (:gen-class)
  (:require [persistence.bowling.test_runner :as bowling]))

(defn runTests
  [& args]
  (println "TESTING:\n\n")
  (bowling/runTests)
  (System/exit 0))


