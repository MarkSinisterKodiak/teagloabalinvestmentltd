interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const LogoIdris = ({ className = "", showText = true, size = "md" }: LogoProps) => {
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
          <linearGradient id="bgGradientIdris" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#bgGradientIdris)" />
        <rect x="5" y="5" width="54" height="54" rx="11" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* Truck body / trailer */}
        <rect x="8" y="24" width="30" height="18" rx="2" fill="#fbbf24" />
        {/* Truck cab */}
        <path d="M38 30 L48 30 L52 36 L52 42 L38 42 Z" fill="#fbbf24" />
        {/* Cab window */}
        <path d="M40 31 L46 31 L49 36 L40 36 Z" fill="rgba(255,255,255,0.85)" />
        {/* Truck wheels */}
        <circle cx="18" cy="44" r="4" fill="white" />
        <circle cx="18" cy="44" r="2" fill="#1e40af" />
        <circle cx="32" cy="44" r="4" fill="white" />
        <circle cx="32" cy="44" r="2" fill="#1e40af" />
        <circle cx="48" cy="44" r="4" fill="white" />
        <circle cx="48" cy="44" r="2" fill="#1e40af" />
        {/* Road line */}
        <rect x="6" y="49" width="52" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        {/* IT letters on trailer */}
        <text x="23" y="37" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold" fontFamily="sans-serif">IT</text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${sizes[size].text} font-bold text-gray-900 leading-tight`}>
            Idris
          </span>
          <span className="text-xs font-medium text-blue-600 tracking-wider uppercase">
            Transport
          </span>
        </div>
      )}
    </div>
  );
};

export default LogoIdris;
