"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GlobeDemo() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent select-none">


      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute top-[35%] left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse,rgba(195,13,15,0.04)_0%,transparent_65%)]" />

      {/* ── Full Screen Background Image with Feathered Bottom Mask ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-x-0 -top-16 md:-top-28 bottom-0 z-0 pointer-events-none w-full h-[calc(100%+7rem)]"
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      >
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          unoptimized
          className="w-full h-full object-cover object-top mix-blend-multiply"
          priority
        />
      </motion.div>

      {/* ─── Hero Content Stack ─── */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-5 md:px-6 -mt-32 md:-mt-48">
        {/* IEMMUN Logo Emblem above title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-3 md:mb-4 relative"
        >
          <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px]">
            <Image
              src="/iemmun-logo.png"
              alt="IEMMUN Emblem"
              width={100}
              height={100}
              className="w-full h-full object-contain drop-shadow-md"
              style={{ filter: "invert(0.12) sepia(0.1) saturate(3) hue-rotate(345deg) brightness(0.45)" }}
              priority
            />
          </div>
        </motion.div>


        {/* Single CTA button below IEMMUN */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center items-center"
        >
          <Link href="/contact">
            <button className="Btn-Container">
              <span className="btn-text">Register Now</span>
              <span className="icon-Container">
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                  <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                  <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                  <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                  <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                  <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                  <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                  <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                  <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                  <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>


    </section>
  );
}
