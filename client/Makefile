.PHONY: build test tdd storybook stop up npmi build-cache-image

up:
	docker-compose up

storybook:
	docker-compose up client-storybook

build:
	@echo "\n\n\nYou might want to go get a coffee or snack.\n Yes, Really.\n Gatsby takes FOREVER to install (╯°□°)╯︵ ┻━┻" && \
	docker-compose up --build

test:
	@docker exec client-client npm test && \
	docker exec client-api npm test

tdd:
	@docker exec client-client npm run tdd

stop:
	@docker-compose down

npmi:
	@npm i $(module) && \
	docker exec client-client npm install --save $(module)

build-cache-image:
	@docker build -f docker/Dockerfile -t gcr.io/client-dev/prenpmi . && \
	docker push gcr.io/client-dev/prenpmi
