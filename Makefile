DOCKER_IMAGE=api-gateway

docker-build:
	- docker build -t $(DOCKER_IMAGE) --target=runner .

docker-run:
	- docker run -it --rm -p 3000:3000 $(DOCKER_IMAGE)

docker: docker-build docker-run
