from store.models import Categories, ProductVariants, Product
from store.serializers import (
    CategorySerializer,
    ProductListSerializer,
    ProductVariantSerializer,
)
from django.db.models import OuterRef, Subquery, F
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
            queryset = (
                Product.objects.annotate(
                    color=Subquery(color),
                    filename=Subquery(filename),
                    description=Subquery(description),
                )
                .select_related("category")
                .filter(category=category_id)
                .order_by("pk")
                .annotate(category_name=F("category__category_name"))
            )

        if queryset:
            return queryset
        else:
            raise NotFound()


class ProductVariantsView(ListAPIView):
    serializer_class = ProductVariantSerializer

    def get_queryset(self):
        product_id = self.kwargs.get("product_id")
        queryset = (
            ProductVariants.objects.filter(product=product_id)
            .select_related("product", "product__category")
            .order_by("pk")
            .annotate(
                product_name=F("product__product_name"),
                price=F("product__price"),
                style_name=F("product__style_name"),
                category_name=F("product__category__category_name")
            )
        )

        return queryset
