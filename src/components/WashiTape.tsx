import React from "react";

interface WashiTapeProps {
  className?: string;
  color?: string; // e.g. "bg-amber-200/85", "bg-teal-200/85", "bg-pink-300/85"
  rotate?: string; // e.g. "-rotate-3", "rotate-2", "-rotate-6"
  width?: string;
  pattern?: "plain" | "striped" | "dots";
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  className = "",
  color = "bg-[#FEF08A]/80", // soft pastel yellow
  rotate = "-rotate-2",
  width = "w-28",
  pattern = "striped",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-20 pointer-events-none h-6 ${width} ${color} ${rotate} shadow-xs backdrop-blur-xs flex items-center justify-between px-1 select-none overflow-hidden ${className}`}
      style={{
        clipPath:
          "polygon(0% 15%, 4% 0%, 96% 0%, 100% 15%, 98% 85%, 94% 100%, 6% 100%, 0% 85%)",
      }}
    >
      {/* Decorative texture lines for washi tape */}
      {pattern === "striped" && (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 8px)",
          }}
        />
      )}
      {pattern === "dots" && (
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
      )}
      <div className="w-full h-full relative" />
    </div>
  );
};
