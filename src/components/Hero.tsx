import React from 'react';
import { motion } from 'motion/react';
import { Shield, Globe, Clock, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Global Logistics Background"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Next-Gen Logistics Network</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Fast. Secure. <br />
              <span className="text-blue-500">Globally Connected.</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Experience the future of shipping with real-time tracking, AI-powered routing, and 
              a global network that never sleeps. We deliver trust, one package at a time.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center group shadow-lg shadow-orange-500/20">
                Track Shipment
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center group">
                Get a Quote
                <Play className="ml-2 h-4 w-4 fill-white" />
              </button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Trusted user"
                    className="h-10 w-10 rounded-full border-2 border-slate-900"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="text-white font-bold">10,000+</span> businesses worldwide <br /> trust SwiftCargo for their daily shipping.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            {/* Dashboard Mockup Component or Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 backdrop-blur-xl shadow-2xl">
              <div className="h-2 bg-slate-700/50 w-full flex space-x-1.5 p-4 items-center">
                <div className="h-2 w-2 rounded-full bg-red-400/50" />
                <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
                <div className="h-2 w-2 rounded-full bg-green-400/50" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistics Dashboard"
                className="w-full h-auto opacity-90"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating overlays */}
              <div className="absolute top-1/4 -left-6 bg-white rounded-xl p-4 shadow-2xl animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Shipment Status</p>
                    <p className="text-sm font-bold text-slate-900">Passed Customs</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -right-6 bg-blue-600 rounded-xl p-4 shadow-2xl text-white animate-pulse-slow">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] opacity-70 font-bold uppercase">Time to Delivery</p>
                    <p className="text-sm font-bold">14h 23m Remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
