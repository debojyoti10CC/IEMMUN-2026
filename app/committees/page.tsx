"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CommitteeCard from "@/components/CommitteeCard";
import CTABanner from "@/components/CTABanner";
import { committees } from "@/data/committees";
import { Search, Filter, ShieldAlert, Globe2 } from "lucide-react";

type DifficultyFilter = "All" | "Novice" | "Intermediate" | "Advanced";

export default function CommitteesIndexPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommittees = committees.filter((committee) => {
    const matchesDifficulty =
      selectedDifficulty === "All" || committee.difficulty === selectedDifficulty;
    const matchesSearch =
      committee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      committee.agenda.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDifficulty && matchesSearch;
  });

  const offlineCommittees = filteredCommittees.filter((c) => c.type === "Offline");
  const onlineCommittees = filteredCommittees.filter((c) => c.type === "Online");

  return (
    <div className="bg-transparent w-full min-h-screen">
      {/* Hero Intro Header */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 pb-10 md:pb-16">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#C30D0F] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C30D0F] inline-block" />
            Our Chambers
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-tight">
            Committees & <span className="text-zinc-500">Agendas</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-700 font-medium leading-relaxed">
            Discover the parliamentary councils, crisis rooms, and specialized panels simulated at IEMMUN 2026. Select a chamber to view portfolios and executive rosters.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-black/10 bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          
          <div className="relative flex-1 max-w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search committee or agenda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/80 border border-black/10 rounded-full text-xs text-zinc-900 focus:outline-none focus:border-[#C30D0F] focus:bg-white transition-all placeholder:text-zinc-500 font-medium shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pt-1 md:pt-0">
            <span className="text-[10px] font-bold tracking-wider text-zinc-600 uppercase flex items-center gap-1 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#C30D0F]" />
              <span>Level:</span>
            </span>
            {(["All", "Novice", "Intermediate", "Advanced"] as DifficultyFilter[]).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedDifficulty === diff
                    ? "bg-[#C30D0F] border-[#C30D0F] text-white shadow-sm"
                    : "bg-white/70 border-black/10 text-zinc-700 hover:bg-white hover:text-zinc-900"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Grid Content */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-20 md:pb-28 flex flex-col gap-14 md:gap-20">
        {filteredCommittees.length > 0 ? (
          <>
            {offlineCommittees.length > 0 && (
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="border-b border-black/10 pb-4 flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-950 flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-[#C30D0F]/10 border border-[#C30D0F]/20 text-[#C30D0F]">
                      <ShieldAlert className="w-4 h-4" />
                    </span>
                    Offline Committees
                  </h2>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    {offlineCommittees.length} {offlineCommittees.length === 1 ? "Chamber" : "Chambers"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {offlineCommittees.map((committee) => (
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
              </div>
            )}

            {onlineCommittees.length > 0 && (
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="border-b border-black/10 pb-4 flex items-center justify-between">
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-950 flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600">
                      <Globe2 className="w-4 h-4" />
                    </span>
                    Online Committees
                  </h2>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                    {onlineCommittees.length} {onlineCommittees.length === 1 ? "Chamber" : "Chambers"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {onlineCommittees.map((committee) => (
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
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 md:py-20 border border-black/10 bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] max-w-2xl mx-auto w-full px-6 shadow-sm">
            <span className="text-sm font-semibold text-zinc-700">No committees match your search filters. Try clearing the search or selecting "All".</span>
          </div>
        )}
      </section>

      <CTABanner />
    </div>
  );
}
