
FROM maven:3.6.3-adoptopenjdk-11

COPY . .

RUN mvn clean package

CMD ["java", "-jar", "target/role-service-1.0.0.jar"]

EXPOSE 80
