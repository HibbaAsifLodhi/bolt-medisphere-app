import React from 'react';
import { ShieldCheck, ShieldAlert, Plus, Check } from 'lucide-react';
import { AuditLogItem } from '../types/index.ts';

interface EmergencyAuditViewProps {
  auditLogs: AuditLogItem[];
  onAddAuditLog: (event: string, user: string, reason: string) => void;
}

export const EmergencyAuditView: React.FC<EmergencyAuditViewProps> = ({
  auditLogs,
  onAddAuditLog
}) => {
  const handleSimulateAudit = () => {
    onAddAuditLog(
      'Audit Verification Ping',
      'Clinical Audit Officer (King Edward Medical University)',
      'Quarterly data-access compliance & zero-trust protocol check'
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Emergency Access & Break-Glass Audit</h2>
          <p className="text-xs text-slate-500">
            Immutable ledger of all emergency overrides, clinician queries, and token decryptions.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center space-x-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ledger Integrity: Verified</span>
          </span>
          <button
            onClick={handleSimulateAudit}
            className="px-3 py-1 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center space-x-1 transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Simulate Log</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span>Displaying recent access transactions for Patient MED-PK-98241</span>
          <span className="font-mono font-bold text-slate-700">Total Records: {auditLogs.length}</span>
        </div>
        <div className="divide-y divide-slate-100">
          {auditLogs.map(log => (
            <div key={log.id} className="p-4 hover:bg-slate-50/80 transition flex items-start space-x-4 text-xs">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">{log.event}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{log.time}</span>
                </div>
                <p className="text-slate-600 mt-1">
                  <strong className="text-slate-800">Authorized Agent:</strong> {log.user}
                </p>
                <p className="text-slate-500 mt-0.5">
                  <strong className="text-slate-700">Clinical Justification:</strong> {log.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
