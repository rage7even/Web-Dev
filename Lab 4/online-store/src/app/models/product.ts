export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;        // цена в тенге
  rating: number;       // от 1 до 5, может быть дробным
  image: string;        // основное изображение
  images: string[];     // массив URL для галереи (минимум 3)
  link: string;         // прямая ссылка на товар на kaspi.kz
}