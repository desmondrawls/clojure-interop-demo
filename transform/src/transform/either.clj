(ns transform.either)

(defn Left [value]
  {:map (fn [transform] (Left value))
   :flatmap (fn [transform] (Left value))
   :fold (fn [transformLeft, transformRight] (transformLeft value))})

(defn Right [value]
  {:map (fn [transform] (Right (transform value)))
   :flatmap (fn [transform] (transform value))
   :fold (fn [transformLeft, transformRight] (transformRight value))})
