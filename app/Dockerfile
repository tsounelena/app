FROM adoptopenjdk:11-jre-hotspot
ARG JAR_FILE=target/Students-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} students.jar
ENTRYPOINT ["java","-jar","/students.jar"]
EXPOSE 8080