import React, { useState, useEffect } from "react";
import { FaDownload, FaBuilding, FaTags, FaUsers, FaSyncAlt, FaComments, FaChartLine, FaTrophy } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    { text: "Download the App", icon: <FaDownload className="text-blue-500 text-4xl" /> },
    { text: "Register your business", icon: <FaBuilding className="text-green-500 text-4xl" /> },
    { text: "Create a deal", icon: <FaTags className="text-red-500 text-4xl" /> },
    { text: "Get new customers", icon: <FaUsers className="text-yellow-500 text-4xl" /> },
    { text: "Convert them into regulars using Loyaltty", icon: <FaSyncAlt className="text-purple-500 text-4xl" /> },
    { text: "Engage with your customers regularly", icon: <FaComments className="text-pink-500 text-4xl" /> },
    { text: "Grow your sales", icon: <FaChartLine className="text-orange-500 text-4xl" /> },
    { text: "Enjoy the profits", icon: <FaTrophy className="text-teal-500 text-4xl" /> }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000); // Change step every 2 seconds
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-[#040869] text-white">
      <h2 className="text-5xl font-bold mb-8">How It Works ?</h2>
      <div className="w-full max-w-4xl">
        <div className="relative flex flex-col items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center mb-8 transition-opacity duration-500 ${
                index <= currentStep ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white text-[#040869] font-bold rounded-full">
                {index + 1}
              </div>
              <div className="ml-4 text-lg">{step.text}</div>
              <div className="flex items-center justify-center w-8 h-8 ml-4">
                  {step.icon}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;