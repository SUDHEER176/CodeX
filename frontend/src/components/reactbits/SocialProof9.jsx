import React from 'react';

/**
 * React Bits Pro: Social Proof 9 Block
 * Minimal logo marquees scrolling in two opposing directions.
 * Features pure black background, delicate opacity transitions, and clean typography.
 */
export default function SocialProof9({
  title = "TRUSTED BY ENGINEERS INTERVIEWING AT THE WORLD'S LEADING TECH COMPANIES",
  row1Brands,
  row2Brands,
  className = ""
}) {
  const defaultRow1 = [
    { name: "Google", logo: "https://cdn.simpleicons.org/google/ffffff" },
    { name: "Meta", logo: "https://cdn.simpleicons.org/meta/ffffff" },
    { name: "Amazon", logo: "https://cdn.simpleicons.org/amazon/ffffff" },
    { name: "Apple", logo: "https://cdn.simpleicons.org/apple/ffffff" },
    { name: "Microsoft", logo: "https://cdn.simpleicons.org/microsoft/ffffff" },
    { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix/ffffff" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/ffffff" },
    { name: "Uber", logo: "https://cdn.simpleicons.org/uber/ffffff" },
  ];

  const defaultRow2 = [
    { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/ffffff" },
    { name: "Palantir", logo: "https://cdn.simpleicons.org/palantir/ffffff" },
    { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb/ffffff" },
    { name: "Databricks", logo: "https://cdn.simpleicons.org/databricks/ffffff" },
    { name: "ByteDance", logo: "https://cdn.simpleicons.org/bytedance/ffffff" },
    { name: "Coinbase", logo: "https://cdn.simpleicons.org/coinbase/ffffff" },
    { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify/ffffff" },
    { name: "Adobe", logo: "https://cdn.simpleicons.org/adobe/ffffff" },
  ];

  const r1 = row1Brands && row1Brands.length > 0 ? row1Brands : defaultRow1;
  const r2 = row2Brands && row2Brands.length > 0 ? row2Brands : defaultRow2;

  // Repeat for seamless loop
  const duplicatedRow1 = [...r1, ...r1, ...r1];
  const duplicatedRow2 = [...r2, ...r2, ...r2];

  return (
    <div className={`w-full py-10 overflow-hidden bg-black text-white relative rounded-3xl border border-white/[0.06] ${className}`}>
      
      {/* Centered Caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-normal text-slate-400">
          {title}
        </p>
      </div>

      {/* Two-Direction Marquee Wrapper with Side Masks */}
      <div className="relative w-full space-y-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        {/* Row 1: Forward Marquee */}
        <div className="flex gap-10 sm:gap-16 items-center whitespace-nowrap animate-marquee">
          {duplicatedRow1.map((brand, idx) => (
            <div
              key={`r1-${brand.name}-${idx}`}
              className="flex items-center gap-2.5 opacity-45 hover:opacity-100 transition-opacity duration-300 group cursor-default select-none grayscale hover:grayscale-0"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-4.5 sm:h-5 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                />
              ) : null}
              <span className="text-xs sm:text-sm font-normal tracking-wide text-slate-300 group-hover:text-white font-mono">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="flex gap-10 sm:gap-16 items-center whitespace-nowrap animate-marquee-reverse">
          {duplicatedRow2.map((brand, idx) => (
            <div
              key={`r2-${brand.name}-${idx}`}
              className="flex items-center gap-2.5 opacity-45 hover:opacity-100 transition-opacity duration-300 group cursor-default select-none grayscale hover:grayscale-0"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-4.5 sm:h-5 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                />
              ) : null}
              <span className="text-xs sm:text-sm font-normal tracking-wide text-slate-300 group-hover:text-white font-mono">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
