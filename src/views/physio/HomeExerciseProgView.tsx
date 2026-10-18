import React, { useState } from 'react';
import { Home, Printer, Dumbbell, Clock, CheckCircle2, AlertCircle, FileCheck } from 'lucide-react';

export const HomeExerciseProgView: React.FC = () => {
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<'All' | 'Morning' | 'Evening'>('All');

  const hepRoutine = [
    {
      id: 'hep-1',
      timeOfDay: 'Morning',
      name: 'Pelvic Tilts & Diaphragmatic Breathing',
      sets: '3 Sets x 10 Reps',
      hold: '5s Hold',
      equipment: 'Yoga Mat',
      notes: 'Gently flatten lower back against the mat upon exhalation. Do not hold breath.'
    },
    {
      id: 'hep-2',
      timeOfDay: 'Morning',
      name: 'Prone Cobra Spinal Extension',
      sets: '3 Sets x 3 Holds',
      hold: '15s Static Hold',
      equipment: 'Yoga Mat',
      notes: 'Pinch shoulder blades together; keep neck aligned with mid-back.'
    },
    {
      id: 'hep-3',
      timeOfDay: 'Evening',
      name: 'Supine Gluteal Bridge with Core Draw-In',
      sets: '3 Sets x 12 Reps',
      hold: '2s Squeeze at Peak',
      equipment: 'Yoga Mat',
      notes: 'Drive through heels. Focus on contracting glutes, not lower back.'
    },
    {
      id: 'hep-4',
      timeOfDay: 'Evening',
      name: 'Hamstring Doorway Stretch (Passive)',
      sets: '2 Sets per leg',
      hold: '30s Gentle Hold',
      equipment: 'Doorframe / Strap',
      notes: 'Keep knee slightly soft if experiencing sciatic nerve tightness.'
    }
  ];

  const filtered = selectedTimeOfDay === 'All' ? hepRoutine : hepRoutine.filter(h => h.timeOfDay === selectedTimeOfDay);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #44</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Home Exercise Programme (HEP) Prescriptions</h2>
          <p className="text-xs text-slate-500">
            Tailored daily home rehab routine with specific sets, hold durations, and clinician annotations.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Print HEP Patient Sheet</span>
        </button>
      </div>

      {/* Routine Filter */}
      <div className="flex space-x-2 text-xs font-bold">
        {(['All', 'Morning', 'Evening'] as const).map(t => (
          <button
            key={t}
            onClick={() => setSelectedTimeOfDay(t)}
            className={`px-3 py-1.5 rounded-xl border transition ${
              selectedTimeOfDay === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            {t} Routine
          </button>
        ))}
      </div>

      {/* Exercise Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div key={item.id} className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-800">
                  {item.timeOfDay} Block
                </span>
                <span className="text-xs font-black font-mono text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {item.sets}
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">{item.name}</h4>
              <p className="text-slate-600 leading-snug">{item.notes}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Hold: <strong>{item.hold}</strong></span>
              <span>Tool: <strong>{item.equipment}</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Clinical Advisory Banner */}
      <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start space-x-3 text-xs text-teal-900">
        <FileCheck className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold">Prescribing Attending: Dr. Hamza Malik, DPT (Mayo Hospital Spine Clinic)</strong>
          <p className="mt-0.5 leading-relaxed text-teal-800">
            &ldquo;Perform this prescribed HEP 6 days per week. Take 1 full rest day on Sundays. Apply a warm heat pack to the lower lumbar spine for 10 minutes prior to starting morning exercises.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
