import React from "react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  active?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l border-black/15 ml-3 md:ml-6 flex flex-col gap-6 md:gap-10 py-2 md:py-4">
      {items.map((item, index) => (
        <div key={index} className="relative pl-5 md:pl-12 group">
          <span className={`absolute left-0 -translate-x-[4px] md:-translate-x-[5px] top-1 md:top-1.5 w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-all duration-300 ${
            item.active
              ? "bg-[#C30D0F] scale-125 ring-4 ring-[#C30D0F]/20"
              : "bg-black/20 group-hover:bg-[#C30D0F] group-hover:scale-110"
          }`} />

          <div className="flex flex-col gap-1 md:gap-1.5 max-w-3xl">
            <span className={`text-[9px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase ${
              item.active ? "text-[#C30D0F]" : "text-zinc-500 font-bold group-hover:text-zinc-800"
            }`}>
              {item.date}
            </span>
            <h3 className="text-sm md:text-lg font-bold text-zinc-950 group-hover:text-[#C30D0F] transition-colors leading-snug">
              {item.title}
            </h3>
            <p className="text-[11px] md:text-sm text-zinc-700 font-medium leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
