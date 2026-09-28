export type ProductCategory = 'clothing' | 'shoes' | 'jewellery' | 'chains' | 'handbags';

export type Department = 'men' | 'women' | 'kids';

export type Currency = 'USD' | 'EUR' | 'GBP';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  department: Department;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  materials: string;
  origin: string;
  image: string;
  gallery: string[];
  inStock: boolean;
  stockQuantity: number;
  sku: string;
  colors: string[];
  sizes: string[];
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  id: string; // unique item id based on product.id + size + color
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface FilterState {
  department: Department | 'all';
  category: ProductCategory | 'all';
  brands: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}
