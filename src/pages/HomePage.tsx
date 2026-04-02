import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import FlashSales from '../components/product/FlashSales';
import FeaturedBrands from '../components/product/FeaturedBrands';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-4 md:py-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <Hero />
      </div>

      {/* Flash Sales Section */}
      <FlashSales />

      {/* Featured Brands */}
      <FeaturedBrands />

      {/* Best Sellers Section */}
      <section className="mt-12 md:mt-16">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4">Best Sellers</h2>
          <Link 
            to="/products" 
            className="text-xs md:text-sm font-bold text-[#F97316] hover:text-[#EA580C] transition-colors hover:underline underline-offset-4"
          >
            Explore All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.slice(0, 10).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <div className="mt-12 md:mt-20 bg-navy-900 rounded-2xl md:rounded-[3rem] overflow-hidden relative group border border-white/5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 md:w-1/2 text-white">
            <span className="bg-orange-500 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block tracking-widest uppercase">NEW COLLECTION</span>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
              Experience the Future <br className="hidden md:block" /> of Audio.
            </h2>
            <p className="text-grey-200 text-sm md:text-base mb-6 md:mb-8 max-w-sm">
              The all-new SoundPro X1. Pure sound, zero distractions. Limited time offer.
            </p>
            <button className="bg-white text-navy-900 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg text-sm md:text-base">
              Pre-order Now
            </button>
          </div>
          <div className="w-full md:w-1/2 h-48 md:h-96 relative border-l border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800" 
              alt="Promotion" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
