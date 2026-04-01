import React from 'react';
import { BRANDS } from '../data';

const FeaturedBrands: React.FC = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4 mb-8">Featured Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {BRANDS.map(brand => (
          <div key={brand.id} className="bg-white p-6 rounded-2xl border border-grey-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center grayscale hover:grayscale-0 cursor-pointer">
            <img src={brand.logo} alt={brand.name} className="max-h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
