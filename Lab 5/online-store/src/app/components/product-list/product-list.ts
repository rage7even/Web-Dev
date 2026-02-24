import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  @Output() like = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onLike(productId: number) {
    this.like.emit(productId);
  }

  onDelete(productId: number) {
    this.delete.emit(productId);
  }
}