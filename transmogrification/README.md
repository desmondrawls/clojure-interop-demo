https://github.com/projectriff/projectriff.io/blob/32651d98b553b3fee908a812fbf014e90ac2844c/_docs/020-getting-started-on-gke.md

`riff create java --name bowlorama --input rolls --artifact target/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar --handler bowling.Bowlorama -u nhcnessienyc --push --force`

`curl -X POST -H "Content-Type:" --data '{"rolls":[1,2]}' http://35.193.96.28:80/requests/rolls`

`riff publish --input rolls --data [1,2] --reply`

```
apiVersion: projectriff.io/v1alpha1
kind: Function
metadata:
  name: practice-bowlorama
spec:
  container:
    image: nhcnessienyc/practice-bowlorama:0.0.1
  input: rolls
  idleTimeoutMs: 60000
  protocol: grpc
```