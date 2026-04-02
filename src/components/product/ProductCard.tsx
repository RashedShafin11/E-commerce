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
    <div className="bg-white border border-grey-100 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group relative flex flex-col h-full">
      {/* Badge for Flash Sale */}
      {product.isFlashSale && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded-full z-10 tracking-widest">
          FLASH SALE
        </span>
      )}

      {/* Product Image - Wrapped in Link */}
      <Link to={`/product/${product.id}`} className="block h-36 md:h-48 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-all"></div>
      </Link>

      {/* Product Info */}
      <div className="p-3 md:p-4 flex flex-col flex-1 gap-1.5 md:gap-2">
        <Link to={`/product/${product.id}`} className="hover:text-orange-500 transition-colors">
          <h3 className="text-xs md:text-sm font-bold text-navy-900 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
            {product.title}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <Star size={12} fill="currentColor" className="md:size-14" />
          <span className="text-[10px] md:text-xs font-black">{product.rating}</span>
          <span className="text-grey-200 text-[10px] md:text-xs font-normal">({product.reviews || 0})</span>
        </div>

        {/* Pricing */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 mt-auto">
          <span className="text-base md:text-lg font-black text-navy-900">${product.currentPrice}</span>
          <span className="text-[10px] md:text-xs text-grey-200 line-through">${product.originalPrice}</span>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-2 w-full bg-navy-900 text-white py-2 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black flex items-center justify-center gap-1.5 md:gap-2 hover:bg-orange-500 transition-all shadow-md active:scale-95 tracking-widest uppercase"
        >
          <ShoppingCart size={14} className="md:size-16" />
          <span className="hidden sm:inline">Add to Cart</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
