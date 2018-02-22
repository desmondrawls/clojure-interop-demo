(ns recording_studio.tasks.migrate
  (:gen-class)
  (:require [datomic.api :as d]
            [recording_studio.tasks.drop :as db-drop]
            [recording_studio.tasks.create :as db-create]
            [recording_studio.bowling.schema :as bowling-schema]))

(defn migrate
  [& args]
  (println "MIGRATING:")
  (bowling-schema/migrate))

(defn standalone-migrate
  [& args]
  (migrate args)
  (System/exit 0))


