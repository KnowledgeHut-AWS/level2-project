
from bryandollery/maven-repo as build

arg rebuild

run git clone https://github.com/BYAT/level1-project.git && \
/bin/bash: q: command not found
    mvn clean package -DskipTests

from adoptopenjdk/openjdk11:alpine

copy --from=build /root/level2-project/person-service/target/person-service-1.0.0.jar /

cmd ["java","-jar", "person-service-1.0.0.jar"]

expose 80
