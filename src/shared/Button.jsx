import React from 'react';

export function Button({ children, variant = 'primary', className = '', onClick, type = 'button' }) {
  const baseStyles = "flex gap-2.5 justify-center items-center px-5 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-400 text-white hover:bg-blue-500 focus:ring-blue-400",
    secondary: "bg-amber-200 text-sky-900 hover:bg-amber-300 focus:ring-amber-200"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}