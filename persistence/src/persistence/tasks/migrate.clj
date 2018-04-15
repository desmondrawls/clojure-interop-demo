(ns persistence.tasks.migrate
  (:gen-class)
  (:require [datomic.api :as d]
            [persistence.tasks.drop :as db-drop]
            [persistence.tasks.create :as db-create]
            [persistence.bowling.schema :as bowling-schema]))

(defn migrate
  [& args]
  (println "MIGRATING:")
  (bowling-schema/migrate))

(defn standalone-migrate
  [& args]
  (migrate args)
  (System/exit 0))


