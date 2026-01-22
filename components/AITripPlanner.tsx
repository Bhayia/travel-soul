
import React, { useState } from 'react';
import { db } from '../db';
import { tripItineraries } from '../db/schema';
import { AIPlanResponse } from '../types';

const AITripPlanner: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(3);
  const [vibe, setVibe] = useState('adventurous');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIPlanResponse | null>(null);

  const handleGenerate = async () => {
    alert("AI Trip Planner is currently disabled. Please contact support or check back later.");
  };

  return (
    <section id="ai-planner" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 font-bold text-xs uppercase tracking-widest mb-6">
              Powered by Gemini AI
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Get Your Personal <br />
              <span className="text-orange-500 italic">Smart Itinerary</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Tell us where you want to go and how you like to travel. Our AI will craft a perfect day-by-day plan just for you.
            </p>

            <div className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Leh Ladakh, Gokarna"
                  className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Duration (Days)</label>
                  <select
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-orange-500 outline-none"
                  >
                    {[1, 2, 3, 4, 5, 7, 10].map(d => <option key={d} value={d}>{d} Days</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Vibe</label>
                  <select
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value)}
                    className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-orange-500 outline-none"
                  >
                    <option value="adventurous">Adventurous</option>
                    <option value="laid-back">Laid-back</option>
                    <option value="cultural">Cultural</option>
                    <option value="budget">Budget-Friendly</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading || !destination}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Thinking...
                  </>
                ) : 'Generate Itinerary'}
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-3xl border border-white/5 min-h-[500px] max-h-[600px] overflow-y-auto p-8 custom-scrollbar">
            {result ? (
              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Your {destination} Trip</h3>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>Budget: <span className="text-orange-400 font-bold">{result.estimatedBudget}</span></span>
                  </div>
                </div>

                <div className="space-y-6">
                  {result.itinerary.map((item) => (
                    <div key={item.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center font-bold">
                        {item.day}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-white mb-3">Essential Gear:</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.essentialGear.map((gear, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs text-slate-300">
                        {gear}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-slate-500 font-medium">Plan details will appear here</h3>
                <p className="text-slate-600 text-sm">Select options and generate to see the magic</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITripPlanner;
