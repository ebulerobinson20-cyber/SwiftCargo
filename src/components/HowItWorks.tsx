import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, ArrowRightLeft, Ship } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Book Shipment',
    desc: 'Request a quote or book directly through our intuitive enterprise portal or mobile app.',
    icon: <ClipboardList className="h-10 w-10 text-blue-600" />
  },
  {
    number: '02',
    title: 'Track in Real-Time',
    desc: 'Monitor your cargo 24/7 with our multi-modal tracking system and AI arrival predictions.',
    icon: <ArrowRightLeft className="h-10 w-10 text-orange-500" />
  },
  {
    number: '03',
    title: 'Delivered Safely',
    desc: 'Receive your goods at the final destination with full proof of delivery and zero delays.',
    icon: <Ship className="h-10 w-10 text-green-600" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-white mb-4">Streamlined Shipping Flow</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Three simple steps to move your cargo from anywhere to everywhere.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] border-t-2 border-dashed border-white/10" />

          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              <div className="mb-8 relative inline-block">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center shadow-2xl relative z-10 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center z-20 text-xs border-4 border-slate-900">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
