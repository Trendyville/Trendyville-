
import React from 'react';
import ModeToggle from './ModeToggle';
import { AppMode, AppView } from '../types';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
  mode: AppMode;
  onModeChange: (mode: AppMode) => void;
  view: AppView;
  onViewChange: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onCategoryChange, 
  activeCategory, 
  mode, 
  onModeChange, 
  view, 
  onViewChange 
}) => {
  const categories = [
    { id: 'ALL', label: 'All', icon: 'fa-house' },
    { id: 'BUY', label: 'Buy', icon: 'fa-sign-hanging' },
    { id: 'RENT', label: 'Rent', icon: 'fa-key' },
    { id: 'AIRBNB', label: 'Stay', icon: 'fa-umbrella-beach' },
    { id: 'INVESTMENT', label: 'Invest', icon: 'fa-chart-line' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass shadow-sm border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => {
              onViewChange('BROWSE');
              onCategoryChange('ALL');
            }}
          >
            <div className="bg-indigo-600 p-2.5 rounded-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-100">
              <i className="fa-solid fa-bolt-lightning text-white text-xl"></i>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-800">
              {BRAND_NAME}<span className="text-indigo-600">.</span>
            </span>
          </div>

          {/* Center Mode Toggle - Airbnb style */}
          <div className="hidden lg:block">
            <ModeToggle mode={mode} onToggle={onModeChange} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-1 mr-4">
              {view === 'BROWSE' && categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => onViewChange(view === 'DASHBOARD' ? 'BROWSE' : 'DASHBOARD')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl border-2 transition-all font-bold text-sm ${
                view === 'DASHBOARD' 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                : 'bg-white text-slate-800 border-slate-100 hover:border-slate-300'
              }`}
            >
              <i className={`fa-solid ${view === 'DASHBOARD' ? 'fa-table-columns' : 'fa-user-circle'}`}></i>
              <span>{view === 'DASHBOARD' ? 'Back to Browse' : 'My Dashboard'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
