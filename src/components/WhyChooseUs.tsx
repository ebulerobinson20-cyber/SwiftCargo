import React from 'react';
import { motion } from 'motion/react';
import { Shield, Headphones, Globe2, BarChart3, Clock4, DollarSign } from 'lucide-react';

const REASONS = [
  {
    title: 'Fast & Reliable',
    desc: 'Our AI routes ensure the quickest delivery times in the industry.',
    icon: <Clock4 className="h-6 w-6" />,
    color: 'bg-blue-500'
  },
  {
    title: 'Live Tracking',
    desc: 'GPS-grade accuracy for every single shipment, updated every 2 minutes.',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'bg-orange-500'
  },
  {
    title: 'Global Presence',
    desc: 'Warehousing and distribution centers in over 190 countries.',
    icon: <Globe2 className="h-6 w-6" />,
    color: 'bg-green-500'
  },
  {
    title: 'Highest Security',
    desc: 'End-to-end encryption and physical security protocols for all cargo.',
    icon: <Shield className="h-6 w-6" />,
    color: 'bg-indigo-500'
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Upfront quotes that strictly adhere to our price match.',
    icon: <DollarSign className="h-6 w-6" />,
    color: 'bg-emerald-500'
  },
  {
    title: '24/7 Priority Support',
    desc: 'Dedicated account managers and local support in every time zone.',
    icon: <Headphones className="h-6 w-6" />,
    color: 'bg-rose-500'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
              Why Global Brands Choose <br />
              <span className="text-blue-600">SwiftCargo Solutions</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {REASONS.map((reason) => (
                <div key={reason.title} className="p-6 rounded-3xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-slate-100 transition-all">
                  <div className={`inline-flex p-3 rounded-2xl text-white mb-4 ${reason.color}`}>
                    {reason.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200" 
              alt="Logistics Operation"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            {/* Real Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl max-w-xs">
              <p className="text-5xl font-black mb-2">99.9%</p>
              <p className="font-bold text-blue-100 uppercase tracking-[0.2em] text-xs mb-4">On-Time Performance</p>
              <p className="text-sm opacity-80 decoration-blue-300 underline underline-offset-4">
                Audited by Global Logistics Standards Agency 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
