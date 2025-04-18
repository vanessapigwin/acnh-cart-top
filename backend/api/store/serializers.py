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
        """
        Note: Category `dressup` uses Tops as parent path
        """
        category_name = (
            obj.category_name.title() if obj.category_name != "dressup" else "Tops"
        )
        preview_image = obj.preview_image
        return f"https://images.cattoviz.com/{category_name}/{preview_image}.png"
