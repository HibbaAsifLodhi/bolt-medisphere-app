import React, { useState } from 'react';
import { PersonStanding, Activity, AlertCircle, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

export const GaitPostureView: React.FC = () => {
  const [activePlane, setActivePlane] = useState<'Sagittal' | 'Coronal'>('Sagittal');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #43</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Biomechanical Gait & Posture Plumb-Line Analysis</h2>
          <p className="text-xs text-slate-500">
            Kinematic alignment metrics, pelvic anterior tilt angles, and dynamic bilateral step cadence.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {(['Sagittal', 'Coronal'] as const).map(plane => (
            <button
              key={plane}
              onClick={() => setActivePlane(plane)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                activePlane === plane
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {plane} View
            </button>
          ))}
        </div>
      </div>

      {/* Main Analysis Display */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Posture Plumb-Line Visualizer */}
        <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col items-center justify-between relative overflow-hidden">
          <div className="w-full flex justify-between items-center text-xs">
            <span className="text-teal-400 font-bold uppercase text-[10px]">Plumb-Line Laser Grid</span>
            <span className="text-slate-400 font-mono">Offset: 12mm</span>
          </div>

          {/* Visual Plumb Line Silhouette */}
          <div className="my-8 relative w-48 h-64 border border-dashed border-slate-800 rounded-2xl flex items-center justify-center">
            {/* Center plumb line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-500/80 -translate-x-1/2"></div>
            
            {/* Silhouette & Deviation Markers */}
            <div className="flex flex-col items-center space-y-4 text-xs font-bold z-10">
              <div className="w-10 h-10 rounded-full border-2 border-teal-400 bg-slate-900 flex items-center justify-center text-[10px] text-teal-300">
                +3.2°
              </div>
              <div className="w-24 h-12 rounded-xl border border-teal-500/50 bg-teal-950/40 flex items-center justify-center text-[10px] text-teal-200">
                Shoulders: -1.5cm
              </div>
              <div className="w-20 h-10 rounded-xl border-2 border-amber-500 bg-amber-950/40 flex items-center justify-center text-[10px] text-amber-300">
                Pelvis: +8° Tilt
              </div>
            </div>
          </div>

          <div className="w-full text-center text-slate-400 text-xs font-mono">
            Neutral Reference: C7 - L4 - S1 Sacral Axis
          </div>
        </div>

        {/* Gait Kinematics & Weight Distribution */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center">
              <Activity className="w-4 h-4 mr-2 text-teal-600" />
              Dynamic Gait Telemetry (Pressure Insole / Motion Capture)
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Walking Cadence</span>
                <p className="text-xl font-black text-slate-900 font-mono">104 Steps / Min</p>
                <p className="text-[11px] text-emerald-600 font-bold">● Normal Functional Pace</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Stride Symmetry Index</span>
                <p className="text-xl font-black text-teal-700 font-mono">94.2%</p>
                <p className="text-[11px] text-teal-600 font-bold">● Minimal Left-Side Antalgic Limp</p>
              </div>
            </div>

            {/* Bilateral Weight Distribution */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-800">Plantar Weight Distribution</span>
                <span className="font-mono text-xs text-slate-600">Left 48% — Right 52%</span>
              </div>
              <div className="flex h-3 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full" style={{ width: '48%' }} title="Left Foot 48%"></div>
                <div className="bg-indigo-500 h-full" style={{ width: '52%' }} title="Right Foot 52%"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Left Limb (Guarded)</span>
                <span>Right Limb (Dominant)</span>
              </div>
            </div>

            {/* Clinical Recommendation */}
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-teal-900 text-[11px]">
              <strong>Therapist Biomechanical Summary:</strong> The patient exhibits a mild forward head posture of +3.2° and compensatory pelvic anterior tilt (+8°) to alleviate posterior disc stress on L4-L5. Focus on gluteal bridging and hamstring lengthening.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
