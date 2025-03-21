# Fixtures

Contains sample data from the actual database. 
Dumped using dumpdata with Categories as example, on `backend` folder as root
and default db settings pointing to legacy db

## Motivation
A reminder for me that this can be used for unit tests, while a docker 
db can be used for the more important tests

```
python api/manage.py dumpdata store.Categories > api/store/fixtures/categories.json
```