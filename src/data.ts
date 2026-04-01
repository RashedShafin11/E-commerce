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

// Helper to generate products for demo purposes
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const categories = CATEGORIES.map(c => c.name);
  
  const categoryData: Record<string, { prefix: string[], minPrice: number, maxPrice: number, img: string }> = {
    'Electronic Devices': { prefix: ['Pro Phone', 'Ultra Tablet', 'ZenBook', 'Gaming PC'], minPrice: 400, maxPrice: 2500, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
    'Electronic Accessories': { prefix: ['Wireless Pods', 'Mechanical KB', 'Gaming Mouse', 'PowerBank'], minPrice: 20, maxPrice: 200, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    'TV & Home Appliances': { prefix: ['OLED TV', 'Smart Fridge', 'Air Purifier', 'Washer'], minPrice: 300, maxPrice: 3000, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1' },
    'Health & Beauty': { prefix: ['Face Cream', 'Matte Lipstick', 'Hair Dryer', 'Perfume'], minPrice: 10, maxPrice: 150, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9' },
    'Babies & Toys': { prefix: ['Action Figure', 'Baby Stroller', 'Building Blocks', 'Soft Toy'], minPrice: 15, maxPrice: 400, img: 'https://images.unsplash.com/photo-1532330393533-443990a51d10' },
    'Groceries & Pets': { prefix: ['Organic Coffee', 'Dog Food', 'Honey Jar', 'Whole Grain'], minPrice: 5, maxPrice: 80, img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
    'Home & Lifestyle': { prefix: ['Velvet Sofa', 'Dining Table', 'Modern Lamp', 'Cotton Sheets'], minPrice: 50, maxPrice: 1200, img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f' },
    'Women\'s Fashion': { prefix: ['Summer Dress', 'Leather Bag', 'Silk Scarf', 'Heels'], minPrice: 30, maxPrice: 600, img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5' },
    'Men\'s Fashion': { prefix: ['Casual Shirt', 'Smart Watch', 'Running Shoes', 'Wallets'], minPrice: 25, maxPrice: 500, img: 'https://images.unsplash.com/photo-1516257984877-a03a219c99d4' },
    'Sports & Outdoor': { prefix: ['Mountain Bike', 'Camping Tent', 'Yoga Mat', 'Dumbbells'], minPrice: 20, maxPrice: 1500, img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' },
  };

  let id = 1;
  categories.forEach(cat => {
    const data = categoryData[cat];
    for (let i = 1; i <= 25; i++) {
      const price = Math.floor(Math.random() * (data.maxPrice - data.minPrice) + data.minPrice);
      products.push({
        id: id++,
        title: `${data.prefix[i % 4]} ${i}`,
        category: cat,
        currentPrice: price,
        originalPrice: Math.floor(price * 1.3),
        rating: Number((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
        reviews: Math.floor(Math.random() * 500),
        image: `${data.img}?auto=format&fit=crop&q=80&w=400&sig=${id}`,
        description: `This high-quality ${data.prefix[i % 4]} from the ${cat} category offers exceptional performance and style. Perfect for everyday use.`,
        stock: Math.floor(Math.random() * 100),
      });
    }
  });

  return products;
};

export const PRODUCTS: Product[] = generateProducts();

export const BRANDS: Brand[] = [
  { id: 1, name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
  { id: 2, name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  { id: 3, name: 'Sony', logo: 'https://logo.clearbit.com/sony.com' },
  { id: 4, name: 'Nike', logo: 'https://logo.clearbit.com/nike.com' },
  { id: 5, name: 'Adidas', logo: 'https://logo.clearbit.com/adidas.com' },
  { id: 6, name: 'Dell', logo: 'https://logo.clearbit.com/dell.com' },
];
