import * as React from "react";

export function StatisticCard({ imageSrc, value, description }) {
  return (
    <div className="flex flex-col self-stretch px-10 pt-7 pb-28 my-auto bg-[#040869] rounded-xl min-w-[240px] shadow-[15px_10px_50px_rgba(0,0,0,0.1)] w-[410px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col text-6xl font-bold tracking-tighter text-yellow-300 whitespace-nowrap min-h-[288px] max-md:text-4xl">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain self-center max-w-full aspect-[0.95] w-[132px]"
        />
        <div className="mt-8 max-md:text-4xl">{value}</div>
      </div>
      <div className="flex gap-10 items-end mt-10 text-xl font-semibold text-white max-md:mt-10 max-md:mr-1.5">
        <div className="flex-1 shrink w-full min-w-[240px]">
          {description}
        </div>
      </div>
    </div>
  );
}