import React from 'react';
import { Footprints, Clock, Activity, AlertCircle, Award } from 'lucide-react';

export const ActivityStepsView: React.FC = () => {
  const steps = 6420;
  const targetSteps = 8000;
  const stepPct = Math.round((steps / targetSteps) * 100);

  const hourlyBreakdowns = [
    { hour: '08:00', steps: 650, breaks: 1 },
    { hour: '10:00', steps: 1200, breaks: 1 },
    { hour: '12:00', steps: 850, breaks: 1 },
    { hour: '14:00', steps: 1100, breaks: 1 },
    { hour: '16:00', steps: 1420, breaks: 1 },
    { hour: '18:00', steps: 1200, breaks: 0 }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition & Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #51</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Activity & Spinal Movement Step Tracker</h2>
          <p className="text-xs text-slate-500">
            Low-impact daily walking cadence and anti-sedentary posture breaks to protect lumbar disc nutrition.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <Footprints className="w-4 h-4 text-emerald-600" />
          <span>{steps.toLocaleString()} / {targetSteps.toLocaleString()} Steps ({stepPct}%)</span>
        </div>
      </div>

      {/* Main Step Metrics Grid */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Total Distance</span>
          <div className="text-2xl font-black text-teal-700 font-mono">4.62 km</div>
          <p className="text-[11px] text-slate-500 font-medium">Low-impact level walking</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Active Movement Time</span>
          <div className="text-2xl font-black text-indigo-700 font-mono">42 Minutes</div>
          <p className="text-[11px] text-slate-500 font-medium">Spinal mobility duration</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Anti-Sedentary Breaks</span>
          <div className="text-2xl font-black text-emerald-600 font-mono">5 / 6 Taken</div>
          <p className="text-[11px] text-slate-500 font-medium">Stand & stretch every 45 mins</p>
        </div>
      </div>

      {/* Hourly Walk Cadence Chart */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center">
            <Activity className="w-4 h-4 mr-2 text-teal-600" />
            Today&apos;s Hourly Walk Distribution
          </h3>
          <span className="text-[11px] text-slate-500">Target: Avoid continuous sitting &gt; 45 mins</span>
        </div>

        <div className="grid grid-cols-6 gap-2 pt-2">
          {hourlyBreakdowns.map((item, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-1">
              <span className="font-mono text-[10px] text-slate-400 font-bold block">{item.hour}</span>
              <span className="font-mono font-extrabold text-slate-900 text-sm block">{item.steps}</span>
              <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">
                ✓ Break
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
