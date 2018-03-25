(ns bowling-alley.db)

(def default-db
  {
   :loading? false
   :error false
   :games {"awesome" {:rolls "1,2,3" :score "maybe 6?"}}
   :user {
          :profile {}
          :repos []
          }
   })
