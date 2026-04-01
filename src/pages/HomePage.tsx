import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Hero from '../components/layout/Hero';
import FlashSales from '../components/product/FlashSales';
import FeaturedBrands from '../components/product/FeaturedBrands';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data';

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <Hero />
      </div>

      {/* Flash Sales Section */}
      <FlashSales />

      {/* Featured Brands */}
      <FeaturedBrands />

      {/* Best Sellers Section */}
      <section className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4">Best Sellers</h2>
          <button className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            Explore All Products
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <div className="mt-20 bg-navy-900 rounded-3xl overflow-hidden relative group">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-12 md:w-1/2 text-white">
            <span className="bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">NEW COLLECTION</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Experience the Future <br /> of Audio.
            </h2>
            <p className="text-grey-200 mb-8 max-w-sm">
              The all-new SoundPro X1. Pure sound, zero distractions. Limited time offer.
            </p>
            <button className="bg-white text-navy-900 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg">
              Pre-order Now
            </button>
          </div>
          <div className="md:w-1/2 h-64 md:h-96 relative">
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
