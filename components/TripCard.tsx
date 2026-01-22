
import React from 'react';
import { TripPackage } from '../types';

interface TripCardProps {
  trip: TripPackage;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={trip.imageUrl} 
          alt={trip.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
          <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {trip.rating}
        </div>
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          {trip.tags[0]}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">{trip.title}</h3>
        </div>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {trip.location}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 p-2.5 rounded-xl">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Duration</p>
            <p className="text-sm font-bold text-slate-700">{trip.duration}</p>
          </div>
          <div className="bg-slate-50 p-2.5 rounded-xl">
            <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Starts On</p>
            <p className="text-sm font-bold text-slate-700">{trip.departureDate}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">Starting from</p>
            <p className="text-2xl font-black text-slate-900">₹{trip.price.toLocaleString()}</p>
          </div>
          <button className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-orange-500 transition-colors group/btn">
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
