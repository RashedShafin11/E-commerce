import { Product, Category, Brand } from './types';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Electronic Devices', icon: 'Smartphone', subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Monitors'] },
  { id: 2, name: 'Electronic Accessories', icon: 'Headphones', subcategories: ['Headphones', 'Keyboards', 'Mice', 'Chargers'] },
  { id: 3, name: 'TV & Home Appliances', icon: 'Tv', subcategories: ['Televisions', 'Refrigerators', 'Washing Machines', 'Air Conditioners'] },
  { id: 4, name: 'Health & Beauty', icon: 'Heart', subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrance'] },
  { id: 5, name: 'Babies & Toys', icon: 'Baby', subcategories: ['Baby Food', 'Diapers', 'Toys', 'Strollers'] },
  { id: 6, name: 'Groceries & Pets', icon: 'ShoppingBag', subcategories: ['Canned Goods', 'Pet Food', 'Beverages', 'Bakery'] },
  { id: 7, name: 'Home & Lifestyle', icon: 'Home', subcategories: ['Furniture', 'Bedding', 'Kitchenware', 'Home Decor'] },
  { id: 8, name: 'Women\'s Fashion', icon: 'Shirt', subcategories: ['Clothing', 'Shoes', 'Bags', 'Jewelry'] },
  { id: 9, name: 'Men\'s Fashion', icon: 'User', subcategories: ['Clothing', 'Shoes', 'Watches', 'Accessories'] },
  { id: 10, name: 'Sports & Outdoor', icon: 'Bike', subcategories: ['Camping', 'Exercise', 'Cycling', 'Team Sports'] },
];

export const PRODUCTS: Product[] = [
  { id: 1, title: 'Wireless Noise Cancelling Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', rating: 4.8, currentPrice: 249, originalPrice: 349, isFlashSale: true },
  { id: 2, title: 'Smart Watch Series 8', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400', rating: 4.5, currentPrice: 199, originalPrice: 299, isFlashSale: true },
  { id: 3, title: 'Ultra HD 4K Camera', image: 'https://images.unsplash.com/photo-1526170315873-3a5616282a03?auto=format&fit=crop&q=80&w=400', rating: 4.7, currentPrice: 599, originalPrice: 749, isFlashSale: false },
  { id: 4, title: 'Gaming Laptop Pro 15', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400', rating: 4.9, currentPrice: 1299, originalPrice: 1599, isFlashSale: true },
  { id: 5, title: 'Mechanical Keyboard RGB', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400', rating: 4.6, currentPrice: 89, originalPrice: 129, isFlashSale: false },
  { id: 6, title: 'Ergonomic Office Chair', image: 'https://images.unsplash.com/photo-1505797149-43b0ad766207?auto=format&fit=crop&q=80&w=400', rating: 4.4, currentPrice: 189, originalPrice: 249, isFlashSale: false },
  { id: 7, title: 'Wireless Gaming Mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400', rating: 4.5, currentPrice: 59, originalPrice: 79, isFlashSale: true },
  { id: 8, title: 'Bluetooth Speaker Portable', image: 'https://images.unsplash.com/photo-1608156639585-342034e8b980?auto=format&fit=crop&q=80&w=400', rating: 4.3, currentPrice: 45, originalPrice: 65, isFlashSale: true },
];

export const BRANDS: Brand[] = [
  { id: 1, name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
  { id: 2, name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  { id: 3, name: 'Sony', logo: 'https://logo.clearbit.com/sony.com' },
  { id: 4, name: 'Nike', logo: 'https://logo.clearbit.com/nike.com' },
  { id: 5, name: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com' },
  { id: 6, name: 'Dell', logo: 'https://logo.clearbit.com/dell.com' },
];
