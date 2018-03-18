FROM projectriff/java-function-invoker:latest
ARG FUNCTION_JAR=/functions/recording_studio-0.1.0-SNAPSHOT.jar
ARG FUNCTION_CLASS=recording_studio.bowling.scorer
ADD target/recording_studio-0.1.0-SNAPSHOT.jar $FUNCTION_JAR
ENV FUNCTION_URI file://${FUNCTION_JAR}?handler=${FUNCTION_CLASS}
