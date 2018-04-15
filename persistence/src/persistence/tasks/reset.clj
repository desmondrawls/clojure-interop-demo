(ns persistence.tasks.reset
  (:gen-class)
  (:require [datomic.api :as d]
            [persistence.tasks.drop :as db-drop]
            [persistence.tasks.create :as db-create]
            [persistence.tasks.migrate :as db-migrate]))

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