from models import Categories
from rest_framework import viewsets


from serializers import CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all().order_by("category_name")
    serializer_class = CategorySerializer
