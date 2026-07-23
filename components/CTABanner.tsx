"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const CTABanner: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useGSAP(() => {
    if (marqueeRef.current && !isMobile) {
      gsap.to(".marquee-content", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }
  }, { scope: container, dependencies: [isMobile] });

  return (
    <section ref={container} className="py-16 md:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[40vh] md:min-h-[50vh] bg-transparent">

      {!isMobile && (
        <div ref={marqueeRef} className="absolute inset-0 flex items-center whitespace-nowrap opacity-[0.04] pointer-events-none overflow-hidden select-none z-0">
          <div className="marquee-content flex gap-8">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-[8rem] md:text-[12rem] font-bold text-black uppercase tracking-tighter">
                DIPLOMACY • LEADERSHIP • DEBATE • GLOBAL IMPACT •
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl w-full mx-auto px-5 md:px-6 relative z-10 flex justify-center">
        <div className="border border-black/15 border-t-[#C30D0F] bg-white/50 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.05)] p-8 md:p-14 flex flex-col items-center text-center gap-6 md:gap-8 rounded-xl md:rounded-2xl max-w-4xl w-full relative overflow-hidden ring-1 ring-inset ring-black/5">

          <div className="flex flex-col items-center gap-3 md:gap-4 relative z-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#C30D0F] uppercase">
              Apply Now
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-950 tracking-tight leading-tight">
              Shape the Future of Diplomatic Dialogue
            </h2>
            <p className="text-xs md:text-base text-zinc-600 leading-relaxed max-w-xl font-normal">
              Institutional registrations and individual delegate applications are open. Secure your place at the most prestigious simulation of the year.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto shrink-0 mt-1 z-10">
            <Link href="/committees" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full gap-2 px-6 md:px-8 py-3.5 md:py-4 text-[10px] md:text-xs uppercase tracking-widest font-bold bg-[#C30D0F] text-white hover:bg-[#A30A0C] border border-[#C30D0F] rounded-lg md:rounded-xl shadow-md">
                Register Delegation
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-black/20 text-zinc-900 hover:border-black/40 hover:bg-black/5 px-6 md:px-8 py-3.5 md:py-4 text-[10px] md:text-xs uppercase tracking-widest font-bold rounded-lg md:rounded-xl">
                Contact Secretariat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
