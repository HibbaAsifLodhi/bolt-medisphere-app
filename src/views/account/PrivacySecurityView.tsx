import React, { useState } from 'react';
import { Lock, ShieldCheck, Key, FileCheck, EyeOff, AlertCircle, Copy, Check } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface PrivacySecurityViewProps {
  patient: PatientData;
}

export const PrivacySecurityView: React.FC<PrivacySecurityViewProps> = ({ patient }) => {
  const [dataSharingEnabled, setDataSharingEnabled] = useState(false);
  const [breakGlassAlerts, setBreakGlassAlerts] = useState(true);
  const [copiedKey, setCopiedKey] = useState(false);

  const encryptionKey = '0x4F8B-E921-A76D-9102-MED-PK-AES256';

  const handleCopy = () => {
    navigator.clipboard.writeText(encryptionKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
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
            <span className="text-xs text-slate-400 font-mono">Section #5</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Privacy & Zero-Trust Security Center</h2>
          <p className="text-xs text-slate-500">
            End-to-end cryptographic posture, HIPAA & PECA 2016 privacy compliance, and break-glass surveillance.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Security Score: 96/100 (Hardened)</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Cryptographic Key Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Patient Master Decryption Key</h3>
                  <p className="text-xs text-slate-500">AES-256 GCM client-side encryption key</p>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center space-x-1 text-slate-700 transition"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
              </button>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl text-teal-300 font-mono text-xs break-all flex items-center justify-between">
              <span>{encryptionKey}</span>
              <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded ml-2">256-bit</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Your radiological DICOM files and clinical consultation summaries are encrypted at rest with this key before hitting the cloud storage nodes.
            </p>
          </div>

          {/* Privacy & Compliance Verification */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center">
              <FileCheck className="w-4 h-4 mr-2 text-teal-600" />
              Regulatory Health Data Compliance
            </h3>

            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">Pakistan PECA (Electronic Crimes Act 2016)</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Compliant with National Data Protection & Sensitive Medical Data Isolation</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Certified
                </span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">HIPAA & GDPR Cross-Border Safe Harbor</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">Permits encrypted second opinions with overseas specialists while retaining data sovereignty</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Policies & Break-Glass */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-amber-500" />
              Emergency Override Controls
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800">Break-Glass SMS Alert</span>
                  <p className="text-[11px] text-slate-500">Alert family kin immediately upon ER doctor override</p>
                </div>
                <input
                  type="checkbox"
                  checked={breakGlassAlerts}
                  onChange={e => setBreakGlassAlerts(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div>
                  <span className="font-bold text-slate-800">Anonymized Research Feed</span>
                  <p className="text-[11px] text-slate-500">Share spinal recovery stats with PMDC registry</p>
                </div>
                <input
                  type="checkbox"
                  checked={dataSharingEnabled}
                  onChange={e => setDataSharingEnabled(e.target.checked)}
                  className="rounded text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-[11px]">
              <strong>Notice:</strong> Your emergency medical file (Blood B+, Penicillin Allergy, L4-L5 Lumbar HNP) remains accessible to Rescue 1122 paramedics during live 911/1122 calls.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
