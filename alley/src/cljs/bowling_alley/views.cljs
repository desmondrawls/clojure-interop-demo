(ns bowling-alley.views
  (:require [re-frame.core :as re-frame]
            [bowling-alley.validator :as validator]
            [scoring.either :as either]
            [reagent.core :as reagent]))

(def error-messages
  {:INVALID_ROLL_TOO_HIGH "Ten is the highest possible roll."
   :INVALID_ROLL_NEGATIVE "Zero is the lowest possible roll."
   :INVALID_FRAME_TOO_HIGH "You can only knock down ten pins per frame."
   :SCORING_MIDFRAME "You have to start on frame."
   :INVALID_NAME_MISSING "You need a name."})

(defn parse-rolls
  [rolls]
  (map js/parseInt (clojure.string/split rolls #",")))

(defn validity [validities rolls]
  (or (get validities rolls) (either/Left [:UNKNOWN])))

(defn valid-game? [validity]
  (either/fold validity (fn [errors] (= errors [:MIDFRAME])) (fn [_] true)))

(defn valid-games [validities games]
  (filter #(->> %
             second
             :rolls
             (validity validities)
             valid-game?) games))

(defn show-error [error]
  [:h2.red.underline (get error-messages (keyword error))])

(defn rolls-input
  []
  (let [loading? (re-frame/subscribe [:loading?])
        error? (re-frame/subscribe [:error?])
        inputs (re-frame/subscribe [:inputs])
        roll-validities (re-frame/subscribe [:roll-validities])
        most-recent (fn [inputs] (->> (keys inputs) sort last (get inputs)))
        most-recent-validity (fn [inputs validities] (validity validities (parse-rolls (:rolls (most-recent inputs)))))
        most-recent-input (fn [inputs validities field default] (let [most-recent (most-recent inputs)]
                                                                  (if (and (:submitted most-recent) (either/right? (most-recent-validity inputs validities)))
                                                                    default
                                                                    (get most-recent field))))
        on-change (fn [name-input rolls-input]
                    (re-frame/dispatch [:set-inputs (.getTime (js/Date.)) rolls-input name-input false]))
        on-click (fn [name-input rolls-input]
                   (when-not (or (empty? name-input) (empty? rolls-input))
                     (re-frame/dispatch [:set-inputs (.getTime (js/Date.)) rolls-input name-input true])
                     (re-frame/dispatch [:score-game (parse-rolls rolls-input)])))]
    (fn []
      [:div
       [:div.input-group
        [:div.input-group
         [:div.container
          [:div.row.justify-content-md-center
           [:input.form-control.col-lg-3.mr-3 {:type "text"
                                               :placeholder "Enter Name"
                                               :value (most-recent-input @inputs @roll-validities :name "")
                                               :on-change #(on-change (-> % .-target .-value) (most-recent-input @inputs @roll-validities :rolls ""))}]
           [:input.form-control.col-lg-6 {:type "text"
                                          :placeholder "Enter Rolls"
                                          :value (most-recent-input @inputs @roll-validities :rolls "")
                                          :on-change #(on-change (most-recent-input @inputs @roll-validities :name "") (-> % .-target .-value))}]
           [:span.input-group-btn.col-lg-2
            [:button.btn.btn-default {:type "button"
                                      :on-click (fn [_] (when-not @loading?
                                                          (on-click
                                                            (most-recent-input @inputs @roll-validities :name "")
                                                            (most-recent-input @inputs @roll-validities :rolls ""))))}
             "Score"]]]]]]
       (either/fold (most-recent-validity @inputs @roll-validities)
         (fn [errors]
           (when (and
                   (most-recent-input @inputs @roll-validities :submitted false)
                   (not (= (map keyword errors) [:UNKNOWN])))
             [:div
              [:img.mt-5 {:src "styles/not_nam_rules.png"}]
              [:div.bg-black
               (map show-error errors)]]))
         (fn [_] (when @error?
                   [:h1.red "UH-OH something went wrong. Are you trying to do microservices?"])))])))

(defn game
  [validities game]
  (let [name (:name (second game))
        rolls (:rolls (second game))
        score (either/fold (validity validities rolls) "" identity)
        global-identifier (:identifier (second game))
        local-identifier (first game)
        save-local-game (fn []
                          (let [new-global-identifier (.toString (random-uuid))]
                            (re-frame/dispatch [:identify-game local-identifier new-global-identifier])
                            (re-frame/dispatch [:save-game rolls name new-global-identifier])))
        on-save (fn [_]
                  (if global-identifier
                    (re-frame/dispatch [:save-game rolls name global-identifier])
                    (save-local-game)))
        on-roll (fn [_] (re-frame/dispatch [:roll rolls name local-identifier]))]
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

(defn map-values [m f]
  (into {} (for [[k v] m] [k (f v)])))

(defn has? [collection member]
  (some #(= % member) collection))

(defn all-games [inputs validities games]
  (let [submitted-inputs (filter #(-> % second :submitted true?) inputs)
        inputs-not-in-games (filter #(not (has? (keys games) (first %))) submitted-inputs)
        parsed-inputs (map-values inputs-not-in-games #(assoc-in % [:rolls] (parse-rolls (:rolls %))))]
    (concat games (valid-games validities parsed-inputs))))

(defn sorted-games [inputs validities games]
  (sort-by (comp :name second) (all-games inputs validities games)))

(defn games
  []
  (fn []
    (let [games (re-frame/subscribe [:games])
          inputs (re-frame/subscribe [:inputs])
          validities (re-frame/subscribe [:roll-validities])]
      [:ul.flex-container
       (map (partial game @validities) (sorted-games @inputs @validities @games))])))

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
  (let [active-panel (re-frame/subscribe [:active-panel])
        roll-validities (re-frame/subscribe [:roll-validities])]
    (fn []
      [:div
       [navbar]
       [loading-throbber]
       [home-panel]
       [games]])))
