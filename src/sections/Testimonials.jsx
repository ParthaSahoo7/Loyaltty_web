import React from 'react';
import { TestimonialCard } from '../shared/TestimonialCard';

const testimonials = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/617acf6b0e69473aa83d1768a42ccd95cd707116cdefc21834068fd1a0fdb857?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    quote: "It has been revolutionary to be able to design point-based incentives and tiers that are suited to our company's requirements.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5f4a2d2a94501deb548b74bc8151ae885c1657a29cf4294845088ec66fefff8?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    name: "Swagatika Tripathy",
    role: "North America",
    variant: "white"
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ee0f88c20a0e10e642d3d997a3afcf2f5eae217ca0171d62b70766b68e82e6e?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    quote: "Our customers love the personalized offers! It’s like the app knows exactly what they want, and it has helped us stand out in a competitive market.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1811f59f26c2bd3f807e65199bef794eb18956d1fff44fde671eead13325ec9?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    name: "Shibu Goswami",
    role: "North America",
    variant: "blue"
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f009364d19e883f0fed14d16542696cf5b2cbe6a054eb916256cb66494608666?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    quote: "What sets this app apart is its flexibility. From custom rewards to personalized marketing, everything can be tailored to our unique business needs.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef2b905454c8102a9c9e3dd5bc8829120aeeb59071547da47831c2d1e9bae6c5?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0",
    name: "Digvijay Bahadur",
    role: "North America",
    variant: "blue"
  }
];

export function Testimonials() {
  return (
    <section className="py-8 px-8 max-md:px-5 max-md:py-24" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-7xl font-bold text-center text-neutral-800 mb-16 max-md:text-4xl">
        What Our Clients Say
      </h2>
      <div className="flex flex-wrap gap-8 items-stretch justify-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}