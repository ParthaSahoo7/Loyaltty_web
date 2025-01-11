import React from 'react';
import { Button } from '../shared/Button';

export function Integration() {
  return (
    <section className="flex flex-wrap items-center py-36 pr-56 pl-56 bg-[#040869] max-md:px-5 max-md:py-24">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <h2 className="text-7xl font-bold tracking-tighter max-md:text-4xl">
            Work with Your Favorite Apps Using Loyaltty
          </h2>
          <p className="mt-6 text-lg tracking-tight leading-8">
            Integrate seamlessly with your favorite tools to streamline your business operations. Connect with 100+ apps, including payment gateways, accounting software, and inventory management systems.
          </p>
        </div>
        <Button className="self-start mt-16 max-md:mt-10">
          Read more
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9baf1626f2d28b7d9f03ffe3259ec111f43e6a8df2dc9a13e70302b95e0632e?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="object-contain w-3.5 aspect-square" aria-hidden="true" />
        </Button>
      </div>
      <img 
        src="http://b.io/integration-image.jpg" 
        alt="Integration partners showcase" 
        className="object-contain self-stretch my-auto aspect-[1.79] min-w-[240px] w-[681px] max-md:max-w-full" 
      />
    </section>
  );
}