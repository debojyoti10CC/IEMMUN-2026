import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/Badge";
import { ArrowRight } from "lucide-react";

interface CommitteeCardProps {
  id: string;
  name: string;
  shortName: string;
  agenda: string;
  difficulty: "Novice" | "Intermediate" | "Advanced";
  image: string;
}

export const CommitteeCard: React.FC<CommitteeCardProps> = ({
  id,
  name,
  shortName,
  agenda,
  difficulty,
  image
}) => {
  return (
    <Link href={`/committees/${id}`} className="group relative flex flex-col w-full aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden border border-black/[0.06] bg-white/30 backdrop-blur-md transition-all duration-500 hover:border-[#C30D0F]/35 hover:shadow-[0_12px_40px_rgba(195,13,15,0.08)]">

      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C30D0F]/40 to-transparent pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Watermarked Icon: centered and charcoal colored via brightness-0 */}
      <div className="relative flex-1 w-full flex items-center justify-center p-6 md:p-8 mt-6 md:mt-8 z-0">
        <div className="relative w-4/5 h-4/5 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain filter brightness-0 opacity-[0.08] group-hover:opacity-[0.15] transition-all duration-500"
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#C30D0F]/0 to-[#A30A0C]/0 group-hover:from-[#C30D0F]/[0.04] group-hover:to-[#A30A0C]/[0.04] transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] group-hover:ring-[#C30D0F]/15 transition-all duration-500 rounded-xl pointer-events-none z-20" />

      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
        <Badge type={difficulty} />
      </div>

      {/* Bottom Content Card Area: White gradient fade and dark text */}
      <div className="relative z-20 bg-gradient-to-t from-white via-white/95 to-transparent pt-10 md:pt-14 pb-6 md:pb-8 px-5 md:px-8 flex flex-col gap-3 md:gap-4 mt-auto">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C30D0F] uppercase">
            {shortName}
          </span>
          <h3 className="text-sm md:text-lg lg:text-xl font-bold text-zinc-900 group-hover:text-[#C30D0F] transition-colors line-clamp-2 leading-snug">
            {name}
          </h3>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] md:text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
            Agenda Focus
          </span>
          <p className="text-[10px] md:text-xs text-zinc-600 leading-relaxed line-clamp-2">
            {agenda}
          </p>
        </div>

        <div className="hidden md:flex opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 items-center gap-2 text-[10px] lg:text-xs font-bold tracking-wider uppercase text-zinc-800 hover:text-[#C30D0F] mt-1 w-fit">
          Explore Committee Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CommitteeCard;
