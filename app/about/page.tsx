"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/Timeline";
import CTABanner from "@/components/CTABanner";
import { Shield, Award, Compass, Target, Users, Globe, BookOpen, ArrowRight, Check } from "lucide-react";

const evolutionTimeline = [
  { date: "1945", title: "Global Diplomacy Born", description: "United Nations Established. Foundation of modern international diplomatic framework.", active: false },
  { date: "1952", title: "Educational Innovation", description: "First Model UN Conference. Academic simulation of diplomatic processes begins.", active: false },
  { date: "1990s", title: "International Growth", description: "Worldwide Expansion. MUN conferences establish global presence.", active: false },
  { date: "2012", title: "IEMMUN Established", description: "IEMMUN Founded. International Excellence in Model United Nations begins its journey.", active: false },
  { date: "2026", title: "13th Annual Conference", description: "IEMMUN 13th Edition. Continuing excellence in diplomatic education and international relations.", active: true },
];

const stats = [
  { value: "500+", label: "Delegates" },
  { value: "13th", label: "Edition" },
  { value: "6", label: "Committees" },
  { value: "35+", label: "Institutions" },
];

const pillars = [
  { icon: Award, title: "Academic Excellence", description: "Maintaining the highest standards in diplomatic education through rigorous research, comprehensive preparation, and expert guidance from seasoned faculty advisors." },
  { icon: Globe, title: "Global Perspective", description: "Fostering international understanding through diverse representation and comprehensive exploration of global challenges, solutions, and multilateral frameworks." },
  { icon: Shield, title: "Leadership Development", description: "Cultivating the next generation of diplomatic leaders through practical experience in negotiation, consensus-building, and high-stakes strategic thinking." },
  { icon: BookOpen, title: "Research Rigour", description: "Every delegate is expected to arrive with comprehensive position papers, background guides, and a deep understanding of their committee agenda items." },
  { icon: Compass, title: "Ethical Diplomacy", description: "Grounding debate in international law, human rights frameworks, and the principle that sustainable resolutions must account for all stakeholders." },
  { icon: Users, title: "Collaborative Spirit", description: "Building bridges across cultural divides by creating an environment where respectful dialogue and co-authorship of resolutions is the norm." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  return (
    <div className="bg-transparent w-full min-h-screen">

      {/* Hero Intro */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#C30D0F] uppercase"
          >
            <span className="w-5 h-[1.5px] bg-[#C30D0F] inline-block" />
            About IEMMUN
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-tight"
          >
            Advancing diplomatic education through innovative simulation{" "}
            <span className="text-zinc-500">and academic excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-800 font-medium leading-relaxed max-w-2xl"
          >
            Since 2012, IEMMUN has stood as one of the most respected Model United Nations conferences in the region, challenging delegates to think critically, argue rigorously, and collaborate meaningfully.
          </motion.p>
        </div>

        {/* Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] border border-black/[0.08] rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 px-6 py-6 md:py-8">
              <span className="text-2xl md:text-3xl font-bold text-zinc-950 tracking-tight">{s.value}</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-600">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Mission + Image */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#C30D0F]/10 border border-[#C30D0F]/20 rounded-lg">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-[#C30D0F]" />
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#C30D0F]">Our Mission</span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-950 leading-tight tracking-tight">
              Where academic rigour meets{" "}
              <span className="text-zinc-500">diplomatic excellence</span>
            </h2>

            <div className="flex flex-col gap-4 text-sm md:text-base text-zinc-800 font-normal leading-relaxed">
              <p>IEMMUN 2026 represents the convergence of academic rigour and diplomatic excellence. We create immersive educational experiences that challenge participants to engage with complex global issues, develop critical thinking capabilities, and cultivate leadership skills essential for addressing contemporary international challenges.</p>
              <p>Our commitment extends beyond simulation to fostering genuine understanding of multilateral diplomacy, international law, and the art of building consensus across deeply held differences.</p>
            </div>

            <div className="flex flex-col gap-3.5 pt-2">
              {["Structured committee debate with international procedure", "Expert faculty advisors and senior chair panels", "Recognised award certificates and leadership citations"].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="p-1 md:p-1.5 rounded-full bg-[#C30D0F]/10 border border-[#C30D0F]/25 text-[#C30D0F] flex-shrink-0">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-zinc-900">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/committees" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-zinc-900 hover:text-[#C30D0F] transition-colors group">
                Explore our committees
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative w-full aspect-[4/3] lg:aspect-[3/4] border border-white/[0.06] bg-white/[0.015] p-2 rounded-2xl md:rounded-[2rem] overflow-hidden"
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-[1.5rem]">
              <Image
                src="/DSC_0024.JPG"
                alt="IEMMUN Conference"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">IEMMUN</span>
                  <span className="text-sm md:text-base font-semibold text-white leading-tight">13th Annual Conference</span>
                  <span className="text-[10px] text-white/40">2026 Edition</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.15em] text-[#C30D0F] uppercase border border-[#C30D0F]/30 px-2.5 py-1 rounded-full bg-[#C30D0F]/10">Est. 2012</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-28">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <SectionHeading
            tag="Key Competencies"
            title="Conference Core Pillars"
            description="Six foundational principles that define every aspect of the IEMMUN experience — from preparation to podium."
            align="center"
          />
        </div>

        <div className="border border-white/[0.08] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white/[0.015] backdrop-blur-md grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`p-6 md:p-10 flex flex-col items-center text-center gap-4 group transition-colors duration-300 hover:bg-white/[0.02] relative ${
                i < 3 ? "border-b border-white/[0.08]" : i < 5 ? "border-b md:border-b-0 border-white/[0.08]" : ""
              } ${(i + 1) % 3 !== 0 ? "md:border-r border-white/[0.08]" : ""}`}
            >
              <div className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-xl group-hover:border-[#C30D0F]/40 group-hover:bg-[#C30D0F]/10 transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-[#C30D0F]" />
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#C30D0F]">
                  PILLAR {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm md:text-base font-bold tracking-tight text-zinc-950 group-hover:text-[#C30D0F] transition-colors">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-700 font-normal leading-relaxed max-w-xs">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Evolution Timeline */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionHeading
              tag="Evolution"
              title="Evolution of Diplomatic Education"
              description="From the founding foundations of modern international relations to the 13th edition of IEMMUN in 2026."
            />
          </div>
          <div className="lg:col-span-8">
            <Timeline items={evolutionTimeline} />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
