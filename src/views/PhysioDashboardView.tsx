import React, { useState } from 'react';
import {
  HeartPulse,
  Dumbbell,
  CheckCircle,
  CheckCheck,
  Camera,
  Activity,
  Smile,
  Frown
} from 'lucide-react';

interface PhysioDashboardViewProps {
  onNavigate: (route: string) => void;
}

export const PhysioDashboardView: React.FC<PhysioDashboardViewProps> = ({ onNavigate }) => {
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [painScore, setPainScore] = useState<number>(3);
  const [sessionCount, setSessionCount] = useState<number>(5);

  const toggleExercise = (id: string) => {
    setCompletedExercises(prev => {
      const nextState = !prev[id];
      if (nextState) {
        setSessionCount(c => Math.min(6, c + 1));
      }
      return { ...prev, [id]: nextState };
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Rehab Care Pathway
            </span>
            <span className="text-xs text-slate-400 font-mono">Prescription PT-2026-L4L5</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Physiotherapy & Rehabilitation</h2>
          <p className="text-xs text-slate-500">
            Prescribed mobility routines, visual analogue pain scoring (VAS), and compliance tracking.
          </p>
        </div>
        <button
          onClick={() => onNavigate('exercise-library')}
          className="px-3.5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition"
        >
          <Dumbbell className="w-4 h-4" />
          <span>Exercise Library (View 39)</span>
        </button>
      </div>

      {/* Active Protocol Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 block font-medium">Assigned Protocol</span>
          <span className="text-sm font-bold text-slate-800 mt-0.5 block">Lumbar Stabilization Phase 2</span>
          <span className="text-[10px] text-brand-600">Supervised by Dr. Hamza Malik</span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 block font-medium">Weekly Compliance</span>
          <span className="text-sm font-bold text-emerald-700 mt-0.5 block">
            {sessionCount} of 6 Sessions Completed
          </span>
          <span className="text-[10px] text-slate-500">
            {Math.round((sessionCount / 6) * 100)}% adherence rate
          </span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 block font-medium">Current Pain Score (VAS)</span>
          <div className="flex items-center space-x-2 mt-0.5">
            <span className="text-sm font-bold text-teal-700 block">{painScore} / 10</span>
            <input
              type="range"
              min="0"
              max="10"
              value={painScore}
              onChange={e => setPainScore(Number(e.target.value))}
              aria-label="VAS Pain Score"
              className="w-20 accent-brand-600 cursor-pointer"
            />
          </div>
          <span className="text-[10px] text-emerald-600">
            {painScore <= 3 ? 'Mild Discomfort (Down from 6/10)' : painScore <= 6 ? 'Moderate Soreness' : 'Severe Ache'}
          </span>
        </div>
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
          <span className="text-slate-400 block font-medium">Next Review</span>
          <span className="text-sm font-bold text-slate-800 mt-0.5 block">Oct 24, 2026 (Clinic)</span>
          <span className="text-[10px] text-slate-500">Gait re-assessment</span>
        </div>
      </div>

      {/* Interactive Exercise Routine Cards */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Today's Prescribed Exercises</span>
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Exercise 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-brand-700 mb-1">
                <span className="font-bold text-sm text-slate-900">1. Prone Cobra Stretch</span>
                <span className="bg-teal-100 text-brand-800 px-2 py-0.5 rounded text-[10px] font-mono">Extension</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Promotes anterior disc migration away from the L4-L5 impingement zone.
              </p>
              <div className="mt-3 p-2 bg-slate-50 rounded-lg text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span>Sets / Reps:</span> <strong className="text-slate-900">3 sets × 10 reps</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hold Duration:</span> <strong className="text-slate-900">15 seconds</strong>
                </div>
              </div>
            </div>
            <button
              onClick={() => toggleExercise('ex1')}
              className={`w-full py-2 font-bold rounded-lg text-xs transition flex items-center justify-center space-x-1.5 ${
                completedExercises['ex1']
                  ? 'bg-emerald-600 text-white border border-emerald-700'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
            >
              {completedExercises['ex1'] ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Completed Today!</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Log Set Complete</span>
                </>
              )}
            </button>
          </div>

          {/* Exercise 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-brand-700 mb-1">
                <span className="font-bold text-sm text-slate-900">2. Bird-Dog Core Stability</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-mono">Multifidus</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Stabilizes multifidus and transverse abdominis without lumbar spinal twisting.
              </p>
              <div className="mt-3 p-2 bg-slate-50 rounded-lg text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span>Sets / Reps:</span> <strong className="text-slate-900">3 sets × 12 reps</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hold Duration:</span> <strong className="text-slate-900">5 seconds each side</strong>
                </div>
              </div>
            </div>
            <button
              onClick={() => toggleExercise('ex2')}
              className={`w-full py-2 font-bold rounded-lg text-xs transition flex items-center justify-center space-x-1.5 ${
                completedExercises['ex2']
                  ? 'bg-emerald-600 text-white border border-emerald-700'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
            >
              {completedExercises['ex2'] ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Completed Today!</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Log Set Complete</span>
                </>
              )}
            </button>
          </div>

          {/* Exercise 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-brand-700 mb-1">
                <span className="font-bold text-sm text-slate-900">3. Pelvic Bridges</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-[10px] font-mono">Gluteal</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Strengthens gluteus maximus to absorb ground reaction forces during walking.
              </p>
              <div className="mt-3 p-2 bg-slate-50 rounded-lg text-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span>Sets / Reps:</span> <strong className="text-slate-900">3 sets × 15 reps</strong>
                </div>
                <div className="flex justify-between">
                  <span>Rest Interval:</span> <strong className="text-slate-900">45 seconds</strong>
                </div>
              </div>
            </div>
            <button
              onClick={() => toggleExercise('ex3')}
              className={`w-full py-2 font-bold rounded-lg text-xs transition flex items-center justify-center space-x-1.5 ${
                completedExercises['ex3']
                  ? 'bg-emerald-600 text-white border border-emerald-700'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}
            >
              {completedExercises['ex3'] ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Completed Today!</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Log Set Complete</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Future Camera AI Motion Tracking Notice */}
      <div className="bg-slate-900 text-slate-300 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white text-sm">Computer-Vision Posture & Rep Counter (Roadmap Feature)</span>
            <p className="text-slate-400 mt-0.5">
              Real-time joint-angle estimation using mobile camera pose landmarks. Currently in prototype validation.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('product-roadmap')}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 rounded-lg font-semibold flex-shrink-0 transition"
        >
          View AI Roadmap Status
        </button>
      </div>
    </div>
  );
};
