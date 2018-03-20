(ns transform.bowling.shower
  (:require [clojure.data.json :as json]))

(defn show
  [showable]
  (json/write-str showable))
