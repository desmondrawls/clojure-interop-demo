(ns transform.either
  (:require [clojure.data.json :as json]))

(defn Left [value]
  {:map (fn [transform] (Left value))
   :flatmap (fn [transform] (Left value))
   :fold (fn [transformLeft, transformRight] (transformLeft value))
   :show (str "{\"left\":" (json/write-str value) "}")})

(defn Right [value]
  {:map (fn [transform] (Right (transform value)))
   :flatmap (fn [transform] (transform value))
   :fold (fn [transformLeft, transformRight] (transformRight value))
   :show (str "{\"left\":" (json/write-str value) "}")})
