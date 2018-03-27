(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

(defn parse-rolls
  [rolls]
  (map js/parseInt (clojure.string/split rolls #",")))

(defn navbar
  []
  (let [on-click (fn [_] (re-frame/dispatch [:fetch-games]))]
    (fn []
      [:nav.navbar.mbn.disco-nav
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
                     (re-frame/dispatch [:set-rolls (parse-rolls @rolls) @name (random-uuid)])
                     (reset! rolls "")))]
    (fn []
      [:div
       [:div.input-group
        [:div.input-group
         [:div.container
          [:div.row.justify-content-md-center
         [:input.form-control.col-lg-3.mr-3 {:type "text"
                               :placeholder "Enter Name"
                               :on-change #(reset! name (-> % .-target .-value))}]
           [:input.form-control.col-lg-6 {:type "text"
                               :placeholder "Enter Rolls"
                               :on-change #(reset! rolls (-> % .-target .-value))}]
         [:span.input-group-btn.col-lg-2
          [:button.btn.btn-default {:type "button"
                                    :on-click #(when-not @loading? (on-click %))}
           "Score"]]]]]]
       (when @error?
         [:p.error-text.text-danger "¯\\_(ツ)_/¯  Unknown error. Do you know what you're doing?"])])))

(defn game
  [game]
  (let [name (first game)
        rolls (:rolls (second game))
        score (:score (second game))
        identifier (:identifier (second game))
        valid? (not (or (empty? rolls) (empty? identifier) (empty? name) (nil? score)))
        on-save (fn [_] (when valid? (re-frame/dispatch [:save-game rolls name identifier])))
        on-roll (fn [_] (when valid? (re-frame/dispatch [:roll rolls name identifier])))]
    [:li.flex-content
     [:h2 name]
     [:span.input-group-btn.mr-1
      [:button.btn.btn-default {:type "button"
                                :on-click #(on-save %)}
       "Save"]]
     [:span.input-group-btn.ml-1
      [:button.btn.btn-default {:type "button"
                                :on-click #(on-roll %)}
       "Roll"]]
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
         [:div.row.justify-content-md-center
          [:div.col-lg-6
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
