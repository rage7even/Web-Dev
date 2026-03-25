import { Component } from '@angular/core';
import {ProductList} from '../product-list/product-list';

@Component({
  selector: 'app-category-selector',
  imports: [
    ProductList
  ],
  templateUrl: './category-selector.html',
  styleUrl: './category-selector.css',
})
export class CategorySelector {
  categories = ['Electronics', 'Clothing', 'Books'];
  selectedCategory: string | null = null;

  productByCategory: Record<string, any[]> = {
    Electronics: [
      { id: 1, name: 'Laptop', price: 1200, image: 'assets/laptop.jpg' },
      { id: 2, name: 'Phone', price: 800, image: 'assets/phone.jpg' }
    ],
    Clothing: [
      { id: 3, name: 'T-Shirt', price: 20, image: 'assets/tshirt.jpg' },
      { id: 4, name: 'Jeans', price: 50, image: 'assets/jeans.jpg' }
    ],
    Books: [
      { id: 5, name: 'Angular Guide', price: 30, image: 'assets/book.jpg' },
      { id: 6, name: 'Networking Basics', price: 40, image: 'assets/book2.jpg' }
    ]
  }

  get products() {
    return this.selectedCategory ? this.productByCategory[this.selectedCategory] : [];
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
