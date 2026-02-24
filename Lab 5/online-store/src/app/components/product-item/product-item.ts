import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() like = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  selectedImage: string = '';
  currentIndex: number = 0;

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  // Рейтинг звёздами
  get stars() {
    const rating = this.product.rating;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return { fullStars, halfStar, emptyStars };
  }

  // Переключение изображений
  selectImage(image: string) {
    this.selectedImage = image;
  }

  prevImage() {
    if (this.product.images && this.product.images.length > 0) {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      const newIndex = (currentIndex - 1 + this.product.images.length) % this.product.images.length;
      this.selectedImage = this.product.images[newIndex];
    }
  }

  nextImage() {
    if (this.product.images && this.product.images.length > 0) {
      const currentIndex = this.product.images.indexOf(this.selectedImage);
      const newIndex = (currentIndex + 1) % this.product.images.length;
      this.selectedImage = this.product.images[newIndex];
    }
  }

  // Лайк
  onLike() {
    this.like.emit();
  }

  // Удаление с подтверждением
  onDelete() {
    if (confirm('Удалить товар?')) {
      this.delete.emit();
    }
  }

  // Поделиться
  shareViaWhatsApp() {
    const text = `Посмотри этот товар: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareViaTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}