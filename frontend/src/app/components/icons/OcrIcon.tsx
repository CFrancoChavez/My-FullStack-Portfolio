export default function OcrIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Smartphone */}
      <rect x="60" y="30" width="80" height="140" rx="8" stroke="url(#gradient3)" strokeWidth="3" />
      <line x1="60" y1="50" x2="140" y2="50" stroke="url(#gradient3)" strokeWidth="3" />
      <circle cx="100" cy="160" r="4" stroke="url(#gradient3)" strokeWidth="2" fill="none" />

      {/* OCR Text */}
      <text x="75" y="75" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="url(#gradient3)">
        OCR
      </text>

      {/* Scanning brackets */}
      <path d="M 75 85 L 70 85 L 70 95 L 75 95" stroke="url(#gradient3)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 125 85 L 130 85 L 130 95 L 125 95" stroke="url(#gradient3)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 75 135 L 70 135 L 70 145 L 75 145" stroke="url(#gradient3)" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M 125 135 L 130 135 L 130 145 L 125 145"
        stroke="url(#gradient3)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Document/Text lines */}
      <line x1="80" y1="105" x2="120" y2="105" stroke="url(#gradient3)" strokeWidth="2" opacity="0.6" />
      <line x1="80" y1="115" x2="115" y2="115" stroke="url(#gradient3)" strokeWidth="2" opacity="0.6" />
      <line x1="80" y1="125" x2="118" y2="125" stroke="url(#gradient3)" strokeWidth="2" opacity="0.6" />

      {/* Image icon */}
      <rect x="145" y="120" width="35" height="30" rx="3" stroke="url(#gradient3)" strokeWidth="2.5" />
      <circle cx="153" cy="130" r="3" stroke="url(#gradient3)" strokeWidth="1.5" fill="none" />
      <path
        d="M 145 145 L 155 135 L 165 142 L 180 130 L 180 150 L 145 150 Z"
        stroke="url(#gradient3)"
        strokeWidth="2"
        fill="none"
      />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  )
}
