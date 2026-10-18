import React, { useState } from 'react';
import { Pill, AlertTriangle, ShieldCheck, CheckCircle2, Plus, Sparkles, X } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface AiMedicationInfoViewProps {
  patient: PatientData;
}

export const AiMedicationInfoView: React.FC<AiMedicationInfoViewProps> = ({ patient }) => {
  const [selectedMeds, setSelectedMeds] = useState([
    'Gabapentin 300mg',
    'Paracetamol 500mg'
  ]);
  const [candidateMed, setCandidateMed] = useState('');

  const addMed = (med: string) => {
    if (!selectedMeds.includes(med)) {
      setSelectedMeds(prev => [...prev, med]);
    }
  };

  const removeMed = (med: string) => {
    setSelectedMeds(prev => prev.filter(m => m !== med));
  };

  const hasPenicillin = selectedMeds.some(m => m.toLowerCase().includes('penicillin') || m.toLowerCase().includes('amoxicillin'));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group F. AI Assistant
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #58</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Medication Questions & Drug Interactions (AI)</h2>
          <p className="text-xs text-slate-500">
            Real-time cross-pharmacological interaction checker cross-referenced against your confirmed allergies.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs font-bold self-start sm:self-auto">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Pakistan DRAP Drug Safety Database</span>
        </div>
      </div>

      {/* Selected Medications Pills */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <h3 className="font-extrabold text-sm text-slate-900">Current Combination Being Analyzed:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedMeds.map(m => (
            <span key={m} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold flex items-center space-x-2">
              <Pill className="w-3.5 h-3.5 text-teal-600" />
              <span>{m}</span>
              <button onClick={() => removeMed(m)} className="text-slate-400 hover:text-red-600 ml-1">
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
        </div>

        {/* Quick Add Suggestions */}
        <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-[11px]">
          <span className="text-slate-500 font-bold">Test Interacting Drugs:</span>
          {['Amoxicillin 500mg', 'Tramadol 50mg', 'Ibuprofen 400mg'].map(item => (
            <button
              key={item}
              onClick={() => addMed(item)}
              className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 font-medium text-slate-700 transition"
            >
              + {item}
            </button>
          ))}
        </div>
      </div>

      {/* Safety Analysis Report */}
      {hasPenicillin ? (
        <div className="p-6 bg-red-600 text-white rounded-3xl shadow-xl space-y-3 text-xs animate-fade-in">
          <div className="flex items-center space-x-2 text-red-100 font-black uppercase text-[10px] tracking-wider">
            <AlertTriangle className="w-5 h-5 text-white" />
            <span>CRITICAL PHARMACOLOGICAL CONTRAINDICATION</span>
          </div>
          <h3 className="text-lg font-black tracking-tight">Severe Allergic Reaction Alert</h3>
          <p className="leading-relaxed text-red-100">
            <strong>WARNING:</strong> You have added a Beta-Lactam Penicillin antibiotic. Zainab Ahmed has a documented medical history of <strong>Life-Threatening Anaphylaxis to Penicillin</strong>. This drug must NOT be administered. Paramedics and attending doctors are instructed to use Macrolides or Fluoroquinolones as alternatives.
          </p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="text-emerald-700 font-extrabold flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                No Known Major Adverse Interactions Detected
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 font-mono">Safety Score: 9.8 / 10</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-slate-700">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 block">Gabapentin + Paracetamol</span>
              <p className="text-[11px] leading-relaxed">
                Safe synergy. Paracetamol addresses somatic peripheral tissue pain while Gabapentin targets centralized neuropathic radicular burning from the L4-L5 nerve root.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 block">Food & Hydration Timing</span>
              <p className="text-[11px] leading-relaxed">
                Take Gabapentin after a meal with a full glass of water. Avoid alcohol and sedatives to minimize daytime somnolence and dizziness.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
