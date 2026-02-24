"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mic,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Globe,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Choose Your Destination",
    description:
      "Select the country or scholarship program you're applying for. We tailor every question to the specific visa type and institution.",
  },
  {
    icon: Mic,
    step: "02",
    title: "Speak in Real-Time",
    description:
      "Our AI interviewer speaks to you and listens to your responses via voice — exactly like a real interview panel.",
  },
  {
    icon: BrainCircuit,
    step: "03",
    title: "Get Instant Feedback",
    description:
      "Receive a detailed performance report covering clarity, confidence, relevance, and areas for improvement.",
  },
];

const stats = [
  { value: "94%", label: "Visa Approval Rate" },
  { value: "50K+", label: "Students Trained" },
  { value: "120+", label: "Countries Covered" },
  { value: "4.9★", label: "Average Rating" },
];

const features = [
  "Real-time AI voice interviewer",
  "Country & scholarship-specific questions",
  "Instant performance analytics",
  "Unlimited practice sessions",
  "Native-level language assessment",
  "Expert-curated question banks",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-['DM_Sans',sans-serif]">
      {/* Google Font Import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700;800&display=swap');
        
        .hero-grid {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .emerald-glow {
          box-shadow: 0 0 80px rgba(16, 185, 129, 0.15);
        }

        .step-number {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 800;
          line-height: 1;
          color: rgba(16, 185, 129, 0.08);
          position: absolute;
          top: -10px;
          right: 16px;
          user-select: none;
        }

        .nav-blur {
          background: rgba(10, 15, 30, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); }
        }
        .pulse-ring { animation: pulse-ring 2.5s ease-in-out infinite; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">VisaPrep AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-500 text-white border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-grid pt-20 overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3 h-3 mr-2" />
            AI-Powered Interview Simulator
          </Badge>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nail Your{" "}
            <span className="text-emerald-400">Scholarship</span>
            <br />& Visa Interview
            <br />
            <span className="text-slate-400 text-4xl md:text-5xl font-normal">with Real-Time AI.</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Practice with an AI interviewer that speaks, listens, and gives you expert feedback — tailored to
            your specific visa type or scholarship program.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/login">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-6 text-base font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/20 group"
              >
                Start Practicing Free
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-base rounded-xl"
            >
              <Mic className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Floating voice UI mockup */}
          <div className="mt-20 flex justify-center">
            <div className="float-anim">
              <div className="glass-card rounded-2xl p-8 emerald-glow max-w-sm w-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-ring" />
                  <span className="text-sm text-slate-400">AI Interviewer · Live</span>
                </div>
                <p className="text-slate-200 text-sm text-left leading-relaxed mb-4">
                  "Why did you choose this university specifically, and how does it align with your long-term career goals in sustainable engineering?"
                </p>
                <div className="flex items-center gap-2">
                  {[3, 5, 2, 7, 4, 6, 3, 5, 2].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald-500 rounded-full opacity-70"
                      style={{ height: `${h * 4}px` }}
                    />
                  ))}
                  <span className="text-xs text-slate-500 ml-2">Listening…</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="text-4xl font-bold text-emerald-400 mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.value}
              </p>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Process</p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How VisaPrep AI Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
              <span className="step-number">{s.step}</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-emerald-400 text-sm font-medium tracking-widest uppercase mb-3">Everything You Need</p>
              <h2
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Built for
                <br />
                serious applicants.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                VisaPrep AI is not a quiz app. It's a full simulation environment designed to replicate the
                pressure and format of real consulate and scholarship panel interviews.
              </p>
              <Link href="/login">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white group">
                  Get Started — It's Free
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="glass-card rounded-3xl p-14 emerald-glow">
            <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your dream study destination is one interview away.
            </h2>
            <p className="text-slate-400 mb-8">
              Join 50,000+ students who have confidently walked into their interviews after training with VisaPrep AI.
            </p>
            <Link href="/login">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-6 text-base rounded-xl group"
              >
                Get Started — Free
                <TrendingUp className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-medium text-white text-sm">VisaPrep AI</span>
          </div>
          <p className="text-slate-600 text-xs">© 2025 VisaPrep AI. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
