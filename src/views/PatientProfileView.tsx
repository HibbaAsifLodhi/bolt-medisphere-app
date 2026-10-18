import React, { useState } from 'react';
import {
  User,
  ShieldCheck,
  QrCode,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  AlertTriangle,
  Edit3,
  Check,
  CreditCard,
  Building,
  Printer
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface PatientProfileViewProps {
  patient: PatientData;
  onUpdatePatient: (updated: Partial<PatientData>) => void;
  onPrintCard: () => void;
  onNavigate: (route: string) => void;
}

export const PatientProfileView: React.FC<PatientProfileViewProps> = ({
  patient,
  onUpdatePatient,
  onPrintCard,
  onNavigate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [phone, setPhone] = useState('+92 301 2345678');
  const [address, setAddress] = useState(patient.address);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePatient({ address });
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              National Health Bio-Data
            </span>
            <span className="text-xs text-slate-400 font-mono">NADRA Verified</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Patient Profile & Demographic Dossier</h2>
          <p className="text-xs text-slate-500">
            Registered citizen healthcare identity, emergency baseline parameters, and clinical affiliations.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit Demographics'}</span>
          </button>
          <button
            onClick={onPrintCard}
            className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print ID Card</span>
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs flex items-center space-x-2 font-medium">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Patient demographics updated successfully and synchronized with clinical record.</span>
        </div>
      )}

      {/* Main Profile Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: ID Badge & Sehat Card */}
        <div className="space-y-6">
          {/* Virtual Health Card */}
          <div className="bg-gradient-to-br from-[#0b192c] via-[#1e3e62] to-[#0f766e] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase font-bold text-teal-300 tracking-widest">GOVERNMENT OF PAKISTAN</p>
                <p className="text-xs font-extrabold mt-0.5">NATIONAL HEALTH IDENTIFIER</p>
              </div>
              <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs border border-teal-500/40">
                PK
              </span>
            </div>

            <div className="my-6 space-y-1">
              <p className="text-lg font-black tracking-tight">{patient.name}</p>
              <p className="font-mono text-xs text-teal-200">CNIC: {patient.cnic}</p>
              <p className="text-[11px] text-slate-300">DOB: {patient.dob} ({patient.age} Yrs) • {patient.gender}</p>
            </div>

            <div className="pt-4 border-t border-white/20 flex justify-between items-end">
              <div>
                <p className="text-[9px] uppercase text-teal-300 font-semibold">Blood Group</p>
                <p className="text-2xl font-black text-white">{patient.bloodGroup}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] uppercase text-teal-300 font-semibold">Sehat Sahulat</p>
                <p className="text-xs font-mono font-bold text-teal-100">PK-SEHAT-9824</p>
              </div>
            </div>
          </div>

          {/* Quick Contacts Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Contact Coordinates</span>
            </h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono font-medium text-slate-800">{phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>zainab.ahmed94@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Detailed Clinical Demographics & Editor */}
        <div className="md:col-span-2 space-y-6">
          {isEditing ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="font-bold text-slate-900 text-sm">Edit Demographic Details</h3>
              <form onSubmit={handleSave} className="space-y-4 text-xs">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Residential Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Mobile Phone (Emergency SMS)</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 font-bold"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                  Clinical Registrations & Primary Providers
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mt-4 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Attending Pulmonologist</p>
                    <p className="font-bold text-slate-800 text-sm mt-0.5">Dr. Fatima Siddiqui, MD</p>
                    <p className="text-[10px] text-slate-500">PMDC Reg: 48912-P • Mayo Hospital</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Supervising Physical Therapist</p>
                    <p className="font-bold text-slate-800 text-sm mt-0.5">Dr. Hamza Malik, DPT</p>
                    <p className="text-[10px] text-slate-500">Licensed PT • Spine Rehab Institute</p>
                  </div>
                </div>
              </div>

              {/* Baseline Clinical Metrics */}
              <div>
                <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-2">
                  Baseline Physical & Vitals Profile
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-center text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Height</p>
                    <p className="text-base font-black text-slate-800 mt-1">164.5 cm</p>
                    <p className="text-[10px] text-slate-500">Stadiometer</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Weight</p>
                    <p className="text-base font-black text-slate-800 mt-1">59.2 kg</p>
                    <p className="text-[10px] text-slate-500">BMI: 21.9 (Normal)</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Blood Pressure</p>
                    <p className="text-base font-black text-slate-800 mt-1">118/78</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">Optimal</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-slate-400 font-medium">Resting HR</p>
                    <p className="text-base font-black text-slate-800 mt-1">72 bpm</p>
                    <p className="text-[10px] text-emerald-600 font-semibold">Sinus Rhythm</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs">
                <button
                  onClick={() => onNavigate('complete-medical-history')}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition"
                >
                  View Complete Medical History &rarr;
                </button>
                <button
                  onClick={() => onNavigate('prescriptions-records')}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition"
                >
                  View Active Prescriptions &rarr;
                </button>
                <button
                  onClick={() => onNavigate('lab-reports')}
                  className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-lg transition"
                >
                  View Lab Bloodwork &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
