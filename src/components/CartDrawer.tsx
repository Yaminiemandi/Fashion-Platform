import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, Trash2, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onProceedToCheckout: (appliedDiscount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscountRate, setPromoDiscountRate] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = rawSubtotal * promoDiscountRate;
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 500;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold || items.length === 0;
  const shippingCost = qualifiesForFreeShipping ? 0 : 45;
  const estimatedTax = subtotal * 0.08;
  const grandTotal = subtotal + shippingCost + estimatedTax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess(false);

    const clean = promoCode.trim().toUpperCase();
    if (clean === 'MAISON10' || clean === 'WELCOME10') {
      setPromoDiscountRate(0.1);
      setPromoSuccess(true);
    } else if (clean === 'LUXE15' || clean === 'ATELIER15') {
      setPromoDiscountRate(0.15);
      setPromoSuccess(true);
    } else {
      setPromoError('Invalid code. Try "LUXE15" or "MAISON10"');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-serif-title text-2xl text-stone-950">Your Shopping Bag</h2>
            <span className="text-xs text-stone-500 tabular-nums">({items.reduce((s, i) => s + i.quantity, 0)})</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-stone-50 px-6 py-3 border-b border-stone-200">
          <div className="flex items-center justify-between text-xs text-stone-700 mb-1.5 font-medium">
            <span>
              {qualifiesForFreeShipping
                ? 'Complimentary Worldwide White-Glove Delivery unlocked'
                : `Add ${formatPrice(freeShippingThreshold - subtotal, currency)} for Complimentary Delivery`}
            </span>
          </div>
          <div className="w-full h-1 bg-stone-200 overflow-hidden">
            <div
              className="h-full bg-stone-900 transition-all duration-300"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 text-stone-500 space-y-4">
              <span className="font-serif-title text-xl text-stone-800">Your bag is currently empty</span>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed font-light">
                Explore our fine curation of jewellery, chains, handbags, luxury footwear, and bespoke garments.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-stone-950 text-white text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 transition-colors"
              >
                Discover Catalog
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-24 object-cover bg-stone-100 border border-stone-200 shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-stone-500">
                        {item.product.brand}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-xs font-medium text-stone-900 line-clamp-1 mt-0.5">
                      {item.product.name}
                    </h4>

                    <div className="text-[11px] text-stone-500 mt-1 space-x-2">
                      <span>Variant: {item.selectedColor}</span>
                      <span>·</span>
                      <span>Size: {item.selectedSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Stepper */}
                    <div className="flex items-center border border-stone-300">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-stone-700 hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="px-2.5 text-xs font-semibold tabular-nums text-stone-950">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-stone-700 hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-stone-950 tabular-nums">
                      {formatPrice(item.product.price * item.quantity, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-stone-50/50 space-y-4">
            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-stone-400" />
                <input
                  type="text"
                  placeholder="Code (e.g. LUXE15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-white border border-stone-300 pl-8 pr-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-stone-900"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-medium"
              >
                Apply
              </button>
            </form>

            {promoSuccess && (
              <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>{Math.round(promoDiscountRate * 100)}% luxury concierge discount applied</span>
              </p>
            )}
            {promoError && <p className="text-[11px] text-rose-600">{promoError}</p>}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-200">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-stone-900">
                  {formatPrice(rawSubtotal, currency)}
                </span>
              </div>

              {promoDiscountRate > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Concierge Savings</span>
                  <span className="tabular-nums font-medium">
                    -{formatPrice(discountAmount, currency)}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="tabular-nums font-medium text-stone-900">
                  {qualifiesForFreeShipping ? 'Complimentary' : formatPrice(shippingCost, currency)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated VAT & Duties</span>
                <span className="tabular-nums font-medium text-stone-900">
                  {formatPrice(estimatedTax, currency)}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-200">
                <span>Estimated Total</span>
                <span className="tabular-nums">{formatPrice(grandTotal, currency)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => onProceedToCheckout(promoDiscountRate)}
              className="w-full py-3.5 px-6 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Encrypted 256-Bit Maison Payment Gateway</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
