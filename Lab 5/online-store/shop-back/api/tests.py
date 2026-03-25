from django.test import TestCase


class ApiViewsTests(TestCase):
    def test_products_list_returns_seeded_products(self):
        response = self.client.get("/api/products/")

        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 20)
        self.assertEqual(data[0]["id"], 1)
        self.assertEqual(data[0]["category_id"], 1)

    def test_product_detail_returns_single_product(self):
        response = self.client.get("/api/products/1/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["id"], 1)
        self.assertEqual(response.json()["category_id"], 1)

    def test_categories_list_returns_all_categories(self):
        response = self.client.get("/api/categories/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 4)
        self.assertEqual(response.json()[0]["id"], 1)

    def test_category_products_filters_by_category(self):
        response = self.client.get("/api/categories/1/products/")

        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 5)
        self.assertTrue(all(product["category_id"] == 1 for product in data))

    def test_missing_entities_return_json_404(self):
        product_response = self.client.get("/api/products/999/")
        category_response = self.client.get("/api/categories/999/")

        self.assertEqual(product_response.status_code, 404)
        self.assertEqual(product_response.json()["error"], "Product not found")
        self.assertEqual(category_response.status_code, 404)
        self.assertEqual(category_response.json()["error"], "Category not found")
