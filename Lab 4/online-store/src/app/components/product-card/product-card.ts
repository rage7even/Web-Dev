import { Component, Input} from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  // Для отображения рейтинга звёздами
  get stars() {
    const rating = this.product.rating;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return { fullStars, halfStar, emptyStars };
  }

  // Поделиться в WhatsApp
  shareViaWhatsApp() {
    const text = `Посмотри этот товар: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  // Поделиться в Telegram
  shareViaTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
  currentImageIndex = 0;

   selectedImage: string = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }
}