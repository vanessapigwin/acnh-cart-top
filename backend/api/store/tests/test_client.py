from django.test import Client
import pytest


@pytest.fixture(scope='module')
def client():
    return Client()


def test_get_categories(client):
    assert client.get('/categories/')