import React from 'react';
import * as LucideIcons from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { CATEGORIES } from '../../data';
import { X, User } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarContent = (
    <div className="h-full flex flex-col bg-white">
      {/* Header of Drawer */}
      <div className="flex flex-col border-b border-gray-100 bg-[#001529] text-white">
        <div className="flex items-center justify-between p-4">
          <span className="font-black text-lg">NextStore</span>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <Link 
          to="/login" 
          onClick={onClose}
          className="flex items-center gap-3 p-6 bg-slate-800/50 hover:bg-slate-800 transition-colors"
        >
          <div className="p-2 rounded-full bg-white/10">
            <User size={24} />
          </div>
          <div>
            <p className="text-xs text-white/60">Welcome!</p>
            <p className="font-black">Sign In / Register</p>
          </div>
        </Link>
      </div>
      
      {/* Category List */}
      <div className="p-4 md:p-6 pb-2">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Product Categories</h3>
      </div>

      <nav className="flex-1 overflow-y-auto no-scrollbar py-2">
        {CATEGORIES.map((category) => {
          const IconComponent = (LucideIcons as any)[category.icon];
          const categoryUrl = `/category/${encodeURIComponent(category.name)}`;
          
          return (
            <div key={category.id} className="group/item relative">
              <NavLink 
                to={categoryUrl}
                onClick={onClose}
                className={({ isActive }) => 
                  `flex items-center justify-between px-6 py-3 cursor-pointer transition-all border-l-4 ${
                    isActive 
                      ? 'bg-orange-50 border-orange-500 text-[#F97316]' 
                      : 'hover:bg-gray-50 border-transparent hover:border-gray-200'
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <div className="transition-colors">
                    {IconComponent && <IconComponent size={18} />}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <LucideIcons.ChevronRight size={14} className="opacity-50" />
              </NavLink>
            </div>
          );
        })}
        
        {/* Quick Links in Drawer */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="p-4 px-6">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" onClick={onClose} className="text-sm font-bold text-gray-700 hover:text-[#F97316]">About Us</Link></li>
              <li><Link to="/contact" onClick={onClose} className="text-sm font-bold text-gray-700 hover:text-[#F97316]">Contact Us</Link></li>
              <li><Link to="/privacy" onClick={onClose} className="text-sm font-bold text-gray-700 hover:text-[#F97316]">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <aside 
        className={`fixed top-0 left-0 h-full w-[300px] z-[70] shadow-2xl transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
