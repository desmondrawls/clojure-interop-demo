### Run configurations

    $ cd hypeman
    $ mvn clean spring-boot:run -Dposers //currently no config file for this
    $ mvn clean spring-boot:run -Dpersistent

### Environment variables

AWS credentials can be exported by sourcing aws-credentials in the untracked datomic folder.

### GPG for datomic

http://semperos.com/post/gpg-and-leiningen/  
https://github.com/jamesmartin/datomic-tutorial

    lein help gpg

To turn off the password check make sure that you have "use-agent" option explicitly enabled in ~/.gnupg/gpg.conf. See gpg option list.

You can test the config and unlock the gpg key with

    gpg --quiet --batch --decrypt ~/.lein/credentials.clj.gpg
    

### Datomic

[Getting Started](http://docs.datomic.com/getting-started/brief-overview.html)  
[Account Portal](https://my.datomic.com/account)  
[Exceptions](http://docs.datomic.com/exceptions.html)  
[Pipelines and Channels](https://clojure.github.io/core.async/#clojure.core.async/pipeline)  
[Videos (Clients in Control!)](http://www.datomic.com/videos.html)

To start the transactor from the datomic home directory:

    bin/transactor ensured-persistence.properties

## Migrations

$ lein migrate

## Pull example

```
(def entity-query '[:find [?e ...]
                    :where
                    [?e :question/text ?text]
                    [?e :question/time ?time]
                    [?e :question/source-identifier ?source-identifier]])

(defn pull-questions
  []
  (let [db (connection/db)]
    (->> (d/q entity-query db)
      seq
      (map #(d/pull db '[*] %)))))

```

### Leiningen + Maven

Currently to make this work I am maintaining a pom.xml and a project.clj for the recording studio package.
Sometimes Leiningen overwrites the pom.xml in which case packaging the jar with maven stops working.
The indications that this happened are that the recording studio beans module cant resolve the persistence namespace.

### Clojure Links

https://clojure.org/guides/destructuring

### Kotlin Links

Mike Gehard on Success/Failure: http://engineering.pivotal.io/post/algebraic-data-types-in-kotlin/  
Discussion of Algebraic Data Types: https://discuss.kotlinlang.org/t/sealed-class-and-algebraic-data-type/2594/2  

## Reflection

    cd reflection
    rlwrap lein run -m clojure.main script/figwheel.clj
    
## Reflection
    
    cd reflection
    lein repl
    >> (dev)
    >> (go)
    
To load changes:
    
    >> (reset)

### Tools to install

    brew install rlwrap

### Om Next Links  
  
[Om Next for React devs](https://medium.com/@roman01la/om-next-for-react-devs-application-state-53af3ec7c42a)  
[Om Cljs wiki](https://github.com/omcljs/om/wiki)  
[Remoting example](https://github.com/223kazuki/om-next-remoting-example)  
[David Nolen's innovation philosophy](https://www.youtube.com/watch?v=MDZpSIngwm4)

### Bowling

    curl localhost:8080/games/new
    curl "localhost:8080/games/e725fca7-3111-4178-b9d8-cff45a791fe4/rolls/new?rolls=1&rolls=9&pins=2"
    curl -H "Content-Type: application/json" -X POST -d '{"identifier":"e725fca7-3111-4178-b9d8-cff45a791fe4", "rolls":["1", "9", "5", "5", "1", "99", "2"]}' localhost:8080/games
    curl localhost:8080/games/e725fca7-3111-4178-b9d8-cff45a791fe4
    curl "localhost:8080/games/e725fca7-3111-4178-b9d8-cff45a791fe4/score?rolls=1&rolls=9&rolls=5&rolls=5&rolls=99&rolls=2"
    
    curl https://bowling-kata.cfapps.io/games/new
    curl "https://bowling-kata.cfapps.io/games/e725fca7-3111-4178-b9d8-cff45a791fe4/rolls/new?rolls=1&rolls=9&pins=2"
    curl -H "Content-Type: application/json" -X POST -d '{"identifier":"e725fca7-3111-4178-b9d8-cff45a791fe4", "rolls":["1", "9", "5", "5", "1", "99", "2"]}' https://bowling-kata.cfapps.io/games
    curl https://bowling-kata.cfapps.io/games/e725fca7-3111-4178-b9d8-cff45a791fe4
    curl "https://bowling-kata.cfapps.io/games/e725fca7-3111-4178-b9d8-cff45a791fe4/score?rolls=1&rolls=9&rolls=5&rolls=5&rolls=99&rolls=2"

    curl https://bowling-transform.cfapps.io/games/new
    curl "https://bowling-transform.cfapps.io/games/30e2d1fe-2681-44df-a967-4478e10a651b/rolls/new?rolls=1&rolls=9&pins=2"
    curl -H "Content-Type: application/json" -X POST -d '{"identifier":"30e2d1fe-2681-44df-a967-4478e10a651b", "rolls":["1", "9", "5", "5", "1", "99", "2"]}' https://bowling-sink.cfapps.io/games
    curl https://bowling-source.cfapps.io/games/30e2d1fe-2681-44df-a967-4478e10a651b
    curl "https://bowling-transform.cfapps.io/games/30e2d1fe-2681-44df-a967-4478e10a651b/score?rolls=1&rolls=9&rolls=5&rolls=5&rolls=99&rolls=2"
    
### Ice box
```
(defn validate-name [name]
  (if (empty? name)
    (either/Left [:INVALID_NAME_MISSING])
    (either/Right [name])))
```
```
@GetMapping("/modulith/games/new")
@ResponseBody
fun new() = Game()
```
```
@GetMapping("/modulith/games/{identifier}")
@ResponseBody
fun find(@PathVariable identifier: String) =
        identifyGame(UUID.fromString(identifier))
```

### Useless code I still like
```
(defn validate-games [rolls]
  (let [outcomes (map validate-game rolls)]
    (reduce either/add (either/Right []) outcomes)))
```

### WebFlux

[curl examples on slide 65](https://www.slideshare.net/makingx/introduction-to-spring-webflux-jsug-sfa1)

