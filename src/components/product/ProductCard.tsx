import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full group">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block h-40 md:h-48 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <Link to={`/product/${product.id}`} className="hover:text-[#F97316] transition-colors">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 text-[#F97316]">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-black">{product.rating}</span>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-lg font-black text-gray-900">${product.currentPrice}</span>
          <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
        </div>

        {/* Compact Professional Button: bg-[#001529] text-white px-3 py-1.5 text-sm */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-2 w-full bg-[#001529] text-white px-3 py-1.5 text-sm rounded-md font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all active:scale-95"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
