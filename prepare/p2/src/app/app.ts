import { Component} from '@angular/core';
import {ProductCard} from './product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [
    ProductCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = [
    { id: 1, name: 'Laptop', price: 1200, image: 'assets/laptop.jpg' },
    { id: 2, name: 'Phone', price: 800, image: 'assets/phone.jpg' },
    { id: 3, name: 'Headphones', price: 150, image: 'assets/headphones.jpg' },
    { id: 4, name: 'Smartwatch', price: 250, image: 'assets/smartwatch.jpg' },
    { id: 5, name: 'Camera', price: 600, image: 'assets/camera.jpg' }
  ]

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  logLiked (id: number) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      console.log(product);
    }
  }

  showTimer = true;
  toggleTimer () {
    this.showTimer = !this.showTimer;
  }
}
