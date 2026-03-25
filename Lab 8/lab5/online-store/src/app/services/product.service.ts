import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { createGallery } from '../data/product-visuals';

const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

function buildProduct(
  id: number,
  categoryId: number,
  name: string,
  description: string,
  price: number,
  rating: number,
  link: string,
  subtitle: string,
  theme: 'phone' | 'laptop' | 'audio' | 'tablet'
): Product {
  const images = createGallery(name, subtitle, theme);

  return {
    id,
    categoryId,
    name,
    description,
    price,
    rating,
    likes: 0,
    image: images[0],
    images,
    link
  };
}

const initialProducts: Product[] = [
  buildProduct(1, 1, 'Apple iPhone 16 128GB Dual SIM', 'Compact flagship with a polished OLED display, fast performance and dependable battery life for everyday premium use.', 489990, 4.9, 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-dual-sim-zelenyi-133139054/', 'Flagship phone', 'phone'),
  buildProduct(2, 1, 'Samsung Galaxy S24 256GB', 'A refined Android flagship with a bright AMOLED screen and a camera system that feels ready for travel, work and social content.', 459990, 4.9, 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/', 'Galaxy flagship', 'phone'),
  buildProduct(3, 1, 'Samsung Galaxy A55 5G 256GB', 'Balanced mid-range performance, strong build quality and generous storage make it easy to recommend to students and daily users.', 229990, 4.7, 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sinii-118044398/', 'Everyday Android', 'phone'),
  buildProduct(4, 1, 'Google Pixel 8 128GB', 'Pixel keeps the interface clean while delivering excellent photo processing and a compact design for one-hand comfort.', 339990, 4.8, 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-cher-nyi-114016975/', 'Camera phone', 'phone'),
  buildProduct(5, 1, 'HONOR X8b 256GB', 'Slim body, vivid display and big storage in a lower price range. A lightweight option for social apps and casual media use.', 119990, 4.6, 'https://kaspi.kz/shop/p/honor-x8b-8-gb-256-gb-chernyi-115506880/', 'Slim value phone', 'phone'),
  buildProduct(6, 2, 'Apple MacBook Air 13 2024 M3', 'Minimal aluminum design with silent performance and long battery life. Strong for creative work, study and travel.', 699990, 5, 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-en-13-6-8-gb-ssd-256-gb-macos-mrxn3-118570205/', 'Portable workstation', 'laptop'),
  buildProduct(7, 2, 'ASUS VivoBook 15 X1504VA', 'A comfortable 15-inch notebook for work and study with solid storage and a clean understated appearance.', 259990, 4.6, 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504va-bq282-15-6-8-gb-ssd-512-gb-dos-90nb10j1-m00bm0-114759483/', 'Work laptop', 'laptop'),
  buildProduct(8, 2, 'Lenovo IdeaPad Slim 3 15AMN8', 'Simple design, reliable everyday performance and a practical keyboard layout make this a flexible budget-friendly machine.', 219990, 4.5, 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-82xq00g6rk-seryi-117420031/', 'Daily laptop', 'laptop'),
  buildProduct(9, 2, 'Lenovo IdeaPad Slim 3 82XQ00FFRK', 'Slim styling and straightforward performance for browsing, office apps and online classes without visual clutter.', 209990, 4.5, 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15amn8-82xq00ffrk-serebristyi-118339115/', 'Student laptop', 'laptop'),
  buildProduct(10, 2, 'Acer Aspire 3 A315-59', 'A no-drama laptop with enough storage and a familiar layout. Best for practical users who want Windows ready to go.', 279990, 4.6, 'https://kaspi.kz/shop/p/acer-aspire-3-a315-59-38xq-nx-k6ser-00g-serebristyi-113959231/', 'Windows essential', 'laptop'),
  buildProduct(11, 3, 'Sony WH-1000XM5', 'Premium over-ear sound with strong noise cancellation and a sleek silhouette for focused work or travel.', 219990, 4.9, 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-rozovyi-139129906/', 'Premium audio', 'audio'),
  buildProduct(12, 3, 'Marshall Major IV', 'Recognizable design, warm sound and long battery life. It adds personality to the catalog while staying practical.', 59990, 4.8, 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-podarok--131431390/', 'Iconic audio', 'audio'),
  buildProduct(13, 3, 'Apple AirPods 4', 'Compact wireless earbuds for frictionless Apple ecosystem pairing and easy all-day carry.', 89990, 4.7, 'https://kaspi.kz/shop/p/apple-airpods-4-belyi-124333372/', 'Pocket earbuds', 'audio'),
  buildProduct(14, 3, 'JBL Tune 770NC', 'A comfortable wireless headset with active noise cancellation and an approachable sound signature.', 54990, 4.6, 'https://kaspi.kz/shop/p/jbl-tune-770nc-chernyi-112143394/', 'ANC headset', 'audio'),
  buildProduct(15, 3, 'Xiaomi Redmi Buds 5 Pro', 'Compact in-ear buds with a neat case, modern feature set and a good balance between price and sound.', 34990, 4.5, 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-5-pro-chernyi-115820788/', 'Smart budget audio', 'audio'),
  buildProduct(16, 4, 'Apple iPad Air 11 2024 128GB Gray', 'Lightweight tablet with a sharp display for sketching ideas, reading and everyday media on the move.', 429990, 4.9, 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-djuim-8-gb-128-gb-seryi-119778165/', 'Creative tablet', 'tablet'),
  buildProduct(17, 4, 'Apple iPad Air 11 2024 128GB Blue', 'A clean tablet experience for notes, casual design work and entertainment with a premium finish.', 439990, 4.9, 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-5g-11-11-djuim-8-gb-128-gb-goluboi-120178989/', 'Portable tablet', 'tablet'),
  buildProduct(18, 4, 'Apple iPad Air 11 2024 128GB Gold', 'A flexible productivity tablet with enough power for study, light creative work and fast browsing.', 429990, 4.8, 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-128-gb-zolotistyi-119778076/', 'Elegant tablet', 'tablet'),
  buildProduct(19, 4, 'Huawei MatePad 11.5 256GB', 'A large bright display and comfortable body make it a nice option for documents, streaming and reading.', 189990, 4.7, 'https://kaspi.kz/shop/p/huawei-matepad-11-5-11-5-djuim-8-gb-256-gb-seryi-138881499/', 'Large display tablet', 'tablet'),
  buildProduct(20, 4, 'Huawei MatePad 11.5 PaperMatte', 'Paper-like screen coating gives this model a calmer, more focused feel for studying and note-taking.', 249990, 4.8, 'https://kaspi.kz/shop/p/huawei-matepad-11-5-papermatte-edition-2025-11-5-djuim-8-gb-256-gb-seryi-146083955/', 'Reading tablet', 'tablet')
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsSignal = signal<Product[]>(initialProducts);

  getCategories(): Category[] {
    return categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsSignal().filter((product) => product.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    this.productsSignal.update((products) =>
      products.map((product) =>
        product.id === productId ? { ...product, likes: product.likes + 1 } : product
      )
    );
  }

  deleteProduct(productId: number): void {
    this.productsSignal.update((products) => products.filter((product) => product.id !== productId));
  }
}
