"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import Button from "./ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-5 md:p-12 border border-white/[0.06] bg-white/[0.015] backdrop-blur-md md:backdrop-blur-[40px] rounded-2xl md:rounded-[2.5rem] mt-6 md:mt-8 w-full relative overflow-hidden">
      <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <h3 className="text-base md:text-xl font-medium text-white mb-4 md:mb-6">Send an Inquiry</h3>

      {submitStatus === "success" && (
        <div className="mb-4 md:mb-6 p-3 md:p-4 border border-green-900/50 bg-green-950/20 text-green-400 text-[11px] md:text-sm rounded-lg md:rounded-xl">
          Thank you. Your message has been sent successfully. We will get back to you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 md:mb-6 p-3 md:p-4 border border-red-900/50 bg-red-950/20 text-red-400 text-[11px] md:text-sm rounded-lg md:rounded-xl">
          There was an error sending your message. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[9px] md:text-[10px] font-bold tracking-wider text-white/40 uppercase ml-1 md:ml-2">Full Name</label>
            <input
              id="name"
              {...register("name")}
              placeholder="John Doe"
              className={`bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-white/[0.06]'} text-xs md:text-sm text-white p-3 md:p-4 focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all rounded-xl text-[13px] md:text-sm`}
            />
            {errors.name && <span className="text-[9px] md:text-[10px] text-[#C30D0F] ml-1">{errors.name.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[9px] md:text-[10px] font-bold tracking-wider text-white/40 uppercase ml-1 md:ml-2">Email Address</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@example.com"
              className={`bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/[0.06]'} text-xs md:text-sm text-white p-3 md:p-4 focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all rounded-xl text-[13px] md:text-sm`}
            />
            {errors.email && <span className="text-[9px] md:text-[10px] text-[#C30D0F] ml-1">{errors.email.message}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-[9px] md:text-[10px] font-bold tracking-wider text-white/40 uppercase ml-1 md:ml-2">Subject</label>
          <input
            id="subject"
            {...register("subject")}
            placeholder="Delegation Inquiry"
            className={`bg-black/40 border ${errors.subject ? 'border-red-500/50' : 'border-white/[0.06]'} text-xs md:text-sm text-white p-3 md:p-4 focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all rounded-xl text-[13px] md:text-sm`}
          />
          {errors.subject && <span className="text-[9px] md:text-[10px] text-[#C30D0F] ml-1">{errors.subject.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-[9px] md:text-[10px] font-bold tracking-wider text-white/40 uppercase ml-1 md:ml-2">Message</label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            placeholder="How can we help you?"
            className={`bg-black/40 border ${errors.message ? 'border-red-500/50' : 'border-white/[0.06]'} text-xs md:text-sm text-white p-3 md:p-4 focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all resize-y rounded-xl text-[13px] md:text-sm`}
          />
          {errors.message && <span className="text-[9px] md:text-[10px] text-[#C30D0F] ml-1">{errors.message.message}</span>}
        </div>

        <div className="pt-2 md:pt-4 flex justify-end">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 gap-2 rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed text-[10px] md:text-xs uppercase tracking-widest font-bold"
          >
            {isSubmitting ? (
              <Loader2 className="w-3.5 h-3.5 md:w-4 md:h-4 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
