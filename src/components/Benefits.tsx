import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Headphones, BarChart, Globe, Landmark } from 'lucide-react';

const BENEFITS = [
  {
    title: 'Same-Day Dispatch',
    desc: 'Orders processed before 4 PM are guaranteed to leave our hubs the same evening.',
    icon: <Zap className="h-6 w-6 text-orange-500" />
  },
  {
    title: 'Customs Clearance Support',
    desc: 'Automated documentation and local experts to navigate complex international trade laws.',
    icon: <Landmark className="h-6 w-6 text-blue-500" />
  },
  {
    title: 'Full Insurance Coverage',
    desc: 'Comprehensive protection for your cargo against theft, damage, or logistical delays.',
    icon: <ShieldCheck className="h-6 w-6 text-green-500" />
  },
  {
    title: 'Live Delivery Updates',
    desc: 'Hyper-accurate arrival predictions powered by our proprietary AI routing engine.',
    icon: <BarChart className="h-6 w-6 text-purple-500" />
  },
  {
    title: 'Dedicated Management',
    desc: 'Enterprise accounts receive a personal logistics architect for network optimization.',
    icon: <Headphones className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Infinite Scalability',
    desc: 'Seamlessly shift from 10 parcels to 10,000 without changing your integration.',
    icon: <Globe className="h-6 w-6 text-indigo-500" />
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
            <div className="h-1 w-8 bg-blue-600 rounded-full" />
            <span>Operational Excellence</span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Premium Logistic Advantages</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We don't just ship boxes; we build a competitive edge for your supply chain 
            through precision engineering and total transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex space-x-5 group"
            >
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all">
                {benefit.icon}
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
