"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ChevronLeft, ChevronRight, Globe, Award, DollarSign } from "lucide-react";

const scholarships = [
  {
    slug: "chinese-government-scholarship",
    name: "Chinese Government Scholarship",
    shortName: "CSC",
    flag: "🇨🇳",
    country: "China",
    description:
      "Fully-funded by the Chinese Scholarship Council (CSC), covering tuition, accommodation, stipend, and comprehensive insurance for international students.",
    coverage: ["Tuition", "Housing", "Monthly Stipend", "Insurance"],
    difficulty: "Competitive",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "border-l-red-500",
    questions: "80+",
  },
  {
    slug: "stipendium-hungaricum",
    name: "Stipendium Hungaricum",
    shortName: "SH",
    flag: "🇭🇺",
    country: "Hungary",
    description:
      "Hungary's flagship scholarship program offering full funding to exceptional students from partner countries across Bachelor's, Master's, and PhD programs.",
    coverage: ["Tuition", "Housing", "Monthly Allowance", "Health Care"],
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "border-l-amber-500",
    questions: "60+",
  },
  {
    slug: "turkiye-burslari",
    name: "Türkiye Bursları",
    shortName: "YTB",
    flag: "🇹🇷",
    country: "Türkiye",
    description:
      "Turkey's prestigious government scholarship offering full financial support including Turkish language courses and cultural orientation programs.",
    coverage: ["Tuition", "Housing", "Stipend", "Language Course", "Airfare"],
    difficulty: "Competitive",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "border-l-red-600",
    questions: "70+",
  },
  {
    slug: "chevening",
    name: "Chevening Scholarship",
    shortName: "Chevening",
    flag: "🇬🇧",
    country: "United Kingdom",
    description:
      "The UK government's global scholarship program, awarded to future leaders pursuing a one-year Master's degree at any UK university.",
    coverage: ["Tuition", "Living Allowance", "Airfare", "Visa Fees"],
    difficulty: "Very Hard",
    difficultyColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    accent: "border-l-blue-500",
    questions: "110+",
  },
  {
    slug: "erasmus-plus",
    name: "Erasmus+ Scholarship",
    shortName: "Erasmus+",
    flag: "🇪🇺",
    country: "Europe",
    description:
      "The EU's flagship education mobility program supporting students studying or training abroad in any of 33 participating European countries.",
    coverage: ["Monthly Grant", "Travel Supplement", "Tuition Waiver"],
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "border-l-indigo-500",
    questions: "55+",
  },
  {
    slug: "mext",
    name: "MEXT Scholarship",
    shortName: "MEXT",
    flag: "🇯🇵",
    country: "Japan",
    description:
      "Japan's Ministry of Education, Culture, Sports, Science and Technology scholarship offering full funding for undergraduate and graduate studies.",
    coverage: ["Tuition", "Monthly Allowance", "Airfare", "Enrollment Fees"],
    difficulty: "Very Hard",
    difficultyColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    accent: "border-l-rose-500",
    questions: "95+",
  },
  {
    slug: "daad",
    name: "DAAD Scholarship",
    shortName: "DAAD",
    flag: "🇩🇪",
    country: "Germany",
    description:
      "The German Academic Exchange Service funds thousands of students and researchers annually for postgraduate studies and research at German institutions.",
    coverage: ["Monthly Stipend", "Travel Allowance", "Health Insurance", "German Courses"],
    difficulty: "Hard",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "border-l-yellow-500",
    questions: "75+",
  },
  {
    slug: "eiffel-excellence",
    name: "Eiffel Excellence Scholarship",
    shortName: "Eiffel",
    flag: "🇫🇷",
    country: "France",
    description:
      "Campus France's prestigious scholarship targeting the highest-performing international students for Master's and PhD programs at leading French institutions.",
    coverage: ["Monthly Allowance", "Housing Support", "Airfare", "Cultural Activities"],
    difficulty: "Hard",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "border-l-blue-400",
    questions: "65+",
  },
];

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .nav-blur {
          background: rgba(10, 15, 30, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .scholarship-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-left-width: 3px;
          transition: all 0.3s ease;
        }
        .scholarship-card:hover {
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .hero-grid {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .coverage-tag {
          background: rgba(16,185,129,0.07);
          border: 1px solid rgba(16,185,129,0.15);
          color: #6ee7b7;
          font-size: 0.65rem;
          padding: 2px 8px;
          border-radius: 99px;
          white-space: nowrap;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white gap-1.5 -ml-2">
              <ChevronLeft className="w-4 h-4" />
              Dashboard
            </Button>
          </Link>
          <div className="h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight text-sm">VisaPrep AI</span>
          </div>
        </div>
      </nav>

      <div className="pt-20 hero-grid">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-14 text-center">
          <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
            <Award className="w-3 h-3 mr-2" />
            8 Programs Available
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Select Scholarship Program
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Practice with questions curated directly from past scholarship interviews. Know exactly what panels are looking for.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-5">
            {scholarships.map((s) => (
              <div key={s.slug} className={`scholarship-card rounded-2xl p-7 flex flex-col ${s.accent}`}>
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{s.flag}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-base font-semibold text-white leading-tight">{s.name}</h3>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-3 h-3 text-slate-600" />
                        <p className="text-xs text-slate-500">{s.country}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${s.difficultyColor}`}>
                      {s.difficulty}
                    </span>
                    <span className="text-xs text-slate-600">{s.questions} Qs</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{s.description}</p>

                {/* Coverage Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs text-slate-600 mr-1 flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> Covers:
                  </span>
                  {s.coverage.map((item) => (
                    <span key={item} className="coverage-tag">{item}</span>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/interview/${s.slug}`} className="mt-auto">
                  <Button
                    size="sm"
                    className="w-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500 rounded-xl transition-all group"
                  >
                    Practice Now
                    <ChevronRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
