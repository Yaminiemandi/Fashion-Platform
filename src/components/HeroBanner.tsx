import React from 'react';
import { HERO_IMAGE } from '../data/products';
import { ProductCategory, Department } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onSelectDepartment: (dept: Department) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onSelectCategory, onSelectDepartment }) => {
  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden border-b border-stone-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center z-10">
          <div className="flex items-center gap-2 text-stone-400 text-xs tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
            <span>Maison Vendôme Autumn Curation</span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6 text-balance">
            Exquisite Accessories, Fine Chains & Designer Craft
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl font-light mb-8">
            Explore curated high-jewellery, iconic handbags, handcrafted Italian shoes, and bespoke tailored apparel for women, men, and children — certified by legendary European and global fashion houses.
          </p>

          {/* Quick Category Route Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs tracking-wider">
            <button
              onClick={() => onSelectCategory('chains')}
              className="px-4 py-2.5 bg-white text-stone-950 font-medium hover:bg-stone-200 transition-colors uppercase flex items-center gap-1.5"
            >
              Fine Chains <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectCategory('handbags')}
              className="px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors uppercase"
            >
              Handbags
            </button>
            <button
              onClick={() => onSelectCategory('jewellery')}
              className="px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors uppercase"
            >
              Jewellery
            </button>
            <button
              onClick={() => onSelectCategory('shoes')}
              className="px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors uppercase"
            >
              Shoes
            </button>
            <button
              onClick={() => onSelectCategory('clothing')}
              className="px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors uppercase"
            >
              Clothing
            </button>
          </div>

          {/* Department Quick Filter */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-6 text-xs text-stone-400">
            <span className="uppercase tracking-wider font-medium text-stone-500">Shop by Wardrobe:</span>
            <button
              onClick={() => onSelectDepartment('women')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Women's Collection
            </button>
            <button
              onClick={() => onSelectDepartment('men')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Men's Collection
            </button>
            <button
              onClick={() => onSelectDepartment('kids')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Kids & Juniors
            </button>
          </div>
        </div>

        {/* Right Hero Image Viewport */}
        <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-stone-950">
          <img
            src={HERO_IMAGE}
            alt="Maison Luxe Fine Accessories and Apparel Showcase"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            onError={(e) => {
              // Fallback styled state
              const target = e.currentTarget;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20 lg:bg-gradient-to-r lg:from-stone-900 lg:via-transparent lg:to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 bg-stone-950/70 backdrop-blur-sm px-3 py-1.5 border border-stone-800 text-[11px] text-stone-300 tracking-widest uppercase">
            Collection 2026/27
          </div>
        </div>
      </div>
    </section>
  );
};
