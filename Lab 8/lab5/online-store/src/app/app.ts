import { Component, computed, inject, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly productService = inject(ProductService);

  protected readonly categories = this.productService.getCategories();
  protected readonly selectedCategoryId = signal<number | null>(null);
  protected readonly selectedCategory = computed(
    () => this.categories.find((category) => category.id === this.selectedCategoryId()) ?? null
  );
  protected readonly selectedProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    return categoryId === null ? [] : this.productService.getProductsByCategory(categoryId);
  });

  protected selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  protected handleLike(productId: number): void {
    this.productService.likeProduct(productId);
  }

  protected handleDelete(productId: number): void {
    this.productService.deleteProduct(productId);
  }

  protected countProducts(categoryId: number): number {
    return this.productService.getProductsByCategory(categoryId).length;
  }
}
