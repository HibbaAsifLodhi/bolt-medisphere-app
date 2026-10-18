import React, { useState } from 'react';
import { Printer, Download, FileCheck, CheckSquare, Square, QrCode, ShieldCheck } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface PatientReportsSummariesViewProps {
  patient: PatientData;
}

export const PatientReportsSummariesView: React.FC<PatientReportsSummariesViewProps> = ({ patient }) => {
  const [sections, setSections] = useState({
    demographics: true,
    allergies: true,
    spineFindings: true,
    medications: true,
    rehabMilestones: true,
    recentLabs: false
  });

  const toggleSection = (key: keyof typeof sections) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
              Group C. Records & Services
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #33</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Patient Reports & Consolidated Health Summary</h2>
          <p className="text-xs text-slate-500">
            Generate and print authenticated clinical dossiers for overseas consultations and second opinions.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs"
          >
            <Printer className="w-4 h-4" />
            <span>Print Clinical Brief</span>
          </button>
        </div>
      </div>

      {/* Report Configuration Bar */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
        <span className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Include Sections in Export:</span>
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            { key: 'demographics', label: 'Patient Identifiers & CNIC' },
            { key: 'allergies', label: 'Allergies & Contraindications' },
            { key: 'spineFindings', label: 'L4-L5 MRI Findings' },
            { key: 'medications', label: 'Active Pharmacology' },
            { key: 'rehabMilestones', label: 'Physiotherapy Milestones' },
            { key: 'recentLabs', label: 'Recent Bloodwork' }
          ].map(item => {
            const isChecked = sections[item.key as keyof typeof sections];
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleSection(item.key as keyof typeof sections)}
                className={`px-3 py-1.5 rounded-xl border flex items-center space-x-1.5 transition font-medium ${
                  isChecked ? 'bg-teal-50 border-teal-500 text-teal-800' : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}
              >
                {isChecked ? <CheckSquare className="w-3.5 h-3.5 text-teal-600" /> : <Square className="w-3.5 h-3.5 text-slate-400" />}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Printable Sheet Preview */}
      <div className="bg-white p-8 rounded-3xl border-2 border-slate-300 shadow-lg text-slate-900 font-sans space-y-6">
        {/* Document Header */}
        <div className="flex justify-between items-start border-b-2 border-slate-900 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-tight text-slate-950">MEDISPHERE HEALTH OS</span>
              <span className="text-xs bg-slate-900 text-white font-bold px-2 py-0.5 rounded">PAKISTAN</span>
            </div>
            <p className="text-xs text-slate-600 mt-1">Official Consolidated Medical Briefing • PMDC Verified E-Health Portal</p>
            <p className="text-[11px] text-slate-400 font-mono">Document Ref: MED-PK-2026-98241 • Generated: {new Date().toLocaleDateString('en-GB')}</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="w-16 h-16 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center p-1">
              <QrCode className="w-14 h-14 text-slate-800" />
            </div>
            <span className="text-[9px] text-slate-500 font-mono mt-1">Scan for Live Verify</span>
          </div>
        </div>

        {/* Patient Demographics */}
        {sections.demographics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Patient Name:</span>
              <p className="font-black text-slate-900">{patient.name}</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">National CNIC:</span>
              <p className="font-mono text-slate-900">{patient.cnic}</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Age / Gender:</span>
              <p className="text-slate-900">{patient.age} Yrs • {patient.gender}</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Blood Group:</span>
              <p className="font-black text-red-600 font-mono">{patient.bloodGroup}</p>
            </div>
          </div>
        )}

        {/* Allergies Alert */}
        {sections.allergies && (
          <div className="p-3 bg-red-50 border border-red-300 rounded-xl text-xs text-red-900">
            <strong>CRITICAL ALLERGY ALERT:</strong> {patient.allergies.join(', ')}. Absolute contraindication for Beta-lactam antibiotic therapies.
          </div>
        )}

        {/* Spine & Imaging Findings */}
        {sections.spineFindings && (
          <div className="space-y-1 text-xs">
            <h4 className="font-black text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1">Radiological Findings (MRI Spine)</h4>
            <p className="text-slate-700 leading-relaxed pt-1">
              <strong>Impression:</strong> Posterior central and left paracentral disc protrusion at <strong>L4-L5</strong> level. Mild indentation of the ventral thecal sac with impingement upon the descending left L5 nerve root. Lumbar lordosis maintained with no canal stenosis at L1-L3.
            </p>
          </div>
        )}

        {/* Active Medications */}
        {sections.medications && (
          <div className="space-y-1 text-xs">
            <h4 className="font-black text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1">Active Prescribed Regimen</h4>
            <div className="grid sm:grid-cols-2 gap-2 pt-1">
              {patient.medications.map((med, idx) => (
                <div key={idx} className="p-2 bg-slate-50 rounded border border-slate-200">
                  <p className="font-bold text-slate-900">{med.name} ({med.dose})</p>
                  <p className="text-slate-500 text-[11px]">{med.freq} • Prescribed by: {med.doctor}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Signatures */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-end text-xs text-slate-600">
          <div>
            <p className="font-bold text-slate-900">Dr. Hamza Malik, DPT</p>
            <p className="text-[11px]">PMDC Reg # 49201-P • Consultant Physiotherapy</p>
            <p className="text-[10px] text-slate-400">Mayo Hospital Lahore Spine Unit</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-[11px] text-slate-400">Cryptographically Signed via PK-Health-PKI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
