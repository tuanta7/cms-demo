.PHONY: setup-dev run-dev teardown-dev

setup-dev: teardown-dev
	docker compose -f docker-compose.dev.yml up -d --build

run-dev: setup-dev
	@echo "Waiting for the database to be ready"
	sleep 5 
	cd ./strapi-server && npm run develop

teardown-dev:
	docker compose -f docker-compose.dev.yml down