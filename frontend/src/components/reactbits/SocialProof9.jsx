import React from 'react';
import { BRAND_COMPONENT_MAP } from '../ui/BrandLogos';

/**
 * React Bits Pro: Social Proof 9 Block
 * Minimal logo marquees scrolling in two opposing directions.
 * Features pure black background, authentic colorful tech company vector logos, and sleek typography.
 */
export default function SocialProof9({
  title = "TRUSTED BY ENGINEERS INTERVIEWING AT THE WORLD'S LEADING TECH COMPANIES",
  row1Brands,
  row2Brands,
  className = ""
}) {
  const defaultRow1 = [
    { name: "Google" },
    { name: "Microsoft" },
    { name: "Amazon" },
    { name: "Meta" },
    { name: "Apple" },
    { name: "Netflix" },
    { name: "Stripe" },
    { name: "LeetCode" },
  ];

  const defaultRow2 = [
    { name: "OpenAI" },
    { name: "Uber" },
    { name: "Airbnb" },
    { name: "Spotify" },
    { name: "Adobe" },
    { name: "Palantir" },
    { name: "Databricks" },
    { name: "Coinbase" },
  ];

  const r1 = row1Brands && row1Brands.length > 0 ? row1Brands : defaultRow1;
  const r2 = row2Brands && row2Brands.length > 0 ? row2Brands : defaultRow2;

  // Repeat for seamless marquee loop
  const duplicatedRow1 = [...r1, ...r1, ...r1];
  const duplicatedRow2 = [...r2, ...r2, ...r2];

  const renderBrand = (brand, idx, prefix) => {
    const BrandIconComponent = brand.icon || BRAND_COMPONENT_MAP[brand.name];

    return (
      <div
        key={`${prefix}-${brand.name}-${idx}`}
        className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 group cursor-default select-none shadow-sm"
      >
        {BrandIconComponent ? (
          <div className="flex-shrink-0 flex items-center justify-center">
            <BrandIconComponent size={18} />
          </div>
        ) : brand.logo ? (
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-4.5 w-auto object-contain transition-all"
          />
        ) : null}
        <span className="text-xs sm:text-sm font-normal tracking-wide text-slate-200 group-hover:text-white font-sans">
          {brand.name}
        </span>
      </div>
    );
  };

  return (
    <div className={`w-full py-10 overflow-hidden bg-black text-white relative rounded-3xl border border-white/[0.06] ${className}`}>
      
      {/* Centered Caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-normal text-slate-400">
          {title}
        </p>
      </div>

      {/* Two-Direction Marquee Wrapper with Smooth Gradient Side Masks */}
      <div className="relative w-full space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        
        {/* Row 1: Forward Marquee */}
        <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap animate-marquee">
          {duplicatedRow1.map((brand, idx) => renderBrand(brand, idx, 'r1'))}
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="flex gap-6 sm:gap-8 items-center whitespace-nowrap animate-marquee-reverse">
          {duplicatedRow2.map((brand, idx) => renderBrand(brand, idx, 'r2'))}
        </div>

      </div>

    </div>
  );
}
