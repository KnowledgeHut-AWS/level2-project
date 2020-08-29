from bryandollery/maven-repo as build

arg rebuild

copy . /

run mvn clean package 

from adoptopenjdk/openjdk11:alpine

copy --from=build /root/level2-project/person-service/target/person-service-1.0.0.jar /

cmd ["java","-jar", "person-service-1.0.0.jar"]

expose 80
