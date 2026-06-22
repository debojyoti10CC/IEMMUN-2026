import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = "left",
  className = ""
}) => {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {tag && (
        <span className="text-2xs font-semibold tracking-[0.2em] uppercase text-accent font-sans">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-white font-medium leading-tight">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm md:text-base text-neutral-400 leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
