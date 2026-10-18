import React from 'react';
import { Flame, PieChart, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const CalorieTrackingView: React.FC = () => {
  const macros = [
    { name: 'Protein (Tissue & Disc Collagen)', consumed: 88, target: 105, unit: 'g', color: 'bg-teal-500' },
    { name: 'Complex Carbohydrates', consumed: 180, target: 220, unit: 'g', color: 'bg-indigo-500' },
    { name: 'Anti-Inflammatory Healthy Fats', consumed: 52, target: 65, unit: 'g', color: 'bg-amber-500' }
  ];

  const micros = [
    { name: 'Elemental Calcium (Bone Matrix)', value: '850 mg', target: '1,000 mg', pct: 85 },
    { name: 'Magnesium (Paraspinal Spasm Prevention)', value: '310 mg', target: '350 mg', pct: 88 },
    { name: 'Vitamin D3 (Immune & Calcium Absorption)', value: '720 IU', target: '800 IU', pct: 90 },
    { name: 'Zinc (Connective Tissue Synthesis)', value: '11 mg', target: '12 mg', pct: 92 }
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
            <span className="text-xs text-slate-400 font-mono">Section #49</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Calorie & Spinal Micronutrient Tracking</h2>
          <p className="text-xs text-slate-500">
            Nutritional metabolic breakdown calibrated for healing disc tissue and preserving bone mineral density.
          </p>
        </div>
      </div>

      {/* Main Energy Balance Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center">
              <Flame className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400">Total Energy Budget</span>
              <h3 className="text-2xl font-black text-slate-900 font-mono">1,750 / 2,100 kcal</h3>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
            350 kcal Remaining Today (Optimal Balance)
          </span>
        </div>

        {/* Macro Progress Bars */}
        <div className="space-y-3 pt-2">
          {macros.map((m, idx) => {
            const pct = Math.min(100, Math.round((m.consumed / m.target) * 100));
            return (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{m.name}</span>
                  <span className="font-mono text-slate-500">{m.consumed} / {m.target} {m.unit} ({pct}%)</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className={`${m.color} h-2 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spinal Micronutrients Grid */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center">
          <Sparkles className="w-4 h-4 mr-2 text-teal-600" />
          Critical Bone & Intervertebral Disc Micronutrients
        </h3>

        <div className="grid sm:grid-cols-2 gap-3">
          {micros.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <div className="flex justify-between items-start">
                <span className="font-bold text-slate-900">{item.name}</span>
                <span className="font-mono font-black text-teal-700">{item.value}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div className="bg-teal-600 h-1.5 rounded-full" style={{ width: `${item.pct}%` }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>Daily Target: {item.target}</span>
                <span>{item.pct}% Reached</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
