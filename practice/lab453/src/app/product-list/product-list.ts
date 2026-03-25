import { Component, input, output } from '@angular/core';
import { Product } from '../models/product';
import { Modal } from '../components/modal/modal'
@Component({
  selector: 'app-product-list',
  imports: [Product, Modal],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  selectedProduct = signal<Product | null>(null);
  isModalOpen = signal(false);

  openQuickView(product: Product) {
    this.selectedProduct.set(product);
    this.isModalOpen.set(true);
  }

  closeQuickView() {
    this.isModalOpen.set(false);
    this.selectedProduct.set(null);
  }
}
