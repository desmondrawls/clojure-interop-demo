(ns scoring.shower
  (:gen-class :methods [^:static [scorer [] bowling.Scorer]])
  (:use [clojure.core]
        :reload)
  (require [scoring.either :as either]
           [scoring.scorer :as scorer])
  (:import (bowling Failure Success BowlingFailures Scorer)))

(def error-map
  {:MIDFRAME BowlingFailures/SCORING_MIDFRAME
   :INVALID_ROLL_NEGATIVE BowlingFailures/INVALID_ROLL_NEGATIVE
   :INVALID_ROLL_TOO_HIGH BowlingFailures/INVALID_ROLL_TOO_HIGH
   :INVALID_FRAME_TOO_HIGH BowlingFailures/INVALID_FRAME_TOO_HIGH
   :INVALID_NAME_MISSING BowlingFailures/INVALID_NAME_MISSING})

(defn export-error
  [local-error]
  (get error-map local-error))

(defn either-to-outcome
  [either]
  (either/fold either #(Failure. (map export-error %)) #(Success. (.intValue %))))

(defn -scorer
  []
  (reify Scorer
    (score [this rolls]
      (either-to-outcome (scorer/score-game rolls)))))