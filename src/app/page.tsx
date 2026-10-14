"use client";

import React, { useState } from "react";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ContactPostcard } from "@/components/ContactPostcard";
import { ResumeModal } from "@/components/ResumeModal";
import { WashiTape } from "@/components/WashiTape";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="min-h-screen py-6 sm:py-12 px-2 sm:px-6 md:px-10 flex justify-center items-start">
      {/* Central A4 Container:
          - Ivory Paper (#FDFCF7)
          - Faint ruled notebook lines
          - Neo-brutalist 3px black border & 12px hard drop shadow
          - Notebook binder holes on the left margin
      */}
      <div className="relative w-full max-w-5xl bg-notebook-paper border-3 border-black shadow-[8px_8px_0px_#000000] sm:shadow-[12px_12px_0px_#000000] rounded-xs overflow-hidden">
        {/* Decorative corner washi tape */}
        <WashiTape
          color="bg-[#FEF08A]/85"
          width="w-32"
          rotate="-rotate-12"
          className="-top-3 -left-5 z-40"
        />
        <WashiTape
          color="bg-pink-300/85"
          width="w-28"
          rotate="rotate-12"
          className="-top-3 -right-4 z-40"
        />

        {/* Notebook margin line (red rule) on the left for scrapbook authenticity */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-0 bottom-0 left-12 w-[1.5px] bg-red-400/40 pointer-events-none z-10"
        />

        {/* Notebook binder punch holes */}
        <div
          aria-hidden="true"
          className="hidden md:flex flex-col justify-between absolute top-28 bottom-28 left-3 z-20 pointer-events-none"
        >
          <div className="w-4 h-4 rounded-full bg-[#EDECE6] border-2 border-black/80 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-[#EDECE6] border-2 border-black/80 shadow-inner" />
          <div className="w-4 h-4 rounded-full bg-[#EDECE6] border-2 border-black/80 shadow-inner" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 md:pl-6">
          {/* Top Binder Nav */}
          <HeaderNav onOpenResume={() => setIsResumeOpen(true)} />

          {/* 1. Hero / Profile Section */}
          <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* 2. About Section: Bio + 2 Polaroids + Core Competencies Badges */}
          <AboutSection />

          {/* 3. Projects Section: Dossier Folder Tabs (Project 1 Dark, Project 2 Mustard Yellow) */}
          <ProjectsSection />

          {/* 4. Expertise Section: 4 CTO Pillars */}
          <ExpertiseSection />

          {/* 5. Contact Postcard */}
          <ContactPostcard />

          {/* Footer note */}
          <footer className="py-6 px-4 sm:px-10 border-t-2 border-black/15 bg-white/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-semibold text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-black text-xs">BAO // CTO</span>
              <span>© 2026 Cyclosa HRM · All rights reserved.</span>
            </div>
            <div className="font-handwriting text-base text-neutral-700">
              crafted with Next.js, Tailwind CSS & Playful Neo-Brutalism 🎨
            </div>
          </footer>
        </div>
      </div>

      {/* Full Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
