export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  currentPrice: number;
  originalPrice: number;
  isFlashSale?: boolean;
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
