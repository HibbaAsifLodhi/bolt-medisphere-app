import React, { useState } from 'react';
import { History, Pill, AlertTriangle, CheckCircle, Calendar, Filter } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface PreviousMedicationsViewProps {
  patient: PatientData;
}

export const PreviousMedicationsView: React.FC<PreviousMedicationsViewProps> = ({ patient }) => {
  const [filterYear, setFilterYear] = useState('ALL');

  const history = [
    {
      id: 'prev-1',
      drug: 'Diclofenac Sodium 50mg',
      category: 'NSAID Analgesic',
      duration: 'Mar 2024 - Jun 2024 (3 Months)',
      year: '2024',
      prescribedBy: 'Dr. Tariq Ahmed (GP)',
      reasonDiscontinued: 'Discontinued due to acute gastric irritation & dyspepsia',
      adrTag: 'Adverse Reaction: Gastritis',
      status: 'Discontinued - Intolerant'
    },
    {
      id: 'prev-2',
      drug: 'Tramadol Hydrochloride 50mg',
      category: 'Opioid Analgesic',
      duration: 'Jul 2024 - Sep 2024 (2 Months)',
      year: '2024',
      prescribedBy: 'Mayo Hospital Emergency',
      reasonDiscontinued: 'Completed acute flare-up management; transitioned to Gabapentin for nerve pain',
      adrTag: null,
      status: 'Successfully Completed'
    },
    {
      id: 'prev-3',
      drug: 'Prednisolone 5mg (Tapering Course)',
      category: 'Corticosteroid Anti-inflammatory',
      duration: 'Jan 2025 - Feb 2025 (4 Weeks)',
      year: '2025',
      prescribedBy: 'Dr. Ayesha Siddiqui',
      reasonDiscontinued: 'Completed prescribed inflammatory suppression taper',
      adrTag: null,
      status: 'Taper Completed'
    },
    {
      id: 'prev-4',
      drug: 'Thiocolchicoside 4mg',
      category: 'Centrally-Acting Muscle Relaxant',
      duration: 'May 2026 - Jun 2026 (6 Weeks)',
      year: '2026',
      prescribedBy: 'Dr. Hamza Malik, DPT',
      reasonDiscontinued: 'Spinal paraspinal muscle spasms resolved with physical therapy',
      adrTag: null,
      status: 'Course Concluded'
    }
  ];

  const filteredHistory = filterYear === 'ALL' ? history : history.filter(h => h.year === filterYear);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group B. Emergency & Safety
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #14</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Previous Medications & Treatment History</h2>
          <p className="text-xs text-slate-500">
            Historical pharmacological logs, discontinued regimens, and recorded adverse drug reactions (ADRs).
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-bold">
            {['ALL', '2026', '2025', '2024'].map(yr => (
              <button
                key={yr}
                onClick={() => setFilterYear(yr)}
                className={`px-3 py-1 rounded-lg transition ${
                  filterYear === yr ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Medication Timeline Cards */}
      <div className="space-y-3">
        {filteredHistory.map(item => (
          <div
            key={item.id}
            className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs hover:border-slate-300 transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{item.drug}</h3>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full self-start sm:self-auto ${
                item.status.includes('Intolerant')
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-slate-100 text-slate-700'
              }`}>
                {item.status}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 text-slate-600 pt-1">
              <div>
                <span className="font-bold text-slate-800">Duration:</span> {item.duration}
              </div>
              <div>
                <span className="font-bold text-slate-800">Prescribed By:</span> {item.prescribedBy}
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-800">Clinical Discontinuation Rationale:</strong> {item.reasonDiscontinued}
              {item.adrTag && (
                <div className="mt-2 flex items-center space-x-1.5 text-amber-700 font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{item.adrTag}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
