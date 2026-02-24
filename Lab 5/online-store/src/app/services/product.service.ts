import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  private products: Product[] = [
    // Смартфоны (5)
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: '6.1" Super Retina XDR, OLED, 2556x1179, iOS, A16 Bionic, память 128 ГБ, камера 48 Мп, аккумулятор 3349 мА·ч, влагозащита IP68.',
      price: 429990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137883/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S23 Ultra 256Gb черный',
      description: '6.8" Dynamic AMOLED 2X, 3088x1440, Snapdragon 8 Gen 2, память 256 ГБ, камера 200 Мп, аккумулятор 5000 мА·ч, S Pen.',
      price: 499990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb0/69635684368414.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hd1/69635685941278.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-256gb-chernyi-108916772/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi Note 12 Pro 8/256Gb синий',
      description: '6.67" AMOLED, 2400x1080, MediaTek Helio G99, память 256 ГБ, камера 108 Мп, аккумулятор 5000 мА·ч.',
      price: 139990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h65/79777237827614.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4e/h65/79777237827614.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h8a/79777238089758.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6b/h2e/79777238384670.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-8-256gb-sinii-108032539/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Google Pixel 7 Pro 128Gb черный',
      description: '6.7" LTPO OLED, 3120x1440, Google Tensor G2, память 128 ГБ, камера 50 Мп, аккумулятор 5000 мА·ч.',
      price: 299990,
      rating: 4.8,
      image: 'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9b24dc41739e901c9cd08f2520ebe450/ff9f338724b9e863fb84bfc50d54b74146e1b315a174e9110e5ab879b1a3cc78.jpg.webp',
      images: [
        'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9b24dc41739e901c9cd08f2520ebe450/ff9f338724b9e863fb84bfc50d54b74146e1b315a174e9110e5ab879b1a3cc78.jpg.webp',
        'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/98c4505866790525f244fca99da37cf8/9040957494e074eafa7e03e13bd64e0ce15dd7169fabb52592f4b30034099c69.jpg.webp',
        'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/f2f0dfb870fec5e01644f94571151f7c/8ea5f3b8581506f6e9a906fb5ab2e9f38f5ad835f9593981d17cada29fa60d14.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-128gb-chernyi-105933190/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон OnePlus 11 256Gb черный',
      description: '6.7" LTPO3 Fluid AMOLED, 3216x1440, Snapdragon 8 Gen 2, память 256 ГБ, камера 50 Мп, аккумулятор 5000 мА·ч.',
      price: 349990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/heb/86597717688350.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h05/heb/86597717688350.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h84/86597717721118.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h6e/86597717753886.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-11-256gb-chernyi-108996438/',
      likes: 0,
      categoryId: 1
    },

    // Ноутбуки (5)
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 M1 2020',
      description: '13.3" Retina, 2560x1600, Apple M1, RAM 8 ГБ, SSD 256 ГБ, macOS, цвет серый космос.',
      price: 339990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/he3/64082978111518.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Ноутбук Asus ROG Zephyrus G14 GA402RK',
      description: '14" WQXGA, 2560x1600, AMD Ryzen 9 6900HS, RAM 16 ГБ, SSD 1 ТБ, NVIDIA GeForce RTX 3060, без ОС.',
      price: 699990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/48835855.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/pe5/48835857.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/pe5/48835859.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402rk-belyi-107274786/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Ноутбук Lenovo IdeaPad 3 15ITL6',
      description: '15.6" IPS, 1920x1080, Intel Core i5-1135G7, RAM 8 ГБ, SSD 512 ГБ, Intel UHD Graphics, без ОС.',
      price: 239990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h74/h78/64339783843870.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h46/hdb/64339787284510.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he3/h2d/64339794100254.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h53/64339790594078.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-seryi-101322427/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук Acer Aspire 7 A715-42G',
      description: '15.6" IPS, 1920x1080, AMD Ryzen 5 5500U, RAM 8 ГБ, SSD 512 ГБ, NVIDIA GeForce GTX 1650, без ОС.',
      price: 299990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h76/64427291738142.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb8/h76/64427291738142.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hbe/h2c/64427297964062.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h3e/64427299897374.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-7-a715-42g-chernyi-100393849/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук HP Pavilion 15-eg2070ur',
      description: '15.6" IPS, 1920x1080, Intel Core i5-1240P, RAM 16 ГБ, SSD 512 ГБ, Intel Iris Xe Graphics, без ОС.',
      price: 379990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h8b/64081575313438.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h8b/64081575313438.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/hbb/64081576951838.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h7f/64081579114526.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eg2070ur-serebristyi-108737956/',
      likes: 0,
      categoryId: 2
    },

    // Наушники (5)
    {
      id: 11,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'беспроводные наушники с активным шумоподавлением, Bluetooth 5.3, влагозащита IP54, чехол с динамиком и поддержкой MagSafe.',
      price: 109990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362783/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Наушники Sony WH-1000XM5',
      description: 'полноразмерные, беспроводные, активное шумоподавление, Bluetooth 5.2, время работы до 30 ч, быстрая зарядка.',
      price: 149990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259245/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Наушники JBL Tune 510BT',
      description: 'беспроводные, полноразмерные, Bluetooth 5.0, время работы до 40 ч, складная конструкция, черный.',
      price: 19990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101035893/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники Samsung Galaxy Buds2 Pro',
      description: 'внутриканальные, беспроводные, активное шумоподавление, Bluetooth 5.3, влагозащита IPX7, фиолетовый.',
      price: 69990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7c/64496882024478.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/h0f/64496887070750.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-fioletovyi-106151401/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники Xiaomi Redmi Buds 4 Pro',
      description: 'внутриканальные, беспроводные, активное шумоподавление, Bluetooth 5.3, время работы до 36 ч, черный.',
      price: 19990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h38/64516676059166.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/h38/64516676059166.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/hf7/65240622039070.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h16/65241082363934.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-pro-chernyi-107128241/',
      likes: 0,
      categoryId: 3
    },

    // Планшеты (5)
    {
      id: 16,
      name: 'Планшет Apple iPad Pro 11 2022 128Gb Wi-Fi',
      description: '11" Liquid Retina, 2388x1668, Apple M2, память 128 ГБ, поддержка Apple Pencil 2, камера 12 Мп, Face ID.',
      price: 499990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2022-wi-fi-128gb-seryi-106185573/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Планшет Samsung Galaxy Tab S9 128Gb Wi-Fi',
      description: '11" Dynamic AMOLED 2X, 2560x1600, Snapdragon 8 Gen 2, память 128 ГБ, поддержка S Pen, камера 13 Мп.',
      price: 399990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h53/84537057607710.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h74/hd5/84537057673246.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h9d/84537057738782.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h5b/84537057935390.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-wi-fi-bezhevyi-107379189/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Планшет Lenovo Tab M10 Plus 64Gb',
      description: '10.6" IPS, 2000x1200, MediaTek Helio P22T, память 64 ГБ, поддержка карт памяти, камера 8 Мп, серый.',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h2e/79486075404318.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h26/79486075928606.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/h42/79486079565854.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h8e/79486079827998.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-64gb-seryi-101483733/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Планшет Huawei MatePad 11 128Gb',
      description: '10.95" IPS, 2560x1600, Snapdragon 865, память 128 ГБ, поддержка стилуса, камера 13 Мп, серый.',
      price: 199990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hb7/86746842726430.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6a/hfc/86746842923038.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-128gb-seryi-103509051/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Планшет Realme Pad Mini 32Gb',
      description: '8.7" IPS, 1340x800, Unisoc T616, память 32 ГБ, поддержка карт памяти, камера 5 Мп, синий.',
      price: 49990,
      rating: 4.5,
      image: 'https://c.dns-shop.kz/thumb/st4/fit/wm/0/0/3598128579e99f864fc20a560c687965/9bb8565fb7fc5d73aeef445d414e1dfb623901514071eacd0cfe9ccef28392fe.jpg.webp',
      images: [
        'https://c.dns-shop.kz/thumb/st4/fit/wm/0/0/27e17cd600e60b90f2adc3cf05e714cc/b69994943626cec35079933ead3169b08b83f298174bce9b44ae25f7ef7dfde6.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/3a772df37415a7d7801db4af7e0bd040/779f04f169a94f6c5f10180dbba47c8e82218a1557335fd02c0d87d20f501e3a.jpg.webp',
        'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/d765089ef5b285a1ce0b7262fc57a45e/be4dfa00d34cf8e56e5541849e1582a33a6ac9bfce0e2543bd22334e70d58707.jpg.webp'
      ],
      link: 'https://kaspi.kz/shop/p/realme-pad-mini-32gb-goluboi-101952288/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}