"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Globe,
  Award,
  ChevronRight,
  Coins,
  Bell,
  BarChart3,
  Clock,
  Flame,
  LogOut,
} from "lucide-react";

const recentSessions = [
  { country: "USA — F-1 Visa", date: "2 hours ago", score: 87 },
  { country: "Chinese Gov. Scholarship", date: "Yesterday", score: 74 },
  { country: "UK — Tier 4 Student", date: "3 days ago", score: 91 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .nav-blur {
          background: rgba(10, 15, 30, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .portal-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.3s ease;
        }
        .portal-card:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(16,185,129,0.3);
          transform: translateY(-2px);
        }
        .score-bar {
          background: rgba(16,185,129,0.2);
          border-radius: 99px;
          overflow: hidden;
        }
        .score-fill {
          background: linear-gradient(90deg, #10b981, #34d399);
          height: 100%;
          border-radius: 99px;
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">VisaPrep AI</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Credits badge */}
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5">
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Credits: 3</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl w-9 h-9"
            >
              <Bell className="w-4 h-4" />
            </Button>

            {/* User Avatar */}
            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <span className="hidden md:block text-sm text-slate-300 group-hover:text-white transition-colors">
                Alex Chen
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 hover:text-slate-300 hover:bg-slate-800 rounded-xl w-9 h-9"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        {/* Welcome Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">3-day streak</span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Welcome Back, Alex.
          </h1>
          <p className="text-slate-500 mt-2">Ready for today's practice session?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Sessions Done", value: "24", icon: Clock, color: "text-blue-400" },
            { label: "Avg. Score", value: "84%", icon: BarChart3, color: "text-emerald-400" },
            { label: "Countries Practiced", value: "7", icon: Globe, color: "text-purple-400" },
            { label: "Scholarships", value: "3", icon: Award, color: "text-amber-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5">
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
              <p className="text-2xl font-bold text-white mb-0.5">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Portals */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Portal 1: Countries */}
          <Link href="/countries" className="block">
            <div className="portal-card rounded-2xl p-8 cursor-pointer h-full group">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-blue-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Country flag previews */}
              <div className="flex gap-2 mb-6">
                {["🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇯🇵"].map((flag, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl border border-slate-700"
                  >
                    {flag}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xs text-slate-500 border border-slate-700 border-dashed">
                  +5
                </div>
              </div>

              <h2 className="text-xl font-semibold text-white mb-2">Practice by Destination</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Simulate real visa interviews tailored to 10 countries. Each session mirrors the actual consulate process.
              </p>

              <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all">
                Select Country
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </Link>

          {/* Portal 2: Scholarships */}
          <Link href="/scholarships" className="block">
            <div className="portal-card rounded-2xl p-8 cursor-pointer h-full group">
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-emerald-400" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Scholarship badges preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["CSC", "Erasmus+", "Türkiye", "Stipendium", "Chevening"].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-semibold text-white mb-2">Practice by Scholarship</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Prepare for the world's top fully-funded scholarship interviews with program-specific AI questions.
              </p>

              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all">
                Select Scholarship
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </Link>
        </div>

        {/* Recent Sessions */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-white">Recent Sessions</h3>
            <button className="text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
              View all
            </button>
          </div>
          <div className="space-y-3">
            {recentSessions.map((session) => (
              <div
                key={session.country}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-medium truncate">{session.country}</p>
                  <p className="text-xs text-slate-500">{session.date}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="score-bar w-24 h-1.5">
                    <div className="score-fill" style={{ width: `${session.score}%` }} />
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      session.score >= 85 ? "text-emerald-400" : session.score >= 70 ? "text-amber-400" : "text-red-400"
                    }`}
                  >
                    {session.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
