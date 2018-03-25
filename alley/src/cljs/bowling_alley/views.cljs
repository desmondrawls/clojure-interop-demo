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

(defn games
  []
  (fn []
    (let [games (re-frame/subscribe [:games])]
      [:div
       (map #(identity [:div
                        [:h2.text-center (first %)]
                        [:h3.text-center (str "rolls " (:rolls (second %)))]
                        [:h5.text-center (str "score " (:score (second %)))]])
         @games)])))

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
        [games]]
       ])))
