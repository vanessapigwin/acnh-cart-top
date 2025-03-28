# Generated by Django 5.1.7 on 2025-03-28 21:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Categories",
            fields=[
                ("category_id", models.AutoField(primary_key=True, serialize=False)),
                ("category_name", models.CharField(max_length=50)),
            ],
            options={
                "db_table": "categories",
                "managed": True,
            },
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                ("product_id", models.AutoField(primary_key=True, serialize=False)),
                ("product_name", models.CharField(max_length=50)),
                ("price", models.IntegerField()),
                ("style_name", models.CharField(max_length=50)),
                (
                    "category",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="store.categories",
                    ),
                ),
            ],
            options={
                "db_table": "product",
                "managed": True,
            },
        ),
        migrations.CreateModel(
            name="ProductVariants",
            fields=[
                ("variant_id", models.AutoField(primary_key=True, serialize=False)),
                ("color", models.CharField(max_length=50)),
                ("filename", models.CharField(max_length=100)),
                (
                    "description",
                    models.CharField(blank=True, max_length=200, null=True),
                ),
                (
                    "product",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="store.product",
                    ),
                ),
            ],
            options={
                "db_table": "product_variants",
                "managed": True,
            },
        ),
    ]
