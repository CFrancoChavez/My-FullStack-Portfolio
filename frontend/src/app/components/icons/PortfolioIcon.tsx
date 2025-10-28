export default function PortfolioIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Back card */}
      <rect x="70" y="50" width="90" height="110" rx="6" stroke="url(#gradient2)" strokeWidth="3" opacity="0.4" />

      {/* Front card */}
      <rect x="40" y="70" width="90" height="110" rx="6" stroke="url(#gradient2)" strokeWidth="3" fill="white" />

      {/* Card header */}
      <line x1="40" y1="95" x2="130" y2="95" stroke="url(#gradient2)" strokeWidth="3" />

      {/* User avatar circle */}
      <circle cx="85" cy="120" r="18" stroke="url(#gradient2)" strokeWidth="2.5" fill="none" />
      <circle cx="85" cy="115" r="6" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
      <path
        d="M 70 132 Q 70 125 75 122 Q 80 119 85 119 Q 90 119 95 122 Q 100 125 100 132"
        stroke="url(#gradient2)"
        strokeWidth="2"
        fill="none"
      />

      {/* Content lines */}
      <line x1="55" y1="150" x2="115" y2="150" stroke="url(#gradient2)" strokeWidth="2" opacity="0.6" />
      <line x1="55" y1="160" x2="105" y2="160" stroke="url(#gradient2)" strokeWidth="2" opacity="0.6" />
      <line x1="55" y1="170" x2="110" y2="170" stroke="url(#gradient2)" strokeWidth="2" opacity="0.6" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
