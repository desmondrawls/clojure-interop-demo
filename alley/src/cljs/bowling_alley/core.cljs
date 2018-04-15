(ns bowling-alley.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [bowling-alley.handlers]
            [bowling-alley.subs]
            [scoring.test_runner]
            [bowling-alley.routes :as routes]
            [bowling-alley.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))


(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
