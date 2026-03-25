from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from .models import Category, Product


def products_list(request):
    products = Product.objects.select_related('category').all()
    return JsonResponse([product.to_dict() for product in products], safe=False)


def product_detail(request, id: int):
    product = get_object_or_404(Product.objects.select_related('category'), pk=id)
    return JsonResponse(product.to_dict())


def categories_list(request):
    categories = Category.objects.all()
    return JsonResponse([category.to_dict() for category in categories], safe=False)


def category_detail(request, id: int):
    category = get_object_or_404(Category, pk=id)
    return JsonResponse(category.to_dict())


def category_products(request, id: int):
    category = get_object_or_404(Category, pk=id)
    products = category.products.all()
    return JsonResponse([product.to_dict() for product in products], safe=False)
