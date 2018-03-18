(defproject transform "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.rap.battle/producer "0.0.1-SNAPSHOT"]]
  :plugins [[lein-exec "0.3.6"]]
  :main ^:skip-aot transform.bowling.scorer
  :aot :all
  :profiles {:uberjar {:aot :all}})