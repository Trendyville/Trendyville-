
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  const priceSuffix = property.category === 'RENT' ? '/mo' : property.category === 'AIRBNB' ? '/night' : '';

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
            property.category === 'INVESTMENT' ? 'bg-amber-100 text-amber-700' :
            property.category === 'BUY' ? 'bg-indigo-100 text-indigo-700' :
            property.category === 'RENT' ? 'bg-emerald-100 text-emerald-700' :
            'bg-sky-100 text-sky-700'
          }`}>
            {property.category}
          </span>
        </div>
        {property.roi && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-xs font-bold text-amber-600">{property.roi} ROI</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-lg font-bold text-indigo-600 whitespace-nowrap">
            {formattedPrice}<span className="text-xs font-normal text-slate-500">{priceSuffix}</span>
          </p>
        </div>
        
        <p className="text-slate-500 text-sm mb-4 flex items-center">
          <i className="fa-solid fa-location-dot mr-1.5 text-indigo-400"></i>
          {property.location}
        </p>

        <div className="flex items-center space-x-4 mb-6 text-slate-600">
          {property.beds > 0 && (
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-bed mr-2 text-slate-400"></i>
              <span>{property.beds} Beds</span>
            </div>
          )}
          {property.baths > 0 && (
            <div className="flex items-center text-sm">
              <i className="fa-solid fa-bath mr-2 text-slate-400"></i>
              <span>{property.baths} Baths</span>
            </div>
          )}
          <div className="flex items-center text-sm">
            <i className="fa-solid fa-ruler-combined mr-2 text-slate-400"></i>
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <button className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-colors flex items-center justify-center space-x-2">
          <span>View Details</span>
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
