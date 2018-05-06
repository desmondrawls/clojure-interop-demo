(ns scoring.shower
  (:gen-class :methods [^:static [scorer [] bowling.Scorer]])
  (require [scoring.either :as either]
           [scoring.scorer :as scorer])
  (:import (bowling Failure Success Scorer)))

(defn -scorer
  []
  (reify Scorer
    (score [this rolls]
      (either/fold (scorer/score-game rolls)
        #(Failure. %)
        #(Success. (.intValue %))))))