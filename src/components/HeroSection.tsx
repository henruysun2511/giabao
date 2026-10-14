import React from "react";
import { HandDrawnArrow } from "./HandDrawnArrow";
import { WashiTape } from "./WashiTape";
import { PROFILE_DATA } from "@/data/profile";
import {
  Sparkles,
  ArrowRight,
  Mail,
  FileText,
  Rocket,
  Bot,
  Zap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-10 border-b-2 border-black/15 overflow-hidden">
      {/* Decorative Washi Tape at corner */}
      <WashiTape
        color="bg-amber-300/80"
        rotate="rotate-6"
        width="w-36"
        className="-top-2 -right-4"
      />

      {/* Intro scribble */}
      <div className="flex items-center gap-2 mb-2">
        <span className="font-handwriting text-2xl sm:text-3xl text-orange-600 font-bold -rotate-3 select-none">
          👋 hey there, welcome to my digital scrapbook!
        </span>
      </div>

      {/* Main Name & Title Area */}
      <div className="relative mt-2">
        {/* Hand-drawn scribble tag "my name is..." */}
        <div className="flex items-center gap-2 mb-1">
          <span className="font-handwriting text-xl text-neutral-600 select-none">
            hello, my name is
          </span>
          <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            className="text-orange-500"
          >
            <path
              d="M1 8C10 3 22 13 30 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Big Pixel Name inside hand-drawn sketchy orange border box */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 relative">
          <div className="relative inline-block group">
            {/* Hand-drawn style orange rectangular container */}
            <div
              className="relative px-6 sm:px-10 py-3 sm:py-5 bg-[#FFF7ED] border-3 border-orange-500 shadow-[6px_6px_0px_#EA580C] transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderRadius: "4px 8px 3px 6px",
              }}
            >
              <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl tracking-wider text-black select-none">
                {PROFILE_DATA.name}
              </h1>

              {/* Hand-drawn sketch corner accents */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-orange-600" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-orange-600" />
            </div>

            {/* Handwritten doodle arrow pointing to the orange box */}
            <div className="hidden lg:block absolute -left-36 top-1">
              <HandDrawnArrow
                direction="curved-up"
                text="that's me!"
                textColor="text-orange-600"
              />
            </div>
          </div>

          {/* Interactive stickers & badges with Lucide React icons */}
          <div className="flex flex-col gap-2.5">
            {/* Sticker 1: CTO @ Cyclosa HRM */}
            <div className="relative inline-flex items-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#99F6E4] border-2 border-black font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#000] rotate-1 hover:rotate-0 transition-transform">
                <Rocket className="w-3.5 h-3.5 text-teal-950" />
                <span>{PROFILE_DATA.role} · {PROFILE_DATA.company}</span>
              </div>
            </div>

            {/* Sticker 2: Open to connect / collaborate */}
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-[#FEF08A] border-2 border-black font-bold text-xs shadow-[3px_3px_0px_#000] -rotate-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{PROFILE_DATA.status}</span>
              </div>
              
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FBCFE8] border-2 border-black font-bold text-xs shadow-[3px_3px_0px_#000] rotate-2">
                <Bot className="w-3.5 h-3.5 text-pink-900" />
                <span>AI & SaaS Architect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hand-drawn arrows pointing down to key sections */}
        <div className="hidden md:flex items-center gap-12 mt-4 ml-6">
          <HandDrawnArrow
            direction="down-right"
            text="tech strategy & SaaS"
            textColor="text-neutral-700"
          />
          <HandDrawnArrow
            direction="down-left"
            text="AI engine integration"
            textColor="text-neutral-700"
          />
        </div>

        {/* Big Playful Tagline with Lucide icons */}
        <div className="mt-6 sm:mt-8 max-w-2xl bg-white/80 p-4 sm:p-5 border-2 border-black shadow-[4px_4px_0px_#000000] relative">
          {/* Tape on top */}
          <WashiTape
            color="bg-pink-300/80"
            width="w-24"
            rotate="-rotate-2"
            className="-top-3 left-6"
          />

          <p className="font-sans-clean font-extrabold text-lg sm:text-2xl text-neutral-900 leading-snug">
            Định hướng công nghệ & kiến tạo nền tảng{" "}
            <span className="bg-[#FEF08A] px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              SaaS HRM
            </span>{" "}
            bảo mật, mở rộng quy mô cùng giải pháp{" "}
            <span className="bg-[#99F6E4] px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_#000]">
              AI Nhân sự
            </span>{" "}
            thông minh.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-neutral-700 font-bold">
            <span className="inline-flex items-center gap-1">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              <span>Human-Centric Tech</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>99.98% High Availability</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Enterprise Security</span>
            </span>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="neo-btn bg-black text-white px-5 py-2.5 font-bold text-sm sm:text-base flex items-center gap-2 cursor-pointer hover:bg-neutral-800"
          >
            <span>Khám phá dự án & giải pháp</span>
            <ArrowRight className="w-4 h-4 text-[#F3B524]" />
          </a>

          <a
            href="#contact"
            className="neo-btn bg-[#F3B524] text-black px-5 py-2.5 font-bold text-sm sm:text-base flex items-center gap-2 cursor-pointer hover:bg-amber-400"
          >
            <Mail className="w-4 h-4" />
            <span>Liên hệ trao đổi</span>
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="neo-btn bg-white text-black px-4 py-2.5 font-bold text-sm sm:text-base flex items-center gap-2 cursor-pointer hover:bg-neutral-100"
            >
              <FileText className="w-4 h-4 text-orange-600" />
              <span>Xem Hồ Sơ Kỹ Thuật (CV)</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
