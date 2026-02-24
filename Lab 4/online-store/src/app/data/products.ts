import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: '6.1" Super Retina XDR, OLED, 2556x1179, iOS, A16 Bionic, память 128 ГБ, камера 48 Мп, аккумулятор 3349 мА·ч, влагозащита IP68.',
    price: 429990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137883/'
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 M1 2020',
    description: '13.3" Retina, 2560x1600, Apple M1, RAM 8 ГБ, SSD 256 ГБ, macOS, цвет серый космос.',
    price: 339990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/'
  },
  {
    id: 3,
    name: 'Наушники Apple AirPods Pro 2',
    description: 'беспроводные наушники с активным шумоподавлением, Bluetooth 5.3, влагозащита IP54, чехол с динамиком и поддержкой MagSafe.',
    price: 109990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362783/'
  },
  {
    id: 4,
    name: 'Фотоаппарат Canon EOS 2000D Kit',
    description: 'зеркальный, 24.1 Мп, байонет Canon EF-S, поддержка карт SD/SDHC/SDXC, Wi-Fi, съемка видео Full HD.',
    price: 159990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h41/63783551434782.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h53/ha7/63783552811038.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h20/63783552417822.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/h4f/63783553269790.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/canon-eos-2000d-kit-18-55-iii-chernyi-100160364/'
  },
  {
    id: 5,
    name: 'Игровая приставка Sony PlayStation 5 Slim',
    description: 'цифровое издание, SSD 1TB, поддержка 8K, в комплекте геймпад DualSense, цвет белый.',
    price: 249990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-tsifrovaja-versija-belyi-114245643/'
  },
  {
    id: 6,
    name: 'Стиральная машина LG F2J3HS0W',
    description: 'отдельно стоящая, загрузка до 6 кг, обороты до 1200 об/мин, класс энергопотребления A+++, белый.',
    price: 159990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pc1/46744877.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7e/ha9/85730139766814.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h5a/h93/85730139799582.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h5b/h2a/85730139832350.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/lg-f2j3hs0w-belyi-3601269/'
  },
  {
    id: 7,
    name: 'Пылесос Dyson V11 Absolute',
    description: 'беспроводной, циклонный, мощность всасывания до 185 Вт, время работы до 60 мин, в комплекте 7 насадок.',
    price: 289990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/hb3/63894519611422.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he6/hbc/63894521413662.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h4c/h38/63894522789918.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/hb3/63894519611422.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-v11-absolute-461782/'
  },
  {
    id: 8,
    name: 'Кофемашина DeLonghi ECAM 22.110.B',
    description: 'автоматическая, для молотого кофе и зерен, давление 15 бар, объем резервуара для воды 1.8 л, черный.',
    price: 229990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h9e/85364032339998.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h37/h12/85364032405534.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p91/pa8/71964789.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p25/pa6/71964790.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/delonghi-ecam-22-110-b-chernyi-100098267/'
  },
  {
    id: 9,
    name: 'Смарт-часы Samsung Galaxy Watch6 44mm',
    description: 'черный, 1.5" Super AMOLED, Bluetooth, NFC, GPS, корпус из алюминия, ремешок из силикона.',
    price: 119990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb6/hc3/82569351299102.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/ha5/h47/82569351364638.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h76/h31/82569351266334.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44mm-chernyi-109309038/'
  },
  {
    id: 10,
    name: 'Телевизор LG 55NANO766QA',
    description: '55" NanoCell, 4K UHD, HDR, частота 50 Гц, Smart TV webOS, процессор α5 Gen5, черный.',
    price: 299990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/hee/86373103960094.jpg?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf0/hee/86373103960094.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h02/hb4/86373103992862.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h17/hbe/86373104025630.jpg?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/lg-55nano766qa-chernyi-100423499/'
  }
];