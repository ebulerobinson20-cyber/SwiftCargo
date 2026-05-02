import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    company: 'Director of Ops, CloudRetail',
    content: "SwiftCargo transformed our international distribution. Their real-time tracking is actual GPS-level precision, not just state updates. We've seen a 40% reduction in customer support tickets regarding delivery since switching.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    company: 'CEO, Horizon Manufacturing',
    content: "Handling sensitive medical components requires extreme care. SwiftCargo's specialized white-glove service is the only one I trust with our hardware. On-time, every time, without a single damaged unit in 12 months.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    company: 'Logistics Manager, GlobalTrade Co',
    content: "The enterprise portal is incredibly intuitive. Getting a quote and booking a multi-modal freight shipment takes under 5 minutes now. It used to take half a day and three phone calls with our old carrier.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">See why the world's most demanding enterprises rely on SwiftCargo for their global logistics operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="absolute -top-4 -left-4 h-12 w-12 text-blue-500/10" />
                  <p className="text-lg text-slate-700 leading-relaxed relative z-10 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border-2 border-blue-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 underline decoration-blue-500 decoration-2 underline-offset-4">{testimonial.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonial.company}</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-blue-500 ml-auto opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
