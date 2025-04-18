from store.models import Categories, Product, ProductVariants
from rest_framework import serializers


listing_common_fields = [
    "product_id",
    "product_name",
    "price",
    "style_name",
    "color",
    "image_link",
    "description",
]


def build_img_url(obj):
    """
    Note: Category `dressup` uses Tops as parent path
    """
    category_name = (
        obj.category_name.title() if obj.category_name != "dressup" else "Tops"
    )
    image_link = obj.image_link
    return f"https://images.cattoviz.com/{category_name}/{image_link}.png"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["category_id", "category_name"]


class ProductListSerializer(serializers.ModelSerializer):
    color = serializers.CharField(read_only=True)
    image_link = serializers.SerializerMethodField()
    description = serializers.CharField(read_only=True)

    class Meta:
        model = Product
        fields = listing_common_fields

    def get_image_link(self, obj):
        return build_img_url(obj)


class ProductVariantSerializer(serializers.ModelSerializer):
    # variant_id = serializers.PrimaryKeyRelatedField()

    class Meta:
        model = ProductVariants
        fields = ["variant_id", "color", "filename", "description", "product"]
