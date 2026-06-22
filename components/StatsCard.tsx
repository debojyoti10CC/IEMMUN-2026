import React from "react";

interface StatsCardProps {
  value: string;
  label: string;
  description: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label, description }) => {
  return (
    <div className="bg-neutral-950 border border-neutral-900 p-6 md:p-8 flex flex-col gap-2 group hover:border-neutral-800 transition-all duration-300">
      <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight group-hover:text-accent transition-colors">
        {value}
      </span>
      <span className="text-2xs font-bold tracking-[0.25em] uppercase text-neutral-400 font-sans mt-2">
        {label}
      </span>
      <p className="text-xs md:text-sm text-neutral-500 font-sans leading-relaxed mt-1">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
