import React, { useState } from 'react';
import { Button } from '../shared/Button';
import { NavItem } from './NavItem';

const navItems = [
  { label: 'Products', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'Resources', hasDropdown: true },
  { label: 'Pricing', hasDropdown: true }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap gap-10 justify-between items-center px-56 py-4 w-full bg-sky-900 max-md:px-5 max-md:max-w-full" role="navigation">
      <div className="flex justify-between items-center self-stretch my-auto text-4xl font-bold text-lime-500 w-[191px]">
        <div className="self-stretch my-auto w-32 rounded-none">
          <span>Loyal</span>
          <span className="text-white">tt</span>
          <span>y</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-8 items-start self-stretch my-auto min-w-[240px] w-[552px] max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </div>
        <Button variant="secondary" onClick={() => setIsOpen(!isOpen)}>Login</Button>
      </div>
    </nav>
  );
}