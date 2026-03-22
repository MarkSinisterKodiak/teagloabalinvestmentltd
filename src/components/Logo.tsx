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
        {/* Background with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="truckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f0f0" />
          </linearGradient>
          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Main hexagon/shield background */}
        <path d="M32 2 L58 16 L58 48 L32 62 L6 48 L6 16 Z" fill="url(#bgGradient)" />

        {/* Inner border */}
        <path d="M32 6 L54 18 L54 46 L32 58 L10 46 L10 18 Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />

        {/* Speed lines */}
        <line x1="10" y1="28" x2="22" y2="28" stroke="url(#speedGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="32" x2="20" y2="32" stroke="url(#speedGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="36" x2="22" y2="36" stroke="url(#speedGradient)" strokeWidth="2" strokeLinecap="round" />

        {/* Tow truck cab */}
        <rect x="20" y="26" width="14" height="12" rx="2" fill="url(#truckGradient)" />

        {/* Cab window */}
        <rect x="22" y="28" width="9" height="5" rx="1" fill="#0ea5e9" opacity="0.8" />

        {/* Flatbed / tow arm */}
        <rect x="34" y="30" width="16" height="4" rx="1" fill="url(#truckGradient)" />
        <line x1="34" y1="30" x2="38" y2="24" stroke="#f0f0f0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="24" x2="42" y2="24" stroke="#f0f0f0" strokeWidth="2.5" strokeLinecap="round" />

        {/* Hook */}
        <circle cx="42" cy="25" r="1.5" fill="#0ea5e9" />

        {/* Wheels */}
        <circle cx="28" cy="40" r="4" fill="#1e293b" />
        <circle cx="28" cy="40" r="2" fill="#475569" />
        <circle cx="44" cy="40" r="4" fill="#1e293b" />
        <circle cx="44" cy="40" r="2" fill="#475569" />

        {/* Road line */}
        <line x1="16" y1="45" x2="52" y2="45" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" />

        {/* Recovery flash */}
        <path d="M50 18 L48 24 L52 24 L49 30" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${sizes[size].text} font-bold text-gray-900 leading-tight`}>
            D&C
          </span>
          <span className="text-xs font-medium text-sky-600 tracking-wider uppercase">
            Recovery
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
