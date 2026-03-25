import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<any>();

  addToCart = output< { productId: number, quantity: number }>();

  quantity = 1;

  increaseQuantity () {
    if(this.quantity < 10) this.quantity++;
  }
  decreaseQuantity () {
    if(this.quantity > 0) this.quantity--;
  }

  addToCartHandler() {
    this.addToCart.emit ({
      productId: this.product().id,
      quantity: this.quantity,
    });
  }
}
