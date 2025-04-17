from store.models import Categories, ProductVariants, Product
from store.serializers import CategorySerializer, ProductListSerializer
from django.db.models import OuterRef, Subquery
from rest_framework import viewsets
from rest_framework.generics import ListAPIView


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categories.objects.all().order_by("category_name")
    serializer_class = CategorySerializer


class ProductListViewSet(ListAPIView):
    serializer_class = ProductListSerializer

    def get_queryset(self):
        category_id = self.kwargs.get("category_id")
        first_variant = ProductVariants.objects.filter(product=OuterRef("pk")).order_by(
            "variant_id"
        )

        color = first_variant.values("color")[:1]
        filename = first_variant.values("filename")[:1]
        description = first_variant.values("description")[:1]

        if category_id:
            queryset = Product.objects.annotate(
                color=Subquery(color),
                preview_image=Subquery(filename),
                description=Subquery(description),
            ).select_related("category")
            queryset = queryset.filter(category_id=category_id)

        return queryset
