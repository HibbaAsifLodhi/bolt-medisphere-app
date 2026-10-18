import React from 'react';
import {
  Server,
  CheckCircle,
  Wifi,
  Activity,
  ShieldCheck,
  Zap,
  Globe2
} from 'lucide-react';

export const SystemStatusView: React.FC = () => {
  const nodes = [
    { name: 'Rescue 1122 Gateway Dispatch Node (Lahore Central)', status: 'Operational', latency: '18 ms', uptime: '99.99%', protocol: 'Encrypted WSS' },
    { name: 'NADRA Citizen CNIC Verification Sandbox', status: 'Operational', latency: '42 ms', uptime: '99.95%', protocol: 'mTLS REST' },
    { name: 'Cloud PACS Radiology DICOM Stream (1.5T MRI)', status: 'Operational', latency: '110 ms', uptime: '99.98%', protocol: 'DICOMweb WADO-RS' },
    { name: 'Pakistan Automated SMS Broadcast Gateway', status: 'Operational', latency: '85 ms', uptime: '99.92%', protocol: 'SMPP v3.4' },
    { name: 'HL7 / FHIR R4 Interoperability Clinical Bridge', status: 'Operational', latency: '28 ms', uptime: '99.97%', protocol: 'JSON FHIR' }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Network Telemetry
            </span>
            <span className="text-xs text-slate-400 font-mono">Infrastructure v3.2</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">System Status & API Integrations</h2>
          <p className="text-xs text-slate-500">
            Real-time operational latency, uptime statistics, and dispatch bridge integrity.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
            All 5 Clinical Services Operational
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 text-center text-xs">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-slate-400 font-medium">Platform Global Uptime</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">99.98%</p>
          <span className="text-[10px] text-slate-500">Past 90 Consecutive Days</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-slate-400 font-medium">Average 1122 Dispatch Ping</span>
          <p className="text-2xl font-black text-teal-700 mt-1">18 ms</p>
          <span className="text-[10px] text-emerald-600">Ultra-low latency packet</span>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-slate-400 font-medium">Security Standard</span>
          <p className="text-2xl font-black text-slate-900 mt-1">AES-256</p>
          <span className="text-[10px] text-slate-500">Zero-Trust Cryptography</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden text-xs">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-700 flex justify-between">
          <span>Integrated Core Healthcare Services</span>
          <span>Status & Latency</span>
        </div>
        <div className="divide-y divide-slate-100">
          {nodes.map((node, i) => (
            <div key={i} className="p-4 hover:bg-slate-50/70 transition flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 text-sm">{node.name}</span>
                <p className="text-[11px] text-slate-400 font-mono">Protocol: {node.protocol} • Uptime: {node.uptime}</p>
              </div>
              <div className="text-right space-y-0.5">
                <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
                  ✓ {node.status}
                </span>
                <p className="font-mono text-[11px] text-slate-500 font-bold">{node.latency}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
