
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import PropertyCard from './components/PropertyCard';
import ChatWidget from './components/ChatWidget';
import Dashboard from './components/Dashboard';
import { PROPERTIES, BRAND_NAME } from './constants';
import { AppMode, AppView } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [mode, setMode] = useState<AppMode>('TRAVELER');
  const [view, setView] = useState<AppView>('BROWSE');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter properties based on active category
  const filteredProperties = useMemo(() => {
    if (activeCategory === 'ALL') return PROPERTIES;
    return PROPERTIES.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Handle mode change with a "3D" flip effect simulation
  const handleModeChange = (newMode: AppMode) => {
    if (newMode === mode) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(newMode);
      // Auto-switch categories if appropriate
      if (newMode === 'INVESTOR') {
        setActiveCategory('INVESTMENT');
      } else {
        setActiveCategory('ALL');
      }
      setIsTransitioning(false);
    }, 400); // Duration of the "3D" flip transition
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ${mode === 'INVESTOR' ? 'bg-slate-50' : 'bg-white'}`}>
      <Navbar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory}
        mode={mode}
        onModeChange={handleModeChange}
        view={view}
        onViewChange={setView}
      />

      <div className={`flex-1 transition-all duration-500 origin-center ${isTransitioning ? 'scale-95 opacity-0 blur-lg rotate-y-180' : 'scale-100 opacity-100 blur-0'}`} style={{ perspective: '1000px' }}>
        {view === 'DASHBOARD' ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Dashboard mode={mode} />
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative h-[460px] flex items-center justify-center overflow-hidden m-4 rounded-[40px] shadow-2xl">
              <div className="absolute inset-0 z-0 scale-105">
                <img
                  src={mode === 'INVESTOR' 
                    ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
                    : "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80"
                  }
                  alt="Modern Vibe"
                  className="w-full h-full object-cover filter brightness-[0.45] transition-all duration-1000"
                />
              </div>
              <div className="relative z-10 text-center px-4 max-w-4xl animate-in fade-in zoom-in duration-700">
                <span className="inline-block px-4 py-1.5 bg-indigo-500/20 backdrop-blur-md text-indigo-300 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 border border-white/10">
                  {mode === 'INVESTOR' ? 'Portfolio Excellence' : 'Urban Lifestyle'}
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                  {mode === 'INVESTOR' 
                    ? 'Scale Your Wealth' 
                    : 'Your City, Your Way'}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                  {mode === 'INVESTOR' 
                    ? 'Intelligent real estate investment tools for the modern high-yield seeker.'
                    : 'Discover premium short-term stays, chic rentals, and modern homes for sale.'}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-indigo-50 transition-all transform hover:-translate-y-1 shadow-2xl">
                    Get Started
                  </button>
                  <button className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
                <div className="animate-in slide-in-from-left duration-500">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                    {activeCategory === 'ALL' ? 'Handpicked Gems' : 
                     activeCategory === 'INVESTMENT' ? 'Strategic Yields' :
                     activeCategory === 'AIRBNB' ? 'Featured Escapes' :
                     activeCategory === 'BUY' ? 'Real Estate Gold' :
                     'Urban Rentals'}
                  </h2>
                  <p className="text-slate-500 mt-2 font-medium">Verified properties with {BRAND_NAME} standards.</p>
                </div>
                <div className="flex space-x-3">
                  <button className="p-3 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 transition-colors text-slate-600">
                    <i className="fa-solid fa-sliders"></i>
                  </button>
                  <select className="bg-white border border-slate-200 rounded-2xl px-5 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow shadow-sm">
                    <option>Sort: Trending</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredProperties.map((property, idx) => (
                    <div key={property.id} className="animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${idx * 100}ms` }}>
                      <PropertyCard property={property} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-slate-50 rounded-[40px] border-4 border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fa-solid fa-ghost text-slate-400 text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">Tumbleweeds...</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto mt-2">No properties match this category yet. Ask our AI for help!</p>
                </div>
              )}
            </main>
          </>
        )}
      </div>

      <footer className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div>
               <div className="flex items-center space-x-2 mb-8">
                <div className="bg-indigo-600 p-3 rounded-2xl">
                  <i className="fa-solid fa-bolt-lightning text-white text-2xl"></i>
                </div>
                <span className="text-3xl font-black tracking-tighter text-white">
                  {BRAND_NAME}<span className="text-indigo-500">.</span>
                </span>
              </div>
              <p className="text-slate-400 text-xl max-w-md leading-relaxed">
                The global platform for elite urban real estate and data-driven property investment.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <FooterGroup title="Platform" links={['Explore', 'Investment', 'Booking', 'Dashboard']} />
              <FooterGroup title="Company" links={['About Us', 'Careers', 'Contact', 'Journal']} />
              <FooterGroup title="Support" links={['Help Center', 'Safety', 'Legal', 'Privacy']} />
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2024 {BRAND_NAME} Digital Realty. Worldwide.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

const FooterGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">{title}</h4>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors font-medium">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
