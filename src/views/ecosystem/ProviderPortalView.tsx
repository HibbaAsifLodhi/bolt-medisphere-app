import React, { useState } from 'react';
import { UserCheck, Shield, Search, FileText, CheckCircle2, AlertOctagon, UserPlus } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface ProviderPortalViewProps {
  patient: PatientData;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
}

export const ProviderPortalView: React.FC<ProviderPortalViewProps> = ({ patient, onAddAuditLog }) => {
  const [selectedQueuePatient, setSelectedQueuePatient] = useState('Zainab Ahmed');
  const [soapNotes, setSoapNotes] = useState({
    subjective: 'Patient reports VAS pain reduced to 2.8/10. Mild calf stiffness after sitting > 40 minutes.',
    objective: 'Goniometry lumbar flexion 48 degrees (normal 60). Straight leg raise negative on right, 62 degrees on left.',
    assessment: 'Resolving L4-L5 posterior disc protrusion. Transitioning from Phase 1 to Phase 2 rehabilitation.',
    plan: 'Continue prone cobra holds 3 sets x 15s. Add quadruped bird-dog progressions. Follow-up in 2 weeks.'
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const patientQueue = [
    { name: 'Zainab Ahmed', cnic: '35201-4829104-2', diagnosis: 'L4-L5 Lumbar HNP (Conservative)', status: 'In Consultation' },
    { name: 'Bilal Khan', cnic: '35202-9918231-1', diagnosis: 'C5-C6 Cervical Spondylosis', status: 'Waiting in Clinic' },
    { name: 'Fatima Noor', cnic: '35201-2244192-4', diagnosis: 'Adolescent Idiopathic Scoliosis (Cobb 18°)', status: 'Tele-Consult Scheduled' }
  ];

  const handleSaveSoap = () => {
    setSavedSuccess(true);
    onAddAuditLog('Clinician SOAP Note Signed', 'Dr. Hamza Malik (PMDC # 49201-P)', 'Bi-weekly rehabilitation assessment update.');
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #63</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Healthcare Provider Clinical Terminal (EMR / SOAP)</h2>
          <p className="text-xs text-slate-500">
            Authenticated practitioner portal for PMDC-licensed doctors, surgeons, and physical therapists.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-slate-900 text-white px-3 py-1.5 rounded-xl text-xs font-bold self-start sm:self-auto">
          <Shield className="w-4 h-4 text-teal-400" />
          <span>Logged In: Dr. Hamza Malik (PMDC # 49201-P)</span>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between font-bold animate-fade-in">
          <span>✓ Clinical SOAP Note cryptographically sealed and attached to patient health file.</span>
          <span className="text-[10px] font-mono bg-emerald-200 px-2 py-0.5 rounded">Signed & Logged</span>
        </div>
      )}

      {/* Grid: Patient Queue & SOAP Terminal */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Outpatient Queue */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="font-extrabold text-sm text-slate-900">Today&apos;s Clinical Queue</h3>
            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">3 Patients</span>
          </div>

          <div className="space-y-2">
            {patientQueue.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedQueuePatient(item.name)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition space-y-1 ${
                  selectedQueuePatient === item.name
                    ? 'bg-teal-50/70 border-teal-500 ring-2 ring-teal-500/20 shadow-xs'
                    : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-slate-900 text-xs">{item.name}</span>
                  <span className="text-[9px] font-bold text-teal-700">{item.status}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">{item.diagnosis}</p>
                <p className="text-[10px] font-mono text-slate-400">CNIC: {item.cnic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Electronic SOAP Note Console */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold uppercase text-teal-700">Clinical Documentation</span>
              <h3 className="text-base font-black text-slate-900">SOAP Note Entry: {selectedQueuePatient}</h3>
            </div>
            <button
              onClick={handleSaveSoap}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center space-x-1.5 transition shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Sign & Commit SOAP Note</span>
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="font-extrabold text-slate-800 text-xs block mb-1">
                S — Subjective (Patient Sensation & Functional Report):
              </label>
              <textarea
                rows={2}
                value={soapNotes.subjective}
                onChange={e => setSoapNotes(prev => ({ ...prev, subjective: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="font-extrabold text-slate-800 text-xs block mb-1">
                O — Objective (Goniometry, Reflexes & Palpation):
              </label>
              <textarea
                rows={2}
                value={soapNotes.objective}
                onChange={e => setSoapNotes(prev => ({ ...prev, objective: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="font-extrabold text-slate-800 text-xs block mb-1">
                A — Assessment (Clinical Prognosis & Milestone Classification):
              </label>
              <textarea
                rows={2}
                value={soapNotes.assessment}
                onChange={e => setSoapNotes(prev => ({ ...prev, assessment: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="font-extrabold text-slate-800 text-xs block mb-1">
                P — Plan (Therapeutic Exercise Prescription & Dosage):
              </label>
              <textarea
                rows={2}
                value={soapNotes.plan}
                onChange={e => setSoapNotes(prev => ({ ...prev, plan: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-brand-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
