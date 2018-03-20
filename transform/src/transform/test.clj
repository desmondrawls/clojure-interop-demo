(ns transform.test
  (:gen-class)
  (:require [transform.bowling.test-runner :as bowling]))

(defn run-tests-standalone
  []
  (bowling/run-tests))

(defn run-tests
  [& args]
  (run-tests-standalone)
  (System/exit 0))
