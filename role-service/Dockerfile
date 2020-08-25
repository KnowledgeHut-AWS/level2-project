from bryandollery/maven-repo as build
run git clone https://github.com/Reabaln/level1-project.git && \
    cd /root/level1-project/role-service  && \
    mvn clean package -DskipTests

from adoptopenjdk/openjdk11:alpine

copy --from=build /root/level1-project/role-service/target/role-service-1.0.0.jar /

cmd ["java", "-jar", "role-service-1.0.0.jar"]

expose 80
