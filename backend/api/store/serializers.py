from store.models import Categories, Product
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["category_id", "category_name"]


class ProductListSerializer(serializers.ModelSerializer):
    color = serializers.CharField(read_only=True)
    preview_image = serializers.SerializerMethodField()
    description = serializers.CharField(read_only=True)

    class Meta:
        model = Product
        fields = [
            "product_id",
            "product_name",
            "price",
            "style_name",
            "color",
            "preview_image",
            "description",
        ]

    def get_preview_image(self, obj):
        return f"https://images.cattoviz.com/Tops/{obj.preview_image}.png"
