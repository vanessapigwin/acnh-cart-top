from store.models import Categories
from store.serializers import CategorySerializer
from rest_framework import viewsets


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all().order_by("category_name")
    serializer_class = CategorySerializer
