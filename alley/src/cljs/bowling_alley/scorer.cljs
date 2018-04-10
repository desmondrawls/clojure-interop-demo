(ns bowling-alley.scorer
  (:require [bowling-alley.validator :as validator]
            [scoring.either :as either]))

(defn score-from-frame
  [rolls frame roll score]
  (let [nextFrame (+ frame 1)
        nextRoll #(+ roll 1)
        rollAfterNext #(+ roll 2)
        pinsForThisRoll #(nth rolls roll)
        pinsForNextRoll #(nth rolls (nextRoll))
        pinsForRollAfterNext #(nth rolls (rollAfterNext))
        isFinishedRolls (<= (count rolls) roll)
        isFinishedFrames (= frame 10)
        isFinishedScoring (or isFinishedRolls isFinishedFrames)
        isStrike #(= (pinsForThisRoll) 10)
        scoreStrike #(let [bonus-rolls (drop roll (take (min (+ roll 3) (count rolls)) rolls))
                           bonus (reduce + bonus-rolls)]
                       (score-from-frame rolls nextFrame (nextRoll) (+ score bonus)))
        isSpare #(and (> (count rolls) (rollAfterNext)) (= (+ (pinsForThisRoll) (pinsForNextRoll)) 10))
        scoreSpare #(let [bonus (if (= frame 9) (* 2 (pinsForRollAfterNext)) (pinsForRollAfterNext))]
                      (score-from-frame rolls nextFrame (rollAfterNext) (+ score 10 bonus)))
        scoreBoring #(score-from-frame rolls nextFrame (rollAfterNext) (+ score (pinsForThisRoll) (pinsForNextRoll)))
        isMidFrame #(and (= (count rolls) (nextRoll)) (not (isStrike)) (not (= frame 10)))
        scoreMidFrame #(score-from-frame (drop-last rolls) 0 0 0)]
    (if isFinishedScoring
      (either/Right score)
      (if (isMidFrame)
        (scoreMidFrame)
        (if (isStrike)
          (scoreStrike)
          (if (isSpare)
            (scoreSpare)
            (scoreBoring)))))))

(defn score-game
  [rolls]
  (either/fold (validator/validate-game rolls)
    (fn [x]
      (either/Left x))
    (fn [_] (score-from-frame rolls 0 0 0))))

(defn -score_game
  [rolls]
  (score-game rolls))