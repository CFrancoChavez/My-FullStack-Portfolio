"use client"

export default function WebScraperIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes slideRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(5px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          /* Added crawl animation for spider to move in circular path */
          @keyframes crawl {
            0% { transform: translate(0, 0); }
            25% { transform: translate(8px, -5px); }
            50% { transform: translate(15px, 0); }
            75% { transform: translate(8px, 5px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes legWiggle {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }
          .data-flow { animation: slideRight 1.5s ease-in-out infinite; }
          .spider-body { animation: crawl 4s ease-in-out infinite; }
          .data-bar { animation: pulse 2s ease-in-out infinite; }
          .db-indicator { animation: pulse 1.5s ease-in-out infinite; }
          .spider-leg { animation: legWiggle 0.5s ease-in-out infinite; }
          svg:hover .spider-body { animation: crawl 2s ease-in-out infinite; }
          svg:hover .data-flow { animation: slideRight 0.8s ease-in-out infinite; }
        `}
      </style>

      {/* Monitor outer frame */}
      <rect x="30" y="40" width="140" height="95" rx="6" stroke="url(#gradient1)" strokeWidth="3" />

      {/* Browser chrome */}
      <rect x="30" y="40" width="140" height="20" rx="6" fill="url(#gradient1)" fillOpacity="0.1" />
      <line x1="30" y1="60" x2="170" y2="60" stroke="url(#gradient1)" strokeWidth="2" />

      {/* Browser dots */}
      <circle cx="42" cy="50" r="3" fill="url(#gradient1)" />
      <circle cx="52" cy="50" r="3" fill="url(#gradient1)" />
      <circle cx="62" cy="50" r="3" fill="url(#gradient1)" />

      {/* Code/content window with more detail */}
      <rect
        x="40"
        y="70"
        width="50"
        height="55"
        rx="3"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.5"
      />
      <line x1="45" y1="78" x2="75" y2="78" stroke="url(#gradient1)" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="86" x2="70" y2="86" stroke="url(#gradient1)" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="94" x2="80" y2="94" stroke="url(#gradient1)" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="102" x2="65" y2="102" stroke="url(#gradient1)" strokeWidth="2" opacity="0.7" />
      <line x1="45" y1="110" x2="75" y2="110" stroke="url(#gradient1)" strokeWidth="2" opacity="0.7" />

      {/* Data flow arrows */}
      <g className="data-flow">
        <path d="M 95 85 L 110 85" stroke="url(#gradient1)" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
        <path d="M 95 100 L 110 100" stroke="url(#gradient1)" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
        <path d="M 95 115 L 110 115" stroke="url(#gradient1)" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
      </g>

      {/* Data representation */}
      <rect x="115" y="70" width="45" height="55" rx="3" stroke="url(#gradient1)" strokeWidth="2" />
      <rect
        x="120"
        y="77"
        width="35"
        height="6"
        fill="url(#gradient1)"
        fillOpacity="0.3"
        rx="1"
        className="data-bar"
        style={{ animationDelay: "0s" }}
      />
      <rect
        x="120"
        y="88"
        width="30"
        height="6"
        fill="url(#gradient1)"
        fillOpacity="0.3"
        rx="1"
        className="data-bar"
        style={{ animationDelay: "0.3s" }}
      />
      <rect
        x="120"
        y="99"
        width="35"
        height="6"
        fill="url(#gradient1)"
        fillOpacity="0.3"
        rx="1"
        className="data-bar"
        style={{ animationDelay: "0.6s" }}
      />
      <rect
        x="120"
        y="110"
        width="28"
        height="6"
        fill="url(#gradient1)"
        fillOpacity="0.3"
        rx="1"
        className="data-bar"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Monitor stand */}
      <line x1="100" y1="135" x2="100" y2="150" stroke="url(#gradient1)" strokeWidth="3" />
      <line x1="80" y1="150" x2="120" y2="150" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round" />

      {/* Enhanced spider/bug with more detail */}
      <g className="spider-body" style={{ transformOrigin: "25px 55px" }}>
        <circle cx="25" cy="55" r="10" stroke="url(#gradient1)" strokeWidth="3" fill="none" />
        <circle cx="25" cy="55" r="5" fill="url(#gradient1)" fillOpacity="0.3" />
        <line
          x1="15"
          y1="50"
          x2="8"
          y2="43"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "15px 50px", animationDelay: "0s" }}
        />
        <line
          x1="15"
          y1="60"
          x2="8"
          y2="67"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "15px 60px", animationDelay: "0.1s" }}
        />
        <line
          x1="35"
          y1="50"
          x2="42"
          y2="43"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "35px 50px", animationDelay: "0.2s" }}
        />
        <line
          x1="35"
          y1="60"
          x2="42"
          y2="67"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "35px 60px", animationDelay: "0.3s" }}
        />
        <line
          x1="18"
          y1="47"
          x2="12"
          y2="38"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "18px 47px", animationDelay: "0.05s" }}
        />
        <line
          x1="32"
          y1="47"
          x2="38"
          y2="38"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "32px 47px", animationDelay: "0.15s" }}
        />
        <line
          x1="18"
          y1="63"
          x2="12"
          y2="72"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "18px 63px", animationDelay: "0.25s" }}
        />
        <line
          x1="32"
          y1="63"
          x2="38"
          y2="72"
          stroke="url(#gradient1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="spider-leg"
          style={{ transformOrigin: "32px 63px", animationDelay: "0.35s" }}
        />
      </g>

      {/* Enhanced database cylinders with more detail */}
      {/* Left database */}
      <ellipse
        cx="55"
        cy="160"
        rx="18"
        ry="7"
        stroke="url(#gradient1)"
        strokeWidth="2.5"
        fill="url(#gradient1)"
        fillOpacity="0.1"
      />
      <line x1="37" y1="160" x2="37" y2="175" stroke="url(#gradient1)" strokeWidth="2.5" />
      <line x1="73" y1="160" x2="73" y2="175" stroke="url(#gradient1)" strokeWidth="2.5" />
      <ellipse cx="55" cy="167" rx="18" ry="7" stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.5" />
      <ellipse
        cx="55"
        cy="175"
        rx="18"
        ry="7"
        stroke="url(#gradient1)"
        strokeWidth="2.5"
        fill="url(#gradient1)"
        fillOpacity="0.1"
      />
      {/* Database indicator lines */}
      <line
        x1="45"
        y1="165"
        x2="65"
        y2="165"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        opacity="0.4"
        className="db-indicator"
        style={{ animationDelay: "0s" }}
      />
      <line
        x1="45"
        y1="170"
        x2="65"
        y2="170"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        opacity="0.4"
        className="db-indicator"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Right database */}
      <ellipse
        cx="105"
        cy="160"
        rx="18"
        ry="7"
        stroke="url(#gradient1)"
        strokeWidth="2.5"
        fill="url(#gradient1)"
        fillOpacity="0.1"
      />
      <line x1="87" y1="160" x2="87" y2="175" stroke="url(#gradient1)" strokeWidth="2.5" />
      <line x1="123" y1="160" x2="123" y2="175" stroke="url(#gradient1)" strokeWidth="2.5" />
      <ellipse cx="105" cy="167" rx="18" ry="7" stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.5" />
      <ellipse
        cx="105"
        cy="175"
        rx="18"
        ry="7"
        stroke="url(#gradient1)"
        strokeWidth="2.5"
        fill="url(#gradient1)"
        fillOpacity="0.1"
      />
      {/* Database indicator lines */}
      <line
        x1="95"
        y1="165"
        x2="115"
        y2="165"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        opacity="0.4"
        className="db-indicator"
        style={{ animationDelay: "0.2s" }}
      />
      <line
        x1="95"
        y1="170"
        x2="115"
        y2="170"
        stroke="url(#gradient1)"
        strokeWidth="1.5"
        opacity="0.4"
        className="db-indicator"
        style={{ animationDelay: "0.7s" }}
      />

      {/* Connection lines from monitor to databases */}
      <path d="M 80 135 Q 70 145 55 160" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="3 3" opacity="0.5" />
      <path
        d="M 120 135 Q 115 145 105 160"
        stroke="url(#gradient1)"
        strokeWidth="2"
        strokeDasharray="3 3"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="url(#gradient1)" />
        </marker>
      </defs>
    </svg>
  )
}
