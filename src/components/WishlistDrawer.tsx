import React from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, Trash2, ShoppingBag } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  currency: Currency;
  onRemoveFromWishlist: (p: Product) => void;
  onMoveToCart: (p: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onRemoveFromWishlist,
  onMoveToCart
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-serif-title text-2xl text-stone-950">Saved Pieces</h2>
            <span className="text-xs text-stone-500 tabular-nums">({items.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-stone-500 space-y-3">
              <span className="font-serif-title text-xl text-stone-800">No saved pieces yet</span>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed font-light">
                Save jewellery, footwear, chains, or handbags that capture your eye to review anytime.
              </p>
            </div>
          ) : (
            items.map((prod) => (
              <div key={prod.id} className="py-4 first:pt-0 flex gap-4">
                <img
                  src={prod.image}
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-24 object-cover bg-stone-100 border border-stone-200 shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500">
                        {prod.brand}
                      </span>
                      <button
                        onClick={() => onRemoveFromWishlist(prod)}
                        className="text-stone-400 hover:text-rose-600 transition-colors"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-xs font-medium text-stone-900 line-clamp-1 mt-0.5">
                      {prod.name}
                    </h4>

                    <span className="text-xs font-semibold text-stone-950 tabular-nums mt-1 block">
                      {formatPrice(prod.price, currency)}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onMoveToCart(prod);
                      onRemoveFromWishlist(prod);
                    }}
                    className="mt-3 w-full py-1.5 px-3 bg-stone-950 hover:bg-stone-800 text-white text-[11px] font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-stone-200 bg-stone-50/50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-medium uppercase tracking-wider transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};
