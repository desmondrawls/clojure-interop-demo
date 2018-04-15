scoring

`rename -S .cljs .clj *.cljs`

`ln -s ../../../alley/src/cljs/scoring/either.cljs either.clj`

scoring/project.clj

```
:aliases {"test" ["exec" "-ep" "(use 'scoring.test_runner) (run-tests)"]}
```
Scorer.kt
```
interface Scorer {
    fun score(rolls: List<Int>): Outcome<Int, List<BowlingFailures>>
}
```
shower.clj
```
(ns scoring.shower
  (:gen-class :methods [^:static [scorer [] bowling.Scorer]])
  (require [scoring.either :as either]
            [scoring.scorer :as scorer])
  (:import (bowling Failure Success BowlingFailures Scorer)))

(def error-map
  {:MIDFRAME BowlingFailures/SCORING_MIDFRAME
   :INVALID_ROLL_NEGATIVE BowlingFailures/INVALID_ROLL_NEGATIVE
   :INVALID_ROLL_TOO_HIGH BowlingFailures/INVALID_ROLL_TOO_HIGH
   :INVALID_FRAME_TOO_HIGH BowlingFailures/INVALID_FRAME_TOO_HIGH
   :INVALID_NAME_MISSING BowlingFailures/INVALID_NAME_MISSING})

(defn export-error
  [local-error]
  (get error-map local-error))

(defn either-to-outcome
  [either]
  (either/fold either #(Failure. (map export-error %)) #(Success. (.intValue %))))
  
(defn -scorer
  []
  (reify Scorer
    (score [this rolls]
      (either-to-outcome (scorer/score-game rolls)))))
``` 
beans/pom.xml (later?)
```
<dependency>
    <groupId>com.rap.battle</groupId>
    <artifactId>scoring</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```
bean/configuration
```
@Bean
fun bowlingStudioScorer(): Scorer {
    return shower.scorer()
}
```
modulith/BowlingController
```
@PostMapping("/modulith/score")
@ResponseBody
fun score(@RequestBody inputStream: String): Outcome<Int, List<BowlingFailures>> {
    val document: DocumentContext = JsonPath.parse(inputStream)
    val rolls: List<Int> = document.read("$.rolls")
    return scorer.score(rolls)
}
```
remoting.cljs
```
(defn score [rolls]
  (ajax.core/POST
    (str "http://localhost:8000/modulith/score")
    {:params {:rolls rolls}
     :format :json
     :headers {"Content-Type" "text/plain"}
     :handler #(re-frame/dispatch [:process-scoring-result (response->result %1) rolls])
     :error-handler #(re-frame/dispatch [:bad-response %1])}))
```
handlers.cljs
```
(re-frame/reg-event-db
  :process-scoring-result
  (fn [db [_ response rolls]]
    (let [result (remote/response->result response)]
      (-> db
        (assoc :loading? false)
        (assoc-in [:scores rolls] result)))))
```
Bowlorama.java
```
public class Bowlorama implements Function<Flux<Game>, Flux<Outcome<Integer, List<BowlingFailures>>>> {

    public Flux<Outcome<Integer, List<BowlingFailures>>> apply(Flux<Game> games) {
        Scorer scorer = shower.scorer();
        return games.map(game -> scorer.score(game.getRolls()));
    }
}
``` 
transmogrification/pom.xml
```
<dependency>
    <groupId>com.rap.battle</groupId>
    <artifactId>scoring</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>io.projectreactor</groupId>
    <artifactId>reactor-core</artifactId>
    <version>3.1.1.RELEASE</version>
    <scope>provided</scope>
</dependency>
```
riff 

`riff create java --name bowlorama --input rolls --artifact target/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar --handler bowling.Bowlorama -u nhcnessienyc --push --force`

handlers.cljs
```
(defn boot-flow
  []
  {:first-dispatch [:fetch-games]
   :rules [{:when :seen? :events :fetch-games :dispatch [:refresh-with-delay]}]})

(re-frame/reg-event-fx
  :refresh-with-delay
  (fn [_ [_ _]]
    (.setTimeout js/window
      (fn [] (re-frame/dispatch [:refresh-games]))
      5000)))

(re-frame/reg-event-fx
  :refresh-games
  (fn [_ [_ _]]
    {:async-flow (boot-flow games)}))
```