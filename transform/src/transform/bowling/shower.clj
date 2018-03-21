(ns transform.bowling.shower
  (:gen-class :methods [^:static [show_json [Object] String]])
  (:require [clojure.data.json :as json]))

(defn show
  [showable]
  (json/write-str showable))

(defn show-json
  [either]
  ((:fold either)
    #(str "{\"left\":" (json/write-str %) "}")
    #(str "{\"right\":" (json/write-str %) "}")))

(defn -show_json
  [either]
  (show-json either))