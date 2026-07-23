import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/CTABanner";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-transparent w-full min-h-screen">
      <section className="max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#C30D0F] uppercase">
            <span className="w-5 h-[1.5px] bg-[#C30D0F] inline-block" />
            Inquiries
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tight leading-tight">
            Connect with the <span className="text-zinc-500">Secretariat</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-700 font-medium leading-relaxed">
            Reach out to our organizing team for queries regarding institutional delegation codes, logistics, accommodation arrangements, or sponsorships.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            <div className="p-6 md:p-8 border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 transition-all duration-300 hover:border-black/20">
              <div className="text-[#C30D0F] p-2.5 bg-[#C30D0F]/10 rounded-xl w-fit border border-[#C30D0F]/20">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-zinc-950 uppercase">
                Official Email
              </h3>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:officialiemmun@gmail.com" className="text-xs md:text-sm text-zinc-800 hover:text-[#C30D0F] font-semibold transition-colors flex items-center gap-1 break-all">
                  officialiemmun@gmail.com
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                </a>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 transition-all duration-300 hover:border-black/20">
              <div className="text-[#C30D0F] p-2.5 bg-[#C30D0F]/10 rounded-xl w-fit border border-[#C30D0F]/20">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-zinc-950 uppercase">
                Phone Contacts
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Soumik Mondal</span>
                  <a href="tel:+919830966366" className="text-xs md:text-sm text-zinc-900 font-semibold hover:text-[#C30D0F] transition-colors">+91 98309 66366</a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Sreeparna Barman</span>
                  <a href="tel:+919330335795" className="text-xs md:text-sm text-zinc-900 font-semibold hover:text-[#C30D0F] transition-colors">+91 93303 35795</a>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Debjit Dey</span>
                  <a href="tel:+919734432577" className="text-xs md:text-sm text-zinc-900 font-semibold hover:text-[#C30D0F] transition-colors">+91 97344 32577</a>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 sm:col-span-2 transition-all duration-300 hover:border-black/20">
              <div className="text-[#C30D0F] p-2.5 bg-[#C30D0F]/10 rounded-xl w-fit border border-[#C30D0F]/20">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-zinc-950 uppercase">
                Conference Venue
              </h3>
              <div className="flex flex-col gap-1">
                <strong className="text-sm md:text-base text-zinc-950 font-bold">IEM Gurukul Building</strong>
                <p className="text-xs md:text-sm text-zinc-700 font-medium leading-relaxed">
                  Y2, EP Block, Sector V, Bidhannagar<br />
                  Kolkata, West Bengal 700091
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 border border-black/10 bg-white/60 backdrop-blur-xl shadow-sm rounded-2xl md:rounded-[2rem] flex flex-col gap-3 md:gap-4 sm:col-span-2 transition-all duration-300 hover:border-black/20">
              <h3 className="text-xs md:text-sm font-bold tracking-wider text-zinc-950 uppercase">Social Channels</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-1">
                <a href="https://www.instagram.com/iemmun2k26" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-zinc-800 font-semibold hover:text-[#C30D0F] transition-colors">
                  <Instagram className="w-4 h-4 text-[#C30D0F] shrink-0" /> <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/share/19qVDhXmPn/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-zinc-800 font-semibold hover:text-[#C30D0F] transition-colors">
                  <Facebook className="w-4 h-4 text-[#C30D0F] shrink-0" /> <span>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/iemmun/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-zinc-800 font-semibold hover:text-[#C30D0F] transition-colors">
                  <Linkedin className="w-4 h-4 text-[#C30D0F] shrink-0" /> <span>LinkedIn</span>
                </a>
                <a href="https://x.com/iemmun2024" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-zinc-800 font-semibold hover:text-[#C30D0F] transition-colors">
                  <Twitter className="w-4 h-4 text-[#C30D0F] shrink-0" /> <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-wider text-zinc-600 uppercase">
              Conference Venue Map
            </h3>
            <div className="relative w-full aspect-square border border-black/10 bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4183.014317444636!2d88.43386840000001!3d22.574513699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751153ddb371%3A0x816e6fee5a5aac55!2sIEM%20Gurukul%20Building!5e1!3m2!1sen!2sin!4v1782158547225!5m2!1sen!2sin"
                className="w-full h-full border-0 transition-opacity duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
