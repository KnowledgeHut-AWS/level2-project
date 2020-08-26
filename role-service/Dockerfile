from bryandollery/maven-repo as build

arg rebuild

run git clone https://github.com/M404h/level2-project.git && \
    cd /root/level2-project/role-service && \
    mvn clean package -DskipTests

from adoptopenjdk/openjdk11:alpine

copy --from=build /root/level2-project/role-service/target/role-service-1.0.0.jar /

cmd ["java","-jar", "role-service-1.0.0.jar"]

expose 80
