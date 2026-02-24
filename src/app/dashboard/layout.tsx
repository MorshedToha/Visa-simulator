"use client";

import { createBrowserClient } from '@supabase/ssr';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, PlayCircle, BarChart3, LogOut, GraduationCap } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // 1. Protect the entire dashboard!
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        router.push("/login");
      } else {
        setUserEmail(user.email);
        setLoading(false);
      }
    };
    checkUser();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex font-['DM_Sans',sans-serif]">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-slate-800 bg-[#0f1629] flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold tracking-tight">Acceptance Pro</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${pathname === '/dashboard' ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/dashboard/start" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${pathname.includes('/start') ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <PlayCircle className="w-5 h-5" /> Mock Interviews
          </Link>
          <Link href="/dashboard/analytics" className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${pathname.includes('/analytics') ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <BarChart3 className="w-5 h-5" /> Analytics
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="px-4 py-3 text-sm text-slate-400 truncate mb-2">
            Logged in as:<br/> <span className="text-slate-200">{userEmail}</span>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* DYNAMIC CONTENT AREA */}
      <main className="flex-1 p-8 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          {children} {/* This is where page.tsx injects its content! */}
        </div>
      </main>
    </div>
  );
}