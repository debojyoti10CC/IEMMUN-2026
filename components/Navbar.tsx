"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Committees", href: "/committees" },
  { label: "Secretariat", href: "/secretariat" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-8 ${
          isScrolled ? "top-3 md:top-4" : "top-5 md:top-6"
        }`}
      >
        <header
          className={`w-full max-w-4xl transition-all duration-500 rounded-full flex items-center justify-between px-6 md:px-8 relative ${
            isScrolled
              ? "bg-white/85 backdrop-blur-xl py-2.5 border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              : "bg-white/50 backdrop-blur-md py-3 border border-black/[0.05]"
          }`}
        >
          <div className="flex items-center justify-start">
            <Link href="/" className="group flex items-center gap-2.5 select-none">
              <div className="relative w-7 h-7 md:w-8 md:h-8 flex-shrink-0">
                <Image
                  src="/iemmun-logo.png"
                  alt="IEMMUN Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  style={{ filter: "invert(0.12) sepia(0.1) saturate(3) hue-rotate(345deg) brightness(0.45)" }}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] md:text-[13px] font-bold tracking-[0.22em] text-zinc-900 leading-none">
                  IEM<span className="text-[#C30D0F] transition-colors">MUN</span>
                </span>
                <span className="text-[7px] md:text-[9px] font-semibold tracking-[0.25em] text-zinc-500 mt-0.5 leading-none">
                  2026
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 justify-center">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[10px] uppercase tracking-[0.2em] font-semibold transition-all py-2 px-4 rounded-full ${
                    isActive ? "text-zinc-900 bg-black/5" : "text-zinc-500 hover:text-zinc-900 hover:bg-black/5"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-600 hover:text-zinc-900 focus:outline-none cursor-pointer rounded-full hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[72px] left-4 right-4 z-40 lg:hidden flex flex-col p-5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-h-[calc(100dvh-100px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={item.href}
                  >
                    <Link
                      href={item.href}
                      className={`text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-[#C30D0F] bg-[#C30D0F]/[0.04] border-l-2 border-[#C30D0F]"
                          : "text-zinc-500 hover:text-zinc-900 hover:bg-black/5"
                      }`}
                    >
                      {item.label}
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C30D0F]" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
