import { Component, input, output } from '@angular/core';
import { ProductItem} from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<any[]>();

  addToCart = output<{ productId: number, quantity: number}>();

  onAddToCart(eventData: { productId: number, quantity: number }) {
    this.addToCart.emit(eventData);
  }
}
