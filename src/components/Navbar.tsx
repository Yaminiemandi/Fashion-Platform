import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, X, Globe } from 'lucide-react';
import { Department, Currency, ProductCategory } from '../types';
import { CURRENCY_RATES } from '../utils/format';

interface NavbarProps {
  currentDepartment: Department | 'all';
  onSelectDepartment: (dept: Department | 'all') => void;
  onSelectCategory: (cat: ProductCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDepartment,
  onSelectDepartment,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currency,
  onCurrencyChange,
  wishlistCount,
  cartCount,
  onOpenWishlist,
  onOpenCart
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      {/* Top Quiet Announcement Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 text-center tracking-wider font-light flex items-center justify-center gap-3">
        <span>Complimentary Worldwide White-Glove Delivery On Orders Over $500</span>
        <span className="hidden sm:inline opacity-40">|</span>
        <span className="hidden sm:inline">Certified Authenticity Guaranteed</span>
      </div>

      {/* Top Bar Contract: Zone 1 (Brand), Zone 2 (4-6 nav links), Zone 3 (1-2 primary actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onSelectDepartment('all');
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif-title text-2xl sm:text-3xl font-bold tracking-widest text-stone-950 uppercase group-hover:text-stone-700 transition-colors">
            MAISON LUXE
          </span>
          <span className="hidden sm:block text-[10px] tracking-[0.25em] text-stone-500 uppercase -mt-1 font-medium">
            Fine Accessories & Apparel
          </span>
        </button>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-stone-600">
          <button
            onClick={() => onSelectDepartment('all')}
            className={`transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentDepartment === 'all' ? 'border-stone-950 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            All Collections
          </button>
          <button
            onClick={() => onSelectDepartment('women')}
            className={`transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentDepartment === 'women' ? 'border-stone-950 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            Women
          </button>
          <button
            onClick={() => onSelectDepartment('men')}
            className={`transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentDepartment === 'men' ? 'border-stone-950 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            Men
          </button>
          <button
            onClick={() => onSelectDepartment('kids')}
            className={`transition-colors hover:text-stone-950 py-1 border-b-2 ${
              currentDepartment === 'kids' ? 'border-stone-950 text-stone-950 font-semibold' : 'border-transparent'
            }`}
          >
            Kids
          </button>
          <button
            onClick={() => onSelectCategory('chains')}
            className="transition-colors hover:text-stone-950 py-1 border-b-2 border-transparent"
          >
            Chains
          </button>
          <button
            onClick={() => onSelectCategory('handbags')}
            className="transition-colors hover:text-stone-950 py-1 border-b-2 border-transparent"
          >
            Handbags
          </button>
        </nav>

        {/* Zone 3: Actions (Search, Currency, Wishlist, Bag) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger / Input */}
          <div className="relative">
            {showSearchInput ? (
              <div className="flex items-center bg-stone-100 rounded-none border border-stone-300 px-3 py-1.5 w-48 sm:w-64">
                <Search className="w-4 h-4 text-stone-500 shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Search pieces, brands..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent text-xs w-full focus:outline-none text-stone-900 placeholder-stone-400"
                />
                <button
                  onClick={() => {
                    setShowSearchInput(false);
                    onSearchChange('');
                  }}
                  className="text-stone-400 hover:text-stone-700 ml-1"
                  aria-label="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-stone-700 hover:text-stone-950 transition-colors"
                aria-label="Open search bar"
                title="Search"
              >
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>
            )}
          </div>

          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center gap-1 p-2 text-xs font-medium tracking-wider text-stone-700 hover:text-stone-950 transition-colors"
              aria-label="Change currency"
            >
              <Globe className="w-4 h-4 stroke-[1.5]" />
              <span className="hidden sm:inline">{currency}</span>
            </button>
            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-stone-200 shadow-xl py-1 z-50">
                {(['USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      onCurrencyChange(cur);
                      setShowCurrencyDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs tracking-wider transition-colors ${
                      currency === cur ? 'bg-stone-100 font-semibold text-stone-950' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {CURRENCY_RATES[cur].label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-stone-700 hover:text-stone-950 transition-colors"
            aria-label="Wishlist"
            title="Saved pieces"
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-stone-900 text-white text-[10px] font-medium flex items-center justify-center rounded-full tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white px-3.5 py-2 transition-all focus:outline-none"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline">Bag</span>
            <span className="text-xs font-semibold tabular-nums px-1.5 py-0.5 bg-stone-800 text-stone-200 rounded text-[11px]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Department Navigation Bar */}
      <div className="lg:hidden border-t border-stone-200 bg-stone-50/80 px-4 py-2 flex items-center justify-between text-xs uppercase tracking-wider overflow-x-auto gap-4">
        <button
          onClick={() => onSelectDepartment('all')}
          className={`whitespace-nowrap py-1 ${
            currentDepartment === 'all' ? 'text-stone-950 font-bold border-b border-stone-950' : 'text-stone-600'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onSelectDepartment('women')}
          className={`whitespace-nowrap py-1 ${
            currentDepartment === 'women' ? 'text-stone-950 font-bold border-b border-stone-950' : 'text-stone-600'
          }`}
        >
          Women
        </button>
        <button
          onClick={() => onSelectDepartment('men')}
          className={`whitespace-nowrap py-1 ${
            currentDepartment === 'men' ? 'text-stone-950 font-bold border-b border-stone-950' : 'text-stone-600'
          }`}
        >
          Men
        </button>
        <button
          onClick={() => onSelectDepartment('kids')}
          className={`whitespace-nowrap py-1 ${
            currentDepartment === 'kids' ? 'text-stone-950 font-bold border-b border-stone-950' : 'text-stone-600'
          }`}
        >
          Kids
        </button>
      </div>
    </header>
  );
};
