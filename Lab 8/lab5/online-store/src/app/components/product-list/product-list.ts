import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  readonly products = input.required<Product[]>();
  readonly categoryName = input.required<string>();
  readonly likeRequested = output<number>();
  readonly deleteRequested = output<number>();

  protected requestLike(productId: number): void {
    this.likeRequested.emit(productId);
  }

  protected requestDelete(productId: number): void {
    this.deleteRequested.emit(productId);
  }
}
