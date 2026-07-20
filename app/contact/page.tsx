import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-transparent w-full min-h-screen pt-20 md:pt-32">
      <section className="max-w-7xl mx-auto px-5 md:px-6 mb-12 md:mb-20">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
          <span className="text-[10px] md:text-2xs font-semibold tracking-[0.25em] text-[#C30D0F] uppercase">
            Inquiries
          </span>
          <h1 className="text-2xl md:text-6xl font-bold text-white tracking-tight leading-tight md:leading-none">
            Connect with the Secretariat
          </h1>
          <p className="text-xs md:text-lg text-white/50 leading-relaxed">
            Reach out to our organizing team for queries regarding institutional delegation codes, logistics, accommodation arrangements, or sponsorships.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 group hover:border-white/[0.12] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <div className="text-[#C30D0F] mb-1 md:mb-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">
                Official Email
              </h3>
              <div className="flex flex-col gap-1.5 mt-1">
                <a href="mailto:officialiemmun@gmail.com" className="text-[11px] md:text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1 break-all">
                  officialiemmun@gmail.com
                  <ArrowUpRight className="w-3 h-3 text-white/40 shrink-0" />
                </a>
              </div>
            </div>

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 group hover:border-white/[0.12] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <div className="text-[#C30D0F] mb-1 md:mb-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">
                Phone Contacts
              </h3>
              <div className="flex flex-col gap-3 md:gap-5 mt-1 md:mt-2">
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/40 uppercase">Soumik Mondal</span>
                  <a href="tel:+919830966366" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors">+91 98309 66366</a>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/40 uppercase">Sreeparna Barman</span>
                  <a href="tel:+919330335795" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors">+91 93303 35795</a>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-white/40 uppercase">Debjit Dey</span>
                  <a href="tel:+919734432577" className="text-xs md:text-sm text-white/60 hover:text-white transition-colors">+91 97344 32577</a>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 group hover:border-white/[0.12] transition-all duration-500 sm:col-span-2 relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <div className="text-[#C30D0F] mb-1 md:mb-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">
                Conference Venue
              </h3>
              <div className="flex flex-col gap-1 mt-1 md:mt-2">
                <strong className="text-xs md:text-sm text-white">IEM Gurukul Building</strong>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  Y2, EP Block, Sector V, Bidhannagar<br />
                  Kolkata, West Bengal 700091
                </p>
              </div>
            </div>

            <div className="p-5 md:p-8 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 group hover:border-white/[0.12] transition-all duration-500 sm:col-span-2 relative overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-white uppercase">Social Channels</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-1 md:mt-2">
                <a href="https://www.instagram.com/iemmun2k26" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] md:text-xs text-white/50 hover:text-white transition-colors">
                  <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C30D0F] shrink-0" /> <span className="hidden xs:inline">Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/19qVDhXmPn/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] md:text-xs text-white/50 hover:text-white transition-colors">
                  <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C30D0F] shrink-0" /> <span className="hidden xs:inline">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/iemmun/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] md:text-xs text-white/50 hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C30D0F] shrink-0" /> <span className="hidden xs:inline">LinkedIn</span>
                </a>
                <a href="https://x.com/iemmun2024" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] md:text-xs text-white/50 hover:text-white transition-colors">
                  <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C30D0F] shrink-0" /> <span className="hidden xs:inline">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            <h3 className="text-[10px] md:text-sm font-bold tracking-wider text-white/40 uppercase">
              Conference Venue Map
            </h3>
            <div className="relative w-full aspect-square border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-white/[0.12]">
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4183.014317444636!2d88.43386840000001!3d22.574513699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e1!3m2!1sen!2sin!4v1782158547225!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{ filter: "grayscale(0.6) invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
