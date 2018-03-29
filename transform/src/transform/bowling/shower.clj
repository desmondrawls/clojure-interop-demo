(ns transform.bowling.shower
  (:gen-class :methods [^:static [show_score [Object] String]])
  (:require [clojure.data.json :as json]
            [transform.bowling.scorer :as scorer]))

(defn show-either
  [either]
  ((:fold either)
    #(str "{\"left\":" (json/write-str %) "}")
    #(str "{\"right\":" (json/write-str %) "}")))

(defn -show_score
  [rolls]
  (show-either (scorer/score-game {:rolls rolls :id "da fonz"})))