import React from 'react';
import { ProductCategory, Department } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onSelectDepartment: (dept: Department) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onSelectDepartment }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif-title text-2xl tracking-widest text-white uppercase block">
              MAISON LUXE
            </span>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm font-light">
              Fine accessories, jewellery, chains, handbags, luxury footwear, and tailored garments curated from global fashion houses.
            </p>
            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <p>Maison Vendôme Concierge: +1 (800) 845-LUXE</p>
              <p>Hours: Monday – Saturday, 9:00 AM – 9:00 PM EST</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Accessories
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <button
                  onClick={() => onSelectCategory('chains')}
                  className="hover:text-white transition-colors"
                >
                  Fine Chains & Links
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('jewellery')}
                  className="hover:text-white transition-colors"
                >
                  High Jewellery & Rings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('handbags')}
                  className="hover:text-white transition-colors"
                >
                  Leather Handbags & Totes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('shoes')}
                  className="hover:text-white transition-colors"
                >
                  Footwear & Loafers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('clothing')}
                  className="hover:text-white transition-colors"
                >
                  Outerwear & Tailored Clothing
                </button>
              </li>
            </ul>
          </div>

          {/* Wardrobes */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <button
                  onClick={() => onSelectDepartment('women')}
                  className="hover:text-white transition-colors"
                >
                  Women's Wardrobe
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDepartment('men')}
                  className="hover:text-white transition-colors"
                >
                  Men's Wardrobe
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDepartment('kids')}
                  className="hover:text-white transition-colors"
                >
                  Kids & Junior Pieces
                </button>
              </li>
              <li>
                <span className="text-stone-500">New Arrivals Autumn 2026</span>
              </li>
              <li>
                <span className="text-stone-500">Maison Archive Pieces</span>
              </li>
            </ul>
          </div>

          {/* Client Care */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">
              Client Concierge
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>
                <span>Complimentary Delivery</span>
              </li>
              <li>
                <span>Certified Authenticity</span>
              </li>
              <li>
                <span>30-Day Concierge Returns</span>
              </li>
              <li>
                <span>Chain & Ring Sizing Guide</span>
              </li>
              <li>
                <span>Leather Restoration Care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} MAISON LUXE. All Rights Reserved. Private Atelier Collection.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Authenticity Protocol</span>
            <span>Global Sourcing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
