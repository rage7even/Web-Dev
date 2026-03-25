import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Product Catalog";

  products: Product[] = [
    { id: 1, name: "iPhone 15", price: 450000, inStock: true, likes: 0 },
    { id: 2, name: "Samsung S24", price: 380000, inStock: true, likes: 0 },
    { id: 3, name: "MacBook Air", price: 700000, inStock: false, likes: 0 },
    { id: 4, name: "PlayStation 5", price: 300000, inStock: true, likes: 0 },
    { id: 5, name: "AirPods Pro", price: 120000, inStock: false, likes: 0 }
  ];

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
