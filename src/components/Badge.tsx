import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  emoji?: string;
  className?: string;
  colorClass?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  emoji,
  className = "",
  colorClass = "bg-[#FEF08A] text-black",
  size = "md",
  onClick,
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3.5 py-1.5 text-sm",
    lg: "px-4 py-2 text-base font-semibold",
  };

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 font-bold tracking-tight rounded-full border-2 border-black shadow-[3px_3px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 transition-all duration-150 select-none ${sizeClasses[size]} ${colorClass} ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {icon && <span className="inline-flex shrink-0 items-center justify-center">{icon}</span>}
      {emoji && !icon && <span className="text-base leading-none">{emoji}</span>}
      <span>{children}</span>
    </span>
  );
};
