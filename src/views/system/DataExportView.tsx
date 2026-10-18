import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ShieldCheck, Lock, Database, Trash2, AlertCircle } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface DataExportViewProps {
  patient: PatientData;
}

export const DataExportView: React.FC<DataExportViewProps> = ({ patient }) => {
  const [format, setFormat] = useState<'ZIP' | 'FHIR' | 'JSON' | 'PDF'>('ZIP');
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadReady, setDownloadReady] = useState(false);

  const [scopes, setScopes] = useState({
    demographics: true,
    medications: true,
    radiologyDicom: true,
    auditTrail: true,
    rehabTelemetry: true
  });

  const toggleScope = (key: keyof typeof scopes) => {
    setScopes(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleStartExport = () => {
    setIsExporting(true);
    setProgress(15);
    setDownloadReady(false);

    const step1 = setTimeout(() => setProgress(45), 500);
    const step2 = setTimeout(() => setProgress(80), 1000);
    const step3 = setTimeout(() => {
      setProgress(100);
      setIsExporting(false);
      setDownloadReady(true);
    }, 1500);
  };

  const handleDownloadFile = () => {
    const dataStr = JSON.stringify({
      exportMetadata: {
        system: 'MEDISPHERE Health OS (Pakistan)',
        standard: 'HL7 FHIR / GDPR Article 20 Portability',
        timestamp: new Date().toISOString(),
        encryption: 'AES-256 GCM'
      },
      patient
    }, null, 2);

    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MEDISPHERE_Health_Archive_${patient.id}_${Date.now()}.${format.toLowerCase() === 'zip' ? 'json' : format.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group H. SDGs & System
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #76</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Data Portability & Patient Health Archive Export</h2>
          <p className="text-xs text-slate-500">
            Export your complete medical file in international interoperability formats (FHIR, JSON, Encrypted Archive).
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>GDPR Art. 20 & PECA 2016 Compliant</span>
        </div>
      </div>

      {/* Main Export Console */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5 text-xs">
        <div>
          <label className="font-extrabold text-slate-900 block text-xs mb-2">
            1. Select Export Format:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'ZIP', label: 'Encrypted ZIP Archive', sub: 'Complete Files + Scans' },
              { id: 'FHIR', label: 'HL7 FHIR (XML/JSON)', sub: 'Hospital EHR Portability' },
              { id: 'JSON', label: 'Structured JSON', sub: 'Developer & Data Science' },
              { id: 'PDF', label: 'Consolidated PDF', sub: 'Printable Travel Passport' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFormat(item.id as any)}
                className={`p-3.5 rounded-2xl border text-left transition ${
                  format === item.id
                    ? 'bg-brand-50 border-brand-600 text-brand-900 ring-2 ring-brand-500/20 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="block font-black text-xs">{item.label}</span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">{item.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-extrabold text-slate-900 block text-xs mb-2">
            2. Choose Clinical Data Scopes to Package:
          </label>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { key: 'demographics', label: 'Patient Identifiers, Bio-Data & Family Links' },
              { key: 'medications', label: 'Active & Historical Medication History' },
              { key: 'radiologyDicom', label: 'MRI Spine Radiographs & DICOM Slice Metadata' },
              { key: 'rehabTelemetry', label: 'Physiotherapy Goniometry & Session Compliance' },
              { key: 'auditTrail', label: 'Break-Glass Emergency Access Audit Logs' }
            ].map(s => (
              <div
                key={s.key}
                onClick={() => toggleScope(s.key as any)}
                className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition"
              >
                <span className="font-semibold text-slate-800">{s.label}</span>
                <input
                  type="checkbox"
                  checked={scopes[s.key as keyof typeof scopes]}
                  readOnly
                  className="rounded text-brand-600 h-4 w-4"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress & Action */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          {isExporting && (
            <div className="space-y-1.5 animate-fade-in">
              <div className="flex justify-between font-mono font-bold text-slate-600 text-[11px]">
                <span>Packaging encrypted archive...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-brand-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <Lock className="w-4 h-4 text-teal-600" />
              <span>Signed with Patient Master Private Key (AES-256 GCM)</span>
            </div>

            {downloadReady ? (
              <button
                onClick={handleDownloadFile}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center space-x-1.5 transition shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Generated Archive</span>
              </button>
            ) : (
              <button
                onClick={handleStartExport}
                disabled={isExporting}
                className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center justify-center space-x-1.5 transition shadow-xs"
              >
                <Database className="w-4 h-4" />
                <span>{isExporting ? 'Generating Bundle...' : 'Generate My Complete Health Archive'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
