import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/Timeline";
import CTABanner from "@/components/CTABanner";
import { Shield, Award, Compass, Target } from "lucide-react";

const evolutionTimeline = [
  {
    date: "1945",
    title: "Global Diplomacy Born",
    description: "United Nations Established. Foundation of modern international diplomatic framework.",
    active: false
  },
  {
    date: "1952",
    title: "Educational Innovation",
    description: "First Model UN Conference. Academic simulation of diplomatic processes begins.",
    active: false
  },
  {
    date: "1990s",
    title: "International Growth",
    description: "Worldwide Expansion. MUN conferences establish global presence.",
    active: false
  },
  {
    date: "2012",
    title: "IEMMUN Established",
    description: "IEMMUN Founded. International Excellence in Model United Nations begins its journey.",
    active: false
  },
  {
    date: "2026",
    title: "13th Annual Conference",
    description: "IEMMUN 13th Edition. Continuing excellence in diplomatic education and international relations.",
    active: true
  }
];

export default function AboutPage() {
  return (
    <div className="bg-transparent w-full min-h-screen pt-20 md:pt-32">
      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-24">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
          <span className="text-[10px] md:text-2xs font-semibold tracking-[0.25em] text-[#C30D0F] uppercase">
            About IEMMUN
          </span>
          <h1 className="text-2xl md:text-6xl font-bold text-white tracking-tight leading-tight md:leading-none">
            Advancing diplomatic education through innovative simulation and academic excellence
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-16 md:mb-28 pt-10 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col gap-5 md:gap-6 bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] border border-white/[0.06] p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

            <div className="p-2.5 md:p-3 bg-white/[0.03] border border-white/[0.06] text-[#C30D0F] w-fit rounded-lg md:rounded-xl">
              <Target className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Our Mission
            </h2>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed">
              IEMMUN 2026 represents the convergence of academic rigor and diplomatic excellence. We create immersive educational experiences that challenge participants to engage with complex global issues, develop critical thinking capabilities, and cultivate the leadership skills essential for addressing contemporary international challenges.
            </p>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed">
              Our commitment extends beyond simulation to fostering genuine understanding of multilateral diplomacy and international relations.
            </p>
          </div>

          <div className="lg:col-span-6 relative w-full aspect-[4/3] lg:aspect-[3/4] border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] p-1.5 md:p-2 rounded-2xl md:rounded-[2.5rem]">
            <div className="relative w-full h-full overflow-hidden rounded-xl md:rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                alt="Diplomacy Session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-40 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-16 md:mb-28 pt-10 md:pt-16">
        <div className="text-center mb-8 md:mb-12">
          <SectionHeading
            tag="Key Competencies"
            title="Conference Core Pillars"
            description="Our academic metrics prioritize research, rhetoric, and cooperative drafting."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <div className="p-6 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 relative overflow-hidden group">
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-2.5 md:p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg md:rounded-xl w-fit group-hover:border-[#C30D0F]/30 group-hover:bg-[#C30D0F]/10 transition-colors duration-300">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-[#C30D0F]" />
            </div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white mt-1 md:mt-2">Academic Excellence</h4>
            <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">
              Maintaining the highest standards in diplomatic education through rigorous research, comprehensive preparation, and expert guidance.
            </p>
          </div>

          <div className="p-6 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 relative overflow-hidden group">
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-2.5 md:p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg md:rounded-xl w-fit group-hover:border-[#C30D0F]/30 group-hover:bg-[#C30D0F]/10 transition-colors duration-300">
              <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#C30D0F]" />
            </div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white mt-1 md:mt-2">Global Perspective</h4>
            <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">
              Fostering international understanding through diverse representation and comprehensive exploration of global challenges and solutions.
            </p>
          </div>

          <div className="p-6 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 relative overflow-hidden group sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-2.5 md:p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg md:rounded-xl w-fit group-hover:border-[#C30D0F]/30 group-hover:bg-[#C30D0F]/10 transition-colors duration-300">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#C30D0F]" />
            </div>
            <h4 className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white mt-1 md:mt-2">Leadership Development</h4>
            <p className="text-[11px] md:text-xs text-white/50 leading-relaxed">
              Cultivating the next generation of diplomatic leaders through practical experience in negotiation, consensus-building, and strategic thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-16 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              tag="Evolution"
              title="Evolution of Diplomatic Education"
              description="From the founding foundations of modern international relations to the 13th edition of IEMMUN in 2026."
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline items={evolutionTimeline} />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
