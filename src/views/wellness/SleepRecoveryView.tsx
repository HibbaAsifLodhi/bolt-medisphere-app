import React, { useState } from 'react';
import { Moon, Sparkles, CheckCircle2, ShieldCheck, Heart, Bed, Volume2, Play, Pause } from 'lucide-react';

export const SleepRecoveryView: React.FC = () => {
  const [soundPlaying, setSoundPlaying] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition & Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #52</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Sleep Architecture & Nocturnal Spine Recovery</h2>
          <p className="text-xs text-slate-500">
            Nocturnal intervertebral disc decompression, mattress ergonomics, and nighttime pain monitoring.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs font-bold self-start sm:self-auto">
          <Moon className="w-4 h-4 text-indigo-600" />
          <span>7h 35m Sleep • Recovery Score: 88%</span>
        </div>
      </div>

      {/* Main Sleep Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Total Sleep Duration</span>
          <div className="text-2xl font-black text-slate-900 font-mono">7h 35m</div>
          <p className="text-emerald-600 font-bold text-[11px]">● Within Restorative Target (7-8h)</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Deep / REM Sleep Ratio</span>
          <div className="text-2xl font-black text-indigo-700 font-mono">2h 15m (30%)</div>
          <p className="text-indigo-600 font-bold text-[11px]">● Optimal Cellular Disc Repair</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Nocturnal Pain Awakenings</span>
          <div className="text-2xl font-black text-emerald-600 font-mono">0 Interruptions</div>
          <p className="text-slate-500 font-medium text-[11px]">Continuous unbroken restorative sleep</p>
        </div>
      </div>

      {/* Ergonomic Sleep Positions */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center">
          <Bed className="w-4 h-4 mr-2 text-teal-600" />
          Prescribed Ergonomic Spinal Sleeping Positions
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-[10px] font-bold uppercase text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
              Position 1: Side Sleeping (Recommended)
            </span>
            <h4 className="text-xs font-black text-slate-900">Fetal Position with Knee Support Pillow</h4>
            <p className="text-slate-600 leading-relaxed">
              Place a supportive pillow between both knees to maintain a parallel pelvic alignment and prevent lumbar spinal twisting at L4-L5.
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="text-[10px] font-bold uppercase text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
              Position 2: Supine Sleeping (Back)
            </span>
            <h4 className="text-xs font-black text-slate-900">Back Sleeping with Knee Bolster</h4>
            <p className="text-slate-600 leading-relaxed">
              Place a rounded pillow or rolled towel beneath your knees to slightly flex the hips and relax the psoas muscle, taking axial pressure off the lower back.
            </p>
          </div>
        </div>
      </div>

      {/* Relaxation Sound Player Simulation */}
      <div className="p-5 bg-indigo-950 text-white rounded-3xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-800 flex items-center justify-center text-teal-300">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm">Spinal Relaxation Sleep Soundscape</h4>
            <p className="text-xs text-indigo-300">Delta Brainwave Frequency & Gentle Rain (432Hz Sound Therapy)</p>
          </div>
        </div>

        <button
          onClick={() => setSoundPlaying(!soundPlaying)}
          className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 rounded-xl font-bold text-xs flex items-center space-x-1.5 transition"
        >
          {soundPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          <span>{soundPlaying ? 'Pause Sleepscape' : 'Play Soundscape'}</span>
        </button>
      </div>
    </div>
  );
};
