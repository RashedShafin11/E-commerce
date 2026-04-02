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
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full group relative">
      {/* Badge for Flash Sale */}
      {product.isFlashSale && (
        <span className="absolute top-2 left-2 bg-[#F97316] text-white text-[9px] font-black px-2 py-0.5 rounded-full z-10 tracking-widest uppercase">
          Flash Sale
        </span>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block h-40 md:h-48 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <Link to={`/product/${product.id}`} className="hover:text-[#F97316] transition-colors">
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-[#F97316]">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-black">{product.rating}</span>
          <span className="text-gray-400 text-xs font-normal">({product.reviews || 0})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-lg font-black text-gray-900">${product.currentPrice}</span>
          <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
        </div>

        {/* Add to Cart Button: Professional Dark Navy Style */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-2 w-full bg-[#001529] text-white px-3 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95 tracking-widest uppercase"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
