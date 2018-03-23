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
        on-click (fn [_]
                   (when-not (empty? @rolls)
                     (re-frame/dispatch [:set-rolls @rolls])
                     (reset! rolls "")))]
    (fn []
      [:div
       [:div.input-group
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

(defn rolls
  []
  (fn []
    (let [rolls (re-frame/subscribe [:rolls])]
       [:h3.text-center @rolls])))

(defn score
  []
  (fn []
    (let [score (re-frame/subscribe [:score])]
       [:h5.text-center @score])))

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
        [rolls]
        [score]]
       ])))
