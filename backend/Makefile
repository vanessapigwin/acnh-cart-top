export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

all: build up test

build:
	docker compose -f docker-compose.yml build

up:
	docker compose -f docker-compose.yml up -d

down:
	docker compose -f docker-compose.yml down --remove-orphans

test: up
	docker compose -f docker-compose.yml exec backend pytest

format:
	docker compose -f docker-compose.yml exec backend black . --line-length 90

lint:
	docker compose -f docker-compose.yml exec backend flake8 ./store ./project