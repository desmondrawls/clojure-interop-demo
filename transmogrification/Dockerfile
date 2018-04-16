FROM projectriff/java-function-invoker:0.0.5-sr.1
ARG FUNCTION_JAR=/functions/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar
ARG FUNCTION_HANDLER=bowling.Bowlorama
ADD target/transmogrification-0.0.1-SNAPSHOT-jar-with-dependencies.jar $FUNCTION_JAR
ENV FUNCTION_URI file://${FUNCTION_JAR}?handler=${FUNCTION_HANDLER}
