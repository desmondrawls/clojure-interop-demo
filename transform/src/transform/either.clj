(ns transform.either
  (:require [clojure.data.json :as json]))

(defn fold [either left right]
  ((:fold either) left right))

(defn add [either other]
  ((:concat either) other))

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
           (transformLeft value))
   :show (str "{\"left\":" (json/write-str value) "}")})

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
           (transformRight value))
   :show (str "{\"right\":" (json/write-str value) "}")})
