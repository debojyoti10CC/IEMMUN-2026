import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
  description: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label, description }) => {
  return (
    <div className="p-6 md:p-8 lg:p-10 flex flex-col items-center text-center gap-1.5 md:gap-2 group transition-all duration-300 hover:bg-black/[0.01]">
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
        {value}
      </span>
      <h4 className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#C30D0F] uppercase mt-0.5">
        {label}
      </h4>
      <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed max-w-[200px] mt-0.5">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
