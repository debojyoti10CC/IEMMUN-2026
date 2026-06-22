import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export const CTABanner: React.FC = () => {
  return (
    <section className="bg-black py-20 md:py-28 border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle overlay accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border border-neutral-900 bg-neutral-950/40 p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-2xs font-semibold tracking-[0.25em] text-accent uppercase font-sans">
              Apply Now
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-medium tracking-tight leading-tight">
              Shape the Future of Diplomatic Dialogue
            </h2>
            <p className="text-sm md:text-base text-neutral-400 font-sans leading-relaxed">
              Institutional registrations and individual delegate applications are open. Secure your place at the most prestigious simulation of the year.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 font-sans">
            <Link href="/committees" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full gap-2">
                Register Delegation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full border-neutral-800 hover:border-white">
                Contact Secretariat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
