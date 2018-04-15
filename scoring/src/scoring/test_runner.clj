(ns scoring.test-runner
  (require [scoring.either :as either]
           [scoring.scorer :as scorer]))

(defn assertEquals [expected actual name]
  (if (= expected actual)
    (println "SUCCESS: " name)
    (println "FAILED: " name "\n\texpected " actual " to equal " expected)))

(defn present-scoring-outcome [game]
  (either/fold (scorer/score-game game) #(str "LEFT: " %) #(str "RIGHT: " %)))

(defn negative-pins []
    (assertEquals
      "LEFT: [:INVALID_ROLL_NEGATIVE]"
      (present-scoring-outcome '(-1))
      "Negative pins"))

(defn more-than-ten-pins-in-a-roll []
    (assertEquals
      "LEFT: [:INVALID_ROLL_TOO_HIGH]"
      (present-scoring-outcome '(11))
      "More than ten pins in a roll"))

(defn more-than-ten-pins-in-a-frame []
    (assertEquals
      "LEFT: [:INVALID_FRAME_TOO_HIGH]"
      (present-scoring-outcome '(5 6))
      "More than ten pins in a frame"))

(defn mixed-validity-rolls []
    (assertEquals
      true
      ((:fold (scorer/score-game '(9 -1 4 11 6)))
        #(and (contains? (set %) :INVALID_ROLL_NEGATIVE) (contains? (set %) :INVALID_ROLL_TOO_HIGH))
        false)
      "Mixed validity rolls"))

(defn gutter-ball []
    (assertEquals
      "RIGHT: 0"
      (present-scoring-outcome '(0))
      "Gutter ball"))

(defn mid-frame []
    (assertEquals
      "RIGHT: 3"
      (present-scoring-outcome '(1 2 3))
      "Mid-frame"))

(defn mid-frame-after-a-strike []
    (assertEquals
      "RIGHT: 10"
      (present-scoring-outcome '(10 5))
      "Mid-frame after a strike"))

(defn gutter-frame []
    (assertEquals
      "RIGHT: 0"
      (present-scoring-outcome (repeat 2 0))
      "Gutter frame"))

(defn spare-frame []
    (assertEquals
      "RIGHT: 10"
      (present-scoring-outcome '(1 9))
      "Spare frame"))

(defn strike-frame []
    (assertEquals
      "RIGHT: 10"
      (present-scoring-outcome '(10))
      "Strike frame"))

(defn gutter-game []
    (assertEquals
      "RIGHT: 0"
      (present-scoring-outcome (repeat 20 0))
      "Gutter game"))

(defn one-pin-game []
    (assertEquals
      "RIGHT: 1"
      (present-scoring-outcome (conj (repeat 19 0) 1))
      "One pin game"))

(defn all-deuces-game []
    (assertEquals
      "RIGHT: 40"
      (present-scoring-outcome (repeat 20 2))
      "All deuces game"))

(defn extra-rolls []
    (assertEquals
      "RIGHT: 40"
      (present-scoring-outcome (repeat 99 2))
      "Extra rolls"))

(defn one-spare-game []
    (assertEquals
      "RIGHT: 20"
      (present-scoring-outcome (concat '(8, 2, 5) (repeat 17 0)))
      "One spare game"))

(defn closing-spare-game []
    (assertEquals
      "RIGHT: 20"
      (present-scoring-outcome (concat (repeat 18 0) '(5 5 5)))
      "Closing spare game"))

(defn one-strike-game []
    (assertEquals
      "RIGHT: 24"
      (present-scoring-outcome (concat '(10, 2, 5) (repeat 16 0)))
      "One strike game"))

(defn perfect-game []
    (assertEquals
      "RIGHT: 300"
      (present-scoring-outcome (repeat 12 10))
      "Perfect game"))

(defn run-tests []
  (print "\n\nBOWLING:\n")
  (negative-pins)
  (more-than-ten-pins-in-a-roll)
  (more-than-ten-pins-in-a-frame)
  (mixed-validity-rolls)
  (gutter-ball)
  (mid-frame)
  (mid-frame-after-a-strike)
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