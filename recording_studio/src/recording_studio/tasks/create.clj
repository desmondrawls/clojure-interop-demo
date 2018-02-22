(ns recording_studio.tasks.create
  (:gen-class)
  (:require [datomic.api :as d]))

(defn create
  [& args]
  (d/create-database (System/getenv "RECORDING_STUDIO_TRANSACTOR_URL")))
