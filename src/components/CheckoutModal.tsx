import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/format';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, ChevronRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  discountRate: number;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  discountRate,
  onClearCart
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@maison.com',
    address: '740 Park Avenue, Apt 11B',
    city: 'New York',
    state: 'NY',
    postalCode: '10021',
    country: 'United States',
    giftPackaging: true,
    cardNumber: '•••• •••• •••• 4242',
    expiry: '09/28',
    cvv: '•••'
  });

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = rawSubtotal * discountRate;
  const subtotal = rawSubtotal - discountAmount;
  const shipping = subtotal >= 500 ? 0 : 45;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + shipping + tax;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
    onClearCart();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl border border-stone-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 p-1"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'confirmation' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto text-stone-900 mb-2">
              <CheckCircle className="w-8 h-8 text-emerald-700" />
            </div>

            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              Maison Vendôme Receipt
            </div>

            <h2 className="font-serif-title text-3xl text-stone-950">
              Order #MLX-8924 Confirmed
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-light">
              Thank you, {formData.firstName}. We have commenced bespoke white-glove packaging for your order. A digital certification dossier and tracking receipt have been dispatched to <span className="font-medium text-stone-900">{formData.email}</span>.
            </p>

            <div className="bg-stone-50 border border-stone-200 p-4 text-left max-w-md mx-auto text-xs space-y-2 mt-6">
              <div className="flex justify-between text-stone-500">
                <span>Shipping Address:</span>
                <span className="font-medium text-stone-900">{formData.address}, {formData.city}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Estimated Arrival:</span>
                <span className="font-medium text-stone-900">2-3 Business Days (Express)</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Total Settled:</span>
                <span className="font-bold text-stone-950 tabular-nums">{formatPrice(grandTotal, currency)}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                Return to Collections
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 pb-4 border-b border-stone-200">
              <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold">
                Maison Secure Checkout
              </span>
              <h2 className="font-serif-title text-2xl text-stone-950">
                {step === 'details' ? 'Delivery & Recipient Details' : 'Payment Verification'}
              </h2>
            </div>

            {step === 'details' ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep('payment');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Email for Dossier & Tracking
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                    Street Address & Suite
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      State / Region
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs focus:outline-none focus:border-stone-950"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                    <input
                      type="checkbox"
                      checked={formData.giftPackaging}
                      onChange={(e) => setFormData({ ...formData, giftPackaging: e.target.checked })}
                      className="h-4 w-4 text-stone-950 rounded-none border-stone-300"
                    />
                    <span>Include complimentary signature black grosgrain gift packaging and embossed card</span>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                  <div className="text-xs text-stone-600">
                    Total: <span className="font-bold text-stone-950 tabular-nums">{formatPrice(grandTotal, currency)}</span>
                  </div>
                  <button
                    type="submit"
                    className="py-2.5 px-6 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    <span>Proceed To Payment</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <div className="bg-stone-50 border border-stone-200 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-800 font-medium pb-2 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      <span>Credit Card / Maison Concierge Pay</span>
                    </div>
                    <span className="text-[11px] text-emerald-700 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> 256-Bit SSL
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full bg-white border border-stone-300 px-3 py-2 text-xs font-mono focus:outline-none focus:border-stone-950"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                        Expiry
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.expiry}
                        onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3 py-2 text-xs font-mono focus:outline-none focus:border-stone-950"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1">
                        Security Code (CVV)
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="w-full bg-white border border-stone-300 px-3 py-2 text-xs font-mono focus:outline-none focus:border-stone-950"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-3 text-[11px] text-stone-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-stone-900 shrink-0" />
                  <span>Funds are only charged upon confirmation of atelier availability and dispatch.</span>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setStep('details')}
                    className="text-xs text-stone-600 hover:text-stone-950 underline"
                  >
                    Back to Address
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-8 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-widest transition-colors"
                  >
                    Authorize {formatPrice(grandTotal, currency)}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
