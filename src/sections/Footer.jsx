import React from 'react';
import { Button } from '../shared/Button';
import logo from '../logoBrand.png';

export function Footer() {
  return (
    <footer className="bg-[#040869] text-white py-3 px-8 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap p-4 gap-8 justify-between max-w-[1480px] mx-auto">
        <div className="flex flex-col flex-1 min-w-[240px]">
          <div className="flex  gap-2.5 text-3xl font-bold">
            <img src={logo} alt="" className="w-[37px] aspect-[1.28]" aria-hidden="true" />
            <span>Loyaltty</span>
          </div>
          <p className="mt-4 text-lg tracking-tight leading-8 text-stone-100">
            Address:
          </p>
          <p className=" text-xs tracking-tight leading-8  text-stone-100">
          Headquarter: 30N Gould St Ste N Sheriden, WY 82801<br></br>
Canada: 19 Grand Trunk Crescent, Toronto, M5J 3A3<br></br>
Australia: Parramatta NSW 2150, Australia<br></br>
India: Patia, Bhubaneswar, Odisha, India, 751024
          </p>
        </div>
        
        <nav className="flex flex-wrap gap-20">
          {['Product', 'Resources', 'Company'].map((section) => (
            <div key={section} className="flex flex-col min-w-[160px]">
              <h3 className="text-lg font-bold mb-4">{section}</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-amber-200 transition-colors">Overview</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-amber-200 transition-colors">Solutions</a></li>
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col min-w-[240px] w-[259px]">
          <h3 className="text-3xl font-bold">Try It Today</h3>
          <p className="mt-6 text-base leading-5">
            Get started for free. 
          </p>
          <Button className="mt-6">
            Start today
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/435f10604115297faa12ba38fa887b27045c1e2718f2508a3b0afc41ce3ba0f3?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-3.5 aspect-square" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between items-center mt-2 pt-8 border-t border-slate-600">
        <div className="flex flex-wrap gap-10 items-center">
          <button className="flex items-center gap-1.5">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d6ef3bb144c7916252f11b3e6db25b9ed4e8cec6e285e57d092c363232f3e7?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-[19px] aspect-square" aria-hidden="true" />
            <span>English</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9115f91244c06357a808514de37a07a2b9641a79bb70ab20be339b235acee75d?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-3 aspect-[2]" aria-hidden="true" />
          </button>
          <a href="/terms-and-conditions" className="hover:text-amber-200 transition-colors">Terms & Conditions</a>
          <a href="/privacy-policy" className="hover:text-amber-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Security</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Status</a>
          <span>©2024 Loyaltty LLC.</span>
        </div>
        
        <div className="flex gap-8 items-center">
          <a href="#" aria-label="Visit our Facebook page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/02de1a5cdea4e6fad418aa7456eca488ca909cfff64bdf2c310517590a5191bc?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-[9px] aspect-[0.53]" />
          </a>
          <a href="#" aria-label="Visit our Twitter page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ab40f598f951b0fbdfafd93288912e80c69e8378d63ca718823d14640958b?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-[17px] aspect-[1.31]" />
          </a>
          <a href="#" aria-label="Visit our LinkedIn page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5900c010695b9eac299208f92dfcc7a0dcf2d79854eaf657f150dcb2dd600dc6?placeholderIfAbsent=true&apiKey=f3c35435213d4b1083f43d09f2cabdc0" alt="" className="w-[15px] aspect-square" />
          </a>
        </div>
      </div>
    </footer>
  );
}