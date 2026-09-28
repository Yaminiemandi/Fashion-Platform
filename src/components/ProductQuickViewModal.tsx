import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Check } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  currency: Currency;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (p: Product) => void;
  onAddToCart: (p: Product, size: string, color: string, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedImg, setSelectedImg] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || 'Original');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 transition-colors shadow-xs"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Gallery Section */}
        <div className="md:w-1/2 p-6 sm:p-8 bg-stone-50 flex flex-col justify-between">
          <div className="relative aspect-square bg-stone-100 overflow-hidden mb-4 border border-stone-200/60">
            <img
              src={selectedImg}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(img)}
                  className={`w-16 h-16 border shrink-0 overflow-hidden ${
                    selectedImg === img ? 'border-stone-900 ring-1 ring-stone-900' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Maison Guarantees */}
          <div className="mt-6 pt-4 border-t border-stone-200/80 space-y-2 text-[11px] text-stone-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-stone-800 shrink-0" />
              <span>100% Certified Authentic with Maison Certificate</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-3.5 h-3.5 text-stone-800 shrink-0" />
              <span>Complimentary insured shipping & signature on arrival</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-stone-800 shrink-0" />
              <span>30-Day complimentary returns & concierge exchange</span>
            </div>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Metadata */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-2 font-medium">
              <span className="font-semibold text-stone-900">{product.brand}</span>
              <span>·</span>
              <span className="capitalize">{product.department}</span>
              <span>·</span>
              <span className="capitalize">{product.category}</span>
            </div>

            {/* Title */}
            <h2 className="font-serif-title text-2xl sm:text-3xl text-stone-950 font-normal leading-snug mb-3">
              {product.name}
            </h2>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-bold text-stone-950 tabular-nums">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through tabular-nums">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
              <span className="text-xs text-stone-500">Taxes included</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="space-y-3 mb-6 p-3 bg-stone-50 border border-stone-200/80 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Composition:</span>
                <span className="font-medium text-stone-900 text-right">{product.materials}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Craftsmanship:</span>
                <span className="font-medium text-stone-900 text-right">{product.origin}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Item SKU:</span>
                <span className="font-mono text-stone-700 text-right">{product.sku}</span>
              </div>
            </div>

            {/* Color Variant Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                  Select Finish / Color: <span className="font-normal text-stone-500">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1.5 text-xs tracking-wider border transition-all ${
                        selectedColor === c
                          ? 'border-stone-950 bg-stone-950 text-white font-medium'
                          : 'border-stone-200 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Variant Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider text-stone-700 font-semibold mb-2">
                  Select Dimensions / Sizing: <span className="font-normal text-stone-500">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs tracking-wider border transition-all ${
                        selectedSize === s
                          ? 'border-stone-950 bg-stone-950 text-white font-medium'
                          : 'border-stone-200 text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-700">Quantity</span>
              <div className="flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-stone-700 hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-1 text-xs font-semibold tabular-nums text-stone-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                  className="px-3 py-1 text-stone-700 hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <span className="text-[11px] text-stone-500">
                {product.stockQuantity} pieces remaining in atelier
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                disabled={!product.inStock}
                className="flex-1 py-3 px-6 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:bg-stone-300 disabled:cursor-not-allowed cursor-pointer"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added To Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add To Shopping Bag</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 border transition-colors ${
                  isWishlisted
                    ? 'border-rose-300 bg-rose-50 text-rose-600'
                    : 'border-stone-300 text-stone-700 hover:border-stone-950 hover:text-stone-950'
                }`}
                aria-label={isWishlisted ? 'Saved in wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : 'stroke-[1.5]'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
