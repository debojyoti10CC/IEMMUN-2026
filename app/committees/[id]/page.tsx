import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { committees } from "@/data/committees";
import { Badge } from "@/components/ui/Badge";
import CTABanner from "@/components/CTABanner";
import { ArrowLeft, Download, FileText, Globe, UserCheck, Shield } from "lucide-react";

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
      {/* Hero Banner Header */}
      <section className="relative w-full pt-28 md:pt-40 pb-12 md:pb-16 border-b border-black/10 overflow-hidden bg-transparent">
        {committee.cardBg && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 select-none">
            <Image
              src={committee.cardBg}
              alt=""
              fill
              unoptimized
              className="object-cover filter blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f7d4ce]/50 to-[#f7d4ce]" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <Link
              href="/committees"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-700 hover:text-[#C30D0F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Chambers
            </Link>

            <div className="flex items-center gap-3 flex-wrap">
              <Badge type={committee.difficulty} />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#C30D0F] uppercase bg-[#C30D0F]/10 border border-[#C30D0F]/20 px-3 py-1 rounded-full">
                {committee.difficulty} Chamber
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-600 uppercase bg-white/60 border border-black/10 px-3 py-1 rounded-full shadow-sm">
                {committee.type} Session
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-tight">
              {committee.name}
            </h1>
          </div>

          <div className="relative w-24 h-24 md:w-36 md:h-36 flex-shrink-0 bg-white/80 border border-black/10 p-3 md:p-4 rounded-2xl md:rounded-[2rem] shadow-md backdrop-blur-xl flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={committee.image}
                alt={committee.name}
                fill
                priority
                sizes="(max-width: 768px) 96px, 144px"
                className="object-contain p-1 filter brightness-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-10 md:gap-14">

            {/* Overview */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold text-zinc-950 border-b border-black/10 pb-3 flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-[#C30D0F]/10 text-[#C30D0F]">
                  <Shield className="w-5 h-5" />
                </span>
                Chamber Overview
              </h2>
              <p className="text-sm md:text-base text-zinc-800 font-normal leading-relaxed">
                {committee.overview}
              </p>
            </div>

            {/* Agenda */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold text-zinc-950 border-b border-black/10 pb-3">
                Agenda Focus & Context
              </h2>
              <p className="text-sm md:text-base text-zinc-800 font-normal leading-relaxed">
                {committee.detailedAgenda}
              </p>
            </div>

            {/* Matrix */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-bold text-zinc-950 border-b border-black/10 pb-3">
                Portfolio Allocation Matrix
              </h2>
              <p className="text-xs md:text-sm text-zinc-600 font-medium">
                The portfolios listed below are active for IEMMUN 2026. Country allocations will occur upon registration validation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={committee.backgroundGuideUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 md:p-4 border border-[#C30D0F]/30 bg-[#C30D0F]/[0.06] hover:bg-[#C30D0F]/10 rounded-xl md:rounded-2xl transition-all flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#C30D0F] col-span-2 sm:col-span-3 md:col-span-1 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#C30D0F] shrink-0" />
                  <span>Background Guide</span>
                </a>
                {committee.portfolioMatrix.map((portfolio, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-black/10 bg-white/70 hover:border-black/25 transition-all flex items-center gap-2 text-xs font-semibold text-zinc-900 rounded-xl shadow-sm"
                  >
                    <Globe className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{portfolio}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6">

            {/* Executive Board Card */}
            <div className="p-6 md:p-8 border border-black/10 bg-white/70 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-zinc-950 flex items-center gap-2 pb-3 border-b border-black/10">
                <UserCheck className="w-5 h-5 text-[#C30D0F]" />
                Executive Board
              </h3>
              <div className="flex flex-col divide-y divide-black/10 pt-1">
                {committee.executiveBoard.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 py-3 first:pt-0 last:pb-0">
                    {/* Small Executive Member Image / Avatar */}
                    <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden border border-black/10 bg-zinc-100 flex-shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-800 font-bold text-xs md:text-sm">
                          {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-sm md:text-base font-bold text-zinc-950 truncate">{member.name}</span>
                      <span className="text-xs text-[#C30D0F] font-bold uppercase tracking-wider">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Guides Card */}
            <div className="p-6 md:p-8 border border-black/10 bg-white/70 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-zinc-950 pb-3 border-b border-black/10">
                Dossier & Study Guides
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 p-4 bg-white/90 border border-black/10 rounded-xl shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#C30D0F] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-zinc-950">Background Study Guide</span>
                      <span className="text-[10px] text-zinc-500 font-medium">Official PDF Document</span>
                    </div>
                  </div>
                  <a
                    href={committee.backgroundGuideUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-white bg-[#C30D0F] hover:bg-[#A30A0C] rounded-xl px-4 py-3 text-xs w-full transition-all shadow-md active:scale-[0.98]"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    Download PDF
                  </a>
                </div>

                {committee.resources.length > 0 && (
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
                      Additional Reference Material
                    </span>
                    <div className="flex flex-col gap-2">
                      {committee.resources.map((res, idx) => (
                        <a
                          key={idx}
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-zinc-800 hover:text-[#C30D0F] font-semibold transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C30D0F]" />
                          {res.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
