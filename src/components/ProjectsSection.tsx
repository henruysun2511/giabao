import React from "react";
import { ProjectCard } from "./ProjectCard";
import { PROFILE_DATA } from "@/data/profile";
import { FolderGit2 } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-10 sm:py-16 px-4 sm:px-10 border-b-2 border-black/15">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="inline-block px-4 py-1.5 bg-[#99F6E4] border-2 border-black shadow-[3px_3px_0px_#000] rotate-1">
            <span className="font-pixel text-lg sm:text-xl text-black">
              // 02. CORE PLATFORMS & AI
            </span>
          </div>
          <span className="font-handwriting text-2xl text-neutral-600 font-bold select-none">
            folder dossiers & tech deliverables 📂
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
          <FolderGit2 className="w-4 h-4 text-orange-500" />
          <span>2 ACTIVE ENTERPRISE INITIATIVES</span>
        </div>
      </div>

      {/* Projects List: High contrast dark card (Project 1) & Mustard yellow card (Project 2) */}
      <div className="flex flex-col gap-14">
        {PROFILE_DATA.projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};
