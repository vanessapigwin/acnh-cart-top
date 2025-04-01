# The Nook-E backend
The API uses the following:
- Django REST Framework
- PostgreSQL (hosted in cattoviz)

## To test (locally)
Just type `pytest` while in root

## How to run
- Local (in docker)
    1. Navigate to `backend` directory
    2. Make sure to have `.env`
    3. Build the container with `docker compose build`
    4. Run `docker compose up -d` (assumes the container was built successfully)

- Run and debug (and docker compose running)
    1. Press `Ctrl` + `Shift` + `D`
    2. On the upper left portion of VS Code, find the small Play button
    3. Add break points as necessary, call API as necessary
    
## Routes
- [x] /categories - list all categories
- [ ] /category/category-name/?page=1 - get the first 10 products from page 1, and a detail from one variant
- [ ] /product/product-id - get the product by id, including variant details

## References
- [Django docs](https://docs.djangoproject.com/en/5.1)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [testdriven.io, Dockerizing Django with Postgres, Gunicorn and Nginx](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/) (excluding database and Nginx portions)
- [testdriven.io, Debugging a Containerized Django App in VS Code](https://testdriven.io/blog/django-debugging-vs-code/)