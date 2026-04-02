import React from 'react';
import { BRANDS } from '../../data';

const FeaturedBrands: React.FC = () => {
  return (
    <section className="mt-8 md:mt-12">
      <h2 className="text-xl md:text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4 mb-6 md:mb-8">Featured Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {BRANDS.map(brand => (
          <div key={brand.id} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-grey-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer">
            <img src={brand.logo} alt={brand.name} className="h-8 md:h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
