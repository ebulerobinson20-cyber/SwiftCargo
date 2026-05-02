import React from 'react';
import { Ship, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Send, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ['Express Shipping', 'Heavy Cargo', 'Warehousing', 'Customs Support', 'E-commerce Solutions'],
    Resources: ['Track Shipment', 'Request Quote', 'Shipping APIs', 'Global Hubs', 'Service Alerts'],
    Company: ['About Us', 'Sustainability', 'Carriers', 'Newsroom', 'Careers'],
    Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Settings', 'Insurance Terms', 'Trade Compliance']
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <Ship className="h-10 w-10 text-blue-500" />
              <span className="text-2xl font-black tracking-tight">SwiftCargo</span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Pioneering the next generation of global logistics through hyper-connected 
              infrastructure and real-time AI intelligence. Delivering excellence since 1998.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-bold">1-800-SWIFT-GO</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-bold">global@swiftcargo.com</span>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{title}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-6">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center space-x-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>© {currentYear} SwiftCargo Logistics Inc.</span>
              <div className="hidden md:flex items-center space-x-2 border-l border-white/10 pl-8">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>Global English (EN-US)</span>
              </div>
            </div>

            <div className="relative w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="w-full md:w-64 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
