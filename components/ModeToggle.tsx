
import React from 'react';
import { AppMode } from '../types';

interface ModeToggleProps {
  mode: AppMode;
  onToggle: (mode: AppMode) => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="relative flex items-center bg-slate-100 p-1.5 rounded-full shadow-inner border border-slate-200">
      <div 
        className={`absolute h-[85%] w-[48%] bg-white rounded-full shadow-sm transition-all duration-500 ease-out z-0 ${
          mode === 'INVESTOR' ? 'translate-x-[102%]' : 'translate-x-0'
        }`}
      />
      <button
        onClick={() => onToggle('TRAVELER')}
        className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors duration-300 ${
          mode === 'TRAVELER' ? 'text-indigo-600' : 'text-slate-500'
        }`}
      >
        <i className="fa-solid fa-plane-up mr-2"></i>
        Traveler
      </button>
      <button
        onClick={() => onToggle('INVESTOR')}
        className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors duration-300 ${
          mode === 'INVESTOR' ? 'text-indigo-600' : 'text-slate-500'
        }`}
      >
        <i className="fa-solid fa-chart-line mr-2"></i>
        Investor
      </button>
    </div>
  );
};

export default ModeToggle;
