import React, { useState } from 'react';
import { AlertTriangle, AlertOctagon, ShieldAlert, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface AllergiesContraindicationsViewProps {
  patient: PatientData;
}

export const AllergiesContraindicationsView: React.FC<AllergiesContraindicationsViewProps> = ({ patient }) => {
  const [allergies, setAllergies] = useState([
    {
      id: 'al-1',
      substance: 'Penicillin / Amoxicillin Beta-Lactams',
      type: 'Drug Allergy',
      severity: 'Life-Threatening / Anaphylaxis',
      level: 'RED',
      reaction: 'Laryngeal edema, sudden bronchospasm, hypotension, hives. Requires immediate Epinephrine 0.3mg IM.',
      verifiedBy: 'Dr. Ayesha Siddiqui, FCPS (2018)'
    },
    {
      id: 'al-2',
      substance: 'Sulfa Antibiotics (Co-trimoxazole)',
      type: 'Drug Allergy',
      severity: 'Moderate',
      level: 'YELLOW',
      reaction: 'Diffuse maculopapular cutaneous rash, severe pruritus.',
      verifiedBy: 'Dr. Hamza Malik (2022)'
    },
    {
      id: 'al-3',
      substance: 'NSAIDs (High-Dose Aspirin / Indomethacin)',
      type: 'Drug Sensitivity',
      severity: 'Moderate',
      level: 'YELLOW',
      reaction: 'Severe epigastric pain, acute gastritis exacerbation.',
      verifiedBy: 'Mayo Hospital Outpatient (2024)'
    }
  ]);

  const [contraindications] = useState([
    {
      id: 'contra-1',
      procedure: 'High-Velocity Lumbar Spinal Manipulation (HVLA)',
      affectedArea: 'L4-L5 / L5-S1 Segment',
      reason: 'Active posterior disc protrusion with nerve root impingement. Rotational thrusting risks acute disc sequestration.',
      category: 'Physical Therapy Absolute Caution'
    },
    {
      id: 'contra-2',
      procedure: 'Full-Torque Lumbar Flexion Under Axial Load (Deadlifts)',
      affectedArea: 'Lumbar Spine',
      reason: 'Excessive intradiscal pressure exceeding 800N risks worsening thecal sac effacement.',
      category: 'Exercise Limitation'
    }
  ]);

  const [newSubstance, setNewSubstance] = useState('');
  const [newSeverity, setNewSeverity] = useState('Severe');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubstance.trim()) return;
    setAllergies(prev => [
      ...prev,
      {
        id: `al-${Date.now()}`,
        substance: newSubstance,
        type: 'Patient Reported',
        severity: newSeverity,
        level: newSeverity === 'Life-Threatening / Anaphylaxis' ? 'RED' : 'YELLOW',
        reaction: 'Self-reported allergic reaction requiring clinical confirmation.',
        verifiedBy: 'Pending Clinical Review'
      }
    ]);
    setNewSubstance('');
    setShowAddModal(false);
  };

  const handleRemove = (id: string) => {
    setAllergies(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group B. Emergency & Safety
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #12</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Medical Allergies & Critical Contraindications</h2>
          <p className="text-xs text-slate-500">
            High-alert pharmacological allergies, anaphylaxis protocols, and surgical/rehab movement contraindications.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Allergy Alert</span>
        </button>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <form onSubmit={handleAdd} className="p-4 bg-red-50 border-2 border-red-300 rounded-2xl space-y-3">
          <h4 className="text-xs font-bold text-red-900 uppercase">Register New Allergy Alert</h4>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Substance (e.g. Iodine Contrast, Codeine, Peanuts)..."
                value={newSubstance}
                onChange={e => setNewSubstance(e.target.value)}
                className="w-full bg-white border border-red-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-red-600"
              />
            </div>
            <div>
              <select
                value={newSeverity}
                onChange={e => setNewSeverity(e.target.value)}
                className="w-full bg-white border border-red-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-red-600"
              >
                <option value="Life-Threatening / Anaphylaxis">Life-Threatening / Anaphylaxis</option>
                <option value="Severe">Severe</option>
                <option value="Moderate">Moderate</option>
                <option value="Mild Sensitivity">Mild Sensitivity</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700"
            >
              Save Alert
            </button>
          </div>
        </form>
      )}

      {/* Critical Allergies List */}
      <div className="space-y-3">
        <h3 className="text-sm font-black text-slate-900 flex items-center">
          <AlertOctagon className="w-4 h-4 mr-2 text-red-600" />
          Confirmed Drug Allergies & Adverse Reactions
        </h3>

        <div className="grid gap-3">
          {allergies.map(item => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition ${
                item.level === 'RED'
                  ? 'bg-red-50/70 border-red-300 ring-1 ring-red-400'
                  : 'bg-amber-50/70 border-amber-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    item.level === 'RED' ? 'bg-red-600 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {item.severity}
                  </span>
                  <h4 className="text-sm font-black text-slate-900">{item.substance}</h4>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-xs text-red-500 hover:text-red-700 flex items-center space-x-1 self-start sm:self-auto"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove</span>
                </button>
              </div>

              <p className="text-xs text-slate-700 font-medium mt-2">{item.reaction}</p>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">Verified by: {item.verifiedBy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spinal & Clinical Contraindications */}
      <div className="space-y-3 pt-3">
        <h3 className="text-sm font-black text-slate-900 flex items-center">
          <ShieldAlert className="w-4 h-4 mr-2 text-amber-600" />
          Biomechanical & Spinal Contraindications
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {contraindications.map(contra => (
            <div key={contra.id} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded uppercase">
                {contra.category}
              </span>
              <h4 className="text-xs font-black text-slate-900 mt-1">{contra.procedure}</h4>
              <p className="text-xs text-slate-600 font-medium">{contra.reason}</p>
              <p className="text-[11px] font-mono text-teal-700">Target Segment: {contra.affectedArea}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
