import React from 'react';
import {
  ShieldAlert,
  Bone,
  Activity,
  Heart,
  Leaf,
  Calendar,
  Compass,
  HeartPulse,
  Bot,
  Clock,
  Stethoscope,
  FileText,
  Pill,
  Printer,
  ChevronRight
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface HomeDashboardProps {
  patient: PatientData;
  onNavigate: (route: string) => void;
  onPrintCard: () => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  patient,
  onNavigate,
  onPrintCard
}) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0b192c] via-[#1e3e62] to-[#0f766e] rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-700/50">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              Verified Patient ID: {patient.id}
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-0.5 rounded-full font-medium">
              Active In Rehab
            </span>
            <span className="bg-red-500/20 text-red-300 text-xs px-2.5 py-0.5 rounded-full font-bold">
              Blood: {patient.bloodGroup}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Assalam-o-Alaikum, {patient.name}
          </h2>
          <p className="text-teal-100/90 text-sm max-w-2xl leading-relaxed">
            Your integrated health overview for today. L4-L5 lumbar recovery session is scheduled at 4:30 PM with Dr. Hamza Malik (PT).
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 flex-shrink-0">
          <button
            onClick={() => onNavigate('emergency-sos')}
            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-4 py-2.5 rounded-xl shadow-md text-xs flex items-center space-x-2 transition"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Open SOS Ready</span>
          </button>
          <button
            onClick={() => onNavigate('xray-imaging')}
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition"
          >
            <Bone className="w-4 h-4" />
            <span>Spine Lab</span>
          </button>
        </div>
      </div>

      {/* Quick Metric Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-lg bg-teal-50 text-brand-600 flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Blood Pressure</p>
            <p className="text-lg font-bold text-slate-900">
              118/78 <span className="text-[10px] text-emerald-600 font-normal">mmHg (Opt)</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Heart Rate</p>
            <p className="text-lg font-bold text-slate-900">
              72 <span className="text-[10px] text-slate-500 font-normal">bpm (Resting)</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Paper Saved</p>
            <p className="text-lg font-bold text-slate-900">
              246 <span className="text-[10px] text-emerald-600 font-normal">Sheets (SDG 12)</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Next Tele-Consult</p>
            <p className="text-sm font-bold text-slate-900">Tomorrow 11:00 AM</p>
          </div>
        </div>
      </div>

      {/* Mid Section: Interactive Pillars & Timeline */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Clinical Hubs & Longitudinal Care Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Navigation Card Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Compass className="w-4 h-4 text-brand-600" />
                <span>Essential Clinical Hubs</span>
              </h3>
              <span className="text-xs text-slate-400">Zero dead-link guarantee</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              <button
                onClick={() => onNavigate('xray-imaging')}
                className="p-3 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-teal-50/40 text-left transition group"
              >
                <div className="flex items-center justify-between text-brand-700 mb-2">
                  <Bone className="w-5 h-5" />
                  <span className="text-[10px] font-mono bg-brand-100 px-1.5 py-0.5 rounded font-bold">
                    View 21
                  </span>
                </div>
                <p className="font-bold text-xs text-slate-800 group-hover:text-brand-700">Spinal Lab & X-Ray</p>
                <p className="text-[11px] text-slate-500 mt-0.5">24 Vertebrae interactive mapper</p>
              </button>

              <button
                onClick={() => onNavigate('physio-dashboard')}
                className="p-3 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-teal-50/40 text-left transition group"
              >
                <div className="flex items-center justify-between text-emerald-700 mb-2">
                  <HeartPulse className="w-5 h-5" />
                  <span className="text-[10px] font-mono bg-emerald-100 px-1.5 py-0.5 rounded font-bold">
                    View 34
                  </span>
                </div>
                <p className="font-bold text-xs text-slate-800 group-hover:text-emerald-700">Rehabilitation</p>
                <p className="text-[11px] text-slate-500 mt-0.5">ROM, pain scale & reps tracker</p>
              </button>

              <button
                onClick={() => onNavigate('ai-assistant')}
                className="p-3 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-teal-50/40 text-left transition group"
              >
                <div className="flex items-center justify-between text-blue-700 mb-2">
                  <Bot className="w-5 h-5" />
                  <span className="text-[10px] font-mono bg-blue-100 px-1.5 py-0.5 rounded font-bold">
                    View 56
                  </span>
                </div>
                <p className="font-bold text-xs text-slate-800 group-hover:text-blue-700">Bilingual AI Triage</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Urdu & English report explainer</p>
              </button>
            </div>
          </div>

          {/* Active Care Timeline */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Clock className="w-4 h-4 text-brand-600" />
                <span>Longitudinal Care Timeline</span>
              </h3>
              <button
                onClick={() => onNavigate('complete-medical-history')}
                className="text-xs text-brand-600 hover:underline font-semibold flex items-center"
              >
                <span>Full History</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-teal-100 text-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Physical Therapy Review (Session #8)</span>
                    <span className="text-slate-400 text-[10px]">Oct 16, 2026</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">
                    Cobra stretch tolerance improved to 30s. Lumbar flexion pain decreased from 6/10 to 3/10.
                  </p>
                  <span className="inline-block mt-1 font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                    Therapist: Dr. Hamza Malik, DPT
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Lumbar Spine MRI 1.5T with Contrast</span>
                    <span className="text-slate-400 text-[10px]">Sep 29, 2026</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">
                    L4-L5 disc protrusion without frank sequestered fragment. S1 nerve root unimpeded.
                  </p>
                  <button
                    onClick={() => onNavigate('mri-ct-viewer')}
                    className="text-brand-600 hover:underline text-[11px] font-semibold mt-1 inline-flex items-center"
                  >
                    <span>Open Scan Slice Viewer</span>
                    <ChevronRight className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Pill className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Medication Prescription Refill</span>
                    <span className="text-slate-400 text-[10px]">Sep 29, 2026</span>
                  </div>
                  <p className="text-slate-600 mt-0.5">
                    Pregabalin 75mg PO QHS for neuro-radicular night discomfort. Dispensed: Servaid Pharmacy Lahore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Safety & SDG Summary */}
        <div className="space-y-6">
          {/* Break-Glass Safety Box */}
          <div className="bg-red-50/90 border border-red-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center space-x-2 text-red-700 mb-2 font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>Emergency Preparedness</span>
            </div>
            <p className="text-xs text-red-950/80 leading-relaxed mb-4">
              In critical accidents, authorized 1122 medical staff can invoke break-glass access using verified GPS and cryptographic station tokens.
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-white/90 p-2.5 rounded-lg border border-red-200 flex justify-between items-center">
                <span className="font-medium text-slate-700">Blood Group</span>
                <span className="font-black text-red-700 text-sm">B Rh+</span>
              </div>
              <div className="bg-white/90 p-2.5 rounded-lg border border-red-200 flex justify-between items-center">
                <span className="font-medium text-slate-700">Allergy Alert</span>
                <span className="font-bold text-red-600">Penicillin (Severe)</span>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onNavigate('emergency-file')}
                className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs text-center transition"
              >
                View Emergency Card
              </button>
              <button
                onClick={onPrintCard}
                className="px-3 py-2 bg-white border border-red-300 text-red-700 hover:bg-red-50 font-semibold rounded-lg text-xs transition"
                title="Print Emergency ID"
                aria-label="Print Emergency Card"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SDG Sustainability Quick Card */}
          <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>UN SDG Impact Pulse</span>
              </div>
              <span className="text-[10px] bg-emerald-200/70 text-emerald-900 px-2 py-0.5 rounded font-mono font-bold">
                SDG 12 & 13
              </span>
            </div>
            <p className="text-xs text-emerald-950/80 leading-relaxed mb-3">
              By digitizing records and conducting 18 follow-ups via teleconsultation, you prevented:
            </p>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
                <p className="text-lg font-black text-emerald-700">1.23 kg</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Paper Biomass</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-emerald-200">
                <p className="text-lg font-black text-emerald-700">73.87 kg</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">CO2e Emissions</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('sdg-impact')}
              className="w-full mt-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold text-center transition shadow-xs"
            >
              Open Interactive SDG Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
