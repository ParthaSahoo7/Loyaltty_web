import React from 'react';
import { Button } from '../shared/Button';

export function TryToday() {
  return (
    <section className="flex flex-col justify-center items-center px-56 pt-36 pb-8 bg-sky-900 max-md:px-5 max-md:pt-24">
      <div className="flex flex-col items-center max-w-[608px] text-center">
        <h2 className="text-7xl font-bold tracking-tighter text-white max-md:text-4xl">
          Try Loyaltty today
        </h2>
        <p className="mt-6 text-2xl tracking-tight leading-8 text-white">
          Get started for free.<br />
          Add your whole team as your needs grow.
        </p>
        <Button className="mt-10">
          Try Loyaltty free
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f742508893eca853747499bd9beacc66e93ddbcfecf86e229727b3a3904feb4?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="object-contain w-3.5 aspect-square" aria-hidden="true" />
        </Button>
        <button className="mt-10 text-2xl tracking-tight text-white hover:text-amber-200 transition-colors">
          On a big team? Contact sales
        </button>
        <div className="flex gap-10 items-start mt-10">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b62b7fb12eecb45dc1b6eb428abc2ad6a7928e6c8ea1aeba000d517606b26bd?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="Partner logo 1" className="w-[60px] aspect-square" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb7023600bb85142504a3f4c8b14cd6747ca30cc56baed316d1c359ae03306a7?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="Partner logo 2" className="w-[60px] aspect-square" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a67481a3de1dba5202c3d167fa95e54b98528f1dd8cdf171707e34cd3cf24ad1?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="Partner logo 3" className="w-[60px] aspect-square" />
        </div>
      </div>
    </section>
  );
}