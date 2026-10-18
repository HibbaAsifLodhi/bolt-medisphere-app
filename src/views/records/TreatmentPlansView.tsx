import React, { useState } from 'react';
import { Workflow, CheckCircle2, Circle, Clock, Flag, Award, ChevronRight } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface TreatmentPlansViewProps {
  patient: PatientData;
}

export const TreatmentPlansView: React.FC<TreatmentPlansViewProps> = ({ patient }) => {
  const [activePhase, setActivePhase] = useState(2);

  const phases = [
    {
      num: 1,
      title: 'Phase 1: Acute Pain Relief & Disc Decompression',
      duration: 'Weeks 1 to 4 (Completed Sep 2026)',
      status: 'COMPLETED',
      progress: 100,
      goals: [
        'Reduce VAS radicular nerve pain from 8.5/10 down to < 4/10 (Achieved: 3.2/10)',
        'Cease high-dose opioid analgesics; transition to neuro-modulating Gabapentin 300mg',
        'Initiate non-weight bearing prone McKenzie extensions without leg tingling'
      ],
      clinicalLead: 'Dr. Tariq Ahmed (GP) & Dr. Hamza Malik'
    },
    {
      num: 2,
      title: 'Phase 2: Lumbar Segmental Stabilization & Core Endurance',
      duration: 'Weeks 5 to 10 (Current Phase - Oct 2026)',
      status: 'IN PROGRESS',
      progress: 68,
      goals: [
        'Transverse Abdominis & Multifidus isometric hold > 20 seconds',
        'Prone Cobra static hold 3 sets of 15 seconds without lumbar hyperextension',
        'Restore lumbar pain-free flexion to > 50 degrees'
      ],
      clinicalLead: 'Dr. Hamza Malik, DPT (Mayo Hospital)'
    },
    {
      num: 3,
      title: 'Phase 3: Functional Spinal Loading & Full Workplace Ergonomics',
      duration: 'Weeks 11 to 16 (Target Nov - Dec 2026)',
      status: 'UPCOMING',
      progress: 0,
      goals: [
        'Safe hip hinge lifting mechanism up to 10kg with neutral lumbar spine',
        'Oswestry Disability Index (ODI) reduction to < 12% (Minimal Disability)',
        'Independent home maintenance exercise routine established'
      ],
      clinicalLead: 'Multi-Disciplinary Spine Board'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group C. Records & Services
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #32</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Treatment Plans & Clinical Recovery Milestones</h2>
          <p className="text-xs text-slate-500">
            Phase-gated spinal recovery trajectory formulated by attending physiotherapists and orthopedic consultants.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-teal-50 text-teal-900 px-3 py-1.5 rounded-xl border border-teal-200 text-xs font-bold self-start sm:self-auto">
          <Award className="w-4 h-4 text-teal-600" />
          <span>Overall Rehabilitation Progress: 56%</span>
        </div>
      </div>

      {/* Phase Stepper */}
      <div className="grid md:grid-cols-3 gap-3">
        {phases.map(ph => (
          <div
            key={ph.num}
            onClick={() => setActivePhase(ph.num)}
            className={`p-4 rounded-2xl border cursor-pointer transition text-xs space-y-2 ${
              activePhase === ph.num
                ? 'bg-teal-50/70 border-teal-500 ring-2 ring-teal-500/20 shadow-md'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-mono font-bold text-slate-400 text-[11px]">Milestone {ph.num} of 3</span>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                ph.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-800' :
                ph.status === 'IN PROGRESS' ? 'bg-teal-600 text-white animate-pulse' : 'bg-slate-100 text-slate-600'
              }`}>
                {ph.status}
              </span>
            </div>
            <h4 className="font-extrabold text-sm text-slate-900 leading-tight">{ph.title}</h4>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mt-1">
              <div className="bg-teal-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${ph.progress}%` }}></div>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{ph.duration}</p>
          </div>
        ))}
      </div>

      {/* Selected Phase Detail Card */}
      {phases.find(p => p.num === activePhase) && (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          {(() => {
            const current = phases.find(p => p.num === activePhase)!;
            return (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      Clinical Milestone Deep-Dive
                    </span>
                    <h3 className="text-base font-black text-slate-900 mt-1">{current.title}</h3>
                    <p className="text-slate-500 text-[11px] mt-0.5">Clinical Board Supervisor: {current.clinicalLead}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-teal-700 font-mono">{current.progress}%</span>
                    <p className="text-[10px] text-slate-400">Milestone Completion</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-xs flex items-center">
                    <Flag className="w-4 h-4 mr-2 text-teal-600" />
                    Target Functional Milestones
                  </h4>
                  <div className="space-y-2">
                    {current.goals.map((goal, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start space-x-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${current.status === 'COMPLETED' ? 'text-emerald-500' : 'text-teal-600'}`} />
                        <span className="text-slate-800 font-medium leading-relaxed">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};
