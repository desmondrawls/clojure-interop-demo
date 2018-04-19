(ns bowling_alley.remoting
  (:require [re-frame.core :as re-frame]
            [ajax.core :refer [GET POST]]
            [scoring.either :as either]))

(defn map-values [m f]
  (into {} (for [[k v] m] [k (f v)])))

(defn to-either [result]
  (let [right (get result "value")
        left (get result "errors")]
    (if right (either/Right right) (either/Left left))))

(defn response-to-result [response]
  (let [payload (last (clojure.string/split response #"data:"))
        parsed (js->clj payload)]
    (print "SHIT: " response)
    (print "SHIT: " parsed)
    (print "wtf: " (cljs.reader/read-string "[3, 2]"))
    (print "SHITTIER: " (cljs.reader/read-string (first (keys parsed))))
    (print "FUCK: " (map js->clj (js->clj payload)))
    (map-values parsed to-either)))


(defn flux-response-to-result [response]
  (println "GOT IT: " reponse)
  (response-to-result (get response "data")))

(defn save [rolls name identifier]
  (ajax.core/POST
    "http://localhost:8000/sink/games"
    {:params {:rolls rolls :name name :identifier identifier}
     :format :json
     :headers {"Content-Type" "application/json"
               "Accept" "application/json"}
     :handler #(re-frame/dispatch [:stop-loading])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn fetch [rolls name]
  (ajax.core/GET
    "http://localhost:8000/source/games"
    {:format :json
     :handler #(re-frame/dispatch [:process-fetch-response %1])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

;(defn scores [rolls]
;  (ajax.core/POST
;    (str "http://localhost:8000/transform/scores")
;    {:params {:rolls rolls}
;     :format :json
;     :headers {"Content-Type" "application/json", "Accept" "text/event-stream"}
;     :handler #(re-frame/dispatch [:process-scoring-result %1 rolls])
;     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn score [rolls]
  (ajax.core/POST
    (str "http://localhost:8000/transform/scores")
    {:params {:rolls rolls}
     :format :json
     :headers {"Content-Type" "application/json", "Accept" "text/event-stream"}
     :handler #(re-frame/dispatch [:process-scoring-result %1 rolls])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))

(defn roll [rolls name identifier]
  (ajax.core/GET
    (str "http://localhost:8000/transform/roll")
    {:params {:rolls (clojure.string/join "&rolls=" rolls)}
     :format :json
     :headers {"Content-Type" "application/json"}
     :handler #(re-frame/dispatch [:process-rolling-response %1 identifier name])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))