import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">NexStore</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative group">
            <input
              type="text"
              placeholder="Search in NexStore..."
              className="w-full bg-white text-navy-900 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm group-hover:shadow-md"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
              <Search size={20} className="text-white" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition-colors">
              <User size={20} />
              <div className="hidden lg:block text-sm">
                <p className="text-xs text-grey-200">Hello, Sign in</p>
                <p className="font-semibold">My Account</p>
              </div>
            </div>
            
            <div className="relative cursor-pointer hover:text-orange-500 transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-navy-900 animate-in fade-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-navy-800 border-t border-navy-700">
        <div className="container mx-auto px-4 flex items-center gap-8 h-10 text-sm">
          <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
            <Menu size={16} />
            Categories
          </button>
          <Link to="/" className="hover:text-orange-500 transition-colors">Flash Sales</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">Best Sellers</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">New Arrivals</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">Gift Cards</Link>
          <Link to="/" className="hover:text-orange-500 transition-colors">Customer Service</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
