from django.http import JsonResponse

from .models import Category, Product


def json_response(payload, status=200):
    return JsonResponse(
        payload,
        safe=not isinstance(payload, list),
        status=status,
        json_dumps_params={"ensure_ascii": False},
    )


def products_list(request):
    products = Product.objects.select_related("category").all()
    return json_response([product.to_dict() for product in products])


def product_detail(request, id):
    try:
        product = Product.objects.select_related("category").get(id=id)
    except Product.DoesNotExist:
        return json_response({"error": "Product not found"}, status=404)

    return json_response(product.to_dict())


def categories_list(request):
    categories = Category.objects.all()
    return json_response([category.to_dict() for category in categories])


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return json_response({"error": "Category not found"}, status=404)

    return json_response(category.to_dict())


def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist:
        return json_response({"error": "Category not found"}, status=404)

    products = category.products.all()
    return json_response([product.to_dict() for product in products])
