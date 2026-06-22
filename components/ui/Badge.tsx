import React from "react";

interface BadgeProps {
  type: "Novice" | "Intermediate" | "Advanced";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, className = "" }) => {
  let badgeStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-semibold tracking-wider uppercase border font-sans";

  switch (type) {
    case "Novice":
      badgeStyles += " bg-emerald-950/10 text-emerald-400 border-emerald-800/30";
      break;
    case "Intermediate":
      badgeStyles += " bg-amber-950/10 text-amber-400 border-amber-800/30";
      break;
    case "Advanced":
      badgeStyles += " bg-red-950/10 text-accent border-accent/20";
      break;
  }

  return <span className={`${badgeStyles} ${className}`}>{type}</span>;
};

export default Badge;
