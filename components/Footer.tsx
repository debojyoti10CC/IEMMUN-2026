import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-900 text-neutral-400 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Brand Info */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="group flex items-center gap-3 select-none w-fit">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/iemmun-logo.png"
                  alt="IEMMUN Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-[0.22em] text-white leading-none">
                  IEM<span className="text-accent transition-colors group-hover:text-white">MUN</span>
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] text-neutral-500 mt-1.5 leading-none">
                  2026
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-sm">
              The premier platform for international diplomatic discourse and academic simulation. Empowering future leaders through critical debate, crisis management, and global policy analysis.
            </p>
          </div>

          {/* Center Column: Sitemap */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <span className="text-2xs font-bold tracking-[0.2em] uppercase text-white">
              Sitemap
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/committees" className="hover:text-white transition-colors">Committees</Link>
              <Link href="/secretariat" className="hover:text-white transition-colors">Secretariat</Link>
              <Link href="/collaborators" className="hover:text-white transition-colors">Collaborators</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <Link href="/contact" className="hover:text-white transition-colors col-span-2">Contact</Link>
            </div>
          </div>

          {/* Right Column: Social Media */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <span className="text-2xs font-bold tracking-[0.2em] uppercase text-white">
              Follow Us
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/iemmun2k26"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/19qVDhXmPn/"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/iemmun/"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:border-accent hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/iemmun2024"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-neutral-900 rounded bg-neutral-950 hover:border-accent hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-neutral-500 uppercase tracking-widest">
          <span>&copy; {currentYear} IEMMUN. All Rights Reserved.</span>
          <span>Designed and Developed by <a href="https://www.linkedin.com/in/debanurag/" target="_blank" rel="noreferrer" className="text-white hover:text-accent font-semibold transition-colors normal-case">Anurag Deb</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
