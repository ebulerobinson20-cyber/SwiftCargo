import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, LayoutGrid, Factory, Stethoscope, Car, Building2 } from 'lucide-react';
import { Industry } from '../types';

const INDUSTRIES: Industry[] = [
  {
    id: 'ecom',
    title: 'E-commerce',
    description: 'High-velocity fulfillment and automated returns for online retailers.',
    iconName: 'ShoppingCart',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'retail',
    title: 'Retail & Fashion',
    description: 'Omnichannel inventory distribution and seasonal logistics management.',
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mfg',
    title: 'Manufacturing',
    description: 'Just-in-time parts delivery and raw material shipping solutions.',
    iconName: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'health',
    title: 'Healthcare',
    description: 'Cold-chain logistics for pharmaceuticals and medical equipment.',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  }
];

const ICON_MAP: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="h-5 w-5" />,
  LayoutGrid: <LayoutGrid className="h-5 w-5" />,
  Factory: <Factory className="h-5 w-5" />,
  Stethoscope: <Stethoscope className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  Building2: <Building2 className="h-5 w-5" />
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Tailored Industry Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Specific logistics frameworks designed for your industry's unique demands.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={industry.image} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 inline-flex p-3 bg-white/10 backdrop-blur-md rounded-xl text-white w-fit border border-white/20">
                  {ICON_MAP[industry.iconName]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
