(ns bowling-alley.either)

(defn fold [either left right]
  ((:fold either) left right))

(defn add [either other]
  ((:concat either) other))

(defn right? [either]
  (fold either (fn [_] false) (fn [_] true)))

(defn Left [value]
  {:map (fn [transform]
          (Left value))
   :flatmap (fn [transform]
              (Left value))
   :concat (fn [either]
             (fold either
               (fn [other] (Left (concat value other)))
               (fn [_] (Left value))))
   :fold (fn [transformLeft, transformRight]
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
   :fold (fn [transformLeft, transformRight]
           (transformRight value))})
