(ns recording_studio.tasks.describe
  (:use [clojure.core] :reload)
  (require [datomic.api :as d]
           [recording_studio.db.connection :as connection]))

(defn describe
  []
  (println "Printing database schema...")
  (let [db (d/db (connection/connect))]
    (clojure.pprint/pprint
      (map #(->> % first (d/entity db) d/touch) (d/q '[:find ?v :where [_ :db.install/attribute ?v]] db)))))