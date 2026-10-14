import React from "react";
import { Terminal, Sparkles, FolderGit2, Mail } from "lucide-react";

interface HeaderNavProps {
  onOpenResume?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenResume }) => {
  return (
    <header className="w-full pt-4 pb-2 px-4 sm:px-8 border-b-2 border-black/15 flex flex-wrap items-center justify-between gap-4">
      {/* Mini logo badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-black text-white font-pixel text-xs sm:text-sm tracking-wider border-2 border-black shadow-[2px_2px_0px_#F3B524]">
          <Terminal className="w-3.5 h-3.5 text-[#F3B524]" />
          <span>BAO.DEV</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-black/30 bg-emerald-100 text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CTO · CYCLOSA HRM</span>
        </div>
      </div>

      {/* Navigation links & CTA */}
      <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
        <a
          href="#about"
          className="px-2.5 py-1 rounded-sm hover:bg-neutral-200/70 border border-transparent hover:border-black/30 transition-colors"
        >
          // ABOUT
        </a>
        <a
          href="#expertise"
          className="px-2.5 py-1 rounded-sm hover:bg-neutral-200/70 border border-transparent hover:border-black/30 transition-colors"
        >
          // EXPERTISE
        </a>
        <a
          href="#projects"
          className="px-2.5 py-1 rounded-sm hover:bg-neutral-200/70 border border-transparent hover:border-black/30 transition-colors"
        >
          // PROJECTS
        </a>
        
        {onOpenResume && (
          <button
            onClick={onOpenResume}
            className="ml-1 sm:ml-2 neo-btn bg-[#F3B524] text-black px-3 py-1 font-pixel text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        )}
      </nav>
    </header>
  );
};
