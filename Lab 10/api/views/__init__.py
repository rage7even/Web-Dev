# Switch the active implementation by changing the import below.
# Level 2 (FBV):     
# from api.views.fbv import products_list, product_detail

# Level 3 (CBV):     
# from api.views.cbv import ProductListAPIView, ProductDetailAPIView

# Level 4 (Mixins):  from api.views.mixins import ProductListAPIView, ProductDetailAPIView
# Level 5 (Generic): active ↓

from api.views.generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
