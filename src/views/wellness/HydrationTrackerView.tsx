import React, { useState } from 'react';
import { Droplet, Plus, RotateCcw, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const HydrationTrackerView: React.FC = () => {
  const [glasses, setGlasses] = useState(8);
  const targetGlasses = 10;
  const currentVolumeL = (glasses * 0.25).toFixed(1);
  const targetVolumeL = (targetGlasses * 0.25).toFixed(1);

  const addGlass = (count: number) => {
    setGlasses(g => Math.min(15, g + count));
  };

  const resetGlasses = () => {
    setGlasses(0);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition & Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #50</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Intervertebral Disc Hydration Tracker</h2>
          <p className="text-xs text-slate-500">
            Monitor daily water intake to maintain hydrostatic pressure and shock-absorption in lumbar nucleus pulposus.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-teal-50 text-teal-800 px-3 py-1.5 rounded-xl border border-teal-200 text-xs font-bold self-start sm:self-auto">
          <Droplet className="w-4 h-4 text-teal-600 fill-current" />
          <span>{glasses} of {targetGlasses} Glasses ({currentVolumeL}L / {targetVolumeL}L)</span>
        </div>
      </div>

      {/* Main Hydration Dial Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase text-slate-400">Current Daily Intake</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-black text-teal-700 font-mono">{currentVolumeL} L</span>
              <span className="text-sm font-bold text-slate-400">/ {targetVolumeL} Liters</span>
            </div>
            <p className="text-slate-500 font-medium">80% of daily disc rehydration target achieved</p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => addGlass(1)}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold flex items-center space-x-1 transition shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>+1 Glass (250ml)</span>
            </button>
            <button
              onClick={() => addGlass(2)}
              className="px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-xl font-bold flex items-center space-x-1 transition"
            >
              <Plus className="w-4 h-4" />
              <span>+500ml Bottle</span>
            </button>
            <button
              onClick={resetGlasses}
              className="p-2 border border-slate-200 text-slate-400 hover:text-slate-600 rounded-xl"
              title="Reset Counter"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Glass Row */}
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 pt-2">
          {Array.from({ length: targetGlasses }).map((_, idx) => {
            const isFilled = idx < glasses;
            return (
              <div
                key={idx}
                onClick={() => setGlasses(idx + 1)}
                className={`aspect-3/4 rounded-2xl border-2 cursor-pointer transition flex flex-col items-center justify-center p-2 group ${
                  isFilled
                    ? 'bg-teal-50 border-teal-500 text-teal-600 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-300 hover:border-slate-300'
                }`}
              >
                <Droplet className={`w-6 h-6 transition ${isFilled ? 'fill-teal-500 scale-110' : 'group-hover:scale-105'}`} />
                <span className="text-[10px] font-mono font-bold mt-1 text-slate-600">{idx + 1}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Clinical Anatomical Advisory */}
      <div className="p-5 bg-teal-50/70 border border-teal-200 rounded-3xl flex items-start space-x-3.5 text-xs text-teal-950">
        <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block font-black text-sm text-teal-900">Why Spinal Discs Require Optimal Hydration</strong>
          <p className="leading-relaxed text-teal-800">
            The healthy lumbar intervertebral disc (nucleus pulposus) is comprised of approximately 80% water. During normal daily upright standing and walking, fluid is naturally compressed out of the disc. Adequate daily hydration combined with flat supine sleep positions allows the disc to re-imbibe water, preventing rapid disc desiccation and nerve pinching.
          </p>
        </div>
      </div>
    </div>
  );
};
