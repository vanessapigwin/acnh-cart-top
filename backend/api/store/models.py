# This is an auto-generated Django model module
# using python manage.py inspectdb > models.py

from django.db import models


class Categories(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=50)

    class Meta:
        managed = True
        db_table = "categories"


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=50)
    price = models.IntegerField()
    style_name = models.CharField(max_length=50)
    category = models.ForeignKey(Categories, models.CASCADE, blank=True, null=True)

    class Meta:
        managed = True
        db_table = "product"


class ProductVariants(models.Model):
    variant_id = models.AutoField(primary_key=True)
    color = models.CharField(max_length=50)
    filename = models.CharField(max_length=100)
    description = models.CharField(max_length=200, blank=True, null=True)
    product = models.ForeignKey(Product, models.CASCADE, blank=True, null=True)

    class Meta:
        managed = True
        db_table = "product_variants"
