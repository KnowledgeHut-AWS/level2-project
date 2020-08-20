## Project Assessment Webapp

This is the project assessment webapp. The aim is to have all the
red fail text turn into green pass text. You'll need to use docker, docker-compose, aws, etc.

Manage your work on Trello and Github using GitFlow processes.

There is one js file for each of the services this webapp uses in the public/js folder. If you are having
problems with your t3.tiny instances not being powerful enough to host all five containers, you can
either use a bigger machine (which has a cost) or use multiple EC2 instances. In the latter case,
you must change this webapp's javascript which assumes that there is a single machine running all the
services and the webapp. The change is quite easy. 