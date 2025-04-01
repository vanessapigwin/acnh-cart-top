from django.test import Client
import pytest

pytestmark = pytest.mark.django_db


@pytest.fixture(scope="module")
def client():
    return Client()


def test_get_categories(client):
    response = client.get("/categories/")
    content = response.json()
    assert set(["next", "previous", "results"]).issubset(content.keys())

    expeted_entry = {"category_id": 1, "category_name": "accessories"}
    actual_entry = content.get("results")[0]
    assert actual_entry == expeted_entry
