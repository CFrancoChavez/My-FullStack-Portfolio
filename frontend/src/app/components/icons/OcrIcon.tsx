"use client"

export default function OcrIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Smartphone outer frame */}
      <rect x="55" y="25" width="90" height="150" rx="10" stroke="url(#gradient3)" strokeWidth="3" />
      <rect x="55" y="25" width="90" height="150" rx="10" fill="url(#gradient3)" fillOpacity="0.03" />

      {/* Screen bezel */}
      <rect x="60" y="35" width="80" height="130" rx="6" stroke="url(#gradient3)" strokeWidth="2" />

      {/* Top speaker/camera */}
      <line x1="85" y1="30" x2="115" y2="30" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="120" cy="30" r="2" fill="url(#gradient3)" />

      {/* Home button */}
      <circle cx="100" cy="170" r="5" stroke="url(#gradient3)" strokeWidth="2" fill="none" />

      {/* OCR Text with styling */}
      <text x="72" y="58" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="url(#gradient3)">
        OCR
      </text>

      {/* Scanning frame with animated corners */}
      <path d="M 70 70 L 65 70 L 65 80" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 130 70 L 135 70 L 135 80" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 70 150 L 65 150 L 65 140" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 130 150 L 135 150 L 135 140" stroke="url(#gradient3)" strokeWidth="3" strokeLinecap="round" />

      {/* Scanning line effect */}
      <line
        x1="65"
        y1="90"
        x2="135"
        y2="90"
        stroke="url(#gradient3)"
        strokeWidth="2"
        opacity="0.6"
        strokeDasharray="4 4"
      />

      {/* Document content being scanned */}
      <rect
        x="70"
        y="95"
        width="60"
        height="50"
        rx="3"
        stroke="url(#gradient3)"
        strokeWidth="2"
        strokeDasharray="3 2"
        opacity="0.4"
      />

      {/* Text lines being recognized */}
      <line x1="75" y1="105" x2="120" y2="105" stroke="url(#gradient3)" strokeWidth="2.5" opacity="0.7" />
      <line x1="75" y1="113" x2="115" y2="113" stroke="url(#gradient3)" strokeWidth="2.5" opacity="0.7" />
      <line x1="75" y1="121" x2="125" y2="121" stroke="url(#gradient3)" strokeWidth="2.5" opacity="0.7" />
      <line x1="75" y1="129" x2="110" y2="129" stroke="url(#gradient3)" strokeWidth="2.5" opacity="0.7" />
      <line x1="75" y1="137" x2="118" y2="137" stroke="url(#gradient3)" strokeWidth="2.5" opacity="0.7" />

      {/* Recognition indicators (checkmarks) */}
      <path
        d="M 122 107 L 125 110 L 128 104"
        stroke="url(#gradient3)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 117 115 L 120 118 L 123 112"
        stroke="url(#gradient3)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Document/Image icon with more detail */}
      <rect x="145" y="110" width="40" height="35" rx="4" stroke="url(#gradient3)" strokeWidth="2.5" />
      <rect x="145" y="110" width="40" height="35" rx="4" fill="url(#gradient3)" fillOpacity="0.05" />

      {/* Image icon elements */}
      <circle cx="154" cy="121" r="3.5" stroke="url(#gradient3)" strokeWidth="2" fill="none" />
      <path
        d="M 145 138 L 155 128 L 165 135 L 175 125 L 185 130 L 185 145 L 145 145 Z"
        stroke="url(#gradient3)"
        strokeWidth="2"
        fill="url(#gradient3)"
        fillOpacity="0.1"
      />

      {/* Processing arrows */}
      <path
        d="M 135 120 L 143 120"
        stroke="url(#gradient3)"
        strokeWidth="2"
        markerEnd="url(#arrowhead3)"
        opacity="0.6"
      />
      <path
        d="M 143 130 L 135 130"
        stroke="url(#gradient3)"
        strokeWidth="2"
        markerStart="url(#arrowhead3)"
        opacity="0.6"
      />

      {/* AI/Processing indicator */}
      <circle cx="100" cy="160" r="3" fill="url(#gradient3)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="108" cy="160" r="3" fill="url(#gradient3)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="92" cy="160" r="3" fill="url(#gradient3)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>

      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="url(#gradient3)" />
        </marker>
      </defs>
    </svg>
  )
}
