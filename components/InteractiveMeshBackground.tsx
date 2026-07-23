"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const InteractiveMeshBackground: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (bgRef.current) {
      gsap.fromTo(bgRef.current,
        { y: "0px" },
        {
          y: "-140vh", // Translate the remaining scroll height
          ease: "none",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        }
      );
    }
  });

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none w-full h-screen bg-[#f7d4ce] select-none overflow-hidden"
    >
      <div 
        ref={bgRef}
        className="relative w-full h-[250vh] -top-[10vh]"
      >
        <Image
          src="/paper-bg.png"
          alt="Crumpled Paper Halftone Background"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover opacity-70 mix-blend-multiply"
          priority
        />
      </div>
    </div>
  );
};

export default InteractiveMeshBackground;
