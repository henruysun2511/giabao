import React from "react";
import Image from "next/image";
import { WashiTape } from "./WashiTape";

interface PolaroidCardProps {
  imageSrc: string;
  imageAlt: string;
  caption: string;
  subcaption?: string;
  rotateClass?: string;
  tapePosition?: "top-left" | "top-right" | "top-center" | "both";
  tapeColor?: string;
  className?: string;
  stamp?: string;
  imagePosition?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  imageAlt,
  caption,
  subcaption,
  rotateClass = "-rotate-2",
  tapePosition = "top-center",
  tapeColor = "bg-[#FEF08A]/85",
  className = "",
  stamp,
  imagePosition = "object-cover",
}) => {
  return (
    <div
      className={`relative inline-block transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] hover:z-30 ${rotateClass} ${className}`}
    >
      {/* Washi Tape at corner/top */}
      {tapePosition === "top-center" && (
        <WashiTape
          color={tapeColor}
          width="w-32"
          rotate="-rotate-2"
          className="-top-3 left-1/2 -translate-x-1/2"
        />
      )}
      {tapePosition === "top-left" && (
        <WashiTape
          color={tapeColor}
          width="w-24"
          rotate="-rotate-12"
          className="-top-3 -left-3"
        />
      )}
      {tapePosition === "top-right" && (
        <WashiTape
          color={tapeColor}
          width="w-24"
          rotate="rotate-12"
          className="-top-3 -right-3"
        />
      )}
      {tapePosition === "both" && (
        <>
          <WashiTape
            color={tapeColor}
            width="w-20"
            rotate="-rotate-12"
            className="-top-2.5 -left-2.5"
          />
          <WashiTape
            color="bg-teal-200/80"
            width="w-20"
            rotate="rotate-12"
            className="-top-2.5 -right-2.5"
          />
        </>
      )}

      {/* Polaroid Frame */}
      <div className="bg-white p-3 sm:p-4 pb-6 sm:pb-8 border-2.5 border-black rounded-xs shadow-[5px_5px_0px_#000000] w-[260px] sm:w-[300px]">
        {/* Photo Container */}
        <div className="relative aspect-square w-full bg-neutral-100 border-2 border-black/80 overflow-hidden group">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`${imagePosition} transition-transform duration-500 group-hover:scale-105`}
            sizes="(max-width: 640px) 260px, 300px"
          />
          
          {/* Subtle vintage photo texture vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Stamp if present */}
          {stamp && (
            <div className="absolute bottom-2 right-2 border-2 border-red-500/80 text-red-600 font-pixel text-[10px] uppercase font-bold px-1.5 py-0.5 rotate-[-12deg] bg-white/90 backdrop-blur-xs select-none">
              {stamp}
            </div>
          )}
        </div>

        {/* Handwritten Polaroid Caption */}
        <div className="mt-3 text-center">
          <p className="font-handwriting text-xl sm:text-2xl font-bold text-neutral-800 leading-tight">
            {caption}
          </p>
          {subcaption && (
            <p className="font-sans-clean text-xs text-neutral-500 mt-0.5 font-medium tracking-tight">
              {subcaption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
