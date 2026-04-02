import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data';
import { ChevronRight, Home, LayoutGrid, List } from 'lucide-react';

const AllProductsPage: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');

  const sortedProducts = useMemo(() => {
    const p = [...PRODUCTS];
    if (sortBy === 'price-low') return p.sort((a, b) => a.currentPrice - b.currentPrice);
    if (sortBy === 'price-high') return p.sort((a, b) => b.currentPrice - a.currentPrice);
    if (sortBy === 'rating') return p.sort((a, b) => b.rating - a.rating);
    return p;
  }, [sortBy]);

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] md:text-sm text-grey-200 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
        <Link to="/" className="hover:text-navy-900 transition-colors flex items-center gap-1">
          <Home size={14} />
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-navy-900 font-semibold uppercase tracking-wider">All Products</span>
      </nav>

      <div className="flex flex-col gap-8">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 border-b border-grey-100 pb-4 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-navy-900 uppercase tracking-tighter">Our Collection</h1>
              <p className="text-grey-200 text-xs md:text-sm mt-1 font-medium">Discover {PRODUCTS.length} premium products across all categories</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 bg-grey-50 p-1 rounded-lg border border-grey-100 mr-2">
                <button className="p-1.5 bg-white text-navy-900 rounded-md shadow-sm border border-grey-100"><LayoutGrid size={18} /></button>
                <button className="p-1.5 text-grey-200 hover:text-navy-900 transition-colors"><List size={18} /></button>
              </div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-grey-200 rounded-xl px-3 md:px-4 py-2.5 text-xs md:text-sm font-bold text-navy-900 outline-none focus:ring-2 focus:ring-[#F97316] w-full sm:w-auto shadow-sm transition-all"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
