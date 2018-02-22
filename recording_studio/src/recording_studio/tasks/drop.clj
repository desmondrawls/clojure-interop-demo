(ns recording_studio.tasks.drop
  (:gen-class)
  (:require [datomic.api :as d]))

(defn drop
  [& args]
  (d/delete-database (System/getenv "RECORDING_STUDIO_TRANSACTOR_URL")))

(defn standalone-drop
  [& args]
  (drop args)
  (System/exit 0))