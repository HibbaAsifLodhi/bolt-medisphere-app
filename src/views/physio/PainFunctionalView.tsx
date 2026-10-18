import React, { useState } from 'react';
import { Frown, Smile, Activity, Calculator, CheckCircle2, AlertCircle } from 'lucide-react';

export const PainFunctionalView: React.FC = () => {
  const [vasScore, setVasScore] = useState(3);
  const [painType, setPainType] = useState('Dull Aching (Post-Walking)');

  // Oswestry Disability Index (ODI) Section Scores (0-5 each, total out of 50 -> * 2 = %)
  const [odiAnswers, setOdiAnswers] = useState<Record<string, number>>({
    painIntensity: 2,
    personalCare: 1,
    lifting: 3,
    walking: 1,
    sitting: 2,
    standing: 2,
    sleeping: 1,
    socialLife: 1,
    traveling: 2,
    employment: 2
  });

  const totalOdiScore = Object.values(odiAnswers).reduce((a, b) => a + b, 0);
  const odiPercentage = totalOdiScore * 2; // (score / 50) * 100

  const getOdiCategory = (pct: number) => {
    if (pct <= 20) return { label: 'Minimal Disability (0-20%)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (pct <= 40) return { label: 'Moderate Disability (21-40%)', color: 'text-teal-700 bg-teal-50 border-teal-200' };
    if (pct <= 60) return { label: 'Severe Disability (41-60%)', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'Crippling Disability (> 60%)', color: 'text-red-700 bg-red-50 border-red-200' };
  };

  const odiCat = getOdiCategory(odiPercentage);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #37</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Pain & Functional Disability Scales (VAS / ODI)</h2>
          <p className="text-xs text-slate-500">
            Gold-standard Visual Analogue Scale (VAS) and Oswestry Low Back Pain Disability Questionnaire.
          </p>
        </div>
      </div>

      {/* VAS Pain Scale Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Current Subjective Pain</span>
            <h3 className="text-base font-extrabold text-slate-900">Visual Analogue Scale (VAS 0 - 10)</h3>
          </div>
          <div className="flex items-center space-x-2">
            {vasScore <= 3 ? <Smile className="w-6 h-6 text-emerald-500" /> : <Frown className="w-6 h-6 text-amber-500" />}
            <span className="text-2xl font-black font-mono text-slate-900">{vasScore} / 10</span>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={vasScore}
            onChange={e => setVasScore(Number(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-emerald-400 via-yellow-400 to-red-500 rounded-lg appearance-none cursor-pointer accent-slate-900"
          />
          <div className="flex justify-between text-[11px] font-bold text-slate-400 px-1">
            <span>0 (No Pain)</span>
            <span>3 (Mild / Noticeable)</span>
            <span>6 (Moderate / Distracting)</span>
            <span>10 (Unbearable)</span>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
          <div>
            <strong className="text-slate-900">Current Pain Character:</strong> {painType}
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] font-bold text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            <span>Down from 8.5/10 acute baseline at admission</span>
          </div>
        </div>
      </div>

      {/* Oswestry Disability Index (ODI) Calculator */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center">
              <Calculator className="w-5 h-5 mr-2 text-teal-600" />
              Oswestry Disability Index (ODI) Survey
            </h3>
            <p className="text-xs text-slate-500">Evidence-based functional limitation index for lumbar conditions</p>
          </div>
          <div className={`px-3 py-1.5 rounded-xl border text-xs font-bold ${odiCat.color}`}>
            <span>ODI Score: {odiPercentage}% — {odiCat.label}</span>
          </div>
        </div>

        {/* Survey Items */}
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          {[
            { key: 'painIntensity', label: '1. Pain Intensity', options: ['No pain at present', 'Pain is very mild', 'Pain is moderate', 'Pain is fairly severe', 'Pain is very severe', 'Pain is worst imaginable'] },
            { key: 'lifting', label: '2. Lifting Heavy Objects', options: ['Can lift heavy weights without extra pain', 'Can lift heavy weights, but it causes extra pain', 'Pain prevents lifting from floor, but can if on a table', 'Can lift only very light weights', 'Cannot lift or carry anything at all'] },
            { key: 'walking', label: '3. Walking Distance', options: ['Pain does not prevent walking any distance', 'Pain prevents walking more than 1 mile', 'Pain prevents walking more than 1/2 mile', 'Pain prevents walking more than 100 yards', 'Can only walk using a cane or crutches', 'In bed most of the time'] },
            { key: 'sitting', label: '4. Sitting Tolerance', options: ['Can sit in any chair as long as desired', 'Can sit in favorite chair as long as desired', 'Pain prevents sitting more than 1 hour', 'Pain prevents sitting more than 30 minutes', 'Pain prevents sitting more than 10 minutes', 'Pain prevents sitting almost entirely'] }
          ].map(q => (
            <div key={q.key} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
              <label className="font-bold text-slate-900 block">{q.label}</label>
              <select
                value={odiAnswers[q.key] || 0}
                onChange={e => setOdiAnswers(prev => ({ ...prev, [q.key]: Number(e.target.value) }))}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:border-teal-500"
              >
                {q.options.map((opt, val) => (
                  <option key={val} value={val}>
                    Level {val}: {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
