import React, { useState } from 'react';
import { Settings, Shield, Smartphone, Key, Globe, Bell, CheckCircle2, RefreshCw } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface AccountSettingsViewProps {
  patient: PatientData;
  onUpdatePatient: (updated: Partial<PatientData>) => void;
}

export const AccountSettingsView: React.FC<AccountSettingsViewProps> = ({ patient }) => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [primaryLanguage, setPrimaryLanguage] = useState<'en' | 'ur'>('en');
  const [sessionTimeout, setSessionTimeout] = useState('15');
  const [devices, setDevices] = useState([
    { id: 'dev-1', name: 'Google Chrome (Lahore, PK)', ip: '39.40.182.14', current: true, lastActive: 'Active now' },
    { id: 'dev-2', name: 'Samsung Galaxy S24 (Android App)', ip: '39.40.182.88', current: false, lastActive: '2 hours ago' },
    { id: 'dev-3', name: 'Apple iPad Pro (Islamabad Clinic)', ip: '111.119.187.2', current: false, lastActive: '3 days ago' },
  ]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleRevokeDevice = (id: string) => {
    setDevices(prev => prev.filter(d => d.id !== id));
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group A. Home & Account
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #4</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Account Settings & Security Preferences</h2>
          <p className="text-xs text-slate-500">
            Configure multi-factor authentication, active login credentials, regional server routing, and session controls.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{savedSuccess ? 'Settings Saved!' : 'Save Preferences'}</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column: Security Settings */}
        <div className="md:col-span-2 space-y-5">
          {/* Two-Factor Authentication Box */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Two-Factor Authentication (2FA)</h3>
                  <p className="text-xs text-slate-500">Mandatory for accessing emergency dossier & radiological scans</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={e => setTwoFactorEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
              </label>
            </div>

            {twoFactorEnabled && (
              <div className="p-3 bg-teal-50/70 border border-teal-200 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-teal-900 flex items-center">
                    <Smartphone className="w-4 h-4 mr-1.5 text-teal-700" />
                    SMS 1122 Dispatch OTP to Primary Phone
                  </span>
                  <span className="font-mono text-teal-800 text-[11px] font-bold">+92 300 8472910</span>
                </div>
                <p className="text-[11px] text-teal-700">
                  Verification tokens are automatically routed through Pakistan PTCL/Jazz healthcare emergency gateway.
                </p>
              </div>
            )}
          </div>

          {/* Active Sessions & Devices */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center">
                <Smartphone className="w-4 h-4 mr-2 text-slate-600" />
                Authorized Connected Devices ({devices.length})
              </h3>
              <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                End-to-End TLS 1.3 Active
              </span>
            </div>

            <div className="space-y-2.5">
              {devices.map(dev => (
                <div key={dev.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 text-xs">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-slate-900">{dev.name}</span>
                      {dev.current && (
                        <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.2 rounded font-bold">
                          This Device
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">IP: {dev.ip} • {dev.lastActive}</p>
                  </div>
                  {!dev.current && (
                    <button
                      onClick={() => handleRevokeDevice(dev.id)}
                      className="text-xs text-red-600 hover:text-red-700 font-semibold px-2.5 py-1 rounded-lg border border-red-200 hover:bg-red-50 transition"
                    >
                      Revoke
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Preferences & Region */}
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-center">
              <Globe className="w-4 h-4 mr-2 text-slate-600" />
              Regional & Language Node
            </h3>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Preferred Language Mode</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPrimaryLanguage('en')}
                  className={`p-2 rounded-xl border text-center font-bold transition ${
                    primaryLanguage === 'en'
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  English (Default)
                </button>
                <button
                  type="button"
                  onClick={() => setPrimaryLanguage('ur')}
                  className={`p-2 rounded-xl border text-center font-bold font-urdu transition ${
                    primaryLanguage === 'ur'
                      ? 'border-brand-600 bg-brand-50 text-brand-700'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  اردو (Urdu)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Session Inactivity Timeout</label>
              <select
                value={sessionTimeout}
                onChange={e => setSessionTimeout(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:border-brand-600"
              >
                <option value="5">5 Minutes (Strict Clinical Mode)</option>
                <option value="15">15 Minutes (Recommended)</option>
                <option value="60">1 Hour (Home Care Tablet)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">Primary Cloud Data Center</label>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-[11px] text-slate-700">
                <span>🇵🇰 Islamabad National Health Cloud (Tier-3)</span>
                <span className="block text-[10px] text-emerald-600 font-sans font-bold mt-1">● Latency: 14ms (Optimal)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
