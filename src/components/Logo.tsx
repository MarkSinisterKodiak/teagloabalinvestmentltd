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
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>

        {/* Rounded square background */}
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#bgGradient)" />
        <rect x="5" y="5" width="54" height="54" rx="11" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* House roof */}
        <path d="M18 30 L32 18 L46 30" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* House body */}
        <rect x="22" y="30" width="20" height="14" rx="1" fill="rgba(255,255,255,0.85)" />
        {/* House door */}
        <rect x="29" y="35" width="6" height="9" rx="1" fill="#1e40af" />
        {/* Moving truck */}
        <rect x="10" y="40" width="16" height="9" rx="1.5" fill="#fbbf24" />
        <path d="M26 43 L32 43 L34 47 L34 49 L26 49 Z" fill="#fbbf24" />
        {/* Truck wheels */}
        <circle cx="15" cy="50" r="3" fill="white" />
        <circle cx="15" cy="50" r="1.5" fill="#1e40af" />
        <circle cx="30" cy="50" r="3" fill="white" />
        <circle cx="30" cy="50" r="1.5" fill="#1e40af" />
        {/* Boxes on truck */}
        <rect x="12" y="36" width="5" height="4" rx="0.5" fill="rgba(255,255,255,0.7)" />
        <rect x="18" y="37" width="4" height="3" rx="0.5" fill="rgba(255,255,255,0.5)" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display ${sizes[size].text} font-bold text-gray-900 leading-tight`}>
            Hanley's
          </span>
          <span className="text-xs font-medium text-blue-600 tracking-wider uppercase">
            Removals
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
