(ns scoring.either)

(defn fold [either left right]
  ((:fold either) left right))

(defn map' [either transform]
  ((:map either) transform))

(defn flatmap' [either transform]
  ((:flatmap either) transform))

(defn add [either other]
  ((:concat either) other))

(defn add-all [eithers]
  (reduce add eithers))

(defn right? [either]
  (fold either (fn [_] false) (fn [_] true)))

(defn Left [value]
  {:map (fn [_]
          (Left value))
   :flatmap (fn [_]
              (Left value))
   :concat (fn [either]
             (fold either
               (fn [other] (Left (concat value other)))
               (fn [_] (Left value))))
   :fold (fn [transformLeft, _]
           (transformLeft value))})

(defn Right [value]
  {:map (fn [transform]
          (Right (transform value)))
   :flatmap (fn [transform]
              (transform value))
   :concat (fn [either]
             (fold either
               (fn [other] (Left other))
               (fn [other] (Right (concat value other)))))
   :fold (fn [_, transformRight]
           (transformRight value))})
