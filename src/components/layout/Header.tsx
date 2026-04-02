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
      {/* Top Section: Dark Navy (#001529) */}
      <div className="bg-[#001529] py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo: NS NextStore with White Text */}
          <Link to="/" className="shrink-0">
            <NavbarLogo variant="light" />
          </Link>

          {/* Desktop Search Bar: Rounded White with Orange Button */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <div className="flex bg-white rounded-full overflow-hidden w-full shadow-inner border border-white/10">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-2.5 outline-none text-sm text-gray-900 placeholder-gray-400"
              />
              <button className="bg-[#F97316] px-6 hover:bg-[#EA580C] transition-colors flex items-center justify-center text-white">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Icons: White Account and Cart */}
          <div className="flex items-center gap-4 md:gap-6 text-white">
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={22} />
            </button>
            
            <Link to="/login" className="flex items-center gap-2 cursor-pointer hover:text-orange-400 group transition-colors">
              <User size={22} />
              <div className="hidden lg:block text-xs">
                <p className="text-white/60">Hello, Sign in</p>
                <p className="font-bold">My Account</p>
              </div>
            </Link>

            <Link to="/" className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-[#F97316] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#001529]">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Toggle Overlay */}
        {isSearchOpen && (
          <div className="md:hidden p-4 bg-[#001529] border-t border-white/5 animate-in slide-in-from-top duration-300">
            <div className="flex bg-white rounded-xl overflow-hidden shadow-xl">
              <input autoFocus type="text" placeholder="Search..." className="w-full px-4 py-3 outline-none text-sm text-gray-900" />
              <button className="bg-[#F97316] px-4 text-white"><Search size={18} /></button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section: White/Light Theme */}
      <div className="bg-white border-b border-gray-200 h-12">
        <div className="container mx-auto px-4 flex items-center h-full">
          {/* Universal "Browse Categories" Button */}
          <button 
            onClick={onMenuClick}
            className="flex items-center gap-2 px-4 h-full font-black text-gray-900 hover:text-[#F97316] hover:bg-gray-50 transition-all border-r border-gray-100"
          >
            <Menu size={20} /> 
            <span className="text-sm uppercase tracking-widest">Browse Categories</span>
          </button>

          <nav className="flex items-center gap-6 md:gap-8 px-6 text-xs md:text-sm font-bold text-gray-600 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link to="/" className="hover:text-[#F97316] transition-colors uppercase tracking-wider">Flash Sales</Link>
            <Link to="/about" className={`hover:text-[#F97316] transition-colors uppercase tracking-wider ${location.pathname === '/about' ? 'text-[#F97316]' : ''}`}>About Us</Link>
            <Link to="/contact" className={`hover:text-[#F97316] transition-colors uppercase tracking-wider ${location.pathname === '/contact' ? 'text-[#F97316]' : ''}`}>Support</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
