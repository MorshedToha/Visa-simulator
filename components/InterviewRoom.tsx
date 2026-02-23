"use client";

import { useVapi } from "../hooks/useVapi";
import { Mic, MicOff, PhoneOff, AudioLines } from "lucide-react";

export default function InterviewRoom() {
  const { isCallActive, isMuted, startCall, stopCall, toggleMute } = useVapi();

  // SIMPLIFIED CONFIG: Removed the 'voice' block to stop the disconnect error
  const officerConfig = {
    firstMessage: "Hello. I am the consular officer. Let us begin your interview.",
    model: {
      provider: "openai",
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a strict interviewing officer evaluating a candidate for the Chinese Government Scholarship. Ask specific questions and interrupt if they talk too long."
        }
      ]
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-md mx-auto p-8 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 text-white">
      
      {/* Status Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight">
          {isCallActive ? "Interview in Progress" : "Ready for Interview"}
        </h2>
        <p className="text-slate-400 mt-2 text-sm">
          {isCallActive ? "The consular officer is listening..." : "Click start to begin the simulation"}
        </p>
      </div>

      {/* Visual Indicator (Audio Waves) */}
      <div className="flex items-center justify-center h-32 w-32 mb-8 relative">
        {isCallActive && !isMuted && (
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
        )}
        <div className={`h-24 w-24 rounded-full flex items-center justify-center transition-colors duration-300 ${isCallActive ? 'bg-blue-600' : 'bg-slate-800'}`}>
          <AudioLines size={40} className={isCallActive && !isMuted ? "animate-pulse" : "opacity-50"} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-4 w-full justify-center">
        {!isCallActive ? (
          <button
            onClick={() => startCall(officerConfig)}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-900/20"
          >
            Start Simulation
          </button>
        ) : (
          <>
            <button
              onClick={toggleMute}
              className={`p-4 rounded-xl flex-1 flex justify-center items-center transition-all ${isMuted ? 'bg-amber-600 hover:bg-amber-500' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>
            <button
              onClick={stopCall}
              className="p-4 bg-red-600 hover:bg-red-500 rounded-xl flex-[2] flex justify-center items-center transition-all shadow-lg shadow-red-900/20 gap-2 font-semibold"
            >
              <PhoneOff size={20} /> End Call
            </button>
          </>
        )}
      </div>
    </div>
  );
}