"use client";

import Link from "next/link";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  PhoneOff,
  Mic,
  Shield,
  Clock,
  AlertCircle,
} from "lucide-react";

interface InterviewPageProps {
  params: Promise<{ id: string }>;
}

/** Converts a URL slug like "chinese-government-scholarship" → "Chinese Government Scholarship" */
function formatId(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function InterviewPage({ params }: InterviewPageProps) {
  const { id } = use(params);
  const formattedTitle = formatId(decodeURIComponent(id));

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-['DM_Sans',sans-serif] flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .nav-blur {
          background: rgba(10, 15, 30, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .interview-placeholder {
          background: rgba(255,255,255,0.02);
          border: 2px dashed rgba(255,255,255,0.1);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .live-dot { animation: pulse-dot 1.5s ease-in-out infinite; }

        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
        .wave-bar:nth-child(1) { animation: wave 1.2s ease-in-out infinite 0s; }
        .wave-bar:nth-child(2) { animation: wave 1.2s ease-in-out infinite 0.15s; }
        .wave-bar:nth-child(3) { animation: wave 1.2s ease-in-out infinite 0.3s; }
        .wave-bar:nth-child(4) { animation: wave 1.2s ease-in-out infinite 0.45s; }
        .wave-bar:nth-child(5) { animation: wave 1.2s ease-in-out infinite 0.6s; }
      `}</style>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + Session info */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div className="h-5 w-px bg-slate-700 hidden sm:block" />
            <div className="hidden sm:block">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Interview Session</p>
              <h1
                className="text-white font-semibold leading-tight text-base"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {formattedTitle}
              </h1>
            </div>
          </div>

          {/* Center: Live badge + Timer */}
          <div className="flex items-center gap-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/10 gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 live-dot" />
              LIVE
            </Badge>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono tabular-nums">00:00</span>
            </div>
          </div>

          {/* Right: End call */}
          <Link href="/dashboard">
            <Button
              variant="outline"
              size="sm"
              className="border-red-800/60 text-red-400 hover:bg-red-900/30 hover:text-red-300 hover:border-red-600 rounded-xl gap-2 transition-all"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">End Call & Return to Dashboard</span>
              <span className="sm:hidden">End Call</span>
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-8 px-6 max-w-4xl mx-auto w-full">
        {/* Session context bar */}
        <div className="w-full glass-card rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-slate-400">Session secured with end-to-end encryption</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Mic className="w-4 h-4 text-slate-500" />
            <div className="flex items-end gap-0.5 h-4">
              {[1,2,3,4,5].map((i) => (
                <div
                  key={i}
                  className="wave-bar w-1 bg-emerald-500/40 rounded-full"
                  style={{ height: "100%" }}
                />
              ))}
            </div>
            <span className="text-xs text-slate-500">Microphone ready</span>
          </div>
        </div>

        {/* ===== INTERVIEW ROOM PLACEHOLDER ===== */}
        <div className="interview-placeholder rounded-3xl w-full flex-1 min-h-[460px] flex flex-col items-center justify-center gap-6 p-12">
          
          {/* TODO: Insert existing <InterviewRoom target={id} /> component here */}
          {/* 
            The InterviewRoom component should receive the `id` prop (the raw URL slug,
            e.g. "usa", "chevening", "chinese-government-scholarship") and handle all 
            WebRTC, AI voice, and microphone logic internally.
            
            Example usage:
            <InterviewRoom target={id} />
          */}

          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-5">
              <Mic className="w-9 h-9 text-slate-500" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Developer Placeholder</span>
            </div>
            <h2
              className="text-xl font-semibold text-slate-300 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              InterviewRoom Component Goes Here
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Insert your existing{" "}
              <code className="bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded text-xs font-mono">
                {"<InterviewRoom target={id} />"}
              </code>{" "}
              component in place of this placeholder. The{" "}
              <code className="bg-slate-800 text-emerald-400 px-1.5 py-0.5 rounded text-xs font-mono">
                id
              </code>{" "}
              variable is already available in scope.
            </p>
            <div className="mt-4 bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 text-left">
              <p className="text-xs font-mono text-slate-500">
                <span className="text-slate-600">// Current session target:</span>
                <br />
                <span className="text-emerald-400">id</span>{" "}
                <span className="text-slate-600">=</span>{" "}
                <span className="text-amber-300">"{id}"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom status strip */}
        <div className="w-full mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            "Real-time AI transcription enabled",
            "Performance metrics recording",
            "Session will be saved to your profile",
          ].map((hint) => (
            <p key={hint} className="flex items-center gap-1.5 text-xs text-slate-700">
              <span className="w-1 h-1 rounded-full bg-emerald-600 inline-block" />
              {hint}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
