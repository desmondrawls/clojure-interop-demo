(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [bowling-alley.validator :as validator]
            [bowling-alley.either :as either]
            [reagent.core :as reagent]))

(def error-messages
  {:INVALID_ROLL_TOO_HIGH "Ten is the highest possible roll."
   :INVALID_ROLL_NEGATIVE "Zero is the lowest possible roll."})

(defn parse-rolls
  [rolls]
  (if (empty? rolls)
    []
    (map js/parseInt (clojure.string/split rolls #","))))

(defn valid-game?
  [game]
  (either/right? (validator/validate-game (second game))))

(defn games-validity [games]
  (let [outcomes (map #(validator/validate-game (second %)) games)]
    (reduce either/add (either/Right []) outcomes)))

(defn valid-games?
  [games]
  (let [outcomes (map #(validator/validate-game (second %)) games)
        combined-outcome (reduce either/add (either/Right []) outcomes)]
    (either/right? combined-outcome)))

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

(defn show-error [error]
  [:h2.error (error error-messages)])

(defn rolls-input
  []
  (let [loading? (re-frame/subscribe [:loading?])
        error? (re-frame/subscribe [:error?])
        games (re-frame/subscribe [:games])
        rolls (reagent/atom "")
        name (reagent/atom "")
        on-click (fn [_]
                   (when-not (empty? @name)
                     (re-frame/dispatch [:set-rolls (parse-rolls @rolls) @name (.toString (random-uuid))])
                     (reset! rolls "")
                     (reset! name "")))]
    (fn []
      [:div
       [:div.input-group
        [:div.input-group
         [:div.container
          [:div.row.justify-content-md-center
           [:input.form-control.col-lg-3.mr-3 {:type "text"
                                               :placeholder "Enter Name"
                                               :value @name
                                               :on-change #(reset! name (-> % .-target .-value))}]
           [:input.form-control.col-lg-6 {:type "text"
                                          :placeholder "Enter Rolls"
                                          :value @rolls
                                          :on-change #(reset! rolls (-> % .-target .-value))}]
           [:span.input-group-btn.col-lg-2
            [:button.btn.btn-default {:type "button"
                                      :on-click #(when-not @loading? (on-click %))}
             "Score"]]]]]]
       (either/fold (games-validity @games)
         (fn [errors]
           [:div
            [:img.mt-5 {:src "styles/not_nam_rules.png"}]
            [:div.bg-black
             (map show-error errors)]])
         (fn [_] (when @error?
                   [:h1 "UH-OH something went wrong. Are you trying to do microservices?"])))])))

(defn game
  [game]
  (let [name (first game)
        rolls (:rolls (second game))
        score (:score (second game))
        identifier (:identifier (second game))
        valid? (not (or (empty? identifier) (empty? name) (nil? score)))
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
    (let [games (re-frame/subscribe [:games])
          valid-games (filter valid-game? @games)]
      [:ul.flex-container
       (map game valid-games)])))

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
