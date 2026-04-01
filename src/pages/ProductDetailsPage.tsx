import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Minus, Plus, ShieldCheck, Truck, RotateCcw, ChevronLeft } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === Number(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.image);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-orange-500 hover:underline">
          Go back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Show a toast or feedback
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-grey-200 hover:text-navy-900 mb-8 transition-colors"
      >
        <ChevronLeft size={16} />
        Back to results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-grey-100 shadow-sm">
            <img 
              src={selectedImage} 
              alt={product.title} 
              className="w-full h-full object-contain p-8"
            />
          </div>
          {product.images && product.images.length > 0 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === img ? 'border-orange-500 scale-95' : 'border-grey-100 hover:border-orange-200'
                  }`}
                >
                  <img src={img} alt={`${product.title} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-2 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-orange-500">
                <Star size={18} fill="currentColor" />
                <span className="font-bold">{product.rating}</span>
              </div>
              <span className="text-grey-200">|</span>
              <span className="text-navy-700 text-sm font-medium underline cursor-pointer">
                {product.reviews} Customer Reviews
              </span>
            </div>
          </div>

          <div className="bg-grey-50 p-6 rounded-2xl border border-grey-100">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-navy-900">${product.currentPrice}</span>
              <span className="text-xl text-grey-200 line-through">${product.originalPrice}</span>
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded ml-auto">
                {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% OFF
              </span>
            </div>
            <p className="text-sm text-navy-700 mt-2 font-medium">In stock: {product.stock} items</p>
          </div>

          <div className="space-y-4">
            <p className="text-navy-700 leading-relaxed">
              {product.description}
            </p>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center border border-grey-200 rounded-xl bg-white p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-grey-50 rounded-lg transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 hover:bg-grey-50 rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-navy-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <ShoppingCart size={20} />
                Add to Cart - ${(product.currentPrice * quantity).toLocaleString()}
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-grey-100">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-grey-50 p-3 rounded-full text-navy-900">
                <ShieldCheck size={24} />
              </div>
              <p className="text-xs font-bold">1 Year Warranty</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-grey-50 p-3 rounded-full text-navy-900">
                <Truck size={24} />
              </div>
              <p className="text-xs font-bold">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="bg-grey-50 p-3 rounded-full text-navy-900">
                <RotateCcw size={24} />
              </div>
              <p className="text-xs font-bold">30 Day Returns</p>
            </div>
          </div>

          {/* Specs */}
          {product.specs && (
            <div className="pt-8">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-grey-50 py-2">
                    <span className="text-grey-200 text-sm">{key}</span>
                    <span className="text-navy-900 text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
