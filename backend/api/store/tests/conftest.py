import django
import os
import pytest
from django.conf import settings
from django.core.management import call_command


@pytest.fixture(scope="session")
def django_db_setup(django_db_setup, django_db_blocker):
    with django_db_blocker.unblock():
        call_command("loaddata", "categories.json")
        call_command("loaddata", "product.json")
        call_command("loaddata", "product_variants.json")


def pytest_configure(config):
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project.settings")
    django.setup()
