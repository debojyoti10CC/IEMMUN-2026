"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Shield, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroSlider from "@/components/HeroSlider";
import StatsCard from "@/components/StatsCard";
import Timeline from "@/components/Timeline";
import CommitteeCard from "@/components/CommitteeCard";
import CTABanner from "@/components/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import { committees } from "@/data/committees";
import { announcements } from "@/data/announcements";
import { timelineItems } from "@/data/timeline";
import { statsItems } from "@/data/stats";
import underNewsImg from "../public/under-news.png";
import capitolImg from "../public/capitol.png";
import cherubsImg from "../public/cherubs.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".gsap-fade-section");

    sections.forEach((section: any) => {
      gsap.from(section, {
        y: 60,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: container });

  const featuredCommittees = committees.slice(0, 3);

  return (
    <div ref={container} className="bg-transparent w-full min-h-screen">
      <HeroSlider />

      {/* The IEMMUN Legacy Section */}
      <section className="gsap-fade-section py-14 md:py-28 max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <SectionHeading
            align="center"
            useOverlay
            bgText="LEGACY"
            tag="The IEMMUN Legacy"
            title="A Tradition of Academic & Diplomatic Rigor"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-5 md:gap-6">
            <p className="text-sm md:text-lg text-white/80 leading-relaxed font-sans">
              IEMMUN 2026 brings together the next generation of global leaders, policymakers, and scholars. Our conference is established as a premiere platform for high-level simulation, intellectual challenge, and constructive compromise.
            </p>
            <p className="text-xs md:text-base text-white/50 leading-relaxed font-sans">
              For over half a decade, our summit has challenged delegates with complex crisis timelines, multi-lateral financial defaults, and sovereign security protocols. We emphasize academic research, precision speaking, and the complex art of international drafting.
            </p>
            <div className="mt-2 md:mt-4 flex gap-4 w-full md:w-auto">
              <Link href="/about" className="w-full md:w-auto">
                <Button variant="outline" className="group gap-2 w-full md:w-auto text-xs md:text-xs">
                  Read Conference Mission
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/3] select-none flex justify-end">
            <div className="relative w-full h-full md:h-[110%] md:-translate-y-[5%]">
              <Image
                src={capitolImg}
                alt="US Capitol Assembly"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="gsap-fade-section py-12 select-none">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="border border-black/[0.08] rounded-xl overflow-hidden bg-white/40 backdrop-blur-md flex flex-col md:grid md:grid-cols-4 md:divide-x divide-y divide-black/[0.08] md:divide-y-0">
            {statsItems.map((stat, idx) => (
              <StatsCard
                key={idx}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Committees Section */}
      <section className="gsap-fade-section py-14 md:py-28 max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <SectionHeading
            tag="Featured Committees"
            title="Debate the Undebatable"
            description="Select from our diverse range of simulated assemblies, designed to test beginner, intermediate, and advanced diplomatic skill levels."
            align="center"
            useOverlay
            bgText="COMMITTEES"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {featuredCommittees.map((committee) => (
            <CommitteeCard
              key={committee.id}
              id={committee.id}
              name={committee.name}
              shortName={committee.shortName}
              agenda={committee.agenda}
              difficulty={committee.difficulty}
              image={committee.image}
              cardBg={committee.cardBg}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center w-full">
          <Link href="/committees" className="w-full md:w-auto">
            <Button variant="outline" className="group gap-2 w-full md:w-auto text-xs justify-center">
              View All Committees
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* World Leaders Cherubs Banner Section */}
      <section className="gsap-fade-section py-2 md:py-4 select-none mix-blend-multiply flex justify-center w-full overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-center">
          <Image
            src={cherubsImg}
            alt="World Leaders Cherubs"
            className="w-full h-auto object-contain mix-blend-multiply"
            priority
          />
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="gsap-fade-section py-14 md:py-28 bg-transparent">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="flex flex-col items-center mb-12 md:mb-16">
            <SectionHeading
              tag="Why Participate"
              title="The IEMMUN Delegate Experience"
              description="Our summit provides delegates with a high-fidelity learning environment, simulating actual world governance challenges."
              align="center"
              useOverlay
              bgText="EXPERIENCE"
            />
          </div>

          <div className="border border-black/[0.08] rounded-xl overflow-hidden bg-white/40 backdrop-blur-md flex flex-col md:grid md:grid-cols-3 md:divide-x divide-y divide-black/[0.08] md:divide-y-0 mt-4">
            <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-3 group transition-all duration-300 hover:bg-black/[0.01]">
              <div className="p-2.5 md:p-3 rounded-lg bg-[#C30D0F]/[0.06] text-[#C30D0F] h-fit w-fit transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Shield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs md:text-sm font-bold tracking-wider uppercase text-zinc-900 group-hover:text-[#C30D0F] transition-colors">Rigorous Crisis Writing</h4>
                <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed">
                  Custom historical and futurist crisis updates drafted by an expert staff that respond dynamically to delegate portfolios.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-3 group transition-all duration-300 hover:bg-black/[0.01]">
              <div className="p-2.5 md:p-3 rounded-lg bg-[#C30D0F]/[0.06] text-[#C30D0F] h-fit w-fit transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs md:text-sm font-bold tracking-wider uppercase text-zinc-900 group-hover:text-[#C30D0F] transition-colors">Distinguished Directors</h4>
                <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed">
                  Committees are overseen by seasoned MUN executives and policy students from Ivy-tier institutions.
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-3 group transition-all duration-300 hover:bg-black/[0.01]">
              <div className="p-2.5 md:p-3 rounded-lg bg-[#C30D0F]/[0.06] text-[#C30D0F] h-fit w-fit transition-transform duration-300 group-hover:scale-105 shrink-0">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="text-xs md:text-sm font-bold tracking-wider uppercase text-zinc-900 group-hover:text-[#C30D0F] transition-colors">Comprehensive Study Portals</h4>
                <p className="text-[10px] md:text-xs text-zinc-500 leading-relaxed">
                  Receive extensive dossiers, country summaries, and rule guides ahead of committee sessions to facilitate preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Timeline Section */}
      <section className="gsap-fade-section py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col gap-12">
          <div className="flex flex-col items-center">
            <SectionHeading
              tag="Conference Timeline"
              title="Countdown to IEMMUN 2026"
              description="Plan your delegation timeline. Keep track of registration cycles and research deadlines."
              align="center"
              useOverlay
              bgText="TIMELINE"
            />
          </div>
          <div className="max-w-4xl mx-auto w-full mt-2">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="gsap-fade-section py-14 md:py-28 max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <SectionHeading
            tag="Latest Announcements"
            title="News & Executive Releases"
            description="Stay informed with structural updates, guide releases, and notices from the Secretary-General."
            align="center"
            useOverlay
            bgText="UPDATES"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {announcements.map((announcement) => (
            <Link
              key={announcement.id}
              href="/resources"
              className="relative bg-white/40 border border-black/[0.08] p-6 md:p-8 flex flex-col justify-between gap-4 md:gap-6 group rounded-xl transition-all duration-500 hover:border-[#C30D0F]/35 hover:shadow-[0_12px_40px_rgba(195,13,15,0.08)] backdrop-blur-md overflow-hidden"
            >
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C30D0F]/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] group-hover:ring-[#C30D0F]/15 transition-all duration-500 rounded-xl pointer-events-none z-10" />

              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#C30D0F]/[0.06] text-[#C30D0F] text-[9px] md:text-[10px] font-bold tracking-[0.18em] uppercase border border-[#C30D0F]/15">
                    {announcement.category}
                  </span>
                  <span className="text-zinc-400 font-semibold flex items-center gap-1.5 text-[10px] md:text-xs">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="hidden md:inline">{announcement.date}</span>
                    <span className="md:hidden">{announcement.date.replace("2026", "").trim()}</span>
                  </span>
                </div>

                <h3 className="text-base md:text-xl font-bold text-zinc-900 group-hover:text-[#C30D0F] transition-colors leading-snug mt-1">
                  {announcement.title}
                </h3>

                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed line-clamp-2">
                  {announcement.excerpt}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-zinc-800 group-hover:text-[#C30D0F] transition-colors relative z-10 mt-1">
                Read Announcement
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner image under news, centered, borderless, flush to CTABanner */}
      <section className="max-w-4xl mx-auto px-5 md:px-6 mt-16 -mb-16 md:-mb-32 relative z-30 select-none mix-blend-multiply">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={underNewsImg}
            alt="Supreme Court Assembly"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </section>

      <div className="relative z-10">
        <CTABanner />
      </div>
    </div>
  );
}
