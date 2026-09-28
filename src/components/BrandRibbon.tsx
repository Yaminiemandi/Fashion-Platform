import React from 'react';
import { BRANDS } from '../data/products';

interface BrandRibbonProps {
  selectedBrands: string[];
  onSelectBrand: (brand: string) => void;
}

export const BrandRibbon: React.FC<BrandRibbonProps> = ({ selectedBrands, onSelectBrand }) => {
  return (
    <div className="bg-white border-b border-stone-200 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
            Featured Maisons & Ateliers
          </span>
          <span className="text-[11px] text-stone-400">Click to filter collection</span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {BRANDS.map((brand) => {
            const isSelected = selectedBrands.includes(brand);
            return (
              <button
                key={brand}
                onClick={() => onSelectBrand(brand)}
                className={`shrink-0 px-4 py-2 border text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-stone-950 bg-stone-950 text-white font-semibold shadow-xs'
                    : 'border-stone-200 text-stone-700 bg-stone-50/60 hover:bg-stone-100 hover:text-stone-950 hover:border-stone-300'
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
