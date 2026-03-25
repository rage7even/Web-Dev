from django.core.management.base import BaseCommand

from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed the database with a few sample categories and products for local testing.'

    def handle(self, *args, **options):
        smartphones, _ = Category.objects.get_or_create(name='Smartphones')
        laptops, _ = Category.objects.get_or_create(name='Laptops')

        sample_products = [
            {
                'name': 'Apple iPhone 16 128GB',
                'price': 489990,
                'description': 'Compact flagship with premium display and long battery life.',
                'count': 12,
                'is_active': True,
                'category': smartphones,
            },
            {
                'name': 'Samsung Galaxy A55 256GB',
                'price': 229990,
                'description': 'Balanced Android phone with solid cameras and AMOLED screen.',
                'count': 18,
                'is_active': True,
                'category': smartphones,
            },
            {
                'name': 'MacBook Air 13 M3',
                'price': 699990,
                'description': 'Thin and lightweight notebook for work, study and travel.',
                'count': 6,
                'is_active': True,
                'category': laptops,
            },
            {
                'name': 'ASUS VivoBook 15',
                'price': 259990,
                'description': 'Practical laptop with enough storage for daily use.',
                'count': 10,
                'is_active': True,
                'category': laptops,
            },
        ]

        for product_data in sample_products:
            Product.objects.update_or_create(
                name=product_data['name'],
                defaults=product_data,
            )

        self.stdout.write(self.style.SUCCESS('Sample data created or updated.'))
