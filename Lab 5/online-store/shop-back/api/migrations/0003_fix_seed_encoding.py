import json
from django.db import migrations


CATEGORIES = json.loads(r'''[
    {
        "id": 1,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u044b"
    },
    {
        "id": 2,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438"
    },
    {
        "id": 3,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438"
    },
    {
        "id": 4,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442\u044b"
    }
]''')
PRODUCTS = json.loads(r'''[
    {
        "id": 1,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Apple iPhone 15 128Gb \u0447\u0435\u0440\u043d\u044b\u0439",
        "price": 429990.0,
        "description": "6.1\" Super Retina XDR, OLED, 2556x1179, iOS, A16 Bionic, \u043f\u0430\u043c\u044f\u0442\u044c 128 \u0413\u0411, \u043a\u0430\u043c\u0435\u0440\u0430 48 \u041c\u043f, \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440 3349 \u043c\u0410\u00b7\u0447, \u0432\u043b\u0430\u0433\u043e\u0437\u0430\u0449\u0438\u0442\u0430 IP68.",
        "count": 12,
        "is_active": true,
        "category_id": 1
    },
    {
        "id": 2,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung Galaxy S23 Ultra 256Gb \u0447\u0435\u0440\u043d\u044b\u0439",
        "price": 499990.0,
        "description": "6.8\" Dynamic AMOLED 2X, 3088x1440, Snapdragon 8 Gen 2, \u043f\u0430\u043c\u044f\u0442\u044c 256 \u0413\u0411, \u043a\u0430\u043c\u0435\u0440\u0430 200 \u041c\u043f, \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440 5000 \u043c\u0410\u00b7\u0447, S Pen.",
        "count": 8,
        "is_active": true,
        "category_id": 1
    },
    {
        "id": 3,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Xiaomi Redmi Note 12 Pro 8/256Gb \u0441\u0438\u043d\u0438\u0439",
        "price": 139990.0,
        "description": "6.67\" AMOLED, 2400x1080, MediaTek Helio G99, \u043f\u0430\u043c\u044f\u0442\u044c 256 \u0413\u0411, \u043a\u0430\u043c\u0435\u0440\u0430 108 \u041c\u043f, \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440 5000 \u043c\u0410\u00b7\u0447.",
        "count": 15,
        "is_active": true,
        "category_id": 1
    },
    {
        "id": 4,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Google Pixel 7 Pro 128Gb \u0447\u0435\u0440\u043d\u044b\u0439",
        "price": 299990.0,
        "description": "6.7\" LTPO OLED, 3120x1440, Google Tensor G2, \u043f\u0430\u043c\u044f\u0442\u044c 128 \u0413\u0411, \u043a\u0430\u043c\u0435\u0440\u0430 50 \u041c\u043f, \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440 5000 \u043c\u0410\u00b7\u0447.",
        "count": 10,
        "is_active": true,
        "category_id": 1
    },
    {
        "id": 5,
        "name": "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d OnePlus 11 256Gb \u0447\u0435\u0440\u043d\u044b\u0439",
        "price": 349990.0,
        "description": "6.7\" LTPO3 Fluid AMOLED, 3216x1440, Snapdragon 8 Gen 2, \u043f\u0430\u043c\u044f\u0442\u044c 256 \u0413\u0411, \u043a\u0430\u043c\u0435\u0440\u0430 50 \u041c\u043f, \u0430\u043a\u043a\u0443\u043c\u0443\u043b\u044f\u0442\u043e\u0440 5000 \u043c\u0410\u00b7\u0447.",
        "count": 6,
        "is_active": true,
        "category_id": 1
    },
    {
        "id": 6,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Apple MacBook Air 13 M1 2020",
        "price": 339990.0,
        "description": "13.3\" Retina, 2560x1600, Apple M1, RAM 8 \u0413\u0411, SSD 256 \u0413\u0411, macOS, \u0446\u0432\u0435\u0442 \u0441\u0435\u0440\u044b\u0439 \u043a\u043e\u0441\u043c\u043e\u0441.",
        "count": 7,
        "is_active": true,
        "category_id": 2
    },
    {
        "id": 7,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Asus ROG Zephyrus G14 GA402RK",
        "price": 699990.0,
        "description": "14\" WQXGA, 2560x1600, AMD Ryzen 9 6900HS, RAM 16 \u0413\u0411, SSD 1 \u0422\u0411, NVIDIA GeForce RTX 3060, \u0431\u0435\u0437 \u041e\u0421.",
        "count": 4,
        "is_active": true,
        "category_id": 2
    },
    {
        "id": 8,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Lenovo IdeaPad 3 15ITL6",
        "price": 239990.0,
        "description": "15.6\" IPS, 1920x1080, Intel Core i5-1135G7, RAM 8 \u0413\u0411, SSD 512 \u0413\u0411, Intel UHD Graphics, \u0431\u0435\u0437 \u041e\u0421.",
        "count": 11,
        "is_active": true,
        "category_id": 2
    },
    {
        "id": 9,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a Acer Aspire 7 A715-42G",
        "price": 299990.0,
        "description": "15.6\" IPS, 1920x1080, AMD Ryzen 5 5500U, RAM 8 \u0413\u0411, SSD 512 \u0413\u0411, NVIDIA GeForce GTX 1650, \u0431\u0435\u0437 \u041e\u0421.",
        "count": 9,
        "is_active": true,
        "category_id": 2
    },
    {
        "id": 10,
        "name": "\u041d\u043e\u0443\u0442\u0431\u0443\u043a HP Pavilion 15-eg2070ur",
        "price": 379990.0,
        "description": "15.6\" IPS, 1920x1080, Intel Core i5-1240P, RAM 16 \u0413\u0411, SSD 512 \u0413\u0411, Intel Iris Xe Graphics, \u0431\u0435\u0437 \u041e\u0421.",
        "count": 5,
        "is_active": true,
        "category_id": 2
    },
    {
        "id": 11,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Apple AirPods Pro 2",
        "price": 109990.0,
        "description": "\u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 \u0441 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u0448\u0443\u043c\u043e\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c, Bluetooth 5.3, \u0432\u043b\u0430\u0433\u043e\u0437\u0430\u0449\u0438\u0442\u0430 IP54, \u0447\u0435\u0445\u043e\u043b \u0441 \u0434\u0438\u043d\u0430\u043c\u0438\u043a\u043e\u043c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 MagSafe.",
        "count": 14,
        "is_active": true,
        "category_id": 3
    },
    {
        "id": 12,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Sony WH-1000XM5",
        "price": 149990.0,
        "description": "\u043f\u043e\u043b\u043d\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u044b\u0435, \u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435, \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0448\u0443\u043c\u043e\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435, Bluetooth 5.2, \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e 30 \u0447, \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0437\u0430\u0440\u044f\u0434\u043a\u0430.",
        "count": 8,
        "is_active": true,
        "category_id": 3
    },
    {
        "id": 13,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 JBL Tune 510BT",
        "price": 19990.0,
        "description": "\u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435, \u043f\u043e\u043b\u043d\u043e\u0440\u0430\u0437\u043c\u0435\u0440\u043d\u044b\u0435, Bluetooth 5.0, \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e 40 \u0447, \u0441\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f, \u0447\u0435\u0440\u043d\u044b\u0439.",
        "count": 20,
        "is_active": true,
        "category_id": 3
    },
    {
        "id": 14,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Samsung Galaxy Buds2 Pro",
        "price": 69990.0,
        "description": "\u0432\u043d\u0443\u0442\u0440\u0438\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0435, \u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435, \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0448\u0443\u043c\u043e\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435, Bluetooth 5.3, \u0432\u043b\u0430\u0433\u043e\u0437\u0430\u0449\u0438\u0442\u0430 IPX7, \u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u044b\u0439.",
        "count": 13,
        "is_active": true,
        "category_id": 3
    },
    {
        "id": 15,
        "name": "\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438 Xiaomi Redmi Buds 4 Pro",
        "price": 19990.0,
        "description": "\u0432\u043d\u0443\u0442\u0440\u0438\u043a\u0430\u043d\u0430\u043b\u044c\u043d\u044b\u0435, \u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u0435, \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0448\u0443\u043c\u043e\u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435, Bluetooth 5.3, \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e 36 \u0447, \u0447\u0435\u0440\u043d\u044b\u0439.",
        "count": 17,
        "is_active": true,
        "category_id": 3
    },
    {
        "id": 16,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442 Apple iPad Pro 11 2022 128Gb Wi-Fi",
        "price": 499990.0,
        "description": "11\" Liquid Retina, 2388x1668, Apple M2, \u043f\u0430\u043c\u044f\u0442\u044c 128 \u0413\u0411, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 Apple Pencil 2, \u043a\u0430\u043c\u0435\u0440\u0430 12 \u041c\u043f, Face ID.",
        "count": 5,
        "is_active": true,
        "category_id": 4
    },
    {
        "id": 17,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442 Samsung Galaxy Tab S9 128Gb Wi-Fi",
        "price": 399990.0,
        "description": "11\" Dynamic AMOLED 2X, 2560x1600, Snapdragon 8 Gen 2, \u043f\u0430\u043c\u044f\u0442\u044c 128 \u0413\u0411, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 S Pen, \u043a\u0430\u043c\u0435\u0440\u0430 13 \u041c\u043f.",
        "count": 6,
        "is_active": true,
        "category_id": 4
    },
    {
        "id": 18,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442 Lenovo Tab M10 Plus 64Gb",
        "price": 89990.0,
        "description": "10.6\" IPS, 2000x1200, MediaTek Helio P22T, \u043f\u0430\u043c\u044f\u0442\u044c 64 \u0413\u0411, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043a\u0430\u0440\u0442 \u043f\u0430\u043c\u044f\u0442\u0438, \u043a\u0430\u043c\u0435\u0440\u0430 8 \u041c\u043f, \u0441\u0435\u0440\u044b\u0439.",
        "count": 12,
        "is_active": true,
        "category_id": 4
    },
    {
        "id": 19,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442 Huawei MatePad 11 128Gb",
        "price": 199990.0,
        "description": "10.95\" IPS, 2560x1600, Snapdragon 865, \u043f\u0430\u043c\u044f\u0442\u044c 128 \u0413\u0411, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0442\u0438\u043b\u0443\u0441\u0430, \u043a\u0430\u043c\u0435\u0440\u0430 13 \u041c\u043f, \u0441\u0435\u0440\u044b\u0439.",
        "count": 7,
        "is_active": true,
        "category_id": 4
    },
    {
        "id": 20,
        "name": "\u041f\u043b\u0430\u043d\u0448\u0435\u0442 Realme Pad Mini 32Gb",
        "price": 49990.0,
        "description": "8.7\" IPS, 1340x800, Unisoc T616, \u043f\u0430\u043c\u044f\u0442\u044c 32 \u0413\u0411, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043a\u0430\u0440\u0442 \u043f\u0430\u043c\u044f\u0442\u0438, \u043a\u0430\u043c\u0435\u0440\u0430 5 \u041c\u043f, \u0441\u0438\u043d\u0438\u0439.",
        "count": 16,
        "is_active": true,
        "category_id": 4
    }
]''')


def seed_store_data(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Product = apps.get_model("api", "Product")

    for category in CATEGORIES:
        Category.objects.update_or_create(id=category["id"], defaults={"name": category["name"]})

    for product in PRODUCTS:
        Product.objects.update_or_create(
            id=product["id"],
            defaults={
                "name": product["name"],
                "price": product["price"],
                "description": product["description"],
                "count": product["count"],
                "is_active": product["is_active"],
                "category_id": product["category_id"],
            },
        )


def remove_store_data(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Product = apps.get_model("api", "Product")

    Product.objects.filter(id__in=[product["id"] for product in PRODUCTS]).delete()
    Category.objects.filter(id__in=[category["id"] for category in CATEGORIES]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_seed_store_data"),
    ]

    operations = [
        migrations.RunPython(seed_store_data, remove_store_data),
    ]
