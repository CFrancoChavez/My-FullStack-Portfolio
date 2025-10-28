"use client"

export default function PortfolioIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Back card - third layer */}
      <rect x="80" y="45" width="95" height="120" rx="8" stroke="url(#gradient2)" strokeWidth="2.5" opacity="0.25" />

      {/* Middle card - second layer */}
      <rect x="60" y="55" width="95" height="120" rx="8" stroke="url(#gradient2)" strokeWidth="2.5" opacity="0.5" />
      <line x1="60" y1="75" x2="155" y2="75" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />

      {/* Front card - main layer */}
      <rect
        x="40"
        y="65"
        width="95"
        height="120"
        rx="8"
        stroke="url(#gradient2)"
        strokeWidth="3"
        fill="white"
        fillOpacity="0.95"
      />

      {/* Browser chrome */}
      <rect x="40" y="65" width="95" height="18" rx="8" fill="url(#gradient2)" fillOpacity="0.15" />
      <line x1="40" y1="83" x2="135" y2="83" stroke="url(#gradient2)" strokeWidth="2.5" />

      {/* Browser dots */}
      <circle cx="50" cy="74" r="2.5" fill="url(#gradient2)" opacity="0.7" />
      <circle cx="59" cy="74" r="2.5" fill="url(#gradient2)" opacity="0.7" />
      <circle cx="68" cy="74" r="2.5" fill="url(#gradient2)" opacity="0.7" />

      {/* User profile section with more detail */}
      <circle cx="87.5" cy="110" r="20" stroke="url(#gradient2)" strokeWidth="3" fill="none" />
      <circle cx="87.5" cy="110" r="18" fill="url(#gradient2)" fillOpacity="0.05" />

      {/* User avatar head */}
      <circle cx="87.5" cy="105" r="7" stroke="url(#gradient2)" strokeWidth="2.5" fill="none" />

      {/* User avatar body */}
      <path
        d="M 70 125 Q 70 117 76 114 Q 82 111 87.5 111 Q 93 111 99 114 Q 105 117 105 125"
        stroke="url(#gradient2)"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Profile info lines */}
      <line x1="52" y1="142" x2="123" y2="142" stroke="url(#gradient2)" strokeWidth="2.5" opacity="0.7" />
      <line x1="60" y1="152" x2="115" y2="152" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
      <line x1="55" y1="162" x2="120" y2="162" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
      <line x1="65" y1="172" x2="110" y2="172" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />

      {/* Tech stack icons representation */}
      <rect x="52" y="95" width="12" height="12" rx="2" stroke="url(#gradient2)" strokeWidth="1.5" opacity="0.6" />
      <rect x="68" y="95" width="12" height="12" rx="2" stroke="url(#gradient2)" strokeWidth="1.5" opacity="0.6" />
      <rect x="111" y="95" width="12" height="12" rx="2" stroke="url(#gradient2)" strokeWidth="1.5" opacity="0.6" />

      {/* Code brackets decoration */}
      <path
        d="M 145 90 L 150 90 L 150 100 L 145 100"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 145 140 L 150 140 L 150 150 L 145 150"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 30 90 L 25 90 L 25 100 L 30 100"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M 30 140 L 25 140 L 25 150 L 30 150"
        stroke="url(#gradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Responsive design indicators */}
      <rect x="155" y="100" width="25" height="35" rx="3" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5" />
      <line x1="155" y1="107" x2="180" y2="107" stroke="url(#gradient2)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="167.5" cy="130" r="1.5" fill="url(#gradient2)" opacity="0.5" />

      <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
