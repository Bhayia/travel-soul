
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TripCard from './components/TripCard';
import AITripPlanner from './components/AITripPlanner';
import Community from './components/Community';
import { TRIPS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Featured Trips Section */}
        <section id="trips" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3">Trending Trips</div>
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Experience India Like <br /> Never Before</h2>
            </div>
            <div className="flex gap-2">
              <button className="bg-slate-100 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-slate-200 transition-colors">Treks</button>
              <button className="bg-slate-100 text-slate-900 px-5 py-2 rounded-full font-bold hover:bg-slate-200 transition-colors">Backpacking</button>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold shadow-lg shadow-orange-500/20">All Trips</button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRIPS.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=80" 
                    alt="Travel Soul Community" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-orange-500 p-8 rounded-3xl hidden md:block shadow-xl">
                  <p className="text-4xl font-black text-white mb-1">5.0k+</p>
                  <p className="text-orange-100 font-bold text-sm uppercase tracking-wider">Soulful Journeys</p>
                </div>
              </div>
              <div>
                <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3">Our Story</div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">We are More Than <br /> Just a Travel Agency</h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Travel Soul was born out of a desire to create a space where backpackers and solo travelers could find more than just a destination. We believe in the power of connections, the magic of the unknown, and the growth that happens when you step out of your comfort zone.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-10">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Sustainable Travel</h4>
                    <p className="text-slate-500 text-sm">We prioritize local communities and eco-friendly practices in every trip.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Safe Community</h4>
                    <p className="text-slate-500 text-sm">Verified partners and solo-friendly itineraries for peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Wall Section */}
        <section className="bg-slate-50 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-center justify-between">
            <h2 className="text-3xl font-bold">The Wall of <span className="text-orange-500">Memories</span></h2>
            <button className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View Instagram Feed
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          <div className="flex gap-4 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                 <img 
                    src={`https://picsum.photos/seed/${i + 20}/400/400`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                    alt="Memory"
                  />
               </div>
             ))}
          </div>
        </section>

        <AITripPlanner />

        <Community />

        {/* Join Now / Newsletter Section */}
        <section id="join" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left shadow-2xl shadow-slate-900/40">
              <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover opacity-50"
                  alt="CTA decorative"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
              </div>
              
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Join 10,000+ <br /> Happy Travelers
                </h2>
                <p className="text-slate-400 text-lg mb-10">
                  Get exclusive access to early bird discounts, hidden gems, and travel tips directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/10 border border-white/20 px-6 py-4 rounded-2xl text-white outline-none focus:ring-2 focus:ring-orange-500 sm:flex-1"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-orange-500/20">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-sm">TS</span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Travel<span className="text-orange-500">Soul</span>
                </span>
              </div>
              <p className="text-slate-500 max-sm leading-relaxed mb-6">
                Travel Soul is India's premier community-led travel platform focusing on sustainable and soulful backpacking experiences.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map(social => (
                  <div key={social} className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-colors cursor-pointer">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current mask-no-repeat" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#trips" className="hover:text-orange-500">Upcoming Trips</a></li>
                <li><a href="#community" className="hover:text-orange-500">Community</a></li>
                <li><a href="#ai-planner" className="hover:text-orange-500">AI Planner</a></li>
                <li><a href="#about" className="hover:text-orange-500">Our Story</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-orange-500">Refund Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Safety Guidelines</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© 2024 Travel Soul Community. All rights reserved.</p>
            <p>Made with ❤️ for Solo Travelers</p>
          </div>
        </div>
      </footer>
      
      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <a href="#join" className="bg-orange-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.4);
        }
      `}</style>
    </div>
  );
};

export default App;
