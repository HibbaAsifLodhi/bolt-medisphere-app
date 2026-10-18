import React, { useState } from 'react';
import { Cast, Video, Activity, CheckCircle2, Mic, Volume2, ShieldCheck, Flame } from 'lucide-react';

export const RemoteRehabView: React.FC = () => {
  const [sessionActive, setSessionActive] = useState(true);
  const [repCount, setRepCount] = useState(8);
  const targetReps = 10;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #68</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Remote Rehabilitation & Computer Vision Portal</h2>
          <p className="text-xs text-slate-500">
            Real-time optical motion angle tracking, live therapist video supervision, and kinematic feedback.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Sensor Telemetry: 60 FPS</span>
        </div>
      </div>

      {/* Main Optical Tracking Viewport */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-950 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-xl relative aspect-video flex flex-col justify-between p-6">
          {/* Top Telemetry Header */}
          <div className="flex justify-between items-start z-10 text-xs">
            <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-teal-400">Exercise Protocol</span>
              <p className="font-extrabold text-white text-xs">Prone Cobra (Set 2 of 3)</p>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-right">
              <span className="text-[10px] text-slate-400 font-mono">Therapist Live Stream</span>
              <p className="font-bold text-emerald-400 text-xs">Dr. Hamza Malik Connected</p>
            </div>
          </div>

          {/* Central AI Skeleton Visualizer Overlay */}
          <div className="my-auto text-center space-y-3 z-10">
            <div className="inline-block p-4 rounded-2xl bg-teal-950/60 border border-teal-500/40 text-teal-300 font-mono text-xs">
              <span className="text-white font-bold block mb-1">Optical Joint Angle Extraction:</span>
              <span>Trunk Extension Angle: <strong>14.2°</strong> (Target: 12-15°)</span>
              <span className="mx-2">•</span>
              <span>Cervical Offset: <strong>2.1° (Neutral)</strong></span>
            </div>
          </div>

          {/* Bottom Live Cues Bar */}
          <div className="flex justify-between items-center bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700 text-xs z-10">
            <div className="flex items-center space-x-2 text-teal-300 font-bold">
              <Volume2 className="w-4 h-4 text-teal-400" />
              <span>Doctor Audio Cue: &ldquo;Keep shoulder blades drawn back gently. Hold 5 more seconds!&rdquo;</span>
            </div>
            <button
              onClick={() => setRepCount(c => Math.min(targetReps, c + 1))}
              className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-lg font-black text-xs"
            >
              Log Rep ({repCount}/{targetReps})
            </button>
          </div>
        </div>

        {/* Telemetry Metrics Panel */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <h3 className="font-extrabold text-sm text-slate-900">Kinematic Sensor Data</h3>

          <div className="space-y-3">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="flex justify-between font-bold text-slate-700">
                <span>Repetition Target</span>
                <span className="font-mono text-brand-600">{repCount} / {targetReps}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div className="bg-brand-600 h-2 rounded-full" style={{ width: `${(repCount / targetReps) * 100}%` }}></div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Kinematic Stability Score</span>
              <p className="text-xl font-black text-emerald-600 font-mono">92 / 100 (Optimal Form)</p>
              <p className="text-[11px] text-slate-500">Zero aberrant pelvic sway detected</p>
            </div>

            <div className="p-3.5 bg-teal-50 rounded-2xl border border-teal-200 space-y-1 text-teal-900">
              <span className="font-black block">Session Archive:</span>
              <p className="text-[11px] leading-snug">
                Telemetry and kinematic joint velocity curves are automatically archived to your electronic health record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
