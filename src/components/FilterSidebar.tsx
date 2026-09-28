import React, { useState } from 'react';
import { FilterState, ProductCategory, Department } from '../types';
import { BRANDS, CATEGORIES, DEPARTMENTS } from '../data/products';
import { RotateCcw, Check, Search } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

const PRICE_PRESETS: { label: string; range: [number, number] }[] = [
  { label: 'All Prices', range: [0, 15000] },
  { label: 'Under $500', range: [0, 500] },
  { label: '$500 – $1,500', range: [500, 1500] },
  { label: '$1,500 – $3,500', range: [1500, 3500] },
  { label: '$3,500 and Above', range: [3500, 15000] }
];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalFilteredCount
}) => {
  const [brandSearch, setBrandSearch] = useState('');

  const filteredBrands = BRANDS.filter((brand) =>
    brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const toggleBrand = (brand: string) => {
    const isSelected = filters.brands.includes(brand);
    const newBrands = isSelected
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ brands: newBrands });
  };

  const isPresetActive = (range: [number, number]) => {
    return filters.priceRange[0] === range[0] && filters.priceRange[1] === range[1];
  };

  const hasActiveFilters =
    filters.department !== 'all' ||
    filters.category !== 'all' ||
    filters.brands.length > 0 ||
    filters.inStockOnly ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 15000 ||
    filters.searchQuery.trim().length > 0;

  return (
    <aside className="w-full space-y-8 text-stone-900">
      {/* Top Header & Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200">
        <div>
          <h2 className="text-xs uppercase font-bold tracking-widest text-stone-950">
            Refine Catalog
          </h2>
          <span className="text-xs text-stone-500 tabular-nums">
            {totalFilteredCount} {totalFilteredCount === 1 ? 'piece' : 'pieces'} displayed
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-950 transition-colors uppercase tracking-wider"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* 1. Wardrobe / Department Selector */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-3">
          Department
        </h3>
        <div className="space-y-1">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              onClick={() => onFilterChange({ department: dept.id as Department | 'all' })}
              className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                filters.department === dept.id
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
              }`}
            >
              <span>{dept.label}</span>
              {filters.department === dept.id && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Accessory Category Selector */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-3">
          Categories
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onFilterChange({ category: cat.id as ProductCategory | 'all' })}
              className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                filters.category === cat.id
                  ? 'bg-stone-900 text-white font-medium'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
              }`}
            >
              <span>{cat.label}</span>
              {filters.category === cat.id && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Price Preset Ranges */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950 mb-3">
          Price Range
        </h3>
        <div className="space-y-1">
          {PRICE_PRESETS.map((preset) => {
            const active = isPresetActive(preset.range);
            return (
              <button
                key={preset.label}
                onClick={() => onFilterChange({ priceRange: preset.range })}
                className={`w-full text-left px-3 py-2 text-xs transition-colors flex items-center justify-between ${
                  active
                    ? 'bg-stone-100 text-stone-950 font-semibold'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span>{preset.label}</span>
                {active && <div className="w-1.5 h-1.5 rounded-full bg-stone-950" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Luxury Brands Multi-select */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-950">
            Brand House
          </h3>
          {filters.brands.length > 0 && (
            <button
              onClick={() => onFilterChange({ brands: [] })}
              className="text-[11px] text-stone-500 hover:text-stone-950 underline"
            >
              Clear
            </button>
          )}
        </div>

        {/* Brand Search Input */}
        <div className="flex items-center bg-stone-50 border border-stone-200 px-2.5 py-1.5 mb-2.5">
          <Search className="w-3.5 h-3.5 text-stone-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search brands..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
            className="w-full bg-transparent text-xs text-stone-800 placeholder-stone-400 focus:outline-none"
          />
        </div>

        {/* Scrollable Brands List */}
        <div className="max-h-48 overflow-y-auto space-y-1 pr-1 border-t border-b border-stone-100 py-1">
          {filteredBrands.map((brand) => {
            const checked = filters.brands.includes(brand);
            return (
              <label
                key={brand}
                className="flex items-center gap-2.5 px-2 py-1.5 text-xs text-stone-700 hover:bg-stone-50 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleBrand(brand)}
                  className="rounded-none border-stone-300 text-stone-900 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <span className={checked ? 'font-semibold text-stone-950' : 'text-stone-700'}>
                  {brand}
                </span>
              </label>
            );
          })}
          {filteredBrands.length === 0 && (
            <p className="text-xs text-stone-400 py-2 text-center">No brands found</p>
          )}
        </div>
      </div>

      {/* 5. Availability Switch */}
      <div className="pt-2 border-t border-stone-200">
        <label className="flex items-center justify-between cursor-pointer py-1">
          <span className="text-xs font-medium uppercase tracking-wider text-stone-800">
            In Stock Only
          </span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ inStockOnly: e.target.checked })}
            className="h-4 w-4 rounded-none border-stone-300 text-stone-950 focus:ring-0 cursor-pointer"
          />
        </label>
      </div>
    </aside>
  );
};
