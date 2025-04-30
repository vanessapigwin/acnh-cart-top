# The Nook-E backend
The API uses the following:
- Django REST Framework
- PostgreSQL (hosted in cattoviz)

## Dev Setup
1. Clone project
2. Create `.env` with the following values:
```
DEBUG=1
SECRET_KEY=foo
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=sampledb
SQL_USER=dev
SQL_PASSWORD=dev_password
SQL_HOST=db
SQL_PORT=5432
```
3. Build and take the containers up with `make build` and `make up`
4. Create the necessary django tables, and dummy data with the following commands
```
docker compose -f docker-compose.yml exec backend manage.py migrate
docker compose -f docker-compose.yml exec backend loaddata "<name of json fixure here>"
```

## How to run
- Local (in docker)
    1. Press `Ctrl` + `Shift` + `D`
    2. On the upper left portion of VS Code, find the small Play button
    3. Add break points as necessary if debugging, call API as necessary via localhost:8000

- Run tests: type `make test` in terminal while in `backend` directory

- Docker commands: refer to Makefile for commands
    
## Routes
- [x] /categories - list all categories
- [x] /category/category-id/?page=1 - get the first 10 products from page 1, and a detail from one variant
- [x] /product/product-id - get the product by id, including variant details


## Changes not shown
- docker setup for nginx used to serve images
- docker network setup on cattoviz
- npm setup on cattoviz

## References
- [Django docs](https://docs.djangoproject.com/en/5.1)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [testdriven.io, Dockerizing Django with Postgres, Gunicorn and Nginx](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/) (excluding database and Nginx portions)
- [testdriven.io, Debugging a Containerized Django App in VS Code](https://testdriven.io/blog/django-debugging-vs-code/)