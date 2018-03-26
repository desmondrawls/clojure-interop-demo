(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

(defn navbar
  []
  (let [on-click (fn [_] (re-frame/dispatch [:fetch-games]))]
    (fn []
      [:nav.navbar.navbar-default.mbn
       [:div.container-fluid]
       [:div.navbar-header]
       [:a.navbar-brand {:href= "#"} "The most elaborate bowling kata EVER"]
       [:div
        [:ul.nav.navbar-nav
         [:li.active
          [:a {:on-click #(on-click %)} "Load games"]]]]])))


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
        [:div.input-group
         [:input.form-control {:type "text"
                               :placeholder "Enter Name"
                               :on-change #(reset! name (-> % .-target .-value))}]
         [:span.input-group-addon ""]
         [:input.form-control {:type "text"
                               :placeholder "Enter Rolls"
                               :on-change #(reset! rolls (-> % .-target .-value))}]]
        [:span.input-group-btn
         [:button.btn.btn-default {:type "button"
                                   :on-click #(when-not @loading? (on-click %))}
          "Score"]
         ]]
       (when @error?
         [:p.error-text.text-danger "¯\\_(ツ)_/¯  Unknown error. Do you know what you're doing?"])])))

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
    [:li.flex-content
     [:h2 name]
     [:span.input-group-btn
      [:button.btn.btn-default {:type "button"
                                :on-click #(on-click %)}
       "Save"]]
     [:h3 (str "rolls " (clojure.string/join "," rolls))]
     [:h5 (str "score " score)]]))

(defn games
  []
  (fn []
    (let [games (re-frame/subscribe [:games])]
      [:ul.flex-container
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
       [navbar]
       [loading-throbber]
       (panels @active-panel)
       [games]
       ])))
