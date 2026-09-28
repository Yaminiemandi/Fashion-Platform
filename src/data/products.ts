import { Product } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_accessories_1790611974835.jpg';
export const JEWELLERY_IMAGE = '/src/assets/images/showcase_jewellery_chains_1790611989981.jpg';
export const HANDBAG_IMAGE = '/src/assets/images/showcase_designer_handbag_1790612005053.jpg';
export const SHOES_IMAGE = '/src/assets/images/showcase_luxury_shoes_1790612018406.jpg';

export const BRANDS = [
  'Cartier',
  'Tiffany & Co.',
  'Bottega Veneta',
  'Saint Laurent',
  'Gucci',
  'Prada',
  'Hermès',
  'Christian Louboutin',
  'Loro Piana',
  'Versace',
  'Balenciaga',
  'Jacquemus',
  'Burberry Kids',
  'Moncler Enfant',
  'Bulgari',
  'Van Cleef & Arpels'
] as const;

export const CATEGORIES = [
  { id: 'all', label: 'All Pieces' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'chains', label: 'Chains' },
  { id: 'handbags', label: 'Handbags' }
] as const;

export const DEPARTMENTS = [
  { id: 'all', label: 'All Departments' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'kids', label: 'Kids' }
] as const;

export const PRODUCTS: Product[] = [
  // --- CHAINS ---
  {
    id: 'prod-chain-01',
    name: '18K Yellow Gold Santos Flat Curb Chain',
    brand: 'Cartier',
    category: 'chains',
    department: 'men',
    price: 3850,
    originalPrice: 4100,
    rating: 4.9,
    reviewsCount: 38,
    description: 'Iconic Santos de Cartier chain necklace in solid 18K yellow gold with visible screw motif accents. Precision hand-assembled links with high-polish mirror finish.',
    materials: '18K Yellow Gold (750/1000)',
    origin: 'Handcrafted in Switzerland',
    image: JEWELLERY_IMAGE,
    gallery: [
      JEWELLERY_IMAGE,
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 4,
    sku: 'CRT-CHN-18K-01',
    colors: ['Yellow Gold', 'White Gold'],
    sizes: ['50 cm / 20 in', '55 cm / 22 in', '60 cm / 24 in'],
    tags: ['Fine Jewellery', '18K Gold', 'Signature'],
    isBestSeller: true
  },
  {
    id: 'prod-chain-02',
    name: 'HardWear Graduated Link Chain Necklace',
    brand: 'Tiffany & Co.',
    category: 'chains',
    department: 'women',
    price: 2400,
    rating: 4.8,
    reviewsCount: 52,
    description: 'Embodying the bold energy of New York City, this graduated link necklace captures industrial elegance with fluid comfort and high-shine sterling silver links.',
    materials: 'Solid Sterling Silver (925)',
    origin: 'Crafted in Italy',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
      JEWELLERY_IMAGE
    ],
    inStock: true,
    stockQuantity: 9,
    sku: 'TIF-HW-CHN-02',
    colors: ['Sterling Silver', '18K Rose Gold'],
    sizes: ['41 cm / 16 in', '46 cm / 18 in'],
    tags: ['HardWear', 'Statement', 'Contemporary'],
    isNew: true
  },
  {
    id: 'prod-chain-03',
    name: 'Medusa Head Pendant & Heavy Rope Chain',
    brand: 'Versace',
    category: 'chains',
    department: 'men',
    price: 975,
    rating: 4.7,
    reviewsCount: 29,
    description: 'Distinctive Greek Key engraved bezel surrounding the three-dimensional Medusa emblem, suspended from a thick diamond-cut rope chain necklace.',
    materials: 'Hypoallergenic Brass with 24K Gold-Tone Finish',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1611591475879-da0066ec9699?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611591475879-da0066ec9699?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 12,
    sku: 'VRS-MED-CHN-03',
    colors: ['Polished Gold', 'Ruthenium Black'],
    sizes: ['55 cm / 22 in'],
    tags: ['Medusa', 'Gold-Tone', 'Runway']
  },
  {
    id: 'prod-chain-04',
    name: 'Kids Teddy Bear Charm Mini Link Chain',
    brand: 'Burberry Kids',
    category: 'chains',
    department: 'kids',
    price: 320,
    rating: 4.9,
    reviewsCount: 16,
    description: 'Charming engraved Thomas Bear motif on an ultra-lightweight, hypoallergenic fine link chain designed specifically for children with safety break-away clasp.',
    materials: 'Rhodium-Plated Brass & Enamel Accent',
    origin: 'Crafted in Italy',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 7,
    sku: 'BRB-KD-CHN-04',
    colors: ['Silver', 'Soft Rose Gold'],
    sizes: ['38 cm / 15 in (Adjustable)'],
    tags: ['Kids Safe', 'Enamel', 'Gift Collection']
  },

  // --- HANDBAGS ---
  {
    id: 'prod-bag-01',
    name: 'Andiamo Intrecciato Leather Tote',
    brand: 'Bottega Veneta',
    category: 'handbags',
    department: 'women',
    price: 4900,
    originalPrice: 5200,
    rating: 5.0,
    reviewsCount: 44,
    description: 'Masterfully woven Intrecciato nappa leather tote featuring a sliding braided strap with a sculpted brass knot ornament. Dual interior compartments with lambskin lining.',
    materials: '100% Lambskin Nappa Leather, Solid Brass Hardware',
    origin: 'Handcrafted in Montebello Vicentino, Italy',
    image: HANDBAG_IMAGE,
    gallery: [
      HANDBAG_IMAGE,
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 3,
    sku: 'BOT-AND-BAG-01',
    colors: ['Fondant Brown', 'Chalk Cream', 'Black Noir', 'Travertine'],
    sizes: ['Medium (32 x 25 x 11 cm)'],
    tags: ['Intrecciato', 'Investment Bag', 'Craftsmanship'],
    isBestSeller: true
  },
  {
    id: 'prod-bag-02',
    name: 'Le Chiquito Noeud Handbag',
    brand: 'Jacquemus',
    category: 'handbags',
    department: 'women',
    price: 920,
    rating: 4.8,
    reviewsCount: 65,
    description: 'The Parisian sensation in smooth calf leather, highlighted by an extendable coiled top handle that can be curled or worn extended on the shoulder.',
    materials: 'Smooth Bovine Leather, Gold-Tone Lettering',
    origin: 'Made in Spain',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
      HANDBAG_IMAGE
    ],
    inStock: true,
    stockQuantity: 11,
    sku: 'JAC-CHIQ-02',
    colors: ['Terracotta', 'Sage Green', 'Black', 'Ivory'],
    sizes: ['One Size (18 x 13.5 cm)'],
    tags: ['Sculptural', 'Iconic', 'Parisian'],
    isNew: true
  },
  {
    id: 'prod-bag-03',
    name: 'Re-Nylon & Saffiano Leather Messenger',
    brand: 'Prada',
    category: 'handbags',
    department: 'men',
    price: 1850,
    rating: 4.9,
    reviewsCount: 31,
    description: 'Technical elegance meets heritage Saffiano leather trim. Features dual exterior utility zip pouches, enamel triangle emblem, and adjustable jacquard webbing strap.',
    materials: 'Purified Ocean Plastic Re-Nylon, Saffiano Calfskin',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 6,
    sku: 'PRD-NYL-MSG-03',
    colors: ['Nero Black', 'Steel Slate'],
    sizes: ['27 x 20.5 x 12 cm'],
    tags: ['Sustainable Luxury', 'Re-Nylon', 'Technical']
  },
  {
    id: 'prod-bag-04',
    name: 'Kids Mini Vintage Check Backpack',
    brand: 'Burberry Kids',
    category: 'handbags',
    department: 'kids',
    price: 690,
    rating: 4.9,
    reviewsCount: 19,
    description: 'Compact children backpack woven in archive Vintage Check cotton canvas, with smooth leather trims, padded mesh back panel, and ergonomic shoulder straps.',
    materials: '80% Bonded Cotton Canvas, 20% Calf Leather',
    origin: 'Crafted in Italy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 8,
    sku: 'BRB-KD-BPK-04',
    colors: ['Archive Beige Check'],
    sizes: ['Small (22 x 30 x 11 cm)'],
    tags: ['Vintage Check', 'Kids Accessories', 'School & Travel']
  },
  {
    id: 'prod-bag-05',
    name: 'Sac de Jour Grained Leather Briefcase',
    brand: 'Saint Laurent',
    category: 'handbags',
    department: 'men',
    price: 3300,
    rating: 4.8,
    reviewsCount: 22,
    description: 'Structured briefcase with accordion sides, compression tabs with padlock clochette, and removable leather shoulder strap. Fits up to 15-inch laptops.',
    materials: '100% Grained Calfskin Leather, Silver-Tone Metal',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      HANDBAG_IMAGE
    ],
    inStock: true,
    stockQuantity: 5,
    sku: 'SL-SDJ-MEN-05',
    colors: ['Black', 'Dark Earth'],
    sizes: ['Large (40 x 30 x 13.5 cm)'],
    tags: ['Executive', 'Briefcase', 'Signature']
  },

  // --- JEWELLERY ---
  {
    id: 'prod-jewel-01',
    name: 'Serpenti Viper 18K Rose Gold Diamond Ring',
    brand: 'Bulgari',
    category: 'jewellery',
    department: 'women',
    price: 3450,
    rating: 5.0,
    reviewsCount: 41,
    description: 'An ultra-modern interpretation of Bulgari snake motif. Slender geometric scales coiled around the finger set with pavé-cut brilliant diamonds.',
    materials: '18K Rose Gold with 0.21 ct Brilliant Diamonds',
    origin: 'Handcrafted in Rome, Italy',
    image: JEWELLERY_IMAGE,
    gallery: [
      JEWELLERY_IMAGE,
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 6,
    sku: 'BLG-SRP-RNG-01',
    colors: ['Rose Gold', 'White Gold'],
    sizes: ['48 EU (4.5 US)', '50 EU (5.5 US)', '52 EU (6 US)', '54 EU (7 US)'],
    tags: ['Fine Jewellery', 'Serpenti', 'Pavé Diamonds'],
    isBestSeller: true
  },
  {
    id: 'prod-jewel-02',
    name: 'Vintage Alhambra Mother-of-Pearl Bracelet',
    brand: 'Van Cleef & Arpels',
    category: 'jewellery',
    department: 'women',
    price: 4500,
    originalPrice: 4750,
    rating: 5.0,
    reviewsCount: 88,
    description: 'Faithful to the very first Alhambra jewel created in 1968, 5 four-leaf clover motifs framed by golden beads and set with iridescent white mother-of-pearl.',
    materials: '18K Yellow Gold & Natural White Mother-of-Pearl',
    origin: 'Crafted in France',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      JEWELLERY_IMAGE
    ],
    inStock: true,
    stockQuantity: 2,
    sku: 'VCA-ALH-BRC-02',
    colors: ['Yellow Gold / Pearl', 'Rose Gold / Onyx'],
    sizes: ['19 cm / 7.5 in'],
    tags: ['Alhambra', 'High Jewellery', 'Clover Motif']
  },
  {
    id: 'prod-jewel-03',
    name: 'Onyx & Sterling Silver Signet Ring',
    brand: 'Tiffany & Co.',
    category: 'jewellery',
    department: 'men',
    price: 850,
    rating: 4.8,
    reviewsCount: 27,
    description: 'Engineered with clean architectural lines, a custom-cut natural black onyx gemstone bezel mounted on substantial sterling silver with satin finish sides.',
    materials: 'Sterling Silver 925, Black Onyx Gemstone',
    origin: 'Crafted in USA',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 10,
    sku: 'TIF-MN-SGT-03',
    colors: ['Silver / Black Onyx'],
    sizes: ['US 9', 'US 10', 'US 11', 'US 12'],
    tags: ['Signet Ring', 'Sterling Silver', 'Timeless']
  },
  {
    id: 'prod-jewel-04',
    name: 'Kids Enamel Heart Stud Earrings',
    brand: 'Gucci',
    category: 'jewellery',
    department: 'kids',
    price: 340,
    rating: 4.9,
    reviewsCount: 15,
    description: 'Delicate heart-shaped earrings for kids and juniors with hypoallergenic threaded screw backings and engraved interlocking GG logo over red enamel.',
    materials: '925 Sterling Silver, Hand-Painted Hypoallergenic Enamel',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 14,
    sku: 'GCC-KD-EAR-04',
    colors: ['Silver / Cherry Red'],
    sizes: ['One Size (7 mm)'],
    tags: ['Kids Jewellery', 'Safety Backing', 'Sterling Silver']
  },

  // --- SHOES ---
  {
    id: 'prod-shoes-01',
    name: 'Kate 100 Patent Leather Pumps',
    brand: 'Christian Louboutin',
    category: 'shoes',
    department: 'women',
    price: 895,
    rating: 4.9,
    reviewsCount: 73,
    description: 'Timeless pointy-toe pump with a sculpted 100mm stiletto heel. Rendered in glossy black patent leather finished with the signature red lacquered sole.',
    materials: 'Gloss Patent Calf Leather, Signature Red Leather Sole',
    origin: 'Crafted in Italy',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      SHOES_IMAGE
    ],
    inStock: true,
    stockQuantity: 8,
    sku: 'CL-KT100-01',
    colors: ['Black Patent', 'Nude Blush', 'Rouge Red'],
    sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'],
    tags: ['Red Bottoms', 'Stiletto', 'Evening'],
    isBestSeller: true
  },
  {
    id: 'prod-shoes-02',
    name: 'Summer Walk Suede Loafers',
    brand: 'Loro Piana',
    category: 'shoes',
    department: 'men',
    price: 1050,
    rating: 5.0,
    reviewsCount: 62,
    description: 'Handcrafted luxury loafer made from water-repellent unlined calfskin suede. Finished with non-slip, lightweight rubber soles stamped with LP crest monogram.',
    materials: 'Water-Repellent Suede, Natural Latex Rubber Sole',
    origin: 'Handmade in Italy',
    image: SHOES_IMAGE,
    gallery: [
      SHOES_IMAGE,
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 9,
    sku: 'LP-SMR-WLK-02',
    colors: ['Navy Blue', 'Sand Pebble', 'Mocha Brown', 'Olive Sage'],
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    tags: ['Quiet Luxury', 'Handmade', 'Resort'],
    isBestSeller: true
  },
  {
    id: 'prod-shoes-03',
    name: 'Monolith Brushed Leather Lug Derby Shoes',
    brand: 'Prada',
    category: 'shoes',
    department: 'women',
    price: 1250,
    rating: 4.8,
    reviewsCount: 39,
    description: 'Subversive proportions meet classic menswear codes. Hand-buffed brushed spazzolato leather mounted on an architectural 55mm chunky tread sole.',
    materials: 'Brushed Spazzolato Leather, Lightweight Expanded Rubber',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
      SHOES_IMAGE
    ],
    inStock: true,
    stockQuantity: 5,
    sku: 'PRD-MNL-DRB-03',
    colors: ['Polished Black', 'Burgundy Cordovan'],
    sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    tags: ['Lug Sole', 'Modernist', 'Runway']
  },
  {
    id: 'prod-shoes-04',
    name: 'Speed 2.0 Recycled Knit Sock Sneakers',
    brand: 'Balenciaga',
    category: 'shoes',
    department: 'men',
    price: 995,
    rating: 4.7,
    reviewsCount: 46,
    description: 'Iconic technical 3D knit sock trainers with ergonomic ultra-articulated molded sole and contrast white logo stamp. Lightweight "barefoot" sensation.',
    materials: '92% Recycled Polystyrene Knit, Ergonomic Rubber Sole',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 10,
    sku: 'BAL-SPD-20-04',
    colors: ['Black / White', 'Triple Black', 'Chalk White'],
    sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    tags: ['Sock Sneaker', 'Streetwear', 'Ultra-Light']
  },
  {
    id: 'prod-shoes-05',
    name: 'Kids Leather Chelsea Boots',
    brand: 'Burberry Kids',
    category: 'shoes',
    department: 'kids',
    price: 450,
    rating: 4.9,
    reviewsCount: 24,
    description: 'Classic pull-on Chelsea boots tailored for children with soft calfskin uppers, stretch House Check side panels, and grippy rubber traction soles.',
    materials: 'Calfskin Leather, Elastic Check Webbing, Rubber Outsole',
    origin: 'Made in Portugal',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 11,
    sku: 'BRB-KD-BTS-05',
    colors: ['Classic Black / Check', 'Chestnut Brown'],
    sizes: ['EU 28', 'EU 30', 'EU 32', 'EU 34'],
    tags: ['Kids Footwear', 'House Check', 'Comfort']
  },

  // --- CLOTHING ---
  {
    id: 'prod-cloth-01',
    name: 'Kensington Heritage Trench Coat',
    brand: 'Burberry Kids', // department kids or women
    category: 'clothing',
    department: 'women',
    price: 2690,
    originalPrice: 2850,
    rating: 5.0,
    reviewsCount: 92,
    description: 'The archetype of British style. Double-breasted weatherproof cotton gabardine trench coat cut to a tailored fit, featuring signature Vintage Check undercollar and buffalo horn buttons.',
    materials: '100% Bespoke Cotton Gabardine, Buffalo Horn Buttons',
    origin: 'Woven in Castleford, Yorkshire, England',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
      HERO_IMAGE
    ],
    inStock: true,
    stockQuantity: 7,
    sku: 'BRB-TRN-KNS-01',
    colors: ['Honey Beige', 'Midnight Navy', 'Coal Black'],
    sizes: ['UK 6 / US 2', 'UK 8 / US 4', 'UK 10 / US 6', 'UK 12 / US 8', 'UK 14 / US 10'],
    tags: ['Heritage', 'Gabardine', 'Iconic Outerwear'],
    isBestSeller: true
  },
  {
    id: 'prod-cloth-02',
    name: 'Single-Breasted Wool & Cashmere Overcoat',
    brand: 'Saint Laurent',
    category: 'clothing',
    department: 'men',
    price: 3690,
    rating: 4.9,
    reviewsCount: 34,
    description: 'Sharply tailored knee-length tailored overcoat with structured padded shoulders, peak lapels, and horn buttons. Fully lined in fluid silk satin.',
    materials: '90% Virgin Wool, 10% Mongolian Cashmere, 100% Silk Lining',
    origin: 'Tailored in Italy',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 5,
    sku: 'SL-OVCT-WOL-02',
    colors: ['Anthracite Noir', 'Camel Melange'],
    sizes: ['IT 46 / S', 'IT 48 / M', 'IT 50 / L', 'IT 52 / XL'],
    tags: ['Sartorial', 'Cashmere Blend', 'Tailored']
  },
  {
    id: 'prod-cloth-03',
    name: 'Kids Maya Down Quilted Jacket',
    brand: 'Moncler Enfant',
    category: 'clothing',
    department: 'kids',
    price: 875,
    rating: 4.9,
    reviewsCount: 28,
    description: 'The legendary Moncler silhouette miniaturized for young explorers. Shiny laqué nylon packed with insulating pure goose down, snap-off hood, and sleeve patch pocket.',
    materials: 'Glossy Laqué Nylon, 90% Down / 10% Feather Filling',
    origin: 'Made in Romania',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 9,
    sku: 'MNC-KD-MYA-03',
    colors: ['Royal Navy', 'Formula Red', 'Onyx Black'],
    sizes: ['4 Years (104 cm)', '6 Years (116 cm)', '8 Years (128 cm)', '10 Years (140 cm)'],
    tags: ['Goose Down', 'Winter Outerwear', 'Cold Weather'],
    isNew: true
  },
  {
    id: 'prod-cloth-04',
    name: 'Pure Cashmere Rollneck Sweater',
    brand: 'Loro Piana',
    category: 'clothing',
    department: 'men',
    price: 1950,
    rating: 5.0,
    reviewsCount: 47,
    description: 'Spun from select ultra-fine baby cashmere sourced from the Capra Hircus goat. Cloud-like softness, ribbed collar, cuffs, and hem.',
    materials: '100% Baby Cashmere',
    origin: 'Crafted in Quarona, Piedmont, Italy',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 4,
    sku: 'LP-CSH-RLN-04',
    colors: ['Oatmeal Heather', 'Pearl Gray', 'Midnight Navy'],
    sizes: ['IT 48 / M', 'IT 50 / L', 'IT 52 / XL', 'IT 54 / XXL'],
    tags: ['Baby Cashmere', 'Knitwear', 'Quiet Luxury']
  },
  {
    id: 'prod-cloth-05',
    name: 'Silk Crepe de Chine Bow Blouse',
    brand: 'Gucci',
    category: 'clothing',
    department: 'women',
    price: 1400,
    rating: 4.8,
    reviewsCount: 33,
    description: 'Poetic Italian tailoring in lightweight mulberry silk crepe de Chine. Dramatic lavallière pussy-bow necktie, covered mother-of-pearl buttons, and gathered cuffs.',
    materials: '100% Mulberry Silk Crepe de Chine',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 6,
    sku: 'GCC-SLK-BLS-05',
    colors: ['Alabaster Ivory', 'Emerald Green'],
    sizes: ['IT 38 / XS', 'IT 40 / S', 'IT 42 / M', 'IT 44 / L'],
    tags: ['Mulberry Silk', 'Pussy-Bow', 'Tailored']
  },
  {
    id: 'prod-cloth-06',
    name: 'Kids Organic Cotton Polo Dress with Web Trim',
    brand: 'Gucci',
    category: 'clothing',
    department: 'kids',
    price: 390,
    rating: 4.9,
    reviewsCount: 21,
    description: 'Piqué knit cotton dress with mother-of-pearl collar buttons and signature green and red Web knit ribbon along the collar and hemline.',
    materials: '96% Organic Cotton, 4% Elastane',
    origin: 'Crafted in Italy',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 15,
    sku: 'GCC-KD-DRS-06',
    colors: ['Navy / Green-Red Web', 'Ivory / Web'],
    sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
    tags: ['Kids Luxury', 'Organic Cotton', 'Signature Web']
  },

  // --- ADDITIONAL ACCENT JEWELLERY & HANDBAGS ---
  {
    id: 'prod-jewel-05',
    name: 'LOVE 18K Yellow Gold Bangle Bracelet',
    brand: 'Cartier',
    category: 'jewellery',
    department: 'women',
    price: 7350,
    rating: 5.0,
    reviewsCount: 112,
    description: 'The iconic 1969 Aldo Cipullo creation in New York. Oval silhouette that adheres closely to the wrist, locked in place with a dedicated functional ergonomic screwdriver.',
    materials: '18K Yellow Gold (750/1000)',
    origin: 'Crafted in France & Switzerland',
    image: JEWELLERY_IMAGE,
    gallery: [
      JEWELLERY_IMAGE
    ],
    inStock: true,
    stockQuantity: 3,
    sku: 'CRT-LOVE-GLD-05',
    colors: ['18K Yellow Gold', '18K White Gold', '18K Pink Gold'],
    sizes: ['Size 16 (16 cm)', 'Size 17 (17 cm)', 'Size 18 (18 cm)', 'Size 19 (19 cm)'],
    tags: ['Iconic Love', 'High Jewellery', 'Collector'],
    isBestSeller: true
  },
  {
    id: 'prod-bag-06',
    name: 'Kelly Depeches 25 Leather Pouch',
    brand: 'Hermès',
    category: 'handbags',
    department: 'men',
    price: 6100,
    rating: 5.0,
    reviewsCount: 18,
    description: 'Sleek Epsom calfskin portfolio clutch featuring the legendary Kelly turn-clasp closure and palladium-plated hardware. Hand-stitched saddle seams.',
    materials: 'Epsom Calfskin, Palladium Hardware',
    origin: 'Handmade in Paris, France',
    image: HANDBAG_IMAGE,
    gallery: [
      HANDBAG_IMAGE
    ],
    inStock: true,
    stockQuantity: 1,
    sku: 'HRM-KLY-DPC-06',
    colors: ['Gold / Palladium', 'Noir Black'],
    sizes: ['25.5 x 19.5 x 4 cm'],
    tags: ['Hermès Heritage', 'Saddle Stitch', 'Ultra-Exclusive'],
    isBestSeller: true
  },
  {
    id: 'prod-shoes-06',
    name: 'Kids Ace Embroidered Leather Sneakers',
    brand: 'Gucci',
    category: 'shoes',
    department: 'kids',
    price: 490,
    rating: 4.8,
    reviewsCount: 37,
    description: 'Smooth white leather low-top trainers for children with hook-and-loop velcro straps, green and red Web stripe, and metallic snakeskin embossed heel tabs.',
    materials: 'Calf Leather, Web Stripe, Non-Marking Rubber Sole',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80',
      SHOES_IMAGE
    ],
    inStock: true,
    stockQuantity: 10,
    sku: 'GCC-KD-ACE-06',
    colors: ['Optic White / Web'],
    sizes: ['EU 26', 'EU 28', 'EU 30', 'EU 32', 'EU 34'],
    tags: ['Velcro Straps', 'Kids Sneakers', 'Italian Leather']
  },
  {
    id: 'prod-chain-05',
    name: '18K White Gold Pavé Diamond Tennis Chain',
    brand: 'Cartier',
    category: 'chains',
    department: 'women',
    price: 12800,
    rating: 5.0,
    reviewsCount: 23,
    description: 'Continuous collar of four-prong set brilliant-cut round diamonds in 18K white gold. Concealed safety pressure tongue clasp with double safety catches.',
    materials: '18K White Gold, 5.80 ct VS1/F Natural Diamonds',
    origin: 'Switzerland',
    image: JEWELLERY_IMAGE,
    gallery: [
      JEWELLERY_IMAGE
    ],
    inStock: true,
    stockQuantity: 2,
    sku: 'CRT-TNN-DIA-05',
    colors: ['18K White Gold', '18K Yellow Gold'],
    sizes: ['41 cm / 16 in', '46 cm / 18 in'],
    tags: ['Tennis Necklace', 'High Jewellery', '5.8ct Diamonds']
  },
  {
    id: 'prod-cloth-07',
    name: 'Tailored Tuxedo Jacket with Silk Satin Revers',
    brand: 'Prada',
    category: 'clothing',
    department: 'men',
    price: 3200,
    rating: 4.9,
    reviewsCount: 17,
    description: 'Super 150s Mohair-wool evening tuxedo jacket with silk satin shawl collar, single silk-covered button, and jetted pockets. Hand-stitched Milanese buttonhole.',
    materials: '73% Virgin Wool, 27% Kid Mohair, 100% Silk Trim',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 4,
    sku: 'PRD-TXD-MHR-07',
    colors: ['Midnight Black', 'Deep Navy'],
    sizes: ['IT 48', 'IT 50', 'IT 52', 'IT 54'],
    tags: ['Black Tie', 'Mohair Wool', 'Eveningwear']
  },
  {
    id: 'prod-shoes-07',
    name: 'Grecian Leather Slide Sandals',
    brand: 'Hermès',
    category: 'shoes',
    department: 'women',
    price: 760,
    rating: 4.9,
    reviewsCount: 78,
    description: 'Instantly recognizable H cut-out silhouette crafted from supple Box calfskin leather with raw edged tone-on-tone stitching and comfortable natural leather heel.',
    materials: 'Box Calfskin, Natural Hazelnut Leather Insole',
    origin: 'Made in Italy',
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80',
      SHOES_IMAGE
    ],
    inStock: true,
    stockQuantity: 12,
    sku: 'HRM-ORAN-SLD-07',
    colors: ['Gold Tan', 'Noir Black', 'Blanc White'],
    sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    tags: ['Iconic Sandal', 'Resort', 'Calfskin']
  }
];
