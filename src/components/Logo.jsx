export default function Logo({ className = "w-10 h-10", color = "#C1121F" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized horned 'S' mark inspired by Sinister Studios brand */}
      <g fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Left horn */}
        <path d="M 20 15 Q 18 8, 25 5 Q 22 12, 28 18" fill={color} fillOpacity="0.8" />
        {/* Right horn */}
        <path d="M 80 15 Q 82 8, 75 5 Q 78 12, 72 18" fill={color} fillOpacity="0.8" />
        {/* S body */}
        <path d="M 70 30 Q 70 22, 50 22 Q 30 22, 30 35 Q 30 48, 50 50 Q 70 52, 70 65 Q 70 78, 50 78 Q 30 78, 30 70"
              strokeWidth="4" fill="none" />
        {/* Drip */}
        <path d="M 50 78 L 50 88 M 48 85 Q 50 92, 52 85" strokeWidth="2.5" />
      </g>
    </svg>
  )
}
