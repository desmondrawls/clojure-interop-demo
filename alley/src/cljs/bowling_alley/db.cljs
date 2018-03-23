(ns bowling-alley.db)

(def default-db
  {
   :loading? false
   :error false
   :score 999
   :rolls "rolls"
   :name "github profile"
   :user {
          :profile {}
          :repos []
          }
   })
