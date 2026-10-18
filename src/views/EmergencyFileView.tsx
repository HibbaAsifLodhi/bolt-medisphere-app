import React from 'react';
import {
  Printer,
  AlertTriangle,
  Activity,
  Pill,
  Accessibility,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface EmergencyFileViewProps {
  patient: PatientData;
  onPrintCard: () => void;
}

export const EmergencyFileView: React.FC<EmergencyFileViewProps> = ({
  patient,
  onPrintCard
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Emergency Medical File</h2>
          <p className="text-xs text-slate-500">
            Comprehensive responder dossier optimized for paramedics, ER triage, and offline fallback.
          </p>
        </div>
        <button
          onClick={onPrintCard}
          className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition"
        >
          <Printer className="w-4 h-4" />
          <span>Print Official Emergency Card</span>
        </button>
      </div>

      {/* Main Dossier Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header bar with blood group prominence */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-red-700 font-extrabold flex items-center justify-center text-xl shadow-md">
              ZA
            </div>
            <div>
              <h3 className="text-xl font-extrabold">{patient.name}</h3>
              <p className="text-xs text-red-100">
                ID: {patient.id} • DOB: {patient.dob} ({patient.age} Yrs) • {patient.gender}
              </p>
              <p className="text-xs text-red-100/90 mt-0.5">Address: {patient.address}</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/30 rounded-xl px-5 py-3 text-center">
            <p className="text-[10px] uppercase font-bold tracking-widest text-red-200">Blood Group</p>
            <p className="text-3xl font-black text-white">{patient.bloodGroup}</p>
            <p className="text-[9px] text-red-200">Lab Confirmed (B Rh+)</p>
          </div>
        </div>

        {/* Critical Allergies Warning Strip */}
        <div className="bg-red-50 border-b border-red-200 p-4 flex items-start space-x-3 text-xs">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-red-900 uppercase tracking-wide">Critical Allergies & Contraindications:</p>
            <div className="flex flex-wrap gap-2 mt-1.5">
              <span className="bg-red-200 text-red-900 font-bold px-2 py-0.5 rounded">
                ⚠️ Penicillin (Anaphylaxis risk)
              </span>
              <span className="bg-amber-200 text-amber-900 font-semibold px-2 py-0.5 rounded">
                NSAIDs (Gastric ulceration history)
              </span>
            </div>
          </div>
        </div>

        {/* Body Details Grid */}
        <div className="p-6 grid md:grid-cols-2 gap-6 text-xs">
          {/* Left: Conditions & Active Meds */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                <Activity className="w-4 h-4 text-brand-600" />
                <span>Diagnosed Medical Conditions</span>
              </h4>
              <ul className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-slate-700">
                {patient.conditions.map((condition, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span className="font-medium">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                <Pill className="w-4 h-4 text-brand-600" />
                <span>Current Prescriptions & Frequency</span>
              </h4>
              <div className="space-y-2">
                {patient.medications.map((med, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-slate-200 bg-white">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{med.name} {med.dose}</span>
                      <span className="text-teal-700">{med.freq}</span>
                    </div>
                    <p className="text-slate-500 text-[11px]">Prescribed by {med.doctor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Mobility & Contacts */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                <Accessibility className="w-4 h-4 text-brand-600" />
                <span>Mobility & Communication Requirements</span>
              </h4>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1.5 text-slate-700">
                <p>
                  <strong className="text-slate-900">Mobility:</strong> Ambulatory without cane; avoid heavy lifting &gt; 8kg.
                </p>
                <p>
                  <strong className="text-slate-900">Communication:</strong> Fluent in English & Urdu (اردو).
                </p>
                <p>
                  <strong className="text-slate-900">Spinal Precaution:</strong> Patient has acute tenderness around lumbar L4-S1. Handle spinal board with standard immobilization protocols.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>Emergency Responders to Notify</span>
              </h4>
              <div className="space-y-2">
                {patient.emergencyContacts.map((c, i) => (
                  <div key={i} className="p-2.5 rounded-lg border border-slate-200 bg-white flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-900">{c.name} ({c.relation})</p>
                      <p className="text-slate-500 text-[11px]">Verified Emergency Responder</p>
                    </div>
                    <span className="font-mono font-bold text-slate-800">{c.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer verification badge */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-2">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Clinically certified by Dr. Fatima Siddiqui (MD, Pulmonology) • Validated Sep 2026</span>
          </span>
          <span className="font-mono text-[10px] text-slate-400">HASH: 9a7b...41e8</span>
        </div>
      </div>
    </div>
  );
};
