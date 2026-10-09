import React from 'react';
import SocialProof9 from '../../reactbits/SocialProof9';

/**
 * BrandSlider using React Bits Pro Social Proof 9 (Minimal logo marquees in two opposing directions)
 */
export default function BrandSlider({ brandList = [] }) {
  return (
    <SocialProof9
      title="TRUSTED BY ENGINEERS INTERVIEWING AT THE WORLD'S LEADING TECH COMPANIES"
      row1Brands={brandList.length > 0 ? brandList.slice(0, Math.ceil(brandList.length / 2)) : undefined}
      row2Brands={brandList.length > 0 ? brandList.slice(Math.ceil(brandList.length / 2)) : undefined}
      className="border-t border-b border-l-0 border-r-0 rounded-none"
    />
  );
}
export { SocialProof9 };
