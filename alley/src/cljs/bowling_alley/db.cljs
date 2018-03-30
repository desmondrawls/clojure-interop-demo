(ns bowling-alley.db)

(def default-db
  {:loading? false
   :error false
   :submitted false
   :inputs {:rolls ""
            :name ""
            :submitted false}
   :games {}})
