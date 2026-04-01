import React from 'react';
import * as LucideIcons from 'lucide-react';
import { CATEGORIES } from '../data';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border border-grey-200 rounded-lg overflow-hidden shadow-sm sticky top-24 h-fit">
      <nav>
        {CATEGORIES.map((category) => {
          const IconComponent = (LucideIcons as any)[category.icon];
          return (
            <div key={category.id} className="group/item relative">
              <div className="flex items-center justify-between px-4 py-2 hover:bg-grey-50 cursor-pointer transition-colors group-hover/item:text-orange-500">
                <div className="flex items-center gap-3">
                  <div className="text-navy-700 group-hover/item:text-orange-500">
                    {IconComponent && <IconComponent size={18} />}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <LucideIcons.ChevronRight size={14} className="text-grey-200 group-hover/item:text-orange-500" />
              </div>

              {/* Subcategories (Flyout menu) */}
              {category.subcategories && (
                <div className="hidden group-hover/item:block absolute top-0 left-full w-64 bg-white border border-grey-200 rounded-r-lg shadow-lg z-50 h-full">
                  <div className="p-4">
                    <h3 className="text-navy-900 font-bold mb-3 border-b border-grey-100 pb-2">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub, idx) => (
                        <li key={idx}>
                          <a href="#" className="text-sm text-grey-200 hover:text-orange-500 transition-colors">
                            {sub}
                          </a>
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
