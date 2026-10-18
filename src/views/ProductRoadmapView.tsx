import React from 'react';
import {
  Map,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
  Cpu,
  Wifi,
  Radio
} from 'lucide-react';

export const ProductRoadmapView: React.FC = () => {
  const milestones = [
    {
      quarter: 'Q4 2026 (Current Phase)',
      status: 'Shipped & Live',
      statusColor: 'emerald',
      title: 'Emergency 1122 Gateway & 24-Vertebrae Posture Lab',
      items: [
        'Break-glass emergency medical identifier with GPS dispatch simulation.',
        'Interactive 24-vertebra column with Cobb angle & disc height annotations.',
        'Bilingual English & Urdu AI clinical triage assistant.',
        'UN SDG 12 & 13 real-time paper biomass and carbon mitigation calculators.'
      ]
    },
    {
      quarter: 'Q1 2027 (Under Development)',
      status: 'In Progress',
      statusColor: 'blue',
      title: 'Computer-Vision Mobile Posture & Camera Rep Counting',
      items: [
        'On-device camera pose landmark estimation for McKenzie Cobra stretches.',
        'Real-time auditory feedback for lumbar arch alignment.',
        'Offline SMS mesh fallback for remote valleys in Gilgit-Baltistan and rural KPK.',
        'Direct synchronization with tertiary hospital Electronic Health Record (EHR) bridges.'
      ]
    },
    {
      quarter: 'Q2 2027 (Research & Clinical Trials)',
      status: 'Scheduled',
      statusColor: 'amber',
      title: 'Low-Energy Bluetooth Surface EMG Spine Sensors',
      items: [
        'Integration with wearable sEMG adhesive patches for deep multifidus activation.',
        'Spinal fatigue prediction models preventing lumbar strain during heavy labor.',
        'Nationwide Sehat Sahulat digital card API automatic coverage authorization.'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Innovation Trajectory
            </span>
            <span className="text-xs text-slate-400 font-mono">Future Pipeline</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">MEDISPHERE Product Roadmap</h2>
          <p className="text-xs text-slate-500">
            Strategic engineering milestones expanding wearable sensors, computer-vision posture, and offline emergency mesh.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {milestones.map((m, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-100">
              <div>
                <span className="font-mono text-xs font-bold text-teal-700">{m.quarter}</span>
                <h3 className="font-extrabold text-slate-900 text-base mt-0.5">{m.title}</h3>
              </div>
              <span
                className={`px-3 py-1 rounded-full font-bold text-xs self-start sm:self-center ${
                  m.statusColor === 'emerald'
                    ? 'bg-emerald-100 text-emerald-800'
                    : m.statusColor === 'blue'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {m.status}
              </span>
            </div>

            <ul className="space-y-2 text-slate-700">
              {m.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
