# Level 2 Assessment

## Project Structure

This repo contains the following services
- people: A java 11 rest based service
- roles: A java 11 rest based service
- departments: a nodejs rest based service
- office: a nodejs rest based service
- project-assessment-site: a nodejs hosted web-app that displays your progress through the assessment

All these services run on port 80

Each service has its own readme file. 
You can effectively ignore the pom.xml file in the root of this project. 
It is only
used to load all the java parts of the application into IntelliJ for editing. 

You must fully automate the building and deployment of this application's components using jenkins and expose them on the public internet
from AWS using kubernetes.

## Infrastructure
Jenkins
You will be provided with a Jenins server to use for the project. 
Installing Jenkins is not part of the project, but using it as an automation controller is part of the project. 
You will use it by creating pipeline jobs that read Jenkinsfiles from your github repos.

## Kubernetes
You will be provided with a shared kubernetes server to use for the the project, and you will be assigned access rights to run your jobs.

### Namespaces
It is vital that you do all work in your own namespace. 
You can have as many namespaces as you need, but please make sure that they are unique. 
One way to do this is to let the instructor know and it will be added to a list of 'taken' namespaces further down in this readme. 
Your first name is reserved as a namespace for you. 
If your name isn't unique then append the first few letters of your surname to make it unique.
Points will be deducted if you use someone else's namespace, including default.

## Docker Hub
You must have docker hub accounts to make this work. 
You should create an account and login from your machine. 
In order to automate deployment to docker hub you must create an access token on the docker hub website. 
You can find the access token page at this url: https://hub.docker.com/settings/security once you have logged into your account.
You can register the token as a credential in jenkins and read it in the usual way into an environment variable in your Jenkinsfile.
Extra points will be awarded if you do something similar with a kubernetes secret.

## Application Architecture
You have to build 5 docker containers and release them to docker hub. 
This must be done in a jenkins job. 
You can run the build jobs in parallel. 
To do that, create an extra 'orchestration' pipeline that runs stages in parallel, and have the stages invoke the individual build jobs. 
Once the builds are successful, the same pipeline can deploy the app to kubernetes.

Each of the 5 services needs a separate deployment and service object definition. 
Your services should expose NodePorts so that they can be accessed from your browser.
The complexity here is that you need to have known port for each service otherwise you will not be able to access it from the UI.
Remember, the calls to the separate REST services are made from the browser, not from the UI service. 
There is no inter-service chatter.



