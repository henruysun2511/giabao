import React from "react";
import Image from "next/image";
import { WashiTape } from "./WashiTape";
import { ProjectData } from "@/data/profile";
import {
  ExternalLink,
  Shield,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isDark = project.theme === "dark";

  return (
    <div className="relative pt-6">
      {/* 1. Folder Tab Header cut-out with clip-path polygon */}
      <div className="flex items-end">
        <div
          className={`relative z-10 px-5 sm:px-7 py-2.5 font-pixel text-xs sm:text-sm font-bold tracking-wider border-t-3 border-x-3 border-black select-none ${
            isDark
              ? "bg-[#18181B] text-[#38BDF8]"
              : "bg-[#F3B524] text-black"
          }`}
          style={{
            clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0% 100%)",
            paddingRight: "2rem",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block border border-black" />
            <span>{project.tabLabel}</span>
          </div>
        </div>

        {/* Tab badge label on top right */}
        <div className="ml-auto hidden sm:flex items-center gap-2 pb-1 text-xs font-mono font-bold text-neutral-500">
          <span>// STATUS:</span>
          <span className="px-2 py-0.5 border border-black bg-white text-black font-semibold text-[11px]">
            {project.status}
          </span>
        </div>
      </div>

      {/* 2. Main Folder Card Body */}
      <div
        className={`relative border-3 border-black p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_#000000] -mt-[3px] ${
          isDark
            ? "bg-[#18181B] text-white"
            : "bg-[#F3B524] text-black"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Project Info, Tagline, Metrics & Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div>
              <span
                className={`font-pixel text-xs uppercase tracking-widest font-bold ${
                  isDark ? "text-[#38BDF8]" : "text-black/80"
                }`}
              >
                {project.subtitle}
              </span>
              <h3 className="font-sans-clean text-2xl sm:text-4xl font-black tracking-tight mt-1">
                {project.title}
              </h3>
            </div>

            <p
              className={`font-sans-clean text-sm sm:text-base leading-relaxed ${
                isDark ? "text-neutral-300" : "text-neutral-900"
              }`}
            >
              {project.tagline}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-2">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`p-2.5 border-2 border-black ${
                    isDark
                      ? "bg-neutral-900/90 text-white shadow-[2px_2px_0px_#38BDF8]"
                      : "bg-white text-black shadow-[2px_2px_0px_#000000]"
                  }`}
                >
                  <p
                    className={`font-pixel text-xs sm:text-sm font-bold ${
                      isDark ? "text-[#38BDF8]" : "text-black"
                    }`}
                  >
                    {m.value}
                  </p>
                  <p
                    className={`text-[11px] font-semibold mt-0.5 truncate ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Architectural & Engineering Responsibilities */}
            <div className="mt-2">
              <p
                className={`font-pixel text-[11px] uppercase tracking-wider font-bold mb-2 ${
                  isDark ? "text-neutral-400" : "text-black/70"
                }`}
              >
                // KEY ENGINEERING DELIVERABLES
              </p>
              <ul className="space-y-2">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isDark ? "text-[#38BDF8]" : "text-black"
                      }`}
                    />
                    <span
                      className={`leading-snug ${
                        isDark ? "text-neutral-200" : "text-neutral-900 font-medium"
                      }`}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-3 pt-3 border-t-2 border-dashed border-current/25">
              <p
                className={`font-pixel text-[11px] uppercase tracking-wider font-bold mb-2 ${
                  isDark ? "text-neutral-400" : "text-black/70"
                }`}
              >
                // TECH STACK & TOOLS
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 text-xs font-mono font-bold border-2 border-black ${
                      isDark
                        ? "bg-neutral-800 text-neutral-100 shadow-[2px_2px_0px_#000]"
                        : "bg-white text-black shadow-[2px_2px_0px_#000]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mockup Image taped with Washi Tape */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[420px]">
              {/* Washi Tape at Top-Left edge of mockup */}
              <WashiTape
                color={project.tapeColor}
                width="w-28"
                rotate="-rotate-6"
                className="-top-3.5 -left-3.5 z-30"
              />

              {/* Washi Tape at Bottom-Right edge of mockup */}
              <WashiTape
                color={isDark ? "bg-amber-300/80" : "bg-teal-200/80"}
                width="w-24"
                rotate="rotate-6"
                className="-bottom-3.5 -right-3.5 z-30"
              />

              {/* Mockup Frame with Neo-brutalist border & shadow */}
              <div
                className={`relative p-2 sm:p-2.5 border-3 border-black ${
                  isDark
                    ? "bg-neutral-800 shadow-[6px_6px_0px_#38BDF8]"
                    : "bg-white shadow-[6px_6px_0px_#000000]"
                } transition-transform duration-300 group-hover:scale-[1.01]`}
              >
                {/* Browser/Window mockup header dots */}
                <div className="flex items-center gap-1.5 pb-2 px-1 border-b border-black/20 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black/40" />
                  <span
                    className={`ml-auto font-mono text-[10px] truncate max-w-[180px] ${
                      isDark ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    cyclosa.hrm/live-console
                  </span>
                </div>

                {/* Actual Mockup Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden border-2 border-black bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 420px"
                  />
                </div>

                {/* Handwritten note caption beneath mockup */}
                <div className="pt-2 text-center">
                  <span
                    className={`font-handwriting text-base sm:text-lg font-bold select-none ${
                      isDark ? "text-amber-300" : "text-neutral-900"
                    }`}
                  >
                    ✨ live preview · {project.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
