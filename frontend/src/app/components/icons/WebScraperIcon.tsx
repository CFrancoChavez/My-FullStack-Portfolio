export default function WebScraperIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Monitor */}
      <rect x="40" y="50" width="120" height="80" rx="4" stroke="url(#gradient1)" strokeWidth="3" />
      <line x1="40" y1="70" x2="160" y2="70" stroke="url(#gradient1)" strokeWidth="3" />

      {/* Monitor content lines */}
      <line x1="55" y1="85" x2="145" y2="85" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6" />
      <line x1="55" y1="95" x2="130" y2="95" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6" />
      <line x1="55" y1="105" x2="140" y2="105" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6" />
      <line x1="55" y1="115" x2="125" y2="115" stroke="url(#gradient1)" strokeWidth="2" opacity="0.6" />

      {/* Monitor stand */}
      <line x1="100" y1="130" x2="100" y2="145" stroke="url(#gradient1)" strokeWidth="3" />
      <line x1="85" y1="145" x2="115" y2="145" stroke="url(#gradient1)" strokeWidth="3" />

      {/* Spider/Bug */}
      <circle cx="35" cy="65" r="8" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" />
      <line x1="27" y1="60" x2="20" y2="55" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="27" y1="70" x2="20" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="43" y1="60" x2="50" y2="55" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="43" y1="70" x2="50" y2="75" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="30" y1="57" x2="25" y2="50" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="40" y1="57" x2="45" y2="50" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="30" y1="73" x2="25" y2="80" stroke="url(#gradient1)" strokeWidth="2" />
      <line x1="40" y1="73" x2="45" y2="80" stroke="url(#gradient1)" strokeWidth="2" />

      {/* Database cylinders */}
      <ellipse cx="60" cy="155" rx="15" ry="6" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" />
      <line x1="45" y1="155" x2="45" y2="168" stroke="url(#gradient1)" strokeWidth="2.5" />
      <line x1="75" y1="155" x2="75" y2="168" stroke="url(#gradient1)" strokeWidth="2.5" />
      <ellipse cx="60" cy="168" rx="15" ry="6" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" />

      <ellipse cx="100" cy="155" rx="15" ry="6" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" />
      <line x1="85" y1="155" x2="85" y2="168" stroke="url(#gradient1)" strokeWidth="2.5" />
      <line x1="115" y1="155" x2="115" y2="168" stroke="url(#gradient1)" strokeWidth="2.5" />
      <ellipse cx="100" cy="168" rx="15" ry="6" stroke="url(#gradient1)" strokeWidth="2.5" fill="none" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
