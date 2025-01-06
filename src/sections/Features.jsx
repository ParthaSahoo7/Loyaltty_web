import React from 'react';
import { FeatureSection } from '../shared/FeatureSection';

export function Features() {
  return (
    <section className="py-36 max-md:py-24" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">Our Features</h2>
      <FeatureSection
        title="Customizable Rewards Programs"
        description="Create point-based, tiered, or custom rewards that match your business."
        buttonText="Get Started"
        imageUrl="http://b.io/feature-1.jpg"
      />
      <FeatureSection
        title="Customer Insights Dashboard"
        description="Understand customer behavior and make data-driven decisions."
        buttonText="Get Started"
        imagePosition="left"
        imageUrl="http://b.io/feature-2.jpg"
      />
      <FeatureSection
        title="Marketing Campaign Tools"
        description="Send personalized offers and promotions"
        buttonText="Try it now"
        imageUrl="http://b.io/feature-3.jpg"
      />
    </section>
  );
}