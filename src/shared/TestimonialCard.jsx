import React from 'react';

export function TestimonialCard({ logo, quote, avatar, name, role, variant = 'white' }) {
  const styles = {
    white: {
      bg: 'bg-white',
      text: 'text-neutral-800',
      border: 'border-neutral-800',
      name: 'text-neutral-800'
    },
    blue: {
      bg: 'bg-[#040869]',
      text: 'text-white',
      border: 'border-white',
      name: 'text-white'
    }
  };

  const currentStyle = styles[variant];

  return (
    <article className={`flex flex-col flex-1 shrink self-stretch px-10 py-16 rounded-xl basis-0 min-w-[240px] ${currentStyle.bg} shadow-[15px_10px_50px_rgba(0,0,0,0.1)]`}>
      <div className={`flex flex-col pb-10 w-full border-b ${currentStyle.border}`}>
        <div className="w-[86px]">
          <img src={logo} alt="" className="object-contain w-full aspect-[1.41]" aria-hidden="true" />
        </div>
        <blockquote className={`mt-8 text-lg tracking-tight leading-8 ${currentStyle.text}`}>
          {quote}
        </blockquote>
      </div>
      <footer className="flex gap-3 mt-16 max-w-full w-[383px]">
        <img src={avatar} alt="" className="object-contain shrink-0 self-end rounded-full aspect-square w-[95px]" />
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
          <cite className={`text-2xl font-semibold ${currentStyle.name}  not-italic `}>{name}</cite>
          <span className={`mt-4 text-base tracking-tight leading-5 ${currentStyle.text}`}>
            {role}
          </span>
        </div>
      </footer>
    </article>
  );
}