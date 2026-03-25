import {Component, Input, EventEmitter, Output} from '@angular/core';
import { Product} from '../product.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    NgClass
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();


  likeProduct () {
    this.product.likes++;
  }

  deleteProduct () {
    this.delete.emit(this.product.id);
  }
}
