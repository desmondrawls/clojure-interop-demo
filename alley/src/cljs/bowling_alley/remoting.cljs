(ns bowling_alley.remoting
  (:require [re-frame.core :as re-frame]
            [ajax.core :refer [GET POST]]
            [scoring.either :as either]))

(defn response->result [response]
  (let [right (get (js->clj response) "value")
        left (get (js->clj response) "errors")]
    (if right (either/Right right) (either/Left left))))

(defn save [rolls name identifier]
  (ajax.core/POST
    "http://localhost:8000/sink/games"
    {:params {:rolls rolls :name name :identifier identifier}
     :format :json
     :headers {"Content-Type" "application/json"
               "Accept" "application/json"}
     :handler #(re-frame/dispatch [:stop-loading])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn fetch []
  (ajax.core/GET
    "http://localhost:8000/source/games"
    {:format :json
     :handler #(re-frame/dispatch [:process-fetch-response %1])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn score [rolls]
  (ajax.core/POST
    (str "http://localhost:8000/transform/score")
    {:params {:rolls rolls}
     :format :json
     :headers {"Content-Type" "text/plain"}
     :handler #(re-frame/dispatch [:process-scoring-result (response-to-result %1) rolls])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn roll [rolls name identifier]
  (ajax.core/GET
    (str "http://localhost:8000/transform/roll")
    {:params {:rolls (clojure.string/join "&rolls=" rolls)}
     :format :json
     :headers {"Content-Type" "application/json"}
     :handler #(re-frame/dispatch [:process-rolling-response %1 identifier name])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))