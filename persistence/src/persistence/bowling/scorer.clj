(ns persistence.bowling.scorer
  (:gen-class :methods [^:static [score [String] String]])
  (:use [clojure.core]
        :reload))


(defn -score
  [name]
  (str "REALLY GOOD GAME YALL: " name))
