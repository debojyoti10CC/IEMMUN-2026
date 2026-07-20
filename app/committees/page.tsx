"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CommitteeCard from "@/components/CommitteeCard";
import { committees } from "@/data/committees";
import { Search, Filter } from "lucide-react";

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
    <div className="bg-transparent w-full min-h-screen pt-20 md:pt-32">
      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-8 md:mb-12">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
          <span className="text-[10px] md:text-2xs font-semibold tracking-[0.25em] text-[#C30D0F] uppercase">
            Our Chambers
          </span>
          <h1 className="text-2xl md:text-6xl font-bold text-white tracking-tight leading-tight md:leading-none">
            Committees & Agendas
          </h1>
          <p className="text-xs md:text-lg text-white/50 leading-relaxed">
            Discover the parliamentary councils, crisis rooms, and specialized panels simulated at IEMMUN 2026. Select a chamber to view portfolios and executive rosters.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 p-3 md:p-4 border border-white/[0.06] bg-white/[0.02] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] relative overflow-hidden">
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

          <div className="relative flex-1 max-w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search by name or agenda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-black/40 border border-white/[0.06] rounded-full text-[11px] md:text-xs text-white focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1 md:gap-1.5 overflow-x-auto">
            <span className="text-[8px] md:text-[10px] font-bold tracking-wider text-white/40 uppercase flex items-center gap-1 mr-1 md:mr-2 shrink-0">
              <Filter className="w-3 h-3" />
              <span className="hidden md:inline">Difficulty:</span>
            </span>
            {(["All", "Novice", "Intermediate", "Advanced"] as DifficultyFilter[]).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.15em] uppercase border transition-all duration-300 cursor-pointer backdrop-blur-md shrink-0 ${
                  selectedDifficulty === diff
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-transparent border-transparent text-white/50 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-16 md:pb-24 flex flex-col gap-12 md:gap-16">
        {filteredCommittees.length > 0 ? (
          <>
            {offlineCommittees.length > 0 && (
              <div className="flex flex-col gap-5 md:gap-8">
                <div className="border-b border-white/[0.06] pb-3 md:pb-4">
                  <h2 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#C30D0F]" />
                    Offline Committees
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                  {offlineCommittees.map((committee) => (
                    <CommitteeCard
                      key={committee.id}
                      id={committee.id}
                      name={committee.name}
                      shortName={committee.shortName}
                      agenda={committee.agenda}
                      difficulty={committee.difficulty}
                      image={committee.image}
                    />
                  ))}
                </div>
              </div>
            )}

            {onlineCommittees.length > 0 && (
              <div className="flex flex-col gap-5 md:gap-8">
                <div className="border-b border-white/[0.06] pb-3 md:pb-4">
                  <h2 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2 md:gap-3">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/40" />
                    Online Committees
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                  {onlineCommittees.map((committee) => (
                    <CommitteeCard
                      key={committee.id}
                      id={committee.id}
                      name={committee.name}
                      shortName={committee.shortName}
                      agenda={committee.agenda}
                      difficulty={committee.difficulty}
                      image={committee.image}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 md:py-20 border border-white/[0.06] bg-white/[0.02] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] max-w-3xl mx-auto w-full px-5 md:px-6 relative overflow-hidden">
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
            <span className="text-xs text-white/50 tracking-wider">No committees match your search filters. Please adjust the settings.</span>
          </div>
        )}
      </section>
    </div>
  );
}
