import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../data';

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
    <section className="mt-8 md:mt-12 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-grey-50">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <h2 className="text-xl md:text-2xl font-bold text-navy-900 border-l-4 border-orange-500 pl-4">Flash Sales</h2>
          <div className="flex items-center gap-3 text-orange-500">
            <Timer size={20} className="md:size-6" />
            <div className="flex gap-1.5 md:gap-2">
              <span className="bg-orange-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-bold">{h.toString().padStart(2, '0')}</span>
              <span className="font-bold">:</span>
              <span className="bg-orange-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-bold">{m.toString().padStart(2, '0')}</span>
              <span className="font-bold">:</span>
              <span className="bg-orange-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-bold">{s.toString().padStart(2, '0')}</span>
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-xs md:text-sm font-bold text-navy-900 hover:text-orange-500 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      {/* Product Grid: Responsive columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {PRODUCTS.filter(p => p.isFlashSale).slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
