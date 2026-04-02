import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { PRODUCTS } from '../data';
import { ChevronRight, Home, Search } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const decodedCategory = decodeURIComponent(categoryName || '');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === decodedCategory);
  }, [decodedCategory]);

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] md:text-sm text-grey-200 mb-6 md:mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
        <Link to="/" className="hover:text-navy-900 transition-colors flex items-center gap-1">
          <Home size={14} />
          Home
        </Link>
        <ChevronRight size={14} />
        <span className="text-navy-900 font-semibold">{decodedCategory}</span>
      </nav>

      <div className="flex flex-col gap-8">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 border-b border-grey-100 pb-4 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-navy-900">{decodedCategory}</h1>
              <p className="text-grey-200 text-xs md:text-sm mt-1">Showing {filteredProducts.length} products</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-navy-900 hidden sm:block">Sort by:</span>
              <select className="bg-white border border-grey-200 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto">
                <option>Default Sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 md:p-20 text-center border border-dashed border-grey-200">
              <div className="bg-grey-50 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-grey-200" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">No products found</h2>
              <p className="text-grey-200 text-sm max-w-md mx-auto mb-8">
                We couldn't find any products in this category. Try checking another category or head back to home.
              </p>
              <Link to="/" className="inline-block bg-navy-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-all shadow-lg text-sm uppercase tracking-widest">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
