import { Download, ArrowRight } from "lucide-react";
// No Button import needed

export default function Banner() {
  return (
    <div className="relative min-h-[320px] bg-gradient-to-br from-teal-400 to-teal-600 overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-12 w-3 h-3 bg-white/20 rounded-full"></div>
        <div className="absolute top-16 right-32 w-4 h-4 bg-white/15 rounded-full"></div>
        <div className="absolute top-8 right-16 w-2 h-2 bg-white/25 rounded-full"></div>
        <div className="absolute top-32 left-8 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-24 left-1/3 w-3 h-3 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-16 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-8 right-1/3 w-3 h-3 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-24 right-8 w-2 h-2 bg-white/25 rounded-full"></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-24 w-5 h-5 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white/15 rounded-full"></div>
        <div className="absolute top-20 left-2/3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-white/15 rounded-full"></div>
        <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-between px-8 py-12 max-w-7xl mx-auto">
        {/* Left side - Icon */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 relative">
              {/* 3D Cube Icon */}
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="cubeGradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient
                    id="cubeGradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient
                    id="cubeGradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                {/* Top face */}
                <path
                  d="M24 8 L36 14 L24 20 L12 14 Z"
                  fill="url(#cubeGradient3)"
                />
                {/* Left face */}
                <path
                  d="M12 14 L24 20 L24 32 L12 26 Z"
                  fill="url(#cubeGradient1)"
                />
                {/* Right face */}
                <path
                  d="M24 20 L36 14 L36 26 L24 32 Z"
                  fill="url(#cubeGradient2)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Center - Text content */}
        <div className="flex-1 mx-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start your project with 30% Off today!
          </h1>
          <p className="text-xl text-white/90 font-medium">
            We have limited time offer on the new projects ...
          </p>
        </div>

        {/* Right side - CTA Button */}
        <div className="flex-shrink-0">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-colors flex items-center">
            <ArrowRight className="mr-2 h-5 w-5" />
            Start your new project
          </button>
        </div>
      </div>
    </div>
  );
}
