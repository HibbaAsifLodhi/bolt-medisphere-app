import React, { useState } from 'react';
import {
  Flame,
  Droplet,
  TrendingUp,
  CheckCircle2,
  Wheat,
  Drumstick,
  Cookie,
  Droplets,
  Sparkles
} from 'lucide-react';

const MACROS = [
  { label: 'Protein', grams: 104, pct: 68, tone: 'emerald', icon: Drumstick },
  { label: 'Carbs', grams: 212, pct: 54, tone: 'teal', icon: Wheat },
  { label: 'Fats', grams: 58, pct: 38, tone: 'amber', icon: Cookie },
];

const TONE: Record<string, { bg: string; text: string; bar: string }> = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-800', bar: 'bg-emerald-500' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-800', bar: 'bg-teal-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-800', bar: 'bg-amber-500' },
};

const MEALS = [
  { name: 'Breakfast', item: 'Oatmeal with banana & walnuts', kcal: 380, done: true },
  { name: 'Lunch', item: 'Grilled chicken salad, olive oil dressing', kcal: 520, done: true },
  { name: 'Snack', item: 'Greek yogurt with berries', kcal: 180, done: false },
  { name: 'Dinner', item: 'Baked fish, quinoa, steamed greens', kcal: 460, done: false },
];

export const NutritionDashboardView: React.FC = () => {
  const [waterGlasses, setWaterGlasses] = useState(7);
  const [caloriesIn, setCaloriesIn] = useState(1440);
  const [saved, setSaved] = useState(false);

  const WATER_GOAL = 14;
  const CALORIE_TARGET = 1800;
  const caloriePct = Math.min(100, Math.round((caloriesIn / CALORIE_TARGET) * 100));
  const hydrationPct = Math.min(100, Math.round((waterGlasses / WATER_GOAL) * 100));

  const flashSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const logWater = () => {
    setWaterGlasses(g => Math.min(WATER_GOAL, g + 1));
    setCaloriesIn(c => c);
    flashSaved();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition &amp; Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #47</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Nutrition &amp; Metabolic Dashboard</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Caloric balance, macronutrient distribution, and hydration status for optimal tissue healing.
          </p>
        </div>
        <button
          onClick={logWater}
          className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-sm self-start sm:self-auto"
        >
          <Droplet className="w-4 h-4" />
          <span>Log a Glass of Water</span>
        </button>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 font-bold flex items-center space-x-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Logged — hydration is now {waterGlasses} / {WATER_GOAL} glasses today.</span>
        </div>
      )}

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-wide">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Calories In</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Target {CALORIE_TARGET}</span>
          </div>
          <p className="text-3xl font-black text-slate-900 mt-2">{caloriesIn} <span className="text-sm font-bold text-slate-400">kcal</span></p>
          <div className="h-2 bg-slate-100 rounded-full mt-3">
            <div className="h-2 bg-orange-500 rounded-full transition-all" style={{ width: `${caloriePct}%` }} />
          </div>
          <p className="text-[11px] text-slate-500 mt-2">{caloriePct}% of daily energy target</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-wide">
              <Droplets className="w-4 h-4 text-cyan-500" />
              <span>Hydration</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Goal {WATER_GOAL}</span>
          </div>
          <p className="text-3xl font-black text-slate-900 mt-2">{waterGlasses} <span className="text-sm font-bold text-slate-400">/ {WATER_GOAL} glasses</span></p>
          <div className="h-2 bg-slate-100 rounded-full mt-3">
            <div className="h-2 bg-cyan-500 rounded-full transition-all" style={{ width: `${hydrationPct}%` }} />
          </div>
          <p className="text-[11px] text-slate-500 mt-2">{hydrationPct}% of disc-rehydration goal</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-wide">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Metabolic Status</span>
            </div>
          </div>
          <p className="text-3xl font-black text-emerald-700 mt-2">On Track</p>
          <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
            Protein-forward intake supports collagen synthesis and lumbar tissue repair during rehabilitation.
          </p>
        </div>
      </div>

      {/* Macros */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Macronutrient Distribution</h3>
        <p className="text-xs text-slate-500 mt-0.5">Today's split against the rehabilitation nutrition plan.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          {MACROS.map(m => {
            const Icon = m.icon;
            const t = TONE[m.tone];
            return (
              <div key={m.label} className={`${t.bg} rounded-xl p-4 border border-slate-100`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black uppercase tracking-wide ${t.text} flex items-center space-x-1.5`}>
                    <Icon className="w-4 h-4" />
                    {m.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{m.pct}%</span>
                </div>
                <p className="text-2xl font-black text-slate-900 mt-2">{m.grams} g</p>
                <div className="h-1.5 bg-white/70 rounded-full mt-2">
                  <div className={`h-1.5 ${t.bar} rounded-full transition-all`} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meals */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">Today's Meal Plan</h3>
        <p className="text-xs text-slate-500 mt-0.5">Sized to the 1,800 kcal healing protocol.</p>
        <div className="mt-4 space-y-2">
          {MEALS.map(meal => (
            <div key={meal.name} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition">
              <div className="flex items-center space-x-3">
                <span className={`w-2 h-2 rounded-full ${meal.done ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                <div>
                  <p className="text-xs font-black text-slate-900">{meal.name}</p>
                  <p className="text-xs text-slate-500">{meal.item}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-600 font-mono">{meal.kcal} kcal</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-4 p-3 bg-teal-50 border border-teal-100 rounded-xl">
          <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
          <p className="text-[11px] text-teal-800">
            Tip: spread protein evenly across meals — ~25 g per sitting maximizes tissue-repair uptake.
          </p>
        </div>
      </div>
    </div>
  );
};
