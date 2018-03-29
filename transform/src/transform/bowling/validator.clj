(ns transform.bowling.validator
  (require [transform.either :as either]))

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

(defn validate-frames [rolls]
  (let [non-strikes (filter #(not= 10 %) rolls)
        some-frame-too-high (->> non-strikes
                              (partition 2)
                              (map #(reduce + %))
                              (some #(> % 10)))]
    (if some-frame-too-high
      (either/Left [:INVALID_FRAME_TOO_HIGH])
      (either/Right rolls))))

(defn validate-game [game]
  (either/fold (either/add (validate-frames (:rolls game)) (validate-rolls (:rolls game)))
    (fn [x]
      (either/Left x))
    (fn [_] (either/Right game))))

(defn valid-game?
  [game]
  (either/right? (validate-game (second game))))

(defn validate-games [games]
  (let [outcomes (map #(validate-game (second %)) games)]
    (reduce either/add (either/Right []) outcomes)))