import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal',
  imports: [Product],
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  product = input.required<Product>();
  isOpen = input<boolean>(false);
  closeModal = output<void>();

  onClose() {
    this.closeModal.emit();
  }

  onBackdropClick() {
    this.closeModal.emit();
  }
}
