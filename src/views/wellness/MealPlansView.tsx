import React, { useState } from 'react';
import { Utensils, Apple, Plus, CheckCircle2, Flame, Heart, Sparkles } from 'lucide-react';

export const MealPlansView: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [loggedNotice, setLoggedNotice] = useState(false);

  const mealSchedule = [
    {
      time: 'Breakfast (08:30 AM)',
      dish: '2 Boiled Eggs + 1 Whole Wheat Roti + Fresh Mint & Ginger Green Tea',
      macros: '320 kcal • 22g Protein • Low Glycemic Index',
      nutrients: ['High Choline', 'Magnesium', 'Zinc']
    },
    {
      time: 'Mid-Day Snack (11:30 AM)',
      dish: 'Handful of Walnuts & Almonds + 1 Small Green Apple',
      macros: '180 kcal • 4g Protein • Healthy Plant Fats',
      nutrients: ['Omega-3 ALA', 'Anti-Oxidants']
    },
    {
      time: 'Lunch (02:00 PM)',
      dish: 'Moong Daal (Yellow Lentil) + Brown Rice + Steamed Spinach & Cucumbers',
      macros: '460 kcal • 24g Protein • High Soluble Fiber',
      nutrients: ['Magnesium 180mg', 'Folate', 'Iron']
    },
    {
      time: 'Dinner (08:00 PM)',
      dish: 'Grilled Rahu Fish with Turmeric-Infused Bone Broth + Roasted Vegetables',
      macros: '480 kcal • 38g Protein • Anti-Inflammatory',
      nutrients: ['Collagen Peptides', 'Curcumin', 'Vitamin D3']
    }
  ];

  const handleLogMeal = () => {
    setLoggedNotice(true);
    setTimeout(() => setLoggedNotice(false), 3000);
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
            <span className="text-xs text-slate-400 font-mono">Section #48</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Anti-Inflammatory Spinal Meal Plans & Food Diary</h2>
          <p className="text-xs text-slate-500">
            Targeted micronutrient nutrition enriched with magnesium, calcium, and curcumin for disc tissue repair.
          </p>
        </div>
        <button
          onClick={handleLogMeal}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log to Food Diary</span>
        </button>
      </div>

      {loggedNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between font-bold animate-fade-in">
          <span>✓ Meal successfully logged to metabolic profile (1,440 / 1,800 kcal).</span>
          <span className="text-[10px] font-mono bg-emerald-200 px-2 py-0.5 rounded">Saved</span>
        </div>
      )}

      {/* Days of Week */}
      <div className="flex space-x-2 overflow-x-auto pb-1 text-xs font-bold">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
          <button
            key={d}
            onClick={() => setActiveDay(d)}
            className={`px-4 py-2 rounded-xl border transition whitespace-nowrap ${
              activeDay === d ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Meals Schedule */}
      <div className="space-y-3">
        {mealSchedule.map((m, idx) => (
          <div key={idx} className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs hover:border-teal-400 transition">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                {m.time}
              </span>
              <span className="font-mono text-slate-500 text-[11px]">{m.macros}</span>
            </div>

            <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{m.dish}</h4>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {m.nutrients.map((n, i) => (
                <span key={i} className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  ★ {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
