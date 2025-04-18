from django.test import Client
import pytest

pytestmark = pytest.mark.django_db


@pytest.fixture(scope="module")
def client():
    return Client()

@pytest.fixture(scope='module')
def categories(client):
    response = client.get("/categories/")
    content = response.json()
    return content


@pytest.fixture(scope='module')
def category_products(client):
    response = client.get("/category/1/")
    content = response.json()
    return content
    

def test_get_categories(categories):
    # P1: check for pagination
    assert set(["next", "previous", "results"]).issubset(categories.keys())

    # P2: check contents
    expeted_entry = {"category_id": 1, "category_name": "accessories"}
    actual_entry = categories.get("results")[0]
    assert actual_entry == expeted_entry


def test_get_categories_negative(client):
    r = client.get('/categories/420/')
    assert r.status_code == 404
    assert "No Categories matches the given query" in r.json()['detail'] 


def test_get_category_products(category_products):
    # P1: check for pagination
    assert set(["next", "previous", "results"]).issubset(category_products.keys())

    # P2: check for required keys
    required_fields = [
        "product_id",
        "product_name",
        "price",
        "style_name",
        "color",
        "preview_image",
        "description",
    ]
    entry = category_products['results'][0]
    assert set(required_fields).issubset(entry.keys())
    
