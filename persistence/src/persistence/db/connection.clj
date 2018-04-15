(ns persistence.db.connection
  (:use [clojure.core] :reload)
  (require [datomic.api :as d]))

(defn connect
  []
  (d/connect (System/getenv "RECORDING_STUDIO_TRANSACTOR_URL")))

(defn db
  []
  (d/db (connect)))



