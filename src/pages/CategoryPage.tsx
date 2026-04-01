import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data';
import { ChevronRight, Home } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const decodedCategory = decodeURIComponent(categoryName || '');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === decodedCategory);
  }, [decodedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-grey-200 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-navy-900 transition-colors flex items-center gap-1">
          <Home size={14} />
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-navy-900 font-semibold">{decodedCategory}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-8 border-b border-grey-100 pb-4">
            <div>
              <h1 className="text-3xl font-extrabold text-navy-900">{decodedCategory}</h1>
              <p className="text-grey-200 text-sm mt-1">Showing {filteredProducts.length} products</p>
            </div>
            
            {/* Simple Sort (Mock) */}
            <select className="bg-white border border-grey-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500">
              <option>Default Sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-grey-200">
              <div className="bg-grey-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-grey-200" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">No products found</h2>
              <p className="text-grey-200 max-w-md mx-auto mb-8">
                We couldn't find any products in the "{decodedCategory}" category. Try checking another category or head back to home.
              </p>
              <Link to="/" className="bg-navy-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all shadow-lg">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Mock search icon if not imported correctly
const Search = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export default CategoryPage;
