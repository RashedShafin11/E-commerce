import React from 'react';
import * as LucideIcons from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '../../data';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border border-grey-200 rounded-lg overflow-hidden shadow-sm sticky top-24 h-fit">
      <nav>
        {CATEGORIES.map((category) => {
          const IconComponent = (LucideIcons as any)[category.icon];
          const categoryUrl = `/category/${encodeURIComponent(category.name)}`;
          
          return (
            <div key={category.id} className="group/item relative">
              <NavLink 
                to={categoryUrl}
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

              {/* Subcategories (Flyout menu) */}
              {category.subcategories && (
                <div className="hidden group-hover/item:block absolute top-0 left-full w-64 bg-white border border-grey-200 rounded-r-lg shadow-lg z-50 min-h-full">
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
    </aside>
  );
};

export default Sidebar;
