import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  useOverlay?: boolean;
  bgText?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = "left",
  className = "",
  useOverlay = false,
  bgText
}) => {
  if (useOverlay) {
    return (
      <div className={`flex flex-col gap-2 items-center text-center w-full select-none ${className}`}>
        {tag && (
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#C30D0F] z-10 mb-1">
            {tag}
          </span>
        )}
        <div className="relative w-full flex items-center justify-center py-6 md:py-8 overflow-visible">
          <span className="absolute text-[8.5vw] md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase tracking-[0.12em] text-[#C30D0F]/[0.08] dark:text-[#C30D0F]/[0.08] pointer-events-none select-none font-sans whitespace-nowrap z-0">
            {bgText || tag || title}
          </span>
          <h2 className="relative text-2xl md:text-4xl lg:text-5xl font-serif italic font-medium text-zinc-950 tracking-wide leading-tight z-10 text-center">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-2xl text-xs md:text-sm text-zinc-700 font-medium leading-relaxed z-10 mt-1 md:mt-2">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {tag && (
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C30D0F]">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm md:text-base text-zinc-700 font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
