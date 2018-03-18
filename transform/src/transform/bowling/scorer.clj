(ns transform.bowling.scorer
  (:gen-class :methods [^:static [score [String] String]])
  (:use [clojure.core]
        :reload))


(defn -score
  [name]
  (str "REALLY GOOD GAME YALL: " name))

(defn bowl
  [& args]
  (println "BOWLING:"))
