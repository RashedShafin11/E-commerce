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
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Bar: Dark Navy (#001529) */}
      <div className="bg-[#001529] py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <NavbarLogo variant="light" />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="flex bg-white rounded-full overflow-hidden w-full shadow-inner">
              <input
                type="text"
                placeholder="Search NextStore..."
                className="w-full px-6 py-2.5 outline-none text-sm text-gray-900"
              />
              <button className="bg-[#F97316] px-6 text-white hover:bg-[#EA580C] transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* User & Cart */}
          <div className="flex items-center gap-4 text-white">
            <button className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={24} />
            </button>
            <Link to="/login" className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
              <User size={22} />
              <div className="hidden lg:block text-xs">
                <p className="opacity-60">Hello, Sign in</p>
                <p className="font-bold">My Account</p>
              </div>
            </Link>
            <Link to="/" className="relative p-2">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#F97316] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#001529]">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Global Category Trigger */}
      <div className="bg-white border-b border-gray-200 h-12">
        <div className="container mx-auto px-4 flex items-center h-full">
          <button 
            onClick={onMenuClick}
            className="flex items-center gap-2 px-4 h-full font-black text-gray-900 hover:text-[#F97316] hover:bg-gray-50 transition-all border-r border-gray-100"
          >
            <Menu size={20} /> 
            <span className="text-sm uppercase tracking-widest">Browse Categories</span>
          </button>

          <nav className="flex items-center gap-8 px-6 text-sm font-bold text-gray-600">
            <Link to="/products" className="hover:text-[#F97316]">Flash Sales</Link>
            <Link to="/about" className="hover:text-[#F97316]">About Us</Link>
            <Link to="/contact" className="hover:text-[#F97316]">Support</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
