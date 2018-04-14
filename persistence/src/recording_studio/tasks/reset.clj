(ns recording_studio.tasks.reset
  (:gen-class)
  (:require [datomic.api :as d]
            [recording_studio.tasks.drop :as db-drop]
            [recording_studio.tasks.create :as db-create]
            [recording_studio.tasks.migrate :as db-migrate]))

(defn reset
  [& args]
  (println "RESETTING:")
  (db-drop/drop args)
  (db-create/create args)
  (db-migrate/migrate args))

(defn standalone-reset
  [& args]
  (reset args)
  (System/exit 0))