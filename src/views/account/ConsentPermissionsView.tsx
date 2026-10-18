import React, { useState } from 'react';
import { Key, UserCheck, ShieldAlert, Clock, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface ConsentPermissionsViewProps {
  patient: PatientData;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
}

export const ConsentPermissionsView: React.FC<ConsentPermissionsViewProps> = ({ patient, onAddAuditLog }) => {
  const [grants, setGrants] = useState([
    {
      id: 'grant-1',
      practitioner: 'Dr. Hamza Malik, DPT',
      role: 'Consultant Physiotherapist',
      hospital: 'Mayo Hospital Spine Center',
      scope: 'Full Spinal Imaging & Exercise Logs',
      validUntil: '2026-11-15',
      status: 'Active'
    },
    {
      id: 'grant-2',
      practitioner: 'Dr. Ayesha Siddiqui, FCPS',
      role: 'Consultant Cardiologist',
      hospital: 'Punjab Institute of Cardiology (PIC)',
      scope: 'Vitals, ECG & Blood Pressure Logs',
      validUntil: '2026-10-30',
      status: 'Active'
    },
    {
      id: 'grant-3',
      practitioner: 'Rescue 1122 Medical Command',
      role: 'Emergency Dispatch & Triage',
      hospital: 'Punjab Emergency Service 1122',
      scope: 'Emergency Resuscitation Dossier & Allergies',
      validUntil: 'Permanent Standing Access',
      status: 'Emergency Only'
    }
  ]);

  const [generatedPasscode, setGeneratedPasscode] = useState<string | null>(null);

  const handleRevoke = (id: string, name: string) => {
    setGrants(prev => prev.filter(g => g.id !== id));
    onAddAuditLog('Consent Revoked', name, 'User manually terminated clinical access grant.');
  };

  const handleGeneratePasscode = () => {
    const code = `MED-OTP-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedPasscode(code);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group A. Home & Account
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #6</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Consent & Clinical Access Permissions</h2>
          <p className="text-xs text-slate-500">
            Granular clinical access grants, time-bounded doctor privileges, and single-use consult authorization tokens.
          </p>
        </div>
        <button
          onClick={handleGeneratePasscode}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Grant Temporary Passcode</span>
        </button>
      </div>

      {generatedPasscode && (
        <div className="p-4 bg-teal-50 border-2 border-teal-500 rounded-2xl flex items-center justify-between animate-fade-in">
          <div>
            <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wide">Single-Use Clinician PIN:</span>
            <p className="text-2xl font-black font-mono text-teal-900 tracking-wider mt-0.5">{generatedPasscode}</p>
            <p className="text-xs text-teal-700 mt-1">Share this 6-digit PIN with your consulting doctor. Valid for 30 minutes only.</p>
          </div>
          <button
            onClick={() => setGeneratedPasscode(null)}
            className="text-xs font-bold px-3 py-1.5 bg-white border border-teal-300 text-teal-800 rounded-lg hover:bg-teal-100"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Access Grants Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-800 flex items-center">
            <UserCheck className="w-4 h-4 mr-2 text-teal-600" />
            Active Clinician Authorization Grants ({grants.length})
          </h3>
          <span className="text-[11px] text-slate-500">Auto-expires at end of consultation window</span>
        </div>

        <div className="divide-y divide-slate-100">
          {grants.map(grant => (
            <div key={grant.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-slate-50/60 transition">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-extrabold text-slate-900">{grant.practitioner}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    grant.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {grant.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{grant.role} • <span className="text-slate-500">{grant.hospital}</span></p>
                <div className="flex items-center space-x-3 text-[11px] text-slate-500">
                  <span className="font-semibold text-teal-700">Scope: {grant.scope}</span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    Expires: {grant.validUntil}
                  </span>
                </div>
              </div>

              {grant.id !== 'grant-3' ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleRevoke(grant.id, grant.practitioner)}
                    className="px-3 py-1.5 border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold flex items-center space-x-1 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Revoke Access</span>
                  </button>
                </div>
              ) : (
                <span className="text-xs text-slate-400 font-medium italic">Protected by Rescue 1122 Charter</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
