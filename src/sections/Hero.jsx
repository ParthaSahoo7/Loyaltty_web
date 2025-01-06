import React from 'react';
import { Button } from '../shared/Button';

export function Hero() {
  return (
    <section className="flex flex-wrap items-center px-56 py-36 w-full text-white bg-sky-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h1 className="text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
            Transform Your Business with a Smarter Loyalty Solution
          </h1>
          <p className="mt-6 text-lg tracking-tight leading-8 max-md:max-w-full">
            Retain customers, drive repeat purchases, and grow your revenue with an easy-to-use loyalty program designed for merchants.
          </p>
        </div>
        <Button className="self-start mt-16 max-md:mt-10">
          Get Started
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2951cba51cc364b4035c1d48c7ba179dffe33e24f246968107af2341cc685fa?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="object-contain w-2.5 aspect-square" aria-hidden="true" />
        </Button>
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d7bbecc6b45108a2edecc9ed883399bcff1ee88b0ba49e614f45fd55803fbae?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" 
        alt="Loyalty program dashboard preview" 
        className="object-contain self-stretch my-auto aspect-[1.5] min-w-[240px] w-[824px] max-md:max-w-full" 
      />
    </section>
  );
}