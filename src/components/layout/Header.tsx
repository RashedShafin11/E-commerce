import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import NavbarLogo from './NavbarLogo';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Section: Dark Theme */}
      <div className="bg-[#001529] py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4 md:gap-8 h-10 md:h-12">
          {/* Mobile: Hamburger + Logo */}
          <div className="flex items-center gap-3 md:gap-0">
            <button 
              onClick={onMenuClick}
              className="lg:hidden text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">
              <NavbarLogo variant="light" className="scale-75 md:scale-100 origin-left" />
            </Link>
          </div>

          {/* Search Bar: Desktop (Centered) */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <div className="flex bg-white rounded-full overflow-hidden shadow-inner w-full">
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

          {/* Icons & Actions */}
          <div className="flex items-center gap-3 md:gap-6 shrink-0 text-white">
            {/* Mobile: Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>

            <div className="flex items-center gap-2 cursor-pointer hover:text-orange-500 transition-colors group">
              <div className="p-1.5 md:p-2 rounded-full border border-white/10 group-hover:border-orange-500 transition-all">
                <User size={18} className="md:size-5" />
              </div>
              <div className="hidden lg:block text-xs">
                <p className="text-white/60">My Account</p>
                <p className="font-bold">Sign in</p>
              </div>
            </div>
            
            <div className="relative cursor-pointer hover:text-orange-500 transition-colors group">
              <div className="p-1.5 md:p-2 rounded-full border border-white/10 group-hover:border-orange-500 transition-all">
                <ShoppingCart size={18} className="md:size-5" />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-[#001529] shadow-sm">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar Overlay */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#001529] p-4 shadow-xl border-t border-white/5 animate-in slide-in-from-top duration-300">
            <div className="flex bg-white rounded-xl overflow-hidden shadow-inner">
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-navy-900 px-4 py-3 outline-none text-sm"
              />
              <button className="bg-orange-500 px-4 hover:bg-orange-600 transition-colors flex items-center justify-center text-white">
                <Search size={20} />
              </button>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="bg-grey-100 px-4 flex items-center justify-center text-navy-900"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section: White/Light Theme (Desktop only scroll) */}
      <div className="bg-[#f8fafc] border-b border-gray-200 h-10 md:h-12 overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 flex items-center gap-4 md:gap-8 h-full text-xs md:text-sm whitespace-nowrap">
          <button className="hidden lg:flex items-center gap-2 font-bold text-navy-900 hover:text-orange-500 transition-colors">
            <Menu size={18} />
            Browse Categories
          </button>
          
          <div className="hidden lg:block h-6 w-[1px] bg-gray-200"></div>

          <nav className="flex items-center gap-4 md:gap-8">
            <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}>
              Flash Sales
            </Link>
            <Link to="/" className="font-medium text-gray-600 hover:text-orange-500 transition-colors">Best Sellers</Link>
            <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}>
              About NextStore
            </Link>
            <Link to="/contact" className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}>
              Support
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
