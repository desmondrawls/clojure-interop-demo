(ns transform.bowling.scorer
  (:gen-class :methods [^:static [score_game [Object] String]
                        ^:static [show_score [Object] String]])
  (:use [clojure.core]
        :reload)
  (require [transform.bowling.shower :as shower]
           [transform.either :as either]))

(defn score
  [name]
  [{:a "yes" :b "no"}])

(defn bowl
  [& args]
  (println "BOWLING:"))

(defn score-from-frame
  [game frame roll score]
  (let [nextFrame (+ frame 1)
        nextRoll #(+ roll 1)
        rollAfterNext #(+ roll 2)
        rolls (:rolls game)
        pinsForThisRoll #(nth rolls roll)
        pinsForNextRoll #(nth rolls (nextRoll))
        pinsForRollAfterNext #(nth rolls (rollAfterNext))
        isFinishedRolls (<= (count rolls) roll)
        isFinishedFrames (= frame 10)
        isFinishedScoring (or isFinishedRolls isFinishedFrames)
        isStrike #(= (pinsForThisRoll) 10)
        scoreStrike #(let [bonus-rolls (drop roll (take (min (+ roll 3) (count rolls)) rolls))
                           bonus (reduce + bonus-rolls)]
                             (score-from-frame game nextFrame (nextRoll) (+ score bonus)))
        isSpare #(and (> (count rolls) (rollAfterNext)) (= (+ (pinsForThisRoll) (pinsForNextRoll)) 10))
        scoreSpare #(let [bonus (if (= frame 9) (* 2 (pinsForRollAfterNext)) (pinsForRollAfterNext))]
                            (score-from-frame game nextFrame (rollAfterNext) (+ score 10 bonus)))
        scoreBoring #(score-from-frame game nextFrame (rollAfterNext) (+ score (pinsForThisRoll) (pinsForNextRoll)))
        isMidFrame #(and (= (count rolls) (nextRoll)) (not (isStrike)) (not (= frame 10)))]
    (if isFinishedScoring
      (either/Right score)
      (if (isMidFrame)
        (either/Left '("MIDFRAME"))
        (if (isStrike)
          (scoreStrike)
          (if (isSpare)
            (scoreSpare)
            (scoreBoring)))))))

(defn score-game
  [game]
  (score-from-frame game 0 0 0))

(defn -score_game
  [rolls]
  (score-game {:rolls rolls :id "the fonz"}))

(defn -show_score
  [rolls]
  (shower/show-json (score-game {:rolls rolls :id "da fonz"})))