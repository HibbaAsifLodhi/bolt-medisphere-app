import React, { useState } from 'react';
import {
  Receipt,
  QrCode,
  Pill,
  Calendar,
  User,
  Building,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Download,
  Plus
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface PrescriptionsViewProps {
  patient: PatientData;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
}

export const PrescriptionsView: React.FC<PrescriptionsViewProps> = ({ patient, onAddAuditLog }) => {
  const [refillStatus, setRefillStatus] = useState<Record<string, string>>({});

  const prescriptions = [
    {
      id: 'RX-PK-2026-901',
      medication: 'Pregabalin 75mg Capsules',
      dosage: '1 capsule orally once daily at bedtime (QHS)',
      doctor: 'Dr. A. Rauf, FCPS (Neurology)',
      pmdc: 'PMDC Reg # 39182-P',
      facility: 'Spine Care & Neurological Center, Lahore',
      issuedDate: 'Sep 29, 2026',
      expiryDate: 'Dec 29, 2026',
      refillsLeft: 2,
      pharmacy: 'Servaid Pharmacy (Main Gulberg Branch)',
      instructions: 'For lumbar neuropathic ache. Do not discontinue abruptly. Avoid combining with alcohol or sedatives.',
      status: 'Active'
    },
    {
      id: 'RX-PK-2026-844',
      medication: 'Salbutamol Inhaler (100mcg/puff)',
      dosage: '2 puffs via spacer as needed before exercise or dyspnea (PRN)',
      doctor: 'Dr. Fatima Siddiqui, MD (Pulmonology)',
      pmdc: 'PMDC Reg # 48912-P',
      facility: 'Mayo Hospital Chest Clinic, Lahore',
      issuedDate: 'Aug 14, 2026',
      expiryDate: 'Aug 14, 2027',
      refillsLeft: 4,
      pharmacy: 'Fazal Din’s Pharma Plus',
      instructions: 'Rinse mouth with water after inhalation. Keep in carry bag at all times.',
      status: 'Active'
    },
    {
      id: 'RX-PK-2026-780',
      medication: 'Paracetamol 500mg Tablets',
      dosage: '1 tablet every 6–8 hours as needed for spinal ache (Max 3g/day)',
      doctor: 'Dr. Fatima Siddiqui, MD',
      pmdc: 'PMDC Reg # 48912-P',
      facility: 'Mayo Hospital Chest Clinic, Lahore',
      issuedDate: 'Aug 14, 2026',
      expiryDate: 'Nov 14, 2026',
      refillsLeft: 1,
      pharmacy: 'Servaid Pharmacy',
      instructions: 'Do not exceed 6 tablets within 24 hours. Safe with patient’s gastric ulceration sensitivity.',
      status: 'Active'
    }
  ];

  const handleRefillRequest = (rxId: string, medName: string) => {
    setRefillStatus(prev => ({ ...prev, [rxId]: 'Request Sent to Pharmacy' }));
    onAddAuditLog(
      `Prescription Refill Requested: ${medName}`,
      'Servaid Pharmacy Gateway API',
      `Auto-dispatch verification for ${rxId}`
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              E-Prescription Network
            </span>
            <span className="text-xs text-slate-400 font-mono">DRAP & PMDC Compliant</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Prescriptions & Medication Records</h2>
          <p className="text-xs text-slate-500">
            Digitally certified QR prescriptions, pharmacy dispense milestones, and automated refill tracking.
          </p>
        </div>
        <button
          onClick={() => alert('Official digital e-prescription dossier downloaded in encrypted PDF format.')}
          className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download All Prescriptions (PDF)</span>
        </button>
      </div>

      {/* Allergies Reminder Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start space-x-3 text-xs">
        <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="text-red-950">
          <strong>Active Pharmacological Contraindication:</strong> Patient has severe <strong>Penicillin Anaphylaxis</strong> and <strong>NSAID gastric sensitivity</strong>. System blocks automatic dispensation of beta-lactams and non-selective COX inhibitors.
        </div>
      </div>

      {/* Prescriptions List */}
      <div className="space-y-4">
        {prescriptions.map(rx => (
          <div key={rx.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-700 flex items-center justify-center flex-shrink-0">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">{rx.medication}</h3>
                  <p className="text-slate-500 font-mono text-[11px]">{rx.id} • Issued: {rx.issuedDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
                  {rx.status}
                </span>
                <span className="font-mono text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                  Refills: {rx.refillsLeft}
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-slate-700">
              <div className="space-y-1.5">
                <p><strong className="text-slate-900">Dosage Regimen:</strong> {rx.dosage}</p>
                <p><strong className="text-slate-900">Prescribing Doctor:</strong> {rx.doctor}</p>
                <p><strong className="text-slate-900">License:</strong> <span className="font-mono">{rx.pmdc}</span></p>
              </div>
              <div className="space-y-1.5">
                <p><strong className="text-slate-900">Authorized Facility:</strong> {rx.facility}</p>
                <p><strong className="text-slate-900">Dispensing Partner:</strong> {rx.pharmacy}</p>
                <p><strong className="text-slate-900">Valid Through:</strong> {rx.expiryDate}</p>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 italic">
              "Instructions: {rx.instructions}"
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Digital Prescription Signature</span>
              </div>
              <div className="flex items-center space-x-2">
                {refillStatus[rx.id] ? (
                  <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                    ✓ {refillStatus[rx.id]}
                  </span>
                ) : (
                  <button
                    onClick={() => handleRefillRequest(rx.id, rx.medication)}
                    className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold transition flex items-center space-x-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Request Refill</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
