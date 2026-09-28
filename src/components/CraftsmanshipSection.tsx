import React from 'react';
import { JEWELLERY_IMAGE, HANDBAG_IMAGE, SHOES_IMAGE } from '../data/products';
import { ProductCategory } from '../types';
import { ShieldCheck, Gem, Sparkles } from 'lucide-react';

interface CraftsmanshipSectionProps {
  onSelectCategory: (cat: ProductCategory) => void;
}

export const CraftsmanshipSection: React.FC<CraftsmanshipSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="bg-stone-900 text-stone-100 py-16 sm:py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-stone-400 text-xs tracking-[0.25em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400/80" />
            <span>Artisan Standards</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-white font-normal mb-4">
            Curated For Longevity & Heritage
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
            Every item curated within Maison Luxe is inspected by certified appraisers. From 18k solid gold chains to hand-buffed leather and tailored outerwear, we honor true craftsmanship.
          </p>
        </div>

        {/* 3 Showcase Pillars with Generated Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Fine Chains & High Jewellery */}
          <div
            onClick={() => onSelectCategory('chains')}
            className="group cursor-pointer bg-stone-950 border border-stone-800 p-4 transition-all hover:border-stone-600"
          >
            <div className="aspect-[4/3] bg-stone-900 overflow-hidden mb-4 relative">
              <img
                src={JEWELLERY_IMAGE}
                alt="18K Solid Gold Chains and High Jewellery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-stone-400 mb-1">
              <span>Category</span>
              <span className="text-amber-400/90 font-medium">Fine Metals</span>
            </div>
            <h3 className="font-serif-title text-xl text-white mb-2">Chains & High Jewellery</h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Solid 18K yellow, white, and rose gold Cuban chains, graduated links, and pavé diamond statement rings.
            </p>
          </div>

          {/* Pillar 2: Haute Handbags */}
          <div
            onClick={() => onSelectCategory('handbags')}
            className="group cursor-pointer bg-stone-950 border border-stone-800 p-4 transition-all hover:border-stone-600"
          >
            <div className="aspect-[4/3] bg-stone-900 overflow-hidden mb-4 relative">
              <img
                src={HANDBAG_IMAGE}
                alt="Haute Leather Handbags and Totes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-stone-400 mb-1">
              <span>Category</span>
              <span className="text-amber-400/90 font-medium">Tanned Nappa</span>
            </div>
            <h3 className="font-serif-title text-xl text-white mb-2">Haute Handbags & Totes</h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Intrecciato braided nappa, Epsom calfskin, and architectural satchels handcrafted in Italian ateliers.
            </p>
          </div>

          {/* Pillar 3: Handcrafted Footwear */}
          <div
            onClick={() => onSelectCategory('shoes')}
            className="group cursor-pointer bg-stone-950 border border-stone-800 p-4 transition-all hover:border-stone-600"
          >
            <div className="aspect-[4/3] bg-stone-900 overflow-hidden mb-4 relative">
              <img
                src={SHOES_IMAGE}
                alt="Handcrafted Luxury Footwear"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-stone-400 mb-1">
              <span>Category</span>
              <span className="text-amber-400/90 font-medium">Italian Footwear</span>
            </div>
            <h3 className="font-serif-title text-xl text-white mb-2">Footwear & Loafers</h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Water-repellent suede Summer Walk loafers, spazzolato lug derbies, and signature evening pumps.
            </p>
          </div>
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-stone-800 text-center">
          <div className="p-4">
            <ShieldCheck className="w-6 h-6 text-stone-300 mx-auto mb-3" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-1.5">
              Certified Authenticity
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Multi-point physical inspection and serial validation with certified maison cards.
            </p>
          </div>
          <div className="p-4">
            <Gem className="w-6 h-6 text-stone-300 mx-auto mb-3" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-1.5">
              Ethical Provenance
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Responsible Jewellery Council (RJC) certified gold, natural diamonds, and sustainable tanneries.
            </p>
          </div>
          <div className="p-4">
            <Sparkles className="w-6 h-6 text-stone-300 mx-auto mb-3" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white mb-1.5">
              Concierge Care & Sizing
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Dedicated personal shoppers for custom chain sizing, leather care, and bespoke wardrobe requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
