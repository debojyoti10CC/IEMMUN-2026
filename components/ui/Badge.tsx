import React from "react";

interface BadgeProps {
  type: "Novice" | "Intermediate" | "Advanced";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className = "" }) => {
  let badgeStyles = "inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold tracking-[0.25em] uppercase border transition-colors duration-300";

  switch (type) {
    case "Novice":
      badgeStyles += " bg-emerald-50 text-emerald-700 border-emerald-200";
      break;
    case "Intermediate":
      badgeStyles += " bg-amber-50 text-amber-700 border-amber-200";
      break;
    case "Advanced":
      badgeStyles += " bg-red-50 text-red-700 border-red-200";
      break;
  }

  return <span className={`${badgeStyles} ${className}`}>{type}</span>;
};

export default Badge;
