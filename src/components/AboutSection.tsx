import React from "react";
import { PolaroidCard } from "./PolaroidCard";
import { Badge } from "./Badge";
import { WashiTape } from "./WashiTape";
import { PROFILE_DATA } from "@/data/profile";
import {
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  Blocks,
  Cloud,
  Bot,
  Crown,
  Zap,
  FileSearch,
  Rocket,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  // Lucide React icon mapper for badges
  const competencyIconMap: Record<string, React.ReactNode> = {
    Blocks: <Blocks className="w-4 h-4 text-amber-900" />,
    Cloud: <Cloud className="w-4 h-4 text-teal-900" />,
    Bot: <Bot className="w-4 h-4 text-orange-900" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-sky-900" />,
    Crown: <Crown className="w-4 h-4 text-purple-900" />,
    Zap: <Zap className="w-4 h-4 text-emerald-900" />,
    FileSearch: <FileSearch className="w-4 h-4 text-pink-900" />,
    Rocket: <Rocket className="w-4 h-4 text-yellow-900" />,
  };

  return (
    <section id="about" className="py-10 sm:py-16 px-4 sm:px-10 border-b-2 border-black/15 relative">
      {/* Sticky note heading */}
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-block px-4 py-1.5 bg-[#FEF08A] border-2 border-black shadow-[3px_3px_0px_#000] rotate-[-1deg]">
          <span className="font-pixel text-lg sm:text-xl text-black">
            // 01. ABOUT ME & ROLE
          </span>
        </div>
        <span className="font-handwriting text-2xl text-neutral-600 font-bold select-none">
          snapshot & leadership note! 📌
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: 2 Polaroids with Washi Tape & tilt */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-8 relative py-4">
          {/* Polaroid 1: Portrait photo of Bao (with tailored focal point) */}
          <PolaroidCard
            imageSrc="/images/bao_photo.jpg"
            imageAlt="Bao CTO Cyclosa HRM portrait"
            caption="Bao @ Tech Leadership"
            subcaption="Ho Chi Minh City · 2026"
            rotateClass="-rotate-3 hover:rotate-0"
            tapePosition="top-left"
            tapeColor="bg-amber-300/85"
            stamp="CTO · CYCLOSA"
            imagePosition="object-cover object-[20%_35%]"
          />

          {/* Polaroid 2: Cyclosa AI & Architecture flow */}
          <PolaroidCard
            imageSrc="/images/cyclosa_ai_flow.jpg"
            imageAlt="Cyclosa HRM AI Engine & Architecture"
            caption="AI Engine & SaaS Schema"
            subcaption="Semantic Parsing · Vector DB"
            rotateClass="rotate-3 hover:rotate-0 lg:-mt-6"
            tapePosition="top-right"
            tapeColor="bg-teal-200/85"
            stamp="AI LAB"
            imagePosition="object-cover object-center"
          />
        </div>

        {/* Right Column: Bio text, Core Competencies Pill Badges & Key Responsibilities */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Bio Paper Note */}
          <div className="relative bg-white p-5 sm:p-7 border-2 border-black shadow-[5px_5px_0px_#000000]">
            <WashiTape
              color="bg-pink-300/80"
              width="w-32"
              rotate="-rotate-1"
              className="-top-3 right-8"
            />

            <h2 className="font-sans-clean text-2xl sm:text-3xl font-extrabold text-black mb-3">
              Chief Technology Officer (CTO)
              <span className="text-orange-600 ml-2">@ Cyclosa HRM</span>
            </h2>

            {/* Authentic Bio from prompt */}
            <p className="font-sans-clean text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
              {PROFILE_DATA.aboutShort}
            </p>

            <div className="mt-4 pt-4 border-t-2 border-dashed border-neutral-300">
              <p className="font-handwriting text-xl text-neutral-700 leading-snug">
                &ldquo;{PROFILE_DATA.aboutExtended}&rdquo;
              </p>
            </div>
          </div>

          {/* Core Competencies: Colorful Pill Badges with Lucide React Icons */}
          <div className="bg-[#FAF9F5] p-5 sm:p-6 border-2 border-black shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-xs sm:text-sm uppercase tracking-wider text-black font-bold">
                  CORE COMPETENCIES
                </span>
                <span className="font-sans-clean font-bold text-xs text-neutral-600">
                  // Năng lực cốt lõi
                </span>
              </div>
              <span className="font-handwriting text-base text-neutral-500 font-bold">
                lucide icons ⭐
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {PROFILE_DATA.coreCompetencies.map((comp) => (
                <Badge
                  key={comp.name}
                  icon={competencyIconMap[comp.iconName]}
                  colorClass={comp.color}
                  size="md"
                >
                  {comp.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Responsibilities Breakdown */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-xs sm:text-sm uppercase tracking-wider text-black font-bold">
                KEY RESPONSIBILITIES
              </span>
              <span className="font-sans-clean font-bold text-xs text-neutral-600">
                // Trách nhiệm trọng tâm
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PROFILE_DATA.keyResponsibilities.map((item, idx) => {
                const iconMap: Record<string, React.ReactNode> = {
                  Compass: <Compass className="w-5 h-5 text-amber-600" />,
                  Layers: <Layers className="w-5 h-5 text-sky-600" />,
                  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
                  Sparkles: <Sparkles className="w-5 h-5 text-pink-600" />,
                };

                return (
                  <div
                    key={item.id}
                    className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] hover:-translate-y-0.5 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-neutral-100 border border-black rounded-xs">
                          {iconMap[item.iconName]}
                        </div>
                        <h3 className="font-sans-clean font-bold text-sm sm:text-base text-black">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-pixel text-[11px] text-neutral-400 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="font-sans-clean text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
