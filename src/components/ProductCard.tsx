import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { Heart, Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (p: Product) => void;
  onQuickView: (p: Product) => void;
  onAddToCart: (p: Product, size?: string, color?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart
}) => {
  const [imgError, setImgError] = useState(false);
  const [isAddedRecently, setIsAddedRecently] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes[0] || 'Standard', product.colors[0] || 'Default');
    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  return (
    <article
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col bg-white border border-stone-200/80 hover:border-stone-400/90 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Visual Image Container (65-75% height) */}
      <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-100 text-stone-400 text-center">
            <span className="font-serif-title text-xl text-stone-700 tracking-wider mb-1">{product.brand}</span>
            <span className="text-xs uppercase tracking-widest text-stone-500">{product.category}</span>
          </div>
        )}

        {/* Hover Quick Action Buttons Overlay */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-sm ${
              isWishlisted
                ? 'bg-rose-50 text-rose-600'
                : 'bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-white'
            }`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600' : 'stroke-[1.75]'}`} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2.5 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-sm"
            aria-label="Quick view product details"
            title="Quick view"
          >
            <Eye className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

        {/* Quiet Subtle Text Tag (e.g. New or Best Seller - clean unboxed) */}
        {(product.isNew || product.isBestSeller) && (
          <div className="absolute top-3 left-3 bg-stone-950/85 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.isNew ? 'New Arrival' : 'Bestseller'}
          </div>
        )}

        {/* Bottom Quick-Add Bar on hover */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-stone-950/70 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between gap-2">
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className="w-full py-2 px-3 bg-white text-stone-950 hover:bg-stone-100 text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md disabled:bg-stone-300 disabled:cursor-not-allowed"
          >
            {isAddedRecently ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Added to Bag</span>
              </>
            ) : product.inStock ? (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            ) : (
              <span>Out of Stock</span>
            )}
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Clean Unboxed Metadata with · separator */}
          <div className="flex items-center gap-1.5 text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 font-medium truncate">
            <span className="text-stone-900 font-semibold">{product.brand}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="capitalize">{product.department}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="capitalize">{product.category}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-normal text-stone-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-stone-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price & Availability Row */}
        <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-semibold text-stone-950 tabular-nums tracking-tight">
              {formatPrice(product.price, currency)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through tabular-nums">
                {formatPrice(product.originalPrice, currency)}
              </span>
            )}
          </div>

          <span className="text-[11px] text-stone-500 tracking-wider">
            {product.inStock ? (
              <span className="text-emerald-700 font-medium">In Stock</span>
            ) : (
              <span className="text-rose-700 font-medium">Waitlist</span>
            )}
          </span>
        </div>
      </div>
    </article>
  );
};
