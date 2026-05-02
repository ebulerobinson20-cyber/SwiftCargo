import React from 'react';
import { motion } from 'motion/react';
import { Truck, Plane, Ship, Package, Warehouse, Zap, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 'express',
    title: 'Express Delivery',
    description: 'Guaranteed next-day delivery for your time-sensitive shipments within our extensive global network.',
    iconName: 'Zap'
  },
  {
    id: 'int-shipping',
    title: 'International Shipping',
    description: 'Expert cross-border solutions with full customs clearance support and duty management integration.',
    iconName: 'Plane'
  },
  {
    id: 'freight',
    title: 'Freight Forwarding',
    description: 'Scalable sea, air, and land freight solutions for large-scale enterprise cargo and bulk transports.',
    iconName: 'Ship'
  },
  {
    id: 'cargo',
    title: 'Cargo Handling',
    description: 'Specialized handling for fragile, dangerous, or oversized cargo with dedicated white-glove service.',
    iconName: 'Package'
  },
  {
    id: 'warehouse',
    title: 'Warehousing',
    description: 'Smart storage and fulfillment centers globally with real-time inventory management and tracking.',
    iconName: 'Warehouse'
  },
  {
    id: 'last-mile',
    title: 'Last-Mile Delivery',
    description: 'Precise delivery to the final recipient using our optimized local carrier network and AI routing.',
    iconName: 'Truck'
  }
];

const ICON_MAP: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-8 w-8 text-orange-500" />,
  Plane: <Plane className="h-8 w-8 text-blue-500" />,
  Ship: <Ship className="h-8 w-8 text-indigo-500" />,
  Package: <Package className="h-8 w-8 text-emerald-500" />,
  Warehouse: <Warehouse className="h-8 w-8 text-amber-500" />,
  Truck: <Truck className="h-8 w-8 text-rose-500" />
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
              Enterprise Logistics <br />
              <span className="text-blue-600">Built for Modern Speed</span>
            </h2>
            <p className="text-xl text-slate-600">
              One platform, endless shipping possibilities. From local courier runs 
              to global ocean freight, we handle the complexity so you can focus on growth.
            </p>
          </div>
          <button className="flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group">
            View All Services 
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all group"
            >
              <div className="mb-6 inline-flex p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                {ICON_MAP[service.iconName]}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#quote" 
                className="inline-flex items-center text-sm font-black text-blue-600 uppercase tracking-widest hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
