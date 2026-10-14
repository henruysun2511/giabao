import React from "react";

interface HandDrawnArrowProps {
  direction?: "down-right" | "down-left" | "curved-up" | "squiggly";
  text?: string;
  className?: string;
  textColor?: string;
}

export const HandDrawnArrow: React.FC<HandDrawnArrowProps> = ({
  direction = "down-right",
  text,
  className = "",
  textColor = "text-amber-700",
}) => {
  if (direction === "down-right") {
    return (
      <div className={`flex flex-col items-center pointer-events-none ${className}`}>
        {text && (
          <span
            className={`font-handwriting text-xl font-bold tracking-wide -rotate-6 select-none ${textColor}`}
          >
            {text}
          </span>
        )}
        <svg
          width="48"
          height="42"
          viewBox="0 0 54 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black overflow-visible drop-shadow-xs"
        >
          <path
            d="M8 4C14 16 26 30 46 36M46 36L34 33M46 36L39 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (direction === "down-left") {
    return (
      <div className={`flex flex-col items-center pointer-events-none ${className}`}>
        {text && (
          <span
            className={`font-handwriting text-xl font-bold tracking-wide rotate-6 select-none ${textColor}`}
          >
            {text}
          </span>
        )}
        <svg
          width="48"
          height="42"
          viewBox="0 0 54 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black overflow-visible drop-shadow-xs"
        >
          <path
            d="M46 4C40 16 28 30 8 36M8 36L20 33M8 36L15 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (direction === "curved-up") {
    return (
      <div className={`flex items-center gap-2 pointer-events-none ${className}`}>
        <svg
          width="40"
          height="32"
          viewBox="0 0 44 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black overflow-visible"
        >
          <path
            d="M38 32C32 18 20 8 6 10M6 10L14 4M6 10L12 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {text && (
          <span
            className={`font-handwriting text-lg font-bold tracking-wide -rotate-3 select-none ${textColor}`}
          >
            {text}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center pointer-events-none ${className}`}>
      {text && (
        <span
          className={`font-handwriting text-lg font-bold tracking-wide select-none ${textColor}`}
        >
          {text}
        </span>
      )}
      <svg
        width="36"
        height="32"
        viewBox="0 0 40 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black"
      >
        <path
          d="M20 4C22 14 16 22 20 30M20 30L14 24M20 30L26 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
