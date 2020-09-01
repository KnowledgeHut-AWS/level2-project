# Level 2 Assessment

## Structure
You must deploy a microservice application on a kubernetes platform in AWS and expose it to the public internet. You must provide a short presentation of your work, including a live demo of the running system. You must demonstrate a githook triggering a build and release of the application. You do not have to demonstrate the deployment of the infrastructure or platform.

Points are detailed below. 
These are maximum points available. 
You will be given the maximum only for the highest-quality work.

## Application Structure

This repo contains the following services
- people: A java 11 rest based service
- roles: A java 11 rest based service
- departments: a nodejs rest based service
- office: a nodejs rest based service
- project-assessment-site: a nodejs hosted web-app that displays your progress through the assessment

All these services run on port 80

Each service has its own readme file.   
You can effectively ignore the pom.xml file in the root of this project. 
It is only used to load all the java parts of the application into IntelliJ for editing. 

You must fully automate the building and deployment of this application's components using jenkins and expose them on the public internet from AWS using kubernetes.


## Infrastructure
### AWS (packer + terraform)
The entire project will be delivered on an AWS infrastructure built using packer and terraform. 
The packer build must be automated using jenkins, though it is enough for this project to run terraform locally on your laptop, allowing you to have a single environment that can be easily torn down and recreated when needed.
You're doing the packer job simply to show that you can automate infrastructure -- you don't have to use it in your deployments.

### Bootstrap Environment
Extra points: 20  
Manually deploy the sandbox terraform scripts, start k3d, install packer with an ingress controller.
Use jobs there to deploy the multi-node k3s architecture (k3s) and deploy jenkins within it, along with some jobs (link in the references below) which are responsible for creating your platform (namespaces, elf, pro-graf, ingress) and your microservice application.

Note: you'll have to use a separate terraform workspace for this, otherwise terraform will tear down your sandbox when you try to deploy your cluster.

Note2: Get everything working in sandbox (automated deployment of microservices application, elf, prograf, etc.) before you progress to doing the k3s model.

#### Points
Packer: 10  
Terraform: 10  
Automation (Jenkins): 10  

## Platform

### Kubernetes
You will run up a kubernetes instance. 
You can use the sandbox (K3D), and for an extra points run it on 3 physical nodes (ec2 instances) -- 1 for the server (master) and 2 phyical agents (ec2 instances) using K3S.
You should get everything working on sandbox first.

All services run on kubernetes should be exposed using an ingress controller, though elk and pro-graf are fine with node-ports given the complexity of the underlying applications.

All services should be in their own namespace.

### Jenkins 
You must install and configure jenkins as a service using ingress.

### ELK
You will gain extra points for having your logs shipped to elastic and queried via kibana

### Pro-Graf
You will gain extra points for having monioring configured via prometheus, and creating a dashboard in grafana

### Extra
Extra points will be given if extra (useful) platform services are configured and used (e.g. Hashicorp Vault -- note, I don't expect you to teach yourself vault in a couple of days, so it's not a realistic example)

#### Points
K3D: 10  
K3S: 20  
Jenkins: 10  
ELK: 10  
Pro-Graf: 10  
Extra: 10 (each)

Full marks will be given to those teams who bring up k8s and jenkins, then use jenkins to install the rest of the platform.

### Docker Hub
You must have docker hub accounts to make this work. 
You should create an account and login from your machine. 
In order to automate deployment to docker hub you must create an access token on the docker hub website. 
You can find the access token page at this url: https://hub.docker.com/settings/security once you have logged into your account.
You can register the token as a credential in jenkins and read it in the usual way into an environment variable in your Jenkinsfile.

Extra points will be awarded if you do something similar with a kubernetes secret.

#### Points
Automated deployment to docker hub: 10  
Credentials in jenkins: 5  
Credentials in k8s secrets: 10  

## Application Architecture
You have to build 5 docker containers and release them to docker hub. 
This must be done in a jenkins job. 
You can run the build jobs in parallel. 
Your jobs can build and deploy the application services to k8s.

Each of the 5 services needs a separate deployment and service object definition. 
Your services should be exposed via ingress so that they can be accessed from your browser.

Note: Remember, the calls to the separate REST services are made from the browser, not from the UI service. 
There is no inter-service chatter.

Note2: You only need 1 githook for this, as the code is all in the same mono-repo, but you should only build and deploy things that have changed, which means using conditions ('when') in your jenkinsfiles.

#### Points
5 Separate jenkins jobs: 10  
Githook: 5  
Build and push to docker hub: 10  
Deploy to k8s as a service with ingress: 10  
Taint server so that microservices and jenkins only deploy to agents: 10  
Tolerate that taint on elf and pro-graf: 10   


## Expectations
Jenkins Jobs: 8 (5 for application microservices, 1 for packer, 1 for elf, 1 for prograf)  
Manual build of sandbox packer and sandbox terraform and manual installation of jenkins in sandbox  
Everything else deployed through Jenkinsfiles  
Github Repos: 1 for application, 1 for packer, 1 for elf, 1 for pro-graf  

## Teams
* *Alpha*: Amjaad + Nawaf + **Sarah**
* *Beta*: **Hatim** + Aljohara + Rahaf
* *Gamma*: **Reab** + Abdul + Yaser
* *Delta*: Bandar + **Danya** + Bashayr
* *Phi*: **Omar** + Rayanah + Manar
* *Tau*: Salah + **Rawan** + Reem
* *Omega*: **Fatima** + Faisal + Raghad Alk
* *Rho*: **Amal Alr** + Alanhouf + Awraad
* *Epsilon*: Fouz + Renad + **Amerah** + Nuha
* *Theta*: Amal Alo + **Maha** + Walaa + Raghad Alq


## Schedule
Thursday 27th August - Project Release  
Tuesday 1st September -- I'll stop tearing down the estates at night  
Wednesday 2nd September - Presentations and Reports  

## Outputs
1. Working application
2. Live presentation
3. PDF containing slides + github link + docker hub link


## References
Jenkins: https://github.com/helm/charts/tree/master/stable/jenkins#providing-jobs-xml

