(ns scoring.bowling.shower
  (:gen-class :methods [^:static [show_score [Object] String]
                        ^:static [scorer [] bowling.ScoreGameUseCase]])
  (:require [clojure.data.json :as json]
            [scoring.bowling.scorer :as scorer])
  (:import (bowling Failure Success Game CommonErrors Outcome BowlingFailures ScoreGameUseCase)))

(defn show-either
  [either]
  ((:fold either)
    #(str "{\"left\":" (json/write-str %) "}")
    #(str "{\"right\":" (json/write-str %) "}")))

(defn -show_score
  [rolls]
  (show-either (scorer/score-game {:rolls rolls :id "1" :name "da fonz"})))

(defn export-error
  [local-error]
  (get {:MIDFRAME BowlingFailures/SCORING_MIDFRAME
        :INVALID_ROLL_NEGATIVE BowlingFailures/INVALID_ROLL_NEGATIVE
        :INVALID_ROLL_TOO_HIGH BowlingFailures/INVALID_ROLL_TOO_HIGH
        :INVALID_FRAME_TOO_HIGH BowlingFailures/INVALID_FRAME_TOO_HIGH
        :INVALID_NAME_MISSING BowlingFailures/INVALID_NAME_MISSING} local-error))

(defn either-to-outcome
  [either]
  ((:fold either)
    #(Failure. (map export-error %))
    #(Success. %)))

(defn -scorer
  []
  (reify ScoreGameUseCase
    (score [this rolls]
      (either-to-outcome (scorer/score-game rolls)))))