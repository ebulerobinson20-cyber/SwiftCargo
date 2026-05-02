import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, PackageSearch } from 'lucide-react';

const STATS = [
  { label: 'Packages Delivered', value: '12M+', icon: <PackageSearch className="h-6 w-6 text-blue-500" /> },
  { label: 'Countries Covered', value: '190+', icon: <Zap className="h-6 w-6 text-orange-500" /> },
  { label: 'Business Partners', value: '10K+', icon: <Award className="h-6 w-6 text-green-500" /> },
  { label: 'On-time Delivery', value: '99.9%', icon: <ShieldCheck className="h-6 w-6 text-purple-500" /> },
];

export default function TrustStrip() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">World-Class Logistics Integrity</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
            <span className="text-2xl font-black italic">GLOBAL_EX</span>
            <span className="text-2xl font-black tracking-tighter italic underline decoration-blue-500">NETSPEED</span>
            <span className="text-2xl font-black tracking-tight italic">AMORC_SHIP</span>
            <span className="text-2xl font-black italic uppercase">Veloce</span>
            <span className="text-2xl font-black tracking-widest italic uppercase">PortHub</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 border border-slate-50 rounded-3xl hover:border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className="inline-flex p-3 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors mb-4 ring-1 ring-slate-100">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
