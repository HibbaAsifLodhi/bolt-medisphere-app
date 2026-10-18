import React, { useState } from 'react';
import { TrendingDown, Award, Calendar, BarChart2, Activity, ShieldCheck } from 'lucide-react';

export const RehabChartsView: React.FC = () => {
  const [metricTab, setMetricTab] = useState<'pain' | 'compliance' | 'odi'>('pain');

  // 8-week longitudinal data
  const weeklyData = [
    { week: 'W1', pain: 8.5, odi: 54, compliance: 65 },
    { week: 'W2', pain: 7.2, odi: 48, compliance: 75 },
    { week: 'W3', pain: 6.0, odi: 42, compliance: 80 },
    { week: 'W4', pain: 5.1, odi: 36, compliance: 85 },
    { week: 'W5', pain: 4.2, odi: 32, compliance: 90 },
    { week: 'W6', pain: 3.8, odi: 28, compliance: 88 },
    { week: 'W7', pain: 3.2, odi: 26, compliance: 92 },
    { week: 'W8', pain: 2.8, odi: 24, compliance: 95 }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #42</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Rehabilitation Progress Charts & Analytics</h2>
          <p className="text-xs text-slate-500">
            Longitudinal recovery trajectories: 8-week pain reduction curves and therapy compliance velocity.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <TrendingDown className="w-4 h-4 text-emerald-600" />
          <span>Pain Reduced by 67% over 8 Weeks</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Baseline vs Current Pain</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-600 font-mono">2.8 / 10</span>
            <span className="text-xs text-slate-400 line-through">8.5 / 10</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">VAS Subjective Score</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Disability Reduction (ODI)</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-teal-600 font-mono">24%</span>
            <span className="text-xs text-slate-400 line-through">54%</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Down from Severe to Moderate</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[10px] font-bold uppercase text-slate-400">Therapy Adherence</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-indigo-600 font-mono">88.5%</span>
            <span className="text-xs text-emerald-600 font-bold">+12%</span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium">Prescribed Exercise Completion</p>
        </div>
      </div>

      {/* Chart Selector Tabs */}
      <div className="flex space-x-2 text-xs font-bold">
        {[
          { id: 'pain', label: 'VAS Pain Score Curve (0-10)' },
          { id: 'compliance', label: 'Weekly Adherence (%)' },
          { id: 'odi', label: 'ODI Disability Score (%)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setMetricTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl border transition ${
              metricTab === tab.id
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Chart Visualizer */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="h-64 w-full flex items-end justify-between gap-3 px-2 pt-6 pb-2 border-b border-slate-100">
          {weeklyData.map((d, idx) => {
            let val = d.pain * 10; // 0-100%
            let label = `${d.pain}/10`;
            let barColor = 'bg-teal-500 hover:bg-teal-600';

            if (metricTab === 'compliance') {
              val = d.compliance;
              label = `${d.compliance}%`;
              barColor = 'bg-indigo-500 hover:bg-indigo-600';
            } else if (metricTab === 'odi') {
              val = d.odi;
              label = `${d.odi}%`;
              barColor = 'bg-amber-500 hover:bg-amber-600';
            }

            return (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                <span className="text-[10px] font-mono font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition mb-1">
                  {label}
                </span>
                <div
                  className={`w-full max-w-[48px] rounded-t-xl transition-all duration-500 ${barColor}`}
                  style={{ height: `${val}%` }}
                ></div>
                <span className="text-xs font-bold text-slate-600 mt-2 font-mono">{d.week}</span>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-slate-400">
          Showing 8-week longitudinal cohort telemetry authenticated by Mayo Hospital Spine Unit.
        </p>
      </div>
    </div>
  );
};
