export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

all: build up test

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down --remove-orphans

test: up
	docker compose exec backend pytest

format:
	black . --line-length 90

lint:
	flake8 ./api/store/ ./api/project/