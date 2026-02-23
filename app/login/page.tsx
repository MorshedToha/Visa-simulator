"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center p-4 relative overflow-hidden font-['DM_Sans',sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap');
        .glass-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .input-dark {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.1) !important;
          color: white !important;
        }
        .input-dark::placeholder { color: #475569 !important; }
        .input-dark:focus { border-color: rgba(16,185,129,0.5) !important; box-shadow: 0 0 0 3px rgba(16,185,129,0.1) !important; }
        .divider { display: flex; align-items: center; gap: 12px; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
      `}</style>

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">VisaPrep AI</span>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <div className="mb-8">
            <h1
              className="text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isLogin ? "Welcome Back to VisaPrep AI" : "Create Your Account"}
            </h1>
            <p className="text-slate-500 text-sm">
              {isLogin
                ? "Sign in to continue your interview practice."
                : "Join 50,000+ students preparing with AI."}
            </p>
          </div>

          {/* Google Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full mb-6 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white py-5 rounded-xl flex items-center gap-3"
            onClick={() => {
              // TODO: Implement Google OAuth with Supabase
              console.log("Google sign-in placeholder");
            }}
          >
            {/* Google SVG icon */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </Button>

          <div className="divider mb-6">
            <span className="text-xs text-slate-600 uppercase tracking-widest">or</span>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Implement Supabase email/password auth
              console.log("Login placeholder:", { email, password });
            }}
            className="space-y-4"
          >
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-slate-400 text-xs uppercase tracking-widest font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@university.edu"
                  className="input-dark pl-10 py-5 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-400 text-xs uppercase tracking-widest font-medium">
                  Password
                </Label>
                {isLogin && (
                  <button type="button" className="text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input-dark pl-10 pr-10 py-5 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-xl font-medium mt-2 group transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Toggle */}
          <p className="text-center text-sm text-slate-500 mt-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
            >
              {isLogin ? "Sign up free" : "Sign in"}
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-slate-700 mt-6">
          By continuing, you agree to VisaPrep AI's{" "}
          <a href="#" className="text-slate-600 hover:text-slate-400 underline">Terms</a> and{" "}
          <a href="#" className="text-slate-600 hover:text-slate-400 underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
