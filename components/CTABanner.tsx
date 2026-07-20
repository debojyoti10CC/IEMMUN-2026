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
              <span key={i} className="text-[8rem] md:text-[12rem] font-bold text-white uppercase tracking-tighter">
                DIPLOMACY • LEADERSHIP • DEBATE • GLOBAL IMPACT •
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex justify-center">
        <div className="border border-white/[0.08] bg-white/[0.02] backdrop-blur-md md:backdrop-blur-[40px] p-8 md:p-16 flex flex-col items-center text-center gap-6 md:gap-8 rounded-xl max-w-4xl w-full relative overflow-hidden">
          <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="flex flex-col items-center gap-3 md:gap-4 relative z-10">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C30D0F] uppercase">
              Apply Now
            </span>
            <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Shape the Future of Diplomatic Dialogue
            </h2>
            <p className="text-xs md:text-base text-[#5e5d5c] leading-relaxed max-w-2xl">
              Institutional registrations and individual delegate applications are open. Secure your place at the most prestigious simulation of the year.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto shrink-0 mt-1 md:mt-2">
            <Link href="/committees" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full gap-2 px-6 md:px-8 py-4 md:py-6 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                Register Delegation
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-white/20 text-white hover:border-white hover:bg-white/5 px-6 md:px-8 py-4 md:py-6 text-[10px] md:text-xs uppercase tracking-widest font-bold">
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
