import * as React from "react";
import { StatisticCard } from "../shared/StatisticCard";
import { statisticsData } from "./StatisticsData";

export function Statistics() {
  return (
    <div className="flex flex-col justify-center px-8 py-24 text-center max-md:px-5 max-md:py-24">
      <div className="text-7xl font-bold leading-tight text-neutral-800 max-md:max-w-full max-md:text-4xl">
       Why Choose Loyaltty?
      </div>
      <div className="flex flex-wrap gap-6 items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {statisticsData.map((stat) => (
          <StatisticCard
            key={stat.id}
            imageSrc={stat.imageSrc}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
}