import React from 'react';
import { motion } from 'motion/react';
import { Ship, ArrowRight, Headphones, Search } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-[3rem] overflow-hidden relative shadow-[0_40px_100px_rgba(37,99,235,0.4)]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-950/20 skew-x-[-20deg] transform origin-top pointer-events-none" />
          <Ship className="absolute -bottom-20 -right-20 h-96 w-96 text-white/5 pointer-events-none rotate-12" />

          <div className="p-12 md:p-24 relative z-10 text-center md:text-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to Move Your <br />
                  <span className="text-orange-400">Cargo Smarter?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
                  Join 10,000+ businesses who rely on SwiftCargo for high-speed, secure, and globally-connected logistics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2 group h-16">
                    <span>Start Shipping Now</span>
                    <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all flex items-center justify-center space-x-2 h-16">
                    <Search className="h-5 w-5" />
                    <span>Track Package</span>
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex justify-end">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-white max-w-sm">
                  <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center mb-6">
                    <Headphones className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Enterprise Support?</h4>
                  <p className="text-blue-100 mb-8 opacity-80 leading-relaxed">
                    Need a custom enterprise solution or multi-modal shipping framework? 
                    Our logistics architects are ready to design your network.
                  </p>
                  <button className="text-white font-black flex items-center space-x-2 group underline decoration-blue-400 underline-offset-8">
                    <span>Talk to an Expert</span>
                    <ArrowRight className="h-4 w-4 tracking-tighter" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
