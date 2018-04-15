(defproject scoring "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.json "0.2.6"]
                 [com.rap.battle/bowling "0.0.1-SNAPSHOT"]]
  :plugins [[lein-exec "0.3.6"]]
  :main ^:skip-aot scoring.bowling.scorer
  :aot :all
  :profiles {:uberjar {:aot :all}})