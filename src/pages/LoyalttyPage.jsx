import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Testimonials } from '../sections/Testimonials';
import { Integration } from '../sections/Integration';
import { TryToday } from '../sections/TryToday';
import { Footer } from '../sections/Footer';
import { Statistics } from '../sections/Statistics';
import Benefit from '../sections/Benefit';
import CampaignCarousel from '../sections/CampaignCarousel';
import HowItWorks from '../sections/HowItWorks';
import TermCondition from '../sections/TermSection/TermCondition';


export function LoyalttyPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Benefit />
      <TryToday />
      <Footer />
    </div>
  );
}