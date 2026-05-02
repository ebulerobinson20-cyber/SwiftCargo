/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrackingSection from './components/TrackingSection';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import QuoteRequest from './components/QuoteRequest';
import Benefits from './components/Benefits';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrackingSection />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Industries />
        <QuoteRequest />
        <Benefits />
        <Coverage />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
