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
    <div className="bg-neutral-950 border border-neutral-900 flex flex-col h-full group hover:border-neutral-800 transition-all duration-300">
      {/* Image Header with Badge Overlay */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950 flex items-center justify-center p-8 border-b border-neutral-900">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
        
        <div className="relative w-20 h-20 transition-transform duration-700 ease-out group-hover:scale-105">
          <Image
            src={image}
            alt={name}
            fill
            sizes="80px"
            className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
        <div className="absolute top-4 right-4 z-10">
          <Badge type={difficulty} />
        </div>
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-2xs font-bold tracking-widest text-white/50 uppercase font-sans bg-black/60 px-2 py-0.5 border border-neutral-800">
            {shortName}
          </span>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg md:text-xl font-serif font-medium text-white group-hover:text-accent transition-colors line-clamp-1">
            {name}
          </h3>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase font-sans">
              Agenda Focus
            </span>
            <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
              {agenda}
            </p>
          </div>
        </div>

        {/* Action Link */}
        <Link
          href={`/committees/${id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-accent hover:text-white transition-colors group/link mt-auto w-fit"
        >
          Explore Committee Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CommitteeCard;
