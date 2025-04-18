from store.models import Categories, ProductVariants, Product
from store.serializers import (
    CategorySerializer,
    ProductListSerializer,
    ProductVariantSerializer,
)
from django.db.models import OuterRef, Subquery
from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from rest_framework.exceptions import NotFound


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categories.objects.all().order_by("category_name")
    serializer_class = CategorySerializer


class ProductListView(ListAPIView):
    serializer_class = ProductListSerializer

    def get_queryset(self):
        first_variant = ProductVariants.objects.filter(product=OuterRef("pk")).order_by(
            "variant_id"
        )
        color = first_variant.values("color")[:1]
        filename = first_variant.values("filename")[:1]
        description = first_variant.values("description")[:1]

        category_id = self.kwargs.get("category_id")
        if category_id:
            product_queryset = (
                Product.objects.annotate(
                    color=Subquery(color),
                    image_link=Subquery(filename),
                    description=Subquery(description),
                )
                .select_related("category")
                .filter(category=category_id)
                .order_by("pk")
            )

            category_query = Categories.objects.filter(category_id=category_id).distinct()
            category = category_query.values("category_name")[:1]
            queryset = product_queryset.annotate(category_name=Subquery(category))

        if queryset:
            return queryset
        else:
            raise NotFound()


class ProductVariantsView(ListAPIView):
    serializer_class = ProductVariantSerializer

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        queryset = ProductVariants.objects.filter(product=product_id)

        return queryset