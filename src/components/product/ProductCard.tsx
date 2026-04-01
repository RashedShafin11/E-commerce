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
    <div className="bg-white border border-grey-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group relative flex flex-col h-full">
      {/* Badge for Flash Sale */}
      {product.isFlashSale && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
          FLASH SALE
        </span>
      )}

      {/* Product Image - Wrapped in Link */}
      <Link to={`/product/${product.id}`} className="block h-48 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-all"></div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <Link to={`/product/${product.id}`} className="hover:text-orange-500 transition-colors">
          <h3 className="text-sm font-semibold text-navy-900 line-clamp-2 h-10">
            {product.title}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <Star size={14} fill="currentColor" />
          <span className="text-xs font-bold">{product.rating}</span>
          <span className="text-grey-200 text-xs font-normal">({product.reviews || 0})</span>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-lg font-bold text-navy-900">${product.currentPrice}</span>
          <span className="text-xs text-grey-200 line-through">${product.originalPrice}</span>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="mt-auto w-full bg-navy-900 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors shadow-sm active:scale-95"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
