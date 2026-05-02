import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Package, User, Mail, Loader2, CheckCircle2 } from 'lucide-react';

export default function QuoteRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <section id="quote" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-blue-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">Get a Custom Shipping Quote</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Tell us about your shipment and our logistics experts will provide 
                a tailored quote within 2 working hours.
              </p>
              <ul className="space-y-4">
                {[
                  'Volume Discounts Available',
                  'Enterprise Custom Rates',
                  'Instant Approval Processing',
                  'Insurance Consultation Included'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 bg-white/10 p-6 rounded-2xl border border-white/10">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">Support Hotline</p>
              <p className="text-2xl font-black">1-800-SWIFT-GO</p>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
                <p className="text-slate-600 max-w-sm">
                  Our team is now calculating your optimized route and pricing. 
                  Expect an email within 2 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-blue-600 font-bold underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input required type="text" placeholder="John Carter" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input required type="email" placeholder="john@example.com" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Origin City</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input required type="text" placeholder="New York, NY" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Destination City</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input required type="text" placeholder="London, UK" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Shipment Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none bg-white">
                      <option>Express Parcel</option>
                      <option>Air Freight</option>
                      <option>Sea Cargo</option>
                      <option>Land Transport</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Estimated Weight (kg)</label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input required type="number" placeholder="25" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" />
                    </div>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center space-x-2 shadow-xl shadow-orange-500/20"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin h-6 w-6" />
                  ) : (
                    <>
                      <span>Get My Free Quote</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">No credit card required • Secure data handling</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
