(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))


(defn loading-throbber
  []
  (let [loading? (re-frame/subscribe [:loading?])]
    (when @loading?
      [:div.loading
       [:div.three-quarters-loader "Loading..."]])))

(defn rolls-input
  []
  (let [loading? (re-frame/subscribe [:loading?])
        error? (re-frame/subscribe [:error?])
        rolls (reagent/atom "")
        name (reagent/atom "")
        on-click (fn [_]
                   (when-not (or (empty? @rolls) (empty? @name))
                     (re-frame/dispatch [:set-rolls @rolls @name])
                     (reset! rolls "")))]
    (fn []
      [:div
       [:div.input-group
        [:input.form-control {:type "text"
                              :placeholder "Enter Name"
                              :on-change #(reset! name (-> % .-target .-value))}]
        [:input.form-control {:type "text"
                              :placeholder "Enter Rolls"
                              :on-change #(reset! rolls (-> % .-target .-value))}]
        [:span.input-group-btn
         [:button.btn.btn-default {:type "button"
                                   :on-click #(when-not @loading? (on-click %))}
          "Score"]
         ]]
       (when @error?
         [:p.error-text.text-danger "¯\\_(ツ)_/¯  Unknown error. Do you know what you're doing?"])])))

(defn loader
  []
  (let [on-click (fn [_] (re-frame/dispatch [:fetch-games]))]
    [:span.input-group-btn
     [:button.btn.btn-default {:type "button"
                               :on-click #(on-click %)}
      "Load games"]]))

(defn game
  [game]
  (let [name (first game)
        rolls (:rolls (second game))
        score (:score (second game))
        on-click (fn [_]
                   (println "clicked")
                   (when-not (or (empty? rolls) (empty? name) (nil? score))
                      (println "not empty")
                     (re-frame/dispatch [:save-game name rolls])))]
    [:div
     [:h2.text-center name]
     [:span.input-group-btn
      [:button.btn.btn-default {:type "button"
                                :on-click #(on-click %)}
       "Save"]]
     [:h3.text-center (str "rolls " (clojure.string/join "," rolls))]
     [:h5.text-center (str "score " score)]]))

(defn games
  []
  (fn []
    (let [games (re-frame/subscribe [:games])]
      [:div
       (map game @games)])))

;; home
(defn home-panel []
  (let []
    (fn []
      [:div
       [:div.topbar
        [:div.container
         [:div.row
          [:div.col-lg-6.col-lg-offset-3
           [rolls-input]]]]]])))


;; profile

(defn profile-panel []
  (fn []
    [:div "This is the Profile Page."
     [:div [:a {:href "#/"} "go to Home Page"]]
     ]))


;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :profile-panel [] [profile-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:div
       [loading-throbber]
       (panels @active-panel)
       [:div
        [loader]
        [games]]
       ])))
