
import React from 'react';
import { PARTNERS } from '../constants';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Meet the Community</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Don't travel solo! Connect with fellow backpackers heading to the same destinations as you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={partner.avatar} 
                  alt={partner.name} 
                  className="w-16 h-16 rounded-2xl object-cover ring-4 ring-orange-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{partner.name}, {partner.age}</h4>
                  <div className="flex items-center gap-1 text-orange-500 font-bold text-xs uppercase tracking-wide">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {partner.plannedDestination}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                "{partner.bio}"
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {partner.interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                    {interest}
                  </span>
                ))}
              </div>

              <button className="w-full py-3 bg-slate-50 hover:bg-orange-500 hover:text-white text-slate-900 rounded-xl font-bold transition-all border border-gray-100">
                Say Hello 👋
              </button>
            </div>
          ))}

          {/* Call to action card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Want to find a partner?</h3>
            <p className="text-orange-100 mb-8 text-sm">Create your traveler profile and start connecting today.</p>
            <button className="px-8 py-3 bg-white text-orange-600 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
