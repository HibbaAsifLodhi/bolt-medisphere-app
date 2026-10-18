import React, { useState } from 'react';
import { Gauge, Activity, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';

export const RomStrengthView: React.FC = () => {
  const [selectedJoint, setSelectedJoint] = useState('lumbar');

  const jointRom = [
    { id: 'lumbar', name: 'Lumbar Spine', movement: 'Flexion', current: 48, normal: 60, unit: '°', change: '+8° this month', status: 'Moderate Restriction' },
    { id: 'lumbar-ext', name: 'Lumbar Spine', movement: 'Extension', current: 14, normal: 25, unit: '°', change: '+2° this month', status: 'Mild Guarding' },
    { id: 'hip-left', name: 'Left Hip', movement: 'Flexion', current: 108, normal: 120, unit: '°', change: '+5° this month', status: 'Normal Functional Range' },
    { id: 'hip-right', name: 'Right Hip', movement: 'Flexion', current: 118, normal: 120, unit: '°', change: 'Normal', status: 'Optimal' },
    { id: 'straight-leg', name: 'Left Straight Leg Raise (SLR)', movement: 'Nerve Tension', current: 62, normal: 80, unit: '°', change: '+12° (Reduced Sciatic Radiculopathy)', status: 'Improving' }
  ];

  const mmtStrength = [
    { muscle: 'Transverse Abdominis (Deep Core)', grade: '3+/5', percent: 70, comment: 'Sustained contraction 18s without pelvis rotation' },
    { muscle: 'Multifidus (Lumbar Stabilizers)', grade: '3/5', percent: 60, comment: 'Mild atrophy at L4-L5 segment paraspinal' },
    { muscle: 'Gluteus Medius (Pelvic Stabilizer)', grade: '4-/5', percent: 75, comment: 'Improved Trendelenburg sign on left side' },
    { muscle: 'Quadriceps Femoris (Bilateral)', grade: '5/5', percent: 100, comment: 'Full strength against maximal resistance' }
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
            <span className="text-xs text-slate-400 font-mono">Section #36</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Range of Motion (ROM) & Muscle Strength</h2>
          <p className="text-xs text-slate-500">
            Digital goniometer measurements, joint degree restrictions, and Oxford Manual Muscle Testing (MMT 0-5) scores.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-teal-50 text-teal-800 px-3 py-1.5 rounded-xl border border-teal-200 text-xs font-bold self-start sm:self-auto">
          <TrendingUp className="w-4 h-4 text-teal-600" />
          <span>Overall Mobility Recovery: +14%</span>
        </div>
      </div>

      {/* Goniometric Angles Section */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-slate-900 flex items-center">
          <Gauge className="w-4 h-4 mr-2 text-teal-600" />
          Clinical Goniometry (Joint Range in Degrees)
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {jointRom.map((item, idx) => {
            const ratio = Math.min(100, Math.round((item.current / item.normal) * 100));
            return (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">{item.name}</span>
                    <h4 className="font-extrabold text-slate-900 text-sm">{item.movement}</h4>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-base font-black text-teal-700">{item.current}{item.unit}</span>
                    <span className="text-[10px] text-slate-400 block font-mono">Norm: {item.normal}{item.unit}</span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      ratio >= 90 ? 'bg-emerald-500' : ratio >= 70 ? 'bg-teal-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${ratio}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1">
                  <span className="font-semibold text-emerald-700">{item.change}</span>
                  <span className="font-medium text-slate-600">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Oxford MMT Muscle Strength Section */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-sm font-black text-slate-900 flex items-center">
          <Activity className="w-4 h-4 mr-2 text-brand-600" />
          Oxford Manual Muscle Testing (MMT Grade 0 to 5)
        </h3>

        <div className="space-y-3">
          {mmtStrength.map((mmt, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-black text-slate-900">{mmt.muscle}</h4>
                  <span className="font-mono text-[11px] font-extrabold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                    Grade {mmt.grade}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px]">{mmt.comment}</p>
              </div>

              <div className="w-full sm:w-48 space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span>Functional Capacity</span>
                  <span className="font-mono">{mmt.percent}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-600 h-2 rounded-full" style={{ width: `${mmt.percent}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
