import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import NavbarLogo from './NavbarLogo';

const Header: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Section: Dark Theme */}
      <div className="bg-[#001529] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8 h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
            <NavbarLogo variant="light" />
          </Link>

          {/* Search Bar: Centered */}
          <div className="flex-1 max-w-2xl relative">
            <div className="flex bg-white rounded-full overflow-hidden shadow-inner">
              <input
                type="text"
                placeholder="Search in NextStore..."
                className="w-full bg-transparent text-navy-900 px-6 py-2.5 outline-none text-sm"
              />
              <button className="bg-orange-500 px-6 hover:bg-orange-600 transition-colors flex items-center justify-center">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Icons: White */}
          <div className="flex items-center gap-6 shrink-0 text-white">
            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition-colors group">
              <div className="p-2 rounded-full border border-white/10 group-hover:border-orange-500 transition-all">
                <User size={20} />
              </div>
              <div className="hidden lg:block text-xs">
                <p className="text-white/60">My Account</p>
                <p className="font-bold">Sign in</p>
              </div>
            </div>
            
            <div className="relative cursor-pointer hover:text-orange-500 transition-colors group">
              <div className="p-2 rounded-full border border-white/10 group-hover:border-orange-500 transition-all">
                <ShoppingCart size={20} />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#001529] shadow-sm">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: White/Light Theme */}
      <div className="bg-[#f8fafc] border-b border-gray-200 h-12">
        <div className="container mx-auto px-4 flex items-center gap-8 h-full text-sm">
          <button className="flex items-center gap-2 font-bold text-navy-900 hover:text-orange-500 transition-colors">
            <Menu size={18} />
            Browse Categories
          </button>
          
          <div className="h-6 w-[1px] bg-gray-200"></div>

          <nav className="flex items-center gap-8">
            <Link to="/" className="font-medium text-gray-600 hover:text-orange-500 transition-colors">Flash Sales</Link>
            <Link to="/" className="font-medium text-gray-600 hover:text-orange-500 transition-colors">Best Sellers</Link>
            <Link to="/about" className="font-medium text-gray-600 hover:text-orange-500 transition-colors">About NextStore</Link>
            <Link to="/contact" className="font-medium text-gray-600 hover:text-orange-500 transition-colors">Support</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
