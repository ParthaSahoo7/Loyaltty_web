import React from 'react';
import { Button } from './Button';

export function FeatureSection({ title, description, buttonText, imageUrl, imagePosition = 'right', bgColor = 'white' }) {
  const content = (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
      <div className={`flex flex-col w-full ${bgColor === 'dark' ? 'text-white' : 'text-neutral-800'}`}>
        <h3 className="text-7xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
          {title}
        </h3>
        <p className="mt-6 text-lg tracking-tight leading-8">
          {description}
        </p>
      </div>
      <Button className="self-start mt-16 max-md:mt-10">
        {buttonText}
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fae551115e73e14e3a6affffb89928e8e570ec03da497699f11d4a1a983eb6f?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="object-contain w-3.5 aspect-square" aria-hidden="true" />
      </Button>
    </div>
  );

  const image = imageUrl ? (
    <div className="flex shrink-0 self-stretch my-auto bg-blue-200 h-[547px] min-w-[240px] w-[748px]">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
  ) : null;

  return (
    <div className={`flex flex-wrap gap-10 items-center py-36 pr-56 pl-52 w-full ${bgColor === 'dark' ? 'bg-sky-900' : ''} max-md:px-5 max-md:py-24 max-md:max-w-full`}>
      {imagePosition === 'left' ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}