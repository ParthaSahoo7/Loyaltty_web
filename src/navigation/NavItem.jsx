import React from 'react';

export function NavItem({ label, hasDropdown }) {
  return (
    <div className="flex gap-2.5 items-center">
      <button 
        className="self-stretch my-auto text-lg font-medium leading-none text-white hover:text-amber-200 transition-colors"
        aria-expanded={hasDropdown ? "false" : undefined}
        aria-haspopup={hasDropdown ? "true" : undefined}
      >
        {label}
      </button>
      {hasDropdown && (
        <div className="flex flex-col justify-center items-center self-stretch p-2.5 my-auto w-[29px]">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd9c62f64ca91225fefa83b8e52a23c2eaa273b5a008331ee4102cb93de98bf?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" 
            alt="" 
            className="object-contain aspect-[2.25] w-[9px]" 
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}