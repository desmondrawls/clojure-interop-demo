(ns scoring.test
  (:gen-class)
  (:require [scoring.bowling.test-runner :as bowling]))

(defn run-tests-standalone
  []
  (bowling/run-tests))

(defn run-tests
  [& args]
  (run-tests-standalone)
  (System/exit 0))
