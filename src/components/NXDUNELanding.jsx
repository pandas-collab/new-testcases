import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Users, CheckCircle2, Clock } from 'lucide-react';
import { nxduneMetrics, activeTasks, activityFeed } from '../data/mockData.js';
import CorePlatformSection from './CorePlatformSection.jsx';

const CircularProgress = ({ percentage, size = 90, strokeWidth = 8, color = '#9d174d' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-lg font-bold text-slate-800">{percentage}%</span>
        <span className="text-xs text-slate-500">Sprint</span>
      </div>
    </div>
  );
};

const NXDUNELanding = ({ onGetStarted }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <main className="px-6 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Unlock
              <br />
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d174d] to-[#a855f7]">Focus</span>
              <br />
              <span className="text-slate-400">with</span>{' '}
              <span className="relative">
                <span className="relative z-10">NXDUNE</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#9d174d] to-[#a855f7] opacity-70 -z-0"></span>
              </span>
            </h1>

            <p className="text-slate-600 text-base lg:text-lg max-w-md leading-relaxed">
              One powerful platform for Project Management, Task Tracking, and Ticket
              Resolution -- with intelligent automation and real-time collaboration built in.
            </p>

            <button 
              onClick={onGetStarted}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#9d174d] to-[#c026d3] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#9d174d]/25 transition-all duration-300"
            >
              Get started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Dashboard Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 overflow-hidden border border-slate-100">
              {/* Card Header */}
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                </div>
                <span className="text-xs font-medium text-slate-400">NXDUNE - Sprint #14</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-medium text-green-600">Live</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                {/* Metrics Row */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="flex flex-col items-center">
                    <CircularProgress percentage={nxduneMetrics.sprintProgress} size={75} strokeWidth={6} />
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-slate-100">
                    <span className="text-lg font-bold text-[#a855f7]">{nxduneMetrics.onTimeDelivery}%</span>
                    <span className="text-xs text-slate-400">On-time</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-slate-100">
                    <span className="text-lg font-bold text-[#a855f7]">{nxduneMetrics.teamVelocity}x</span>
                    <span className="text-xs text-slate-400">Velocity</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-slate-100">
                    <span className="text-lg font-bold text-[#a855f7]">{nxduneMetrics.completedSprints}</span>
                    <span className="text-xs text-slate-400">Sprints</span>
                  </div>
                </div>

                {/* Task Progress */}
                <div className="space-y-3 mb-4">
                  {activeTasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-3">
                      <span className="text-xs text-slate-600 w-28 truncate">{task.name}</span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: animate ? `${task.progress}%` : '0%',
                            backgroundColor: task.color
                          }}
                        />
                      </div>
                      <span className="text-xs font-medium w-8" style={{ color: task.color }}>
                        {task.progress}%
                      </span>
                      <div className="flex -space-x-1.5">
                        {[...Array(task.assignees)].map((_, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                            style={{ backgroundColor: task.color }}
                          >
                            <Users className="w-3 h-3" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity Feed */}
                <div className="border-t border-slate-100 pt-3 space-y-2">
                  {activityFeed.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span className="text-slate-500">{item.message}</span>
                      </div>
                      <span className="text-slate-400">{item.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#9d174d]/10 to-[#a855f7]/10 rounded-3xl -z-10 blur-xl"></div>
          </div>
        </div>
      </main>

      {/* Core Platform Section */}
      <CorePlatformSection />
    </div>
  );
};

export default NXDUNELanding;
