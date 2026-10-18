import React, { useState } from 'react';
import { BookOpen, CheckCircle2, AlertTriangle, Monitor, Car, ShieldCheck, Printer } from 'lucide-react';

export const LifestyleEducationView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Desk' | 'Driving' | 'Lifting'>('Desk');

  const content = {
    Desk: {
      title: 'Computer Workstation & Desk Ergonomics',
      rules: [
        'Monitor Height: Top 1/3 of screen aligned with eye level to prevent cervical neck flexion.',
        'Elbow Angle: 90 to 100 degrees supported by armrests without shrugging shoulders.',
        'Lumbar Cushion: Placed in the small of the back (L3-L5) to maintain natural lordotic curvature.',
        'Foot Placement: Flat on the floor or on an angled footrest; never cross legs for long durations.'
      ]
    },
    Driving: {
      title: 'Automotive & Commuter Spine Safety',
      rules: [
        'Seat Distance: Adjusted so knees remain slightly bent when depressing the brake fully.',
        'Backrest Angle: Tilted at 100 to 110 degrees rather than upright 90 degrees to reduce disc pressure.',
        'Wallet in Pocket: Remove thick back-pocket wallets before driving to prevent pelvic obliquity and sciatic nerve compression.',
        'Rest Breaks: On long motorway trips (e.g. Lahore-Islamabad M2), stop every 90 minutes for a 5-minute walk.'
      ]
    },
    Lifting: {
      title: 'Biomechanical Safe Lifting Mechanism',
      rules: [
        'Bend at Knees & Hips: Never round the lower back to pick up objects off the floor.',
        'Keep Load Close: Hold boxes or children against your chest to minimize the spinal lever arm.',
        'Pivot with Feet: Turn your entire body using foot steps; never twist through the lumbar spine while bearing weight.',
        'Breathe Out: Exhale and brace your deep core abdominal muscles during the lifting effort.'
      ]
    }
  };

  const current = content[activeTab];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition & Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #55</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Healthy Lifestyle & Workplace Ergonomics Guide</h2>
          <p className="text-xs text-slate-500">
            Workstation setups, driving posture guidelines, and safe load-lifting biomechanics.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Print Ergonomic Guide</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 text-xs font-bold">
        {(['Desk', 'Driving', 'Lifting'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl border transition ${
              activeTab === tab
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab} Ergonomics
          </button>
        ))}
      </div>

      {/* Detail Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <h3 className="text-base font-extrabold text-slate-900">{current.title}</h3>

        <div className="space-y-3">
          {current.rules.map((rule, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-800 font-medium leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
