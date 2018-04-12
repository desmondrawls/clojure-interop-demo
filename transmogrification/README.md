https://github.com/projectriff/projectriff.io/blob/32651d98b553b3fee908a812fbf014e90ac2844c/_docs/020-getting-started-on-gke.md

`riff create java --name bowlzilla --input rolls --artifact target/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar --handler bowling.Bowlzilla -u nhcnessienyc --push --force`

`curl -X POST -H "Content-Type:" --data '{"rolls":[1,2]}' http://35.193.96.28:80/requests/rolls`