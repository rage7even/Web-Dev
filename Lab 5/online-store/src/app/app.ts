import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
    // По умолчанию выбираем первую категорию
    if (this.categories.length > 0) {
      this.selectCategory(this.categories[0].id);
    }
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts = this.products.filter(p => p.categoryId === categoryId);
  }

  onLike(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
    // обновляем filteredProducts (чтобы лайк отобразился)
    this.filteredProducts = this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  onDelete(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    this.filteredProducts = this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }
}