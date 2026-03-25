import { Component, computed, input, output, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly likeRequested = output<number>();
  readonly deleteRequested = output<number>();

  protected readonly activeImageIndex = signal(0);
  protected readonly starIndexes = [1, 2, 3, 4, 5];
  protected readonly roundedRating = computed(() => Math.round(this.product().rating));
  protected readonly activeImage = computed(
    () => this.product().images[this.activeImageIndex()] ?? this.product().image
  );

  protected selectImage(index: number): void {
    this.activeImageIndex.set(index);
  }

  protected likeProduct(): void {
    this.likeRequested.emit(this.product().id);
  }

  protected deleteProduct(): void {
    if (window.confirm(`Delete ${this.product().name} from this category?`)) {
      this.deleteRequested.emit(this.product().id);
    }
  }

  protected get whatsappShareLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${this.product().link}`)}`;
  }

  protected get telegramShareLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
  }
}
