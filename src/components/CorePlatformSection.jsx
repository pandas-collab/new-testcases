import React, { useState } from 'react';
import { BarChart3, DollarSign, Ticket, Target, CheckCircle, LayoutGrid } from 'lucide-react';

const modules = [
  {
    id: 'scrum',
    name: 'Scrum Board',
    icon: LayoutGrid,
    color: '#f59e0b',
    bgColor: '#fffbeb',
    angle: 0,
  },
  {
    id: 'financials',
    name: 'Financials',
    icon: DollarSign,
    color: '#10b981',
    bgColor: '#ecfdf5',
    angle: 72,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: BarChart3,
    color: '#0ea5e9',
    bgColor: '#f0f9ff',
    active: true,
    description: 'Live dashboards and deep reports that surface what matters.',
    angle: 144,
  },
  {
    id: 'tickets',
    name: 'Ticket System',
    icon: Ticket,
    color: '#d946ef',
    bgColor: '#fdf4ff',
    angle: 216,
  },
  {
    id: 'project',
    name: 'Project Management',
    icon: Target,
    color: '#8b5cf6',
    bgColor: '#faf5ff',
    angle: 288,
  },
];

const CorePlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  // Calculate position for each module card using polar coordinates
  const getPosition = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(rad); // percent
    const y = 50 + radius * Math.sin(rad); // percent
    return { x, y, rad };
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#fff7ed] via-white to-[#fef3c7] relative overflow-hidden">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#d1d5db" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#9d174d] uppercase">
              Core Platform
            </span>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-slate-900">One workspace.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db2777] via-[#a855f7] to-[#7c3aed]">
                Built for how
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db2777] via-[#a855f7] to-[#7c3aed]">
                teams ship.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-500 text-base max-w-md leading-relaxed">
              Every module your team needs, deeply connected with no context switching.
            </p>

            {/* Featured Module Card */}
            <div className="mt-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 relative overflow-hidden">
              {/* Left accent border */}
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#0ea5e9] to-[#0ea5e9]/50 rounded-full" />
              
              <div className="flex items-start gap-4 pl-2">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-[#0ea5e9]" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-slate-900 font-bold text-lg">Analytics</h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    Live dashboards and deep reports that surface what matters.
                  </p>
                </div>

                {/* Status indicator */}
                <div className="w-3 h-3 rounded-full bg-[#0ea5e9] flex-shrink-0" />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-6">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#0ea5e9]'
                      : 'w-4 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Module Cards Visualization */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Orbital container with clockwise rotation */}
            <div 
              className="absolute inset-0"
              style={{ animation: 'orbit-clockwise 30s linear infinite' }}
            >
              {/* SVG Connection Lines - dashed lines from center to cards */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ animation: 'orbit-counterclockwise 30s linear infinite' }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Ellipse arc paths connecting cards to center */}
                {modules.map((module) => {
                  const { x, y } = getPosition(module.angle, 38);
                  const midX = 50;
                  const midY = 50;
                  const controlX = (x + midX) / 2 + Math.sin((module.angle * Math.PI) / 180) * 15;
                  const controlY = (y + midY) / 2 - Math.cos((module.angle * Math.PI) / 180) * 15;
                  return (
                    <path
                      key={`arc-${module.id}`}
                      d={`M 50% 50% Q ${controlX}% ${controlY}% ${x}% ${y}%`}
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      strokeDasharray="6 3"
                      className="opacity-50"
                    />
                  );
                })}
              </svg>

              {/* Module Cards positioned around the orbit */}
              {modules.map((module, index) => {
                const { x, y } = getPosition(module.angle, 38);
                const Icon = module.icon;
                return (
                  <div 
                    key={module.id}
                    className="absolute w-44 bg-white rounded-xl p-4 shadow-xl border-t-4 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ 
                      borderTopColor: module.color,
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: `translate(-50%, -50%)`,
                      borderTopWidth: '3px',
                      animation: `float-card-${index % 3} 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                      zIndex: module.active ? 20 : 10,
                    }}
                  >
                    <div 
                      className="flex items-center gap-3"
                      style={{ animation: 'orbit-counterclockwise 30s linear infinite' }}
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: module.bgColor }}
                      >
                        <Icon className="w-5 h-5" style={{ color: module.color }} />
                      </div>
                      <span className="text-slate-700 font-semibold text-sm">{module.name}</span>
                    </div>
                  </div>
                );
              })}

              {/* Check Circle Badge - Center */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#9d174d] to-[#a855f7] rounded-full flex items-center justify-center shadow-2xl z-30"
                style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#9d174d]" />
                </div>
              </div>
            </div>

            {/* Background decorative cards - also orbiting */}
            <div 
              className="absolute right-4 top-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border-t-4 border-slate-300 w-36 opacity-60"
              style={{ 
                borderTopWidth: '2px',
                animation: 'orbit-clockwise 25s linear infinite',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Target className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-slate-600 font-medium text-xs">Task Tracking</span>
              </div>
            </div>

            <div 
              className="absolute left-8 bottom-8 bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-md border-t-4 border-slate-300 w-32 opacity-50"
              style={{ 
                borderTopWidth: '2px',
                animation: 'orbit-clockwise 35s linear infinite reverse',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                  <LayoutGrid className="w-3 h-3 text-slate-500" />
                </div>
                <span className="text-slate-600 font-medium text-xs">Modules</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePlatformSection;
