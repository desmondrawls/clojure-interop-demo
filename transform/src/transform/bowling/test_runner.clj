(ns transform.bowling.test-runner
  (require [transform.assertions :as assertions]
           [transform.either :as either]
           [transform.bowling.scorer :as scorer]))

(defn present-scoring-outcome [game]
  ((:fold (scorer/score-game game)) #(str "LEFT: " %) #(str "RIGHT: " %)))

(defn negative-pins []
  (let [game {:rolls '(-1) :id "id"}]
    (assertions/assertEquals
      "LEFT: [:INVALID_ROLL_NEGATIVE]"
      (present-scoring-outcome game)
      "Negative pins")))

(defn more-than-ten-pins-in-a-roll []
  (let [game {:rolls '(11) :id "id"}]
    (assertions/assertEquals
      "LEFT: [:INVALID_ROLL_TOO_HIGH]"
      (present-scoring-outcome game)
      "More than ten pins in a roll")))

(defn more-than-ten-pins-in-a-frame []
  (let [game {:rolls '(5,6) :id "id"}]
    (assertions/assertEquals
      "LEFT: [:INVALID_FRAME_TOO_HIGH]"
      (present-scoring-outcome game)
      "More than ten pins in a frame")))

(defn mixed-validity-rolls []
  (let [game {:rolls '(9, -1, 4, 11, 6) :id "id"}]
    (assertions/assertEquals
      true
      ((:fold (scorer/score-game game))
        #(and (contains? (set %) :INVALID_ROLL_NEGATIVE) (contains? (set %) :INVALID_ROLL_TOO_HIGH))
        false)
      "Mixed validity rolls")))

(defn gutter-ball []
  (let [game {:rolls '(0) :id "id"}]
    (assertions/assertEquals
      "LEFT: [:MIDFRAME]"
      (present-scoring-outcome game)
      "Gutter ball")))

(defn gutter-frame []
  (let [game {:rolls (repeat 2 0) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 0"
      (present-scoring-outcome game)
      "Gutter frame")))

(defn spare-frame []
  (let [game {:rolls '(1 9) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 10"
      (present-scoring-outcome game)
      "Spare frame")))

(defn strike-frame []
  (let [game {:rolls '(10) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 10"
      (present-scoring-outcome game)
      "Strike frame")))

(defn gutter-game []
  (let [game {:rolls (repeat 20 0) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 0"
      (present-scoring-outcome game)
      "Gutter game")))

(defn one-pin-game []
  (let [game {:rolls (conj (repeat 19 0) 1) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 1"
      (present-scoring-outcome game)
      "One pin game")))

(defn all-deuces-game []
  (let [game {:rolls (repeat 20 2) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 40"
      (present-scoring-outcome game)
      "All deuces game")))

(defn extra-rolls []
  (let [game {:rolls (repeat 99 2) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 40"
      (present-scoring-outcome game)
      "Extra rolls")))

(defn one-spare-game []
  (let [game {:rolls (concat '(8, 2, 5) (repeat 17 0)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 20"
      (present-scoring-outcome game)
      "One spare game")))

(defn closing-spare-game []
  (let [game {:rolls (concat (repeat 18 0) '(5 5 5)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 20"
      (present-scoring-outcome game)
      "Closing spare game")))

(defn one-strike-game []
  (let [game {:rolls (concat '(10, 2, 5) (repeat 16 0)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 24"
      (present-scoring-outcome game)
      "One strike game")))

(defn perfect-game []
  (let [game {:rolls (repeat 12 10) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 300"
      (present-scoring-outcome game)
      "Perfect game")))

(defn run-tests []
  (print "\n\nBOWLING:\n")
  (negative-pins)
  (more-than-ten-pins-in-a-roll)
  (more-than-ten-pins-in-a-frame)
  (mixed-validity-rolls)
  (gutter-ball)
  (gutter-frame)
  (spare-frame)
  (strike-frame)
  (gutter-game)
  (one-pin-game)
  (all-deuces-game)
  (extra-rolls)
  (one-spare-game)
  (closing-spare-game)
  (one-strike-game)
  (perfect-game))