export interface Product {
  id: number;
  title: string;
  image: string;
  images?: string[];
  rating: number;
  reviews?: number;
  currentPrice: number;
  originalPrice: number;
  isFlashSale?: boolean;
  description: string;
  specs?: Record<string, string>;
  stock: number;
  category: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  subcategories?: string[];
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface CartItem extends Product {
  quantity: number;
}
