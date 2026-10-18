import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Printer,
  PhoneCall,
  Phone,
  AlertOctagon,
  Users,
  Lock,
  Loader2,
  CheckCheck,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { PatientData } from '../types/index.ts';
import { generateBreakGlassToken } from '../utils/emergencyProtocol.ts';

interface EmergencySosViewProps {
  patient: PatientData;
  onNavigate: (route: string) => void;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
  onPrintCard: () => void;
}

export const EmergencySosView: React.FC<EmergencySosViewProps> = ({
  patient,
  onNavigate,
  onAddAuditLog,
  onPrintCard
}) => {
  const [simState, setSimState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [secondsLeft, setSecondsLeft] = useState(3);
  const [generatedToken, setGeneratedToken] = useState('');

  const handleStartSimulation = () => {
    if (simState === 'running') return;
    setSimState('running');
    setSecondsLeft(3);

    const token = generateBreakGlassToken(patient.id);
    setGeneratedToken(token);

    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setSimState('completed');
          onAddAuditLog(
            'Emergency 1122 Dispatch Broadcasted (Simulation)',
            'Rescue 1122 Mobile Terminal (Lahore Central)',
            `Simulated SOS dispatch with GPS [31.5204° N, 74.3587° E] & Token ${token}`
          );
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Rescue 1122 Gateway
            </span>
            <span className="text-xs text-slate-400 font-mono">NODE: PK-LHE-CENTRAL</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Emergency SOS Centre</h2>
          <p className="text-xs text-slate-600">
            Instant distress activation, confirmed dispatch simulation, and critical break-glass consent token.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPrintCard}
            className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print SOS Card</span>
          </button>
        </div>
      </div>

      {/* SOS Big Button Trigger Area */}
      <div className="bg-white rounded-2xl border-2 border-red-500 p-8 shadow-xl text-center space-y-6 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-red-100 rounded-full opacity-50 pointer-events-none"></div>

        <div className="max-w-md mx-auto space-y-2">
          <span className="inline-block p-4 rounded-full bg-red-100 text-red-600 animate-pulse">
            <AlertOctagon className="w-12 h-12" />
          </span>
          <h3 className="text-xl font-black text-slate-900">Trigger Emergency Response</h3>
          <p className="text-xs text-slate-500">
            Click below to simulate real-time GPS coordinate fetching, 1122 dispatch broadcast, and SMS dispatch to verified emergency contacts.
          </p>
        </div>

        {/* Action Button & Direct Call */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            id="sosActionButton"
            onClick={handleStartSimulation}
            disabled={simState === 'running'}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-base shadow-lg transition flex items-center justify-center space-x-3 ${
              simState === 'completed'
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/30'
                : 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/30 active:scale-95'
            }`}
          >
            {simState === 'running' ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                <span>DISPATCHING 1122...</span>
              </>
            ) : simState === 'completed' ? (
              <>
                <CheckCheck className="w-6 h-6" />
                <span>1122 SIMULATED ALERT SENT!</span>
              </>
            ) : (
              <>
                <PhoneCall className="w-6 h-6 animate-bounce" />
                <span>ACTIVATE 1122 SOS (SIMULATOR)</span>
              </>
            )}
          </button>
          <a
            href="tel:1122"
            className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition"
          >
            <Phone className="w-5 h-5 text-teal-400" />
            <span>Direct Dial 1122 (Pakistan)</span>
          </a>
        </div>

        {/* Simulation Feedback Box */}
        {simState !== 'idle' && (
          <div className="mt-6 p-4 rounded-xl bg-slate-900 text-teal-200 text-left font-mono text-xs space-y-2 border border-slate-700 animate-fadeIn">
            <div className="flex items-center justify-between text-white border-b border-slate-800 pb-2">
              <span className="font-bold flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${simState === 'running' ? 'bg-red-500 animate-ping' : 'bg-emerald-400'}`}></span>
                <span>
                  {simState === 'running' ? 'DISPATCH SIMULATION IN PROGRESS' : 'SIMULATION COMPLETE — BROADCAST VERIFIED'}
                </span>
              </span>
              <span className="font-mono text-amber-300 font-bold">
                {simState === 'running' ? `00:0${secondsLeft}` : 'DISPATCH ACKNOWLEDGED'}
              </span>
            </div>
            <p className="text-slate-400">&gt; Requesting high-accuracy browser geolocation...</p>
            <p className="text-emerald-400">&gt; Coordinates acquired: 31.5204° N, 74.3587° E (Lahore, Punjab) ± 8m accuracy.</p>
            <p className="text-teal-300">
              &gt; Break-glass emergency card token generated:{' '}
              <span className="text-yellow-300 font-bold">{generatedToken || '#BG-98241-1122'}</span>
            </p>
            <p className="text-white">
              &gt; Simulated SMS broadcast prepared for: {patient.emergencyContacts[0]?.name} ({patient.emergencyContacts[0]?.phone}).
            </p>
          </div>
        )}
      </div>

      {/* Emergency Contacts Matrix & Break-Glass Protocol */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
            <Users className="w-4 h-4 text-brand-600" />
            <span>Verified Family Contacts</span>
          </h3>
          <div className="space-y-3 text-xs">
            {patient.emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  contact.primary ? 'border-teal-200 bg-teal-50/50' : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-slate-800">{contact.name}</span>
                    {contact.primary && (
                      <span className="text-[9px] bg-teal-200 text-brand-800 font-bold px-1.5 py-0.5 rounded">
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-[11px]">{contact.relation} • Lahore</p>
                  <p className="font-mono text-slate-700 mt-1 font-semibold">{contact.phone}</p>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  aria-label={`Call ${contact.name}`}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-teal-100 text-teal-700 transition"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Break-Glass Protocol Notice */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs text-slate-600">
          <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
            <Lock className="w-4 h-4 text-amber-600" />
            <span>Break-Glass Clinical Security Notice</span>
          </h3>
          <p className="leading-relaxed">
            In production, emergency medical file access is protected under strict zero-trust audit principles:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Non-emergency users cannot view unredacted data without biometrics.</li>
            <li>Emergency personnel override requires geo-fenced clinical hospital IP or registered 1122 vehicle terminal.</li>
            <li>Every view triggers an immutable tamper-evident entry in the patient's Audit Log (Page 15).</li>
          </ul>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('emergency-audit')}
              className="text-brand-600 font-semibold hover:underline inline-flex items-center"
            >
              <span>View Live Break-Glass Audit Trail</span>
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
