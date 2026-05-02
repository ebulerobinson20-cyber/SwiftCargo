import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'How long does international shipping typically take?',
    answer: 'Standard international shipping takes 5-10 business days. Our express service reduces this to 1-3 business days across major global routes. All timeframes include customs clearance processing.'
  },
  {
    id: 'q2',
    question: 'Can I track my shipment in real-time on mobile?',
    answer: 'Yes, our mobile-optimized portal and SwiftCargo app provide second-by-second updates via GPS. You can also opt-in for SMS and email alerts for every milestone.'
  },
  {
    id: 'q3',
    question: 'Are high-value shipments insured by default?',
    answer: 'All shipments include standard liability coverage. For high-value goods, we offer "SwiftSecure" comprehensive insurance that covers up to 110% of the declared invoice value.'
  },
  {
    id: 'q4',
    question: 'What items are considered "restricted" for shipping?',
    answer: 'Restricted items vary by destination country. Generally, hazardous materials, perishable foods without cold-chain booking, and illegal substances are prohibited. Contact our hazardous materials team for specific guidance.'
  },
  {
    id: 'q5',
    question: 'How do I request a volume discount for business?',
    answer: 'Businesses shipping more than 20 parcels per month qualify for our Enterprise tier. Use the "Get a Quote" form and select "Business/Enterprise" to start the onboarding process.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-blue-50 rounded-2xl text-blue-600 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Logistics FAQ</h2>
          <p className="text-slate-600">Quick answers to common questions about our shipping and tracking services.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 ${
                openId === faq.id ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left px-6 py-6 flex justify-between items-center group"
              >
                <span className={`text-lg font-bold ${openId === faq.id ? 'text-blue-600' : 'text-slate-900'} group-hover:text-blue-500 transition-colors`}>
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <Minus className="h-5 w-5 text-blue-600 shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-blue-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-600 font-medium mb-4">Still have questions about your specific shipment?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/10">
            Contact Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
