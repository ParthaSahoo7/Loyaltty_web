import React from 'react';
import { Navbar } from '../navigation/Navbar';
import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Testimonials } from '../sections/Testimonials';
import { Integration } from '../sections/Integration';
import { TryToday } from '../sections/TryToday';
import { Footer } from '../sections/Footer';

export function LoyalttyPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Integration />
      <TryToday />
      <Footer />
    </div>
  );
}