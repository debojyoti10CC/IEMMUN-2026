import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { committees } from "@/data/committees";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, Download, FileText, Globe } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return committees.map((c) => ({
    id: c.id,
  }));
}

export default async function CommitteeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const committee = committees.find((c) => c.id === id);

  if (!committee) {
    notFound();
  }

  return (
    <div className="bg-transparent w-full min-h-screen">
      <section className="relative w-full min-h-[30vh] md:min-h-[40vh] flex items-end bg-gradient-to-b from-black via-[#0a0a0a] to-black border-b border-white/[0.06] pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div className="flex flex-col items-start gap-3 md:gap-4">
            <Link
              href="/committees"
              className="inline-flex items-center gap-1.5 md:gap-2 text-[9px] md:text-2xs uppercase tracking-wider text-white/50 hover:text-white transition-colors mb-1 md:mb-2"
            >
              <ArrowLeft className="w-3 h-3 md:w-3.5 md:h-3.5" />
              Back to Chambers
            </Link>

            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <Badge type={committee.difficulty} />
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] text-white/50 uppercase bg-white/[0.03] px-2.5 md:px-3 py-1 rounded-full border border-white/[0.06] backdrop-blur-md">
                {committee.difficulty} Level
              </span>
            </div>

            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-4xl">
              {committee.name}
            </h1>
          </div>

          <div className="relative w-16 h-16 md:w-32 md:h-32 flex-shrink-0 bg-white/[0.015] p-2 md:p-4 border border-white/[0.06] rounded-xl md:rounded-[2rem] backdrop-blur-md md:backdrop-blur-[40px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
            <div className="relative w-full h-full">
              <Image
                src={committee.image}
                alt={committee.name}
                fill
                priority
                sizes="(max-width: 768px) 64px, 128px"
                className="object-contain p-1"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12">

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-lg md:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 md:pb-3">
                Chamber Overview
              </h2>
              <p className="text-xs md:text-base text-white/50 leading-relaxed">
                {committee.overview}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-lg md:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 md:pb-3">
                Agenda Focus & Context
              </h2>
              <p className="text-xs md:text-base text-white/50 leading-relaxed">
                {committee.detailedAgenda}
              </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-lg md:text-2xl font-bold text-white border-b border-white/[0.06] pb-2 md:pb-3">
                Portfolio Allocation Matrix
              </h2>
              <p className="text-[10px] md:text-sm text-white/50 mb-1 md:mb-2">
                The portfolios listed below are active for IEMMUN 2026. Country allocations will occur upon registration validation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                <a
                  href={committee.backgroundGuideUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 md:p-4 border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.12] backdrop-blur-md md:backdrop-blur-xl rounded-xl md:rounded-[1.5rem] transition-all flex items-center gap-2 md:gap-3 text-[9px] md:text-xs font-bold tracking-widest uppercase text-white/60 relative overflow-hidden group col-span-2 sm:col-span-3 md:col-span-1"
                >
                  <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C30D0F] shrink-0" />
                  <span>Background Guide</span>
                </a>
                {committee.portfolioMatrix.map((portfolio, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 md:p-3 border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-white/60 rounded-lg md:rounded-xl"
                  >
                    <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/40 shrink-0" />
                    <span className="truncate">{portfolio}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-5 md:gap-8">

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] relative overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <h2 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#C30D0F]" />
                Executive Board
              </h2>
              <div className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-4">
                {committee.executiveBoard.map((member, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs md:text-sm font-medium text-white">{member.name}</span>
                    <span className="text-[9px] md:text-2xs text-[#C30D0F] uppercase tracking-wider mt-0.5">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] relative overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <h2 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/40" />
                Dossier & Study Guides
              </h2>

              <div className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-6">
                <div className="flex flex-col gap-2 md:gap-3 p-4 md:p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl md:rounded-2xl">
                  <div className="flex items-start gap-2 md:gap-3">
                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-[#C30D0F] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] md:text-xs font-semibold text-white">Background Study Guide</span>
                      <span className="text-[9px] md:text-[10px] text-white/50">PDF Document</span>
                    </div>
                  </div>
                  <a href={committee.backgroundGuideUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C30D0F] cursor-pointer rounded-full bg-white/[0.03] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] active:scale-[0.98] backdrop-blur-md px-3 md:px-4 py-2 text-[8px] md:text-[10px] w-full gap-1.5 md:gap-2 mt-1 md:mt-2">
                    <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Download PDF
                  </a>
                </div>

                <div className="flex flex-col gap-2 md:gap-3 mt-1 md:mt-2">
                  <span className="text-[8px] md:text-2xs font-bold tracking-wider text-white/40 uppercase">
                    Additional Reference Material
                  </span>
                  <div className="flex flex-col gap-1.5 md:gap-2.5">
                    {committee.resources.map((res, idx) => (
                      <a
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] md:text-xs text-white/50 hover:text-[#C30D0F] transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#C30D0F]" />
                        {res.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
