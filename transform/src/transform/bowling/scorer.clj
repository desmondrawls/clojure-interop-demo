(ns transform.bowling.scorer
  (:gen-class :methods [^:static [score [String] String]])
  (:use [clojure.core]
        :reload)
  (:import (bowling Success)))

(defn -score
  [name]
  (Success. 99))

(defn bowl
  [& args]
  (println "BOWLING:"))