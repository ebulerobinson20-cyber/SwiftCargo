import React from 'react';
import { motion } from 'motion/react';
import { Globe, Map, Navigation, Ship, Plane } from 'lucide-react';

export default function Coverage() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">
              <Navigation className="h-4 w-4" />
              <span>Global Reach</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-6 leading-tight">
              A Global Logistics Network <br />
              <span className="text-blue-500">That Never Sleeps</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Our infrastructure spans 190+ countries, with 500+ distribution centers 
              and strategic hubs at every major global shipping artery. Whether it's 
              the heart of London or a remote village in the Andes, we're there.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-white mb-1">500+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Hubs</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-1">10K+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Routes</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-1">190+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white mb-1">24/7</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Global Ops</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              {/* Spinning Globe Effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Globe className="h-full w-full text-blue-500/20 animate-spin-slow" strokeWidth={0.5} />
                
                {/* Active Hub Points */}
                {[
                  { top: '20%', left: '30%', color: 'bg-blue-400' },
                  { top: '40%', left: '70%', color: 'bg-orange-400' },
                  { top: '60%', left: '25%', color: 'bg-green-400' },
                  { top: '75%', left: '55%', color: 'bg-rose-400' },
                  { top: '30%', left: '80%', color: 'bg-indigo-400' },
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    style={{ top: point.top, left: point.left }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className={`absolute h-3 w-3 ${point.color} rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
                  />
                ))}

                {/* Shipping Vessel Icons */}
                <div className="absolute top-[15%] left-[60%] flex items-center space-x-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <Plane className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Flight SC-102</span>
                </div>
                <div className="absolute bottom-[20%] left-[40%] flex items-center space-x-2 bg-white/5 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <Ship className="h-4 w-4 text-blue-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Vessel ATLAS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
