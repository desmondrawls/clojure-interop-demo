(defproject recording_studio "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :creds :gpg}}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.datomic/datomic-pro "0.9.5561.50"]
                 [com.amazonaws/aws-java-sdk-dynamodb "1.11.170"]
                 [com.rap.battle/producer "0.0.1-SNAPSHOT"]]
  :plugins [[lein-exec "0.3.6"]]
  :main ^:skip-aot recording_studio.tasks.migrate
  :aot :all
  :aliases {"migrate" ["exec" "-ep" "(use 'recording_studio.tasks.migrate) (standalone-migrate)"]
            "drop" ["exec" "-ep" "(use 'recording_studio.tasks.drop) (standalone-drop)"]
            "test" ["exec" "-ep" "(use 'recording_studio.tasks.test_runner) (runTests)"]
            "reset" ["exec" "-ep" "(use 'recording_studio.tasks.reset) (standalone-reset)"]}
  :profiles {:uberjar {:aot :all}})