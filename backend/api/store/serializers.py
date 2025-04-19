from store.models import Categories, Product, ProductVariants
from rest_framework import serializers


listing_common_fields = [
    "product_id",
    "product_name",
    "price",
    "style_name",
    "color",
    "filename",
    "description",
]


def build_img_url(obj):
    """
    Note: Category `dressup` uses Tops as parent path
    """
    category_name = (
        obj.category_name.title() if obj.category_name != "dressup" else "Tops"
    )
    filename = obj.filename
    return f"https://images.cattoviz.com/{category_name}/{filename}.png"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ["category_id", "category_name"]


class ProductListSerializer(serializers.ModelSerializer):
    color = serializers.CharField(read_only=True)
    filename = serializers.SerializerMethodField()
    description = serializers.CharField(read_only=True)

    class Meta:
        model = Product
        fields = listing_common_fields

    def get_filename(self, obj):
        return build_img_url(obj)


class ProductVariantSerializer(serializers.ModelSerializer):
    product_id = serializers.PrimaryKeyRelatedField(read_only=True)
    product_name = serializers.CharField(read_only=True)
    price = serializers.IntegerField(read_only=True)
    style_name = serializers.CharField(read_only=True)
    filename = serializers.SerializerMethodField()

    class Meta:
        model = ProductVariants
        fields = ["variant_id"] + listing_common_fields

    def get_filename(self, obj):
        return build_img_url(obj)
