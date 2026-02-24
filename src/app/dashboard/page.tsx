"use client";

import { Button } from "@/components/ui/button";
import { Trophy, BarChart3, Clock, AlertCircle, ArrowRight } from "lucide-react";

export default function DashboardOverview() {
  return (
    <>
      <style>{`
        .glass-panel { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Welcome back, Scholar.
        </h1>
        <p className="text-slate-400">Track your progress and prepare for your upcoming visa interview.</p>
      </header>

      {/* Quick Action Hero Card */}
      <div className="glass-panel rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 border-emerald-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Ready to practice
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Start a New Mock Interview</h2>
          <p className="text-slate-400 max-w-md">Experience a realistic, AI-driven voice interview tailored to your target country.</p>
        </div>
        <Button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white py-6 px-8 rounded-xl font-medium shadow-lg shadow-emerald-500/25 group relative z-10">
          Start Simulation
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Interviews Completed</h3>
            <Trophy className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-sm text-slate-500 mt-2">Free Plan: 1 remaining</p>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Average Score</h3>
            <BarChart3 className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-white">--</p>
          <p className="text-sm text-slate-500 mt-2">Complete an interview to see stats</p>
        </div>

        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Next Milestone</h3>
            <Clock className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-lg font-bold text-white mt-1">First Practice Session</p>
          <p className="text-sm text-slate-500 mt-2">Take your baseline mock test</p>
        </div>
      </div>

      {/* Recent History Placeholder */}
      <div>
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="glass-panel rounded-2xl p-12 text-center flex flex-col items-center justify-center border-dashed border-slate-700">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="text-white font-medium mb-2">No interviews yet</h3>
          <p className="text-slate-400 max-w-sm mx-auto mb-6">Your past mock interviews, scores, and AI feedback will appear here.</p>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl">
            Browse Supported Countries
          </Button>
        </div>
      </div>
    </>
  );
}