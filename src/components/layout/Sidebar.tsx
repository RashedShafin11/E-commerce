import React from 'react';
import * as LucideIcons from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../data';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isMobile }) => {
  const sidebarContent = (
    <div className={`${isMobile ? 'h-full flex flex-col' : ''}`}>
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-grey-100 bg-navy-900 text-white">
          <span className="font-black text-lg">Browse Categories</span>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg">
            <X size={24} />
          </button>
        </div>
      )}
      <nav className="flex-1 overflow-y-auto no-scrollbar py-2">
        {CATEGORIES.map((category) => {
          const IconComponent = (LucideIcons as any)[category.icon];
          const categoryUrl = `/category/${encodeURIComponent(category.name)}`;
          
          return (
            <div key={category.id} className="group/item relative">
              <NavLink 
                to={categoryUrl}
                onClick={isMobile ? onClose : undefined}
                className={({ isActive }) => 
                  `flex items-center justify-between px-4 py-3 cursor-pointer transition-all border-l-4 ${
                    isActive 
                      ? 'bg-orange-50 border-orange-500 text-orange-500' 
                      : 'hover:bg-grey-50 border-transparent hover:border-grey-200'
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

              {/* Subcategories - Only for Desktop or Expandable on Mobile (simplified for now) */}
              {!isMobile && category.subcategories && (
                <div className="hidden lg:group-hover/item:block absolute top-0 left-full w-64 bg-white border border-grey-200 rounded-r-lg shadow-lg z-50 min-h-full">
                  <div className="p-4">
                    <h3 className="text-navy-900 font-bold mb-3 border-b border-grey-100 pb-2">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub, idx) => (
                        <li key={idx}>
                          <NavLink 
                            to={`${categoryUrl}?sub=${encodeURIComponent(sub)}`}
                            className="text-sm text-grey-200 hover:text-orange-500 transition-colors block py-1"
                          >
                            {sub}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={onClose}
        />
        {/* Drawer */}
        <aside 
          className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {sidebarContent}
        </aside>
      </>
    );
  }

  return (
    <aside className="w-64 bg-white border border-grey-200 rounded-lg overflow-hidden shadow-sm sticky top-24 h-fit">
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;
