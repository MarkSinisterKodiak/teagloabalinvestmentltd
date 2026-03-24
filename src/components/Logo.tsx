interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizes[size].icon} drop-shadow-md`}
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Shield background */}
        <path d="M32 2 L58 16 L58 48 L32 62 L6 48 L6 16 Z" fill="url(#bgGradient)" />
        <path d="M32 6 L54 18 L54 46 L32 58 L10 46 L10 18 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

        {/* Truck body */}
        <rect x="14" y="28" width="24" height="14" rx="2" fill="rgba(255,255,255,0.9)" />
        {/* Truck cab */}
        <path d="M38 32 L46 32 L50 38 L50 42 L38 42 Z" fill="#ffffff" />
        {/* Truck windshield */}
        <path d="M40 33 L45 33 L48 38 L40 38 Z" fill="rgba(250,204,21,0.6)" />
        {/* Wheels */}
        <circle cx="22" cy="44" r="4" fill="#ffffff" />
        <circle cx="22" cy="44" r="2" fill="url(#bgGradient)" />
        <circle cx="44" cy="44" r="4" fill="#ffffff" />
        <circle cx="44" cy="44" r="2" fill="url(#bgGradient)" />
        {/* Road line */}
        <rect x="10" y="49" width="8" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)" />
        <rect x="22" y="49" width="12" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)" />
        <rect x="38" y="49" width="8" height="1.5" rx="0.75" fill="rgba(255,255,255,0.4)" />

        {/* Globe hint behind truck */}
        <circle cx="32" cy="22" r="8" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <path d="M26 22 L38 22" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${sizes[size].text} font-bold text-gray-900 leading-tight`}>
            TEA Global
          </span>
          <span className="text-xs font-medium text-emerald-600 tracking-wider uppercase">
            Transport
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
