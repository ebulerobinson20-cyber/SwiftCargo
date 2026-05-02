import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Package, CheckCircle2, Truck, AlertCircle, Loader2 } from 'lucide-react';
import { ShipmentStatus } from '../types';

const MOCK_SHIPMENTS: Record<string, ShipmentStatus> = {
  'SC-892401': {
    trackingNumber: 'SC-892401',
    status: 'In Transit',
    origin: 'New York, USA',
    destination: 'London, UK',
    estimatedDelivery: 'May 15, 2026',
    lastUpdate: '2 hours ago',
    location: 'Paris Logistics Hub'
  },
  'SC-112233': {
    trackingNumber: 'SC-112233',
    status: 'Delivered',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    estimatedDelivery: 'May 02, 2026',
    lastUpdate: '1 day ago',
    location: 'Final Destination, CA'
  }
};

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<ShipmentStatus | null>(null);
  const [error, setError] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsSearching(true);
    setResult(null);
    setError(false);

    // Simulate API call
    setTimeout(() => {
      const found = MOCK_SHIPMENTS[trackingNumber.toUpperCase()];
      if (found) {
        setResult(found);
      } else {
        setError(true);
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section className="relative z-20 -mt-12 mb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Track Your Shipment</h2>
              <p className="text-slate-500">Enter your tracking number for real-time status and delivery updates.</p>
            </div>

            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="e.g. SC-892401"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-lg"
                />
              </div>
              <button 
                disabled={isSearching}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center min-w-[160px] disabled:opacity-70"
              >
                {isSearching ? <Loader2 className="animate-spin h-6 w-6" /> : 'Track Now'}
              </button>
            </form>

            <AnimatePresence mode="wait">
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-12 py-10 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-3xl"
                >
                  <Loader2 className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                  <p className="text-slate-500 font-medium">Connecting to global network...</p>
                </motion.div>
              )}

              {result && !isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12"
                >
                  <div className="border border-slate-100 rounded-3xl p-6 md:p-8 bg-slate-50">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 text-blue-600 font-mono text-sm font-bold mb-1">
                          <Package className="h-4 w-4" />
                          <span>{result.trackingNumber}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">In Transit to Destination</h3>
                      </div>
                      <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">
                        {result.status}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-6 w-6 text-slate-400 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Origin</p>
                          <p className="font-bold text-slate-900">{result.origin}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-6 w-6 text-blue-600 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Destination</p>
                          <p className="font-bold text-slate-900">{result.destination}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Current Location</p>
                          <p className="font-bold text-slate-900">{result.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-slate-200 rounded-full mb-4">
                      <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-600 rounded-full" />
                      <div className="absolute left-2/3 top-1/2 -translate-y-1/2 h-4 w-4 bg-white border-4 border-blue-600 rounded-full shadow-lg" />
                    </div>

                    <div className="flex justify-between text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                      <span>Pick Up</span>
                      <span className="text-blue-600">Transit</span>
                      <span>Delivery</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {error && !isSearching && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-12 p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center space-x-4 text-red-700"
                >
                  <AlertCircle className="h-8 w-8 shrink-0" />
                  <div>
                    <p className="font-bold text-lg">Tracking number not found</p>
                    <p className="text-sm opacity-90">Please check your number and try again. Example valid number: <button onClick={() => setTrackingNumber('SC-892401')} className="underline font-mono">SC-892401</button></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
