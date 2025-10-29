import svgPaths from "./svg-ms2tjh9no8";

export default function Background() {
  return (
    <div className="relative size-full" data-name="Background">
      {/* Mobile/Tablet: maintain aspect ratio with slice */}
      <svg className="block lg:hidden size-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1452 887">
        <g id="Background">
          <path d={svgPaths.p2f833b00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2f833b00} fill="url(#paint0_linear_1_1166)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1166" x1="1033.67" x2="1174.32" y1="1126.85" y2="-106.293">
            <stop stopColor="white" />
            <stop offset="0.25" stopColor="#61A94E" stopOpacity="0.4" />
            <stop offset="0.45" stopColor="#236189" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Desktop: stretch horizontally, don't scale vertically */}
      <svg className="hidden lg:block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1452 887">
        <g id="Background">
          <path d={svgPaths.p2f833b00} fill="var(--fill-0, white)" />
          <path d={svgPaths.p2f833b00} fill="url(#paint0_linear_1_1166_desktop)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1166_desktop" x1="1033.67" x2="1174.32" y1="1126.85" y2="-106.293">
            <stop stopColor="white" />
            <stop offset="0.25" stopColor="#61A94E" stopOpacity="0.4" />
            <stop offset="0.45" stopColor="#236189" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}