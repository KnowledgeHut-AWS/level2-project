build:
	docker build --tag $$DOCKER_NAMESPACE/$$SERVICE_NAME .

release:
	docker login -p $$CREDS_PSW -u $$CREDS_USR
	docker push $$DOCKER_NAMESPACE/SERVICE_NAME

