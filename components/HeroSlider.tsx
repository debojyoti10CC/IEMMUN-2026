"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: string;
  category: string;
  title: string;
  btnText: string;
  btnLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: "01",
    category: "DISEC SUMMIT",
    title: "The Militarization of Orbit and Space Security",
    btnText: "Explore DISEC Space Agenda",
    btnLink: "/committees/disec",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "02",
    category: "WBLA LEGISLATIVE",
    title: "Socio-Economic Reforms and State Resource Management",
    btnText: "Review Legislative Agenda",
    btnLink: "/committees/wbla",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "03",
    category: "WTO ONLINE SUMMIT",
    title: "Reforming Digital Commerce and Global Disputes",
    btnText: "Access WTO Trade Portal",
    btnLink: "/committees/wto",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
  }
];

const AUTOPLAY_TIME = 6000;

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, AUTOPLAY_TIME);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  return (
    <section
      className="relative w-full h-dvh md:h-screen flex items-center overflow-hidden bg-black select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl flex flex-col items-start gap-4 md:gap-5"
          >
            <div className="px-3 py-1 rounded-lg border border-[#C30D0F]/30 bg-[#C30D0F]/10">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C30D0F] uppercase">
                {slides[currentIndex].category}
              </span>
            </div>

            <h1 className="text-[1.75rem] leading-[1.1] sm:text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight font-serif italic">
              {slides[currentIndex].title}
            </h1>

            <Link href={slides[currentIndex].btnLink} className="mt-1 md:mt-2">
              <Button variant="outline" className="group gap-2 border-zinc-300 bg-zinc-100/50 backdrop-blur-xl hover:bg-zinc-900 hover:text-white hover:border-zinc-900 px-6 md:px-7 py-3 md:py-3.5 text-[10px] md:text-xs text-zinc-900">
                {slides[currentIndex].btnText}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-500 cursor-pointer ${
              index === currentIndex
                ? "w-8 h-[3px] md:h-1 bg-[#C30D0F]"
                : "w-2 h-[3px] md:h-1 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
