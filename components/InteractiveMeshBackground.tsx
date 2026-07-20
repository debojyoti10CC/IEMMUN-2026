"use client";

import React, { useRef } from "react";
import Image from "next/image";
import paperBg from "../public/paper-bg.png";
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
      className="fixed inset-0 -z-50 pointer-events-none w-full h-screen bg-[#ffffff] select-none overflow-hidden"
    >
      <div 
        ref={bgRef}
        className="relative w-full h-[250vh] -top-[10vh]"
      >
        <Image
          src={paperBg}
          alt="Crumpled Paper Halftone Background"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.35] mix-blend-multiply"
          priority
        />
      </div>
    </div>
  );
};

export default InteractiveMeshBackground;
