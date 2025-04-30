import urllib.request
from django.test import Client
import pytest
import urllib

pytestmark = pytest.mark.django_db


@pytest.fixture(scope="module")
def client():
    return Client()


@pytest.fixture(scope="module")
def categories(client):
    response = client.get("/categories/")
    content = response.json()
    return content


@pytest.fixture(scope="module")
def category_products(client):
    response = client.get("/category/1/")
    content = response.json()
    return content


@pytest.fixture(scope="module")
def product_variants(client):
    response = client.get("/product/2/")
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
    r = client.get("/categories/420/")
    assert r.status_code == 404
    assert "No Categories matches the given query" in r.json()["detail"]


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
        "filename",
        "description",
    ]
    entry = category_products["results"][0]
    assert set(required_fields).issubset(entry.keys())

    # # P3: url to image is valid
    # url = entry.get("filename")
    # with urllib.request.urlopen(url) as r:
    #     assert r.status == 200


def test_get_category_products_negative(client):
    # N1: missing id will result in error
    r = client.get("/category/")
    assert r.status_code == 404

    # N2: non-existent id will result in error
    r = client.get("/category/350/")
    assert r.status_code == 404


def test_get_product_variant(product_variants):
    # P1: pagination
    assert set(["next", "previous", "results"]).issubset(product_variants.keys())

    # P2: check contents
    required_fields = [
        "variant_id",
        "product_id",
        "product_name",
        "price",
        "style_name",
        "color",
        "filename",
        "description",
    ]
    product = product_variants["results"][0]
    assert set(required_fields).issubset(product.keys())

    # P3: url to image is valid - image not included in scrape,
    # use placeholder for 404 on image get
    # url = product.get("filename")
    # with urllib.request.urlopen(url) as r:
    #     assert r.status == 200


def test_product_variant_negative(client):
    r = client.get("/product/")
    assert r.status_code == 404

    r.client.get("/product/9001/")
    assert r.status_code == 404
