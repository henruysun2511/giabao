import React from "react";
import { PROFILE_DATA } from "@/data/profile";
import {
  X,
  Copy,
  CheckCircle2,
  Blocks,
  Cloud,
  Bot,
  ShieldCheck,
  Crown,
  Zap,
  FileSearch,
  Rocket,
} from "lucide-react";
import { WashiTape } from "./WashiTape";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const competencyIconMap: Record<string, React.ReactNode> = {
    Blocks: <Blocks className="w-3.5 h-3.5 text-amber-900" />,
    Cloud: <Cloud className="w-3.5 h-3.5 text-teal-900" />,
    Bot: <Bot className="w-3.5 h-3.5 text-orange-900" />,
    ShieldCheck: <ShieldCheck className="w-3.5 h-3.5 text-sky-900" />,
    Crown: <Crown className="w-3.5 h-3.5 text-purple-900" />,
    Zap: <Zap className="w-3.5 h-3.5 text-emerald-900" />,
    FileSearch: <FileSearch className="w-3.5 h-3.5 text-pink-900" />,
    Rocket: <Rocket className="w-3.5 h-3.5 text-yellow-900" />,
  };

  const handleCopyProfile = () => {
    const text = `
BAO - CHIEF TECHNOLOGY OFFICER (CTO) · CYCLOSA HRM
Email: ${PROFILE_DATA.contact.email}
Location: ${PROFILE_DATA.location}

GIỚI THIỆU:
${PROFILE_DATA.aboutShort}

KEY RESPONSIBILITIES:
${PROFILE_DATA.keyResponsibilities.map((r) => `- ${r.title}: ${r.description}`).join("\n")}

CORE COMPETENCIES:
${PROFILE_DATA.coreCompetencies.map((c) => `- ${c.name}`).join("\n")}

PROJECTS:
${PROFILE_DATA.projects.map((p) => `* ${p.title} (${p.subtitle}): ${p.tagline}`).join("\n")}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FDFCF7] border-3 border-black p-6 sm:p-8 shadow-[10px_10px_0px_#000000]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, #E8E5DD 31px, #E8E5DD 32px)",
        }}
      >
        {/* Washi Tape */}
        <WashiTape
          color="bg-[#FEF08A]/85"
          width="w-36"
          rotate="-rotate-2"
          className="-top-3 left-8"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-black text-white hover:bg-neutral-800 border-2 border-black cursor-pointer shadow-[2px_2px_0px_#EA580C]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b-2 border-black pb-4 mb-4">
          <span className="font-pixel text-xs text-orange-600 font-bold">
            EXECUTIVE TECHNICAL SUMMARY // RESUME DOSSIER
          </span>
          <h2 className="font-pixel text-3xl text-black mt-1">BAO</h2>
          <p className="font-sans-clean font-bold text-sm text-neutral-800">
            {PROFILE_DATA.role} · {PROFILE_DATA.company}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-5 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-pixel text-xs uppercase tracking-wider text-black font-bold">
                // SUMMARY
              </span>
              <span className="font-sans-clean font-bold text-xs text-neutral-600">
                // Tóm tắt vai trò
              </span>
            </div>
            <p className="bg-white/90 p-3.5 border-2 border-black font-sans-clean leading-relaxed font-medium">
              {PROFILE_DATA.aboutShort}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-pixel text-xs uppercase tracking-wider text-black font-bold">
                // KEY RESPONSIBILITIES
              </span>
              <span className="font-sans-clean font-bold text-xs text-neutral-600">
                // Trách nhiệm trọng tâm
              </span>
            </div>
            <div className="space-y-2">
              {PROFILE_DATA.keyResponsibilities.map((item) => (
                <div key={item.id} className="bg-white/90 p-3 border border-black">
                  <span className="font-bold text-black">{item.title}: </span>
                  <span className="text-neutral-700 font-medium">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-pixel text-xs uppercase tracking-wider text-black font-bold">
                // CORE COMPETENCIES
              </span>
              <span className="font-sans-clean font-bold text-xs text-neutral-600">
                // Năng lực cốt lõi
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROFILE_DATA.coreCompetencies.map((comp) => (
                <span
                  key={comp.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-black font-bold text-xs shadow-[2px_2px_0px_#000]"
                >
                  {competencyIconMap[comp.iconName]}
                  <span>{comp.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyProfile}
            className="neo-btn bg-[#F3B524] text-black px-4 py-2 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                <span>Đã sao chép vào Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao chép bản tóm tắt</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="neo-btn bg-black text-white px-4 py-2 font-bold text-xs sm:text-sm cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
