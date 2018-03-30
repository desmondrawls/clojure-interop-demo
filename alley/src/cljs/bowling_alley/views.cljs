(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [bowling-alley.validator :as validator]
            [bowling-alley.either :as either]
            [reagent.core :as reagent]))

(def error-messages
  {:INVALID_ROLL_TOO_HIGH "Ten is the highest possible roll."
   :INVALID_ROLL_NEGATIVE "Zero is the lowest possible roll."
   :INVALID_FRAME_TOO_HIGH "You can only knock down ten pins per frame."
   :INVALID_NAME_MISSING "You need a name."})

(defn parse-rolls
  [rolls]
  (if (empty? rolls)
    []
    (map js/parseInt (clojure.string/split rolls #","))))

(defn show-error [error]
  [:h2.red.underline (error error-messages)])

(defn rolls-input
  []
  (let [loading? (re-frame/subscribe [:loading?])
        error? (re-frame/subscribe [:error?])
        games (re-frame/subscribe [:games])
        rolls (re-frame/subscribe [:inputs-rolls])
        name (re-frame/subscribe [:inputs-name])
        submitted (re-frame/subscribe [:inputs-submitted])
        on-change-rolls (fn [rolls-input]
                          (re-frame/dispatch [:set-rolls-input rolls-input]))
        on-change-name (fn [name-input]
                         (println "name changed: " name-input)
                         (re-frame/dispatch [:set-name-input name-input]))
        on-click (fn [_]
                   (when-not (empty? @name)
                     (re-frame/dispatch [:submit])
                     (re-frame/dispatch [:set-rolls (parse-rolls @rolls) @name (.toString (random-uuid))])
                     (when (validator/valid-game? {:rolls (parse-rolls @rolls) :name @name})
                       (re-frame/dispatch [:clear-inputs]))))]
    (fn []
      [:div
       [:div.input-group
        [:div.input-group
         [:div.container
          [:div.row.justify-content-md-center
           [:input.form-control.col-lg-3.mr-3 {:type "text"
                                               :placeholder "Enter Name"
                                               :value @name
                                               :on-change #(on-change-name (-> % .-target .-value))}]
           [:input.form-control.col-lg-6 {:type "text"
                                          :placeholder "Enter Rolls"
                                          :value @rolls
                                          :on-change #(on-change-rolls (-> % .-target .-value))}]
           [:span.input-group-btn.col-lg-2
            [:button.btn.btn-default {:type "button"
                                      :on-click #(when-not @loading? (on-click %))}
             "Score"]]]]]]
       (either/fold (validator/validate-game {:rolls (parse-rolls @rolls) :name @name})
         (fn [errors]
           (when @submitted
             [:div
              [:img.mt-5 {:src "styles/not_nam_rules.png"}]
              [:div.bg-black
               (map show-error errors)]]))
         (fn [_] (when @error?
                   [:h1.red "UH-OH something went wrong. Are you trying to do microservices?"])))])))

(defn game
  [game]
  (let [name (:name (second game))
        rolls (:rolls (second game))
        score (:score (second game))
        identifier (first game)
        valid? (not (or (empty? identifier) (empty? name) (nil? score)))
        on-save (fn [_] (when valid? (re-frame/dispatch [:save-game rolls name identifier])))
        on-roll (fn [_] (when valid? (re-frame/dispatch [:roll rolls name identifier])))]
    (println "GAME: " game)
    (println "NAME: " name)
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
          valid-games (filter (comp validator/valid-game? second) @games)]
      (println "games: " games)
      [:ul.flex-container
       (map game valid-games)])))

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

(defn home-panel []
  (let []
    (fn []
      [:div
       [:div.topbar
        [:div.container
         [:div.row.justify-content-md-center
          [:div.col-lg-6
           [rolls-input]]]]]])))

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [:div
       [navbar]
       [loading-throbber]
       [home-panel]
       [games]
       ])))
