(ns bowling-alley.validator
  (:require [bowling-alley.either :as either]))

(defn validate-roll [pins]
  (if (< pins 0)
    (either/Left [:INVALID_ROLL_NEGATIVE])
    (if (> pins 10)
      (either/Left [:INVALID_ROLL_TOO_HIGH])
      (either/Right [pins]))))

(defn validate-rolls [rolls]
  (loop [cumulative-outcome (either/Right []) remaining-rolls rolls]
    (if (empty? remaining-rolls)
      cumulative-outcome
      (let [current-outcome (validate-roll (first remaining-rolls))]
        (recur (either/add current-outcome cumulative-outcome) (rest remaining-rolls))))))

(defn validate-game [game]
  (println "validating: " game)
  (println "validating: " (:rolls game))
  (either/fold (validate-rolls (:rolls game))
    (fn [x]
      (either/Left x))
    (fn [_] (either/Right game))))
