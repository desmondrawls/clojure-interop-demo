(ns persistence.bowling.schema
  (:gen-class)
  (:use [clojure.core]
        :reload)
  (require [persistence.db.connection :as connection]
           [datomic.api :as d]))

(def bowling-schema [{:db/ident :game/identifier
                      :db/valueType :db.type/uuid
                      :db/cardinality :db.cardinality/one
                      :db/unique :db.unique/identity
                      :db/doc "The unique identifier of the game"}
                     {:db/ident :game/name
                      :db/valueType :db.type/string
                      :db/cardinality :db.cardinality/one
                      :db/doc "The name of the game"}
                     {:db/ident :roll/game
                      :db/valueType :db.type/ref
                      :db/cardinality :db.cardinality/one
                      :db/doc "All the rolls up to this point in the game"}
                     {:db/ident :roll/pins
                      :db/valueType :db.type/long
                      :db/cardinality :db.cardinality/one
                      :db/doc "The number of pins knocked down"}
                     {:db/ident :roll/frame-index
                      :db/valueType :db.type/long
                      :db/cardinality :db.cardinality/one
                      :db/doc "The number of rolls where this number of pins were knocked down"}])

(defn migrate
  []
  (d/transact (connection/connect) bowling-schema))


