(ns scoring.validator
  (:require [scoring.either :as either]))

(defn validate-roll [pins]
  (if (< pins 0)
    (either/Left ["INVALID_ROLL_NEGATIVE"])
    (if (> pins 10)
      (either/Left ["INVALID_ROLL_TOO_HIGH"])
      (either/Right [pins]))))

(defn validate-rolls [rolls]
  (loop [cumulative-outcome (either/Right []) remaining-rolls rolls]
    (if (empty? remaining-rolls)
      cumulative-outcome
      (let [current-outcome (validate-roll (first remaining-rolls))]
        (recur (either/add current-outcome cumulative-outcome) (rest remaining-rolls))))))

(defn validate-frames [rolls]
  (let [non-strikes (filter #(not= 10 %) rolls)
        some-frame-too-high (->> non-strikes
                              (partition 2)
                              (map #(reduce + %))
                              (some #(> % 10)))]
    (if some-frame-too-high
      (either/Left ["INVALID_FRAME_TOO_HIGH"])
      (either/Right rolls))))

(defn validate-game [rolls]
  (let [validation (either/add-all
                     [(validate-frames rolls)
                      (validate-rolls rolls)])]
    (either/map' validation (fn [_] rolls))))

(defn valid-game?
  [rolls]
  (either/right? (validate-game rolls)))