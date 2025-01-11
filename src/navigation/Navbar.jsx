import React, { useState } from 'react';
import { Button } from '../shared/Button';
import { NavItem } from './NavItem';
import logo from '../logoBrand.png';

const navItems = [
  { label: 'R.A.C.E', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Pricing', hasDropdown: true }
];



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


 

  return (
    <nav className="fixed z-20 top-0 left-0 right-0 flex flex-wrap gap-10 justify-between items-center px-8 py-4 w-full bg-white max-md:px-5 max-md:max-w-full " role="navigation">
      <div className="flex gap-2 items-center self-stretch my-auto text-2xl font-bold text-[#040869] w-[250px]">
      <img 
        src={logo} 
        alt="Loyalty Brand Logo" 
        className='object-contain w-10 h-10'
        
      />
        <div className="self-stretch my-auto w-32 rounded-none">
          <span>LOYALTTY</span>
          
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start self-stretch my-auto min-w-[240px] w-[450px] max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <Button variant="primary" onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2 w-30 h-30  bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Login</Button>
      </div>
    </nav>
  );
}