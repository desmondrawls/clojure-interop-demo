(ns transform.bowling.test-runner
  (require [transform.assertions :as assertions]
           [transform.either :as either]
           [transform.bowling.scorer :as scorer]))

(defn gutter-ball []
  (let [game {:rolls '(0) :id "id"}]
    (assertions/assertEquals
      "LEFT: (\"MIDFRAME\")"
      ((:fold (scorer/score-game game)) #(str "LEFT: " %) #(str "RIGHT: " %))
      "Gutter ball")))

(defn gutter-frame []
  (let [game {:rolls (repeat 2 0) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 0"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Gutter frame")))

(defn spare-frame []
  (let [game {:rolls '(1 9) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 10"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Spare frame")))

(defn strike-frame []
  (let [game {:rolls '(10) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 10"
      ((:fold (scorer/score-game game)) #(str "LEFT: " %) #(str "RIGHT: " %))
      "Strike frame")))

(defn gutter-game []
  (let [game {:rolls (repeat 20 0) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 0"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Gutter game")))

(defn one-pin-game []
  (let [game {:rolls (conj (repeat 19 0) 1) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 1"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "One pin game")))

(defn all-deuces-game []
  (let [game {:rolls (repeat 20 2) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 40"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "All deuces game")))

(defn too-many-rolls []
  (let [game {:rolls (repeat 99 2) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 40"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Too many rolls")))

(defn one-spare-game []
  (let [game {:rolls (concat '(8, 2, 5) (repeat 17 0)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 20"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "One spare game")))

(defn closing-spare-game []
  (let [game {:rolls (concat (repeat 18 0) '(5 5 5)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 20"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Closing spare game")))

(defn one-strike-game []
  (let [game {:rolls (concat '(10, 2, 5) (repeat 16 0)) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 24"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "One strike game")))

(defn perfect-game []
  (let [game {:rolls (repeat 12 10) :id "id"}]
    (assertions/assertEquals
      "RIGHT: 300"
      ((:fold (scorer/score-game game)) #("LEFT") #(str "RIGHT: " %))
      "Perfect game")))

(defn run-tests []
  (print "\n\nBOWLING:\n")
  (gutter-ball)
  (gutter-frame)
  (spare-frame)
  (strike-frame)
  (gutter-game)
  (one-pin-game)
  (all-deuces-game)
  (too-many-rolls)
  (one-spare-game)
  (closing-spare-game)
  (one-strike-game)
  (perfect-game))