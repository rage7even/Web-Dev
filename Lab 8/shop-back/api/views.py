from django.http import JsonResponse
from .models import Category, Product


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        },
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


def not_found(message):
    return JsonResponse({'error': message}, status=404)


def products_list(request):
    products = Product.objects.select_related('category').all()
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.select_related('category').get(id=id)
        return JsonResponse(product_to_dict(product))
    except Product.DoesNotExist:
        return not_found('Product not found')


def categories_list(request):
    categories = Category.objects.all()
    data = [category_to_dict(category) for category in categories]
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category_to_dict(category))
    except Category.DoesNotExist:
        return not_found('Category not found')


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return not_found('Category not found')

    products = category.products.all().select_related('category')
    data = [product_to_dict(product) for product in products]
    return JsonResponse(data, safe=False)
