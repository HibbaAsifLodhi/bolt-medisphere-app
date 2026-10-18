import React, { useState } from 'react';
import { Share2, Building2, CheckCircle2, Clock, AlertCircle, Plus, Send } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface ReferralCoordinationViewProps {
  patient: PatientData;
}

export const ReferralCoordinationView: React.FC<ReferralCoordinationViewProps> = ({ patient }) => {
  const [referrals, setReferrals] = useState([
    {
      id: 'ref-1',
      targetHospital: 'Mayo Hospital Lahore — Orthopedic Spine Unit',
      referringDoctor: 'Dr. Tariq Ahmed (Family Medicine GP)',
      consultant: 'Dr. Hamza Malik, DPT & Prof. M. Akram',
      reason: 'Conservative Physical Rehabilitation for L4-L5 Lumbar HNP with radiculopathy',
      urgency: 'Priority (Within 48h)',
      dateSubmitted: '2026-09-18',
      status: 'Accepted & Treatment Active',
      attachments: ['MRI_Lumbar_Spine.pdf', 'CBC_Lab_Report.pdf']
    },
    {
      id: 'ref-2',
      targetHospital: 'Punjab Institute of Cardiology (PIC) Lahore',
      referringDoctor: 'Mayo Hospital Outpatient',
      consultant: 'Dr. Ayesha Siddiqui, FCPS (Cardiology)',
      reason: 'Baseline cardiac clearance & blood pressure monitoring prior to intensive exercise',
      urgency: 'Routine (Within 14 Days)',
      dateSubmitted: '2026-09-22',
      status: 'Consultation Concluded',
      attachments: ['ECG_Tracing_Sep2026.pdf']
    }
  ]);

  const [showNewModal, setShowNewModal] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #65</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Inter-Hospital Referral & Clinical Coordination Hub</h2>
          <p className="text-xs text-slate-500">
            Seamless electronic clinical referral transfers between primary care centers and tertiary specialized hospitals.
          </p>
        </div>
        <button
          onClick={() => setShowNewModal(true)}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Initiate Hospital Referral</span>
        </button>
      </div>

      {showNewModal && (
        <div className="p-5 bg-teal-50 border-2 border-teal-300 rounded-3xl space-y-3 text-xs">
          <h4 className="font-extrabold text-sm text-teal-950">Initiate Electronic Referral Transfer</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Target Healthcare Facility</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs">
                <option>Services Hospital Lahore (Neurology Dept)</option>
                <option>Jinnah Hospital Lahore (Physical Medicine & Rehab)</option>
                <option>Shaukat Khanum Memorial Hospital</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Clinical Urgency Priority</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs">
                <option>Urgent Clinical Need (Within 24-48 Hours)</option>
                <option>Standard Specialized Review (Within 1-2 Weeks)</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button
              onClick={() => setShowNewModal(false)}
              className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowNewModal(false);
                alert('Electronic referral token transmitted via National Health Coordination Network.');
              }}
              className="px-4 py-1.5 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700"
            >
              Transmit Referral
            </button>
          </div>
        </div>
      )}

      {/* Referrals Pipeline List */}
      <div className="space-y-4">
        {referrals.map(ref => (
          <div key={ref.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">{ref.targetHospital}</h3>
                  <p className="text-[11px] text-slate-500">Referring: {ref.referringDoctor}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto">
                {ref.status}
              </span>
            </div>

            <p className="text-slate-800 font-medium leading-relaxed">
              <strong>Clinical Indication:</strong> {ref.reason}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
              <div className="flex items-center space-x-3">
                <span className="font-bold text-teal-800">Assigned: {ref.consultant}</span>
                <span>•</span>
                <span className="text-amber-700 font-bold">{ref.urgency}</span>
              </div>
              <span className="font-mono text-slate-400">Attached: {ref.attachments.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
