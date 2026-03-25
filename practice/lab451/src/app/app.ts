import { Component, signal, computed } from '@angular/core';
import { ProductList} from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cartItems = signal<Array<{productId: number, quantity: number}>>([]);

  cartTotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });

  products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 }
  ];

  onAddToCart(eventData: { productId: number, quantity: number }) {
    this.cartItems.update(items => {
      // Ищем индекс товара в корзине
      const existingItemIndex = items.findIndex(
        item => item.productId === eventData.productId
      );

      if (existingItemIndex !== -1) {
        // Если товар уже есть - создаем новый массив с обновленным количеством
        const updatedItems = [...items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + eventData.quantity
        };
        return updatedItems;
      } else {
        // Если товара нет - добавляем новый
        return [...items, eventData];
      }
    });
  }
}
