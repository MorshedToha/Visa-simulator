"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Building2,
  Landmark,
  TreePine,
  Sun,
  Cherry,
  Flower2,
  Wine,
  Sunset,
  Snowflake,
  Car,
} from "lucide-react";

const countries = [
  {
    name: "USA",
    slug: "usa",
    flag: "🇺🇸",
    icon: Landmark,
    visaType: "F-1 Student Visa",
    difficulty: "Hard",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "from-blue-600/20 to-red-600/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
    questions: "120+",
  },
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    icon: Building2,
    visaType: "Tier 4 Student Visa",
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "from-blue-700/20 to-red-700/20",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-400/10 border-indigo-400/20",
    questions: "95+",
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    icon: TreePine,
    visaType: "Student Permit",
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "from-red-600/20 to-slate-600/20",
    iconColor: "text-red-400",
    iconBg: "bg-red-400/10 border-red-400/20",
    questions: "80+",
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    icon: Sun,
    visaType: "Subclass 500 Visa",
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "from-yellow-600/20 to-green-600/20",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    questions: "75+",
  },
  {
    name: "Japan",
    slug: "japan",
    flag: "🇯🇵",
    icon: Cherry,
    visaType: "College Student Visa",
    difficulty: "Hard",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "from-rose-600/20 to-slate-600/20",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-400/10 border-rose-400/20",
    questions: "90+",
  },
  {
    name: "China",
    slug: "china",
    flag: "🇨🇳",
    icon: Flower2,
    visaType: "X1/X2 Student Visa",
    difficulty: "Easy",
    difficultyColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    accent: "from-red-600/20 to-yellow-600/20",
    iconColor: "text-red-400",
    iconBg: "bg-red-400/10 border-red-400/20",
    questions: "100+",
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    icon: Wine,
    visaType: "Long-Stay Student Visa",
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "from-blue-600/20 to-red-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10 border-blue-400/20",
    questions: "65+",
  },
  {
    name: "Spain",
    slug: "spain",
    flag: "🇪🇸",
    icon: Sunset,
    visaType: "Student Visa (Type D)",
    difficulty: "Easy",
    difficultyColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    accent: "from-yellow-600/20 to-red-600/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/10 border-orange-400/20",
    questions: "60+",
  },
  {
    name: "Russia",
    slug: "russia",
    flag: "🇷🇺",
    icon: Snowflake,
    visaType: "Student Visa",
    difficulty: "Medium",
    difficultyColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    accent: "from-slate-600/20 to-red-600/20",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10 border-sky-400/20",
    questions: "55+",
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    icon: Car,
    visaType: "National Visa (§16b)",
    difficulty: "Hard",
    difficultyColor: "text-red-400 bg-red-400/10 border-red-400/20",
    accent: "from-slate-600/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    questions: "110+",
  },
];

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-100 font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .nav-blur {
          background: rgba(10, 15, 30, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .country-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .country-card:hover {
          border-color: rgba(16,185,129,0.35);
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .country-card .bg-gradient {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .country-card:hover .bg-gradient { opacity: 1; }
        .hero-grid {
          background-image: 
            linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
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
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase">
            10 Countries Available
          </Badge>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Select Destination Country
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Each simulation is crafted to reflect the real tone, format, and difficulty of that country's student visa interview process.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {countries.map((country) => (
              <div key={country.slug} className="country-card rounded-2xl p-6 flex flex-col">
                {/* Hover gradient overlay */}
                <div className={`bg-gradient bg-gradient-to-br ${country.accent} rounded-2xl`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Flag + Icon */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl">{country.flag}</span>
                    <div
                      className={`w-10 h-10 rounded-xl ${country.iconBg} border flex items-center justify-center`}
                    >
                      <country.icon className={`w-5 h-5 ${country.iconColor}`} />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold text-white mb-1">{country.name}</h3>
                  <p className="text-xs text-slate-500 mb-3">{country.visaType}</p>

                  <div className="flex items-center gap-2 mb-5 mt-auto">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${country.difficultyColor}`}
                    >
                      {country.difficulty}
                    </span>
                    <span className="text-xs text-slate-600">{country.questions} questions</span>
                  </div>

                  <Link href={`/interview/${country.slug}`}>
                    <Button
                      size="sm"
                      className="w-full bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white border border-slate-700 hover:border-emerald-500 rounded-xl transition-all group"
                    >
                      Practice Now
                      <ChevronRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
