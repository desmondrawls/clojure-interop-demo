(ns bowling-alley.db)

(def default-db
  {
   :loading? false
   :error false
   :games {}
   :user {
          :profile {}
          :repos []
          }
   })
