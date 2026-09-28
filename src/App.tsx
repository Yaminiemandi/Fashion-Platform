/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, FilterState, Currency, ProductCategory, Department } from './types';
import { PRODUCTS, CATEGORIES, DEPARTMENTS } from './data/products';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BrandRibbon } from './components/BrandRibbon';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductCard } from './components/ProductCard';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { Footer } from './components/Footer';
import { SlidersHorizontal, ArrowUpDown, X, Grid3X3, LayoutGrid } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  department: 'all',
  category: 'all',
  brands: [],
  priceRange: [0, 15000],
  inStockOnly: false,
  searchQuery: '',
  sortBy: 'featured'
};

export default function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [gridCols, setGridCols] = useState<3 | 4>(3);

  // Cart state with persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('maison_luxe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state with persistence
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('maison_luxe_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('maison_luxe_cart', JSON.stringify(cart));
    } catch {
      // ignore in sandboxes
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('maison_luxe_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Filter handlers
  const handleUpdateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const handleSelectDepartment = (dept: Department | 'all') => {
    setFilters((prev) => ({ ...prev, department: dept }));
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: ProductCategory | 'all') => {
    setFilters((prev) => ({ ...prev, category: cat }));
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandRibbonToggle = (brand: string) => {
    setFilters((prev) => {
      const exists = prev.brands.includes(brand);
      return {
        ...prev,
        brands: exists ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand]
      };
    });
    const catalogElem = document.getElementById('catalog-section');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Wishlist logic
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Cart logic
  const handleAddToCart = (
    product: Product,
    selectedSize: string = product.sizes[0] || 'Standard',
    selectedColor: string = product.colors[0] || 'Original',
    quantity: number = 1
  ) => {
    setCart((prev) => {
      const uniqueId = `${product.id}-${selectedSize}-${selectedColor}`;
      const existing = prev.find((item) => item.id === uniqueId);
      if (existing) {
        return prev.map((item) =>
          item.id === uniqueId ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [
          ...prev,
          {
            id: uniqueId,
            product,
            quantity,
            selectedSize,
            selectedColor
          }
        ];
      }
    });
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = (discountRate: number) => {
    setAppliedDiscount(discountRate);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Department
      if (filters.department !== 'all' && item.department !== filters.department) {
        return false;
      }
      // Category
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }
      // Brand
      if (filters.brands.length > 0 && !filters.brands.includes(item.brand)) {
        return false;
      }
      // Price range
      if (item.price < filters.priceRange[0] || item.price > filters.priceRange[1]) {
        return false;
      }
      // In stock
      if (filters.inStockOnly && !item.inStock) {
        return false;
      }
      // Search
      if (filters.searchQuery.trim().length > 0) {
        const q = filters.searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchBrand = item.brand.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        const matchDept = item.department.toLowerCase().includes(q);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchDesc && !matchCat && !matchDept && !matchTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      if (filters.sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      // 'featured'
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [filters]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900 selection:bg-stone-800 selection:text-white">
      {/* Top Header Navbar */}
      <Navbar
        currentDepartment={filters.department}
        onSelectDepartment={handleSelectDepartment}
        onSelectCategory={handleSelectCategory}
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => handleUpdateFilters({ searchQuery: q })}
        currency={currency}
        onCurrencyChange={setCurrency}
        wishlistCount={wishlist.length}
        cartCount={totalCartCount}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Campaign Banner */}
      <HeroBanner
        onSelectCategory={handleSelectCategory}
        onSelectDepartment={handleSelectDepartment}
      />

      {/* Featured Luxury Brands Ribbon */}
      <BrandRibbon
        selectedBrands={filters.brands}
        onSelectBrand={handleBrandRibbonToggle}
      />

      {/* Main Catalog Viewport */}
      <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Section Header & Active Department/Category Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
              <span>{filters.department === 'all' ? 'All Wardrobes' : `${filters.department}'s Collection`}</span>
              <span aria-hidden="true">/</span>
              <span>{filters.category === 'all' ? 'All Categories' : filters.category}</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-stone-950 font-normal">
              {filters.category === 'all' ? 'Curated Masterpieces' : CATEGORIES.find(c => c.id === filters.category)?.label}
            </h2>
          </div>

          {/* Catalog Controls: Sort & Grid Layout */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Drawer Trigger */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden px-3.5 py-2 border border-stone-300 bg-white text-stone-800 text-xs font-medium uppercase tracking-wider flex items-center gap-2 hover:bg-stone-50 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {filters.brands.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-stone-900 text-white text-[10px] flex items-center justify-center">
                  {filters.brands.length}
                </span>
              )}
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 bg-white border border-stone-300 px-3 py-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
              <select
                value={filters.sortBy}
                onChange={(e) => handleUpdateFilters({ sortBy: e.target.value as FilterState['sortBy'] })}
                className="bg-transparent text-xs text-stone-900 focus:outline-none cursor-pointer uppercase tracking-wider"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>

            {/* Desktop Grid Switcher */}
            <div className="hidden sm:flex items-center border border-stone-300 bg-white">
              <button
                onClick={() => setGridCols(3)}
                className={`p-2 transition-colors ${gridCols === 3 ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-950'}`}
                title="3 Columns"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-2 transition-colors ${gridCols === 4 ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-950'}`}
                title="4 Columns"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Chips (if any) */}
        {(filters.department !== 'all' ||
          filters.category !== 'all' ||
          filters.brands.length > 0 ||
          filters.inStockOnly ||
          filters.priceRange[0] > 0 ||
          filters.priceRange[1] < 15000 ||
          filters.searchQuery.trim().length > 0) && (
          <div className="py-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-stone-500 uppercase tracking-wider text-[11px] font-medium mr-1">
              Active filters:
            </span>

            {filters.department !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 text-stone-900 capitalize text-xs">
                {filters.department}
                <button onClick={() => handleUpdateFilters({ department: 'all' })} className="hover:text-stone-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 text-stone-900 capitalize text-xs">
                {filters.category}
                <button onClick={() => handleUpdateFilters({ category: 'all' })} className="hover:text-stone-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.brands.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 text-stone-900 text-xs">
                {b}
                <button
                  onClick={() => handleUpdateFilters({ brands: filters.brands.filter((item) => item !== b) })}
                  className="hover:text-stone-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}

            {filters.inStockOnly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 text-stone-900 text-xs">
                In Stock Only
                <button onClick={() => handleUpdateFilters({ inStockOnly: false })} className="hover:text-stone-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 text-stone-900 text-xs">
                "{filters.searchQuery}"
                <button onClick={() => handleUpdateFilters({ searchQuery: '' })} className="hover:text-stone-600">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-stone-500 hover:text-stone-950 underline ml-2 text-xs"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Catalog Body: Left Filter Sidebar + Right Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
          {/* Desktop Left Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleUpdateFilters}
              onResetFilters={handleResetFilters}
              totalFilteredCount={filteredProducts.length}
            />
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-stone-200 p-12 text-center space-y-4">
                <span className="font-serif-title text-2xl text-stone-900 block">
                  No matching pieces found
                </span>
                <p className="text-xs text-stone-500 max-w-sm mx-auto font-light leading-relaxed">
                  We could not find items matching your specific filters. Adjust the department, category, or price range to explore other creations.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridCols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                } gap-6 sm:gap-8`}
              >
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    currency={currency}
                    isWishlisted={wishlist.some((w) => w.id === prod.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onQuickView={(p) => setQuickViewProduct(p)}
                    onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Story & Craftsmanship Section */}
      <CraftsmanshipSection onSelectCategory={handleSelectCategory} />

      {/* Global Luxury Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onSelectDepartment={handleSelectDepartment}
      />

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        currency={currency}
        isWishlisted={quickViewProduct ? wishlist.some((w) => w.id === quickViewProduct.id) : false}
        onClose={() => setQuickViewProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        currency={currency}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={(prod) => handleAddToCart(prod)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currency={currency}
        discountRate={appliedDiscount}
        onClearCart={() => setCart([])}
      />

      {/* Mobile Filters Slide-Over Drawer */}
      {isMobileFiltersOpen && (
        <div
          className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end lg:hidden"
          onClick={() => setIsMobileFiltersOpen(false)}
        >
          <div
            className="w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
                <span className="font-serif-title text-xl text-stone-950">Refine Catalog</span>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-1 text-stone-500 hover:text-stone-950"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <FilterSidebar
                filters={filters}
                onFilterChange={handleUpdateFilters}
                onResetFilters={handleResetFilters}
                totalFilteredCount={filteredProducts.length}
              />
            </div>

            <div className="pt-6 border-t border-stone-200 mt-6">
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full py-3 bg-stone-950 text-white text-xs font-semibold uppercase tracking-widest"
              >
                Apply Filters ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
