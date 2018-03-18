FROM projectriff/java-function-invoker:latest
ARG FUNCTION_JAR=/functions/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar
ARG FUNCTION_CLASS=bowling.Bowlzilla
ADD target/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar $FUNCTION_JAR
ENV FUNCTION_URI file://${FUNCTION_JAR}?handler=${FUNCTION_CLASS}
