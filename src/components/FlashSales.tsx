import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data';

const FlashSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 12); // 12 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <section className="mt-12 bg-white p-6 rounded-2xl shadow-sm">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4">Flash Sales</h2>
          <div className="flex items-center gap-4 text-orange-500">
            <Timer size={24} />
            <div className="flex gap-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{h.toString().padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{m.toString().padStart(2, '0')}</span>
              <span>:</span>
              <span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">{s.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-navy-900 font-bold hover:text-orange-500 transition-colors">
          View All <ArrowRight size={18} />
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.filter(p => p.isFlashSale).slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
