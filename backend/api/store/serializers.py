from store.models import Categories
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["category_id", "category_name"]
