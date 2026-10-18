import React, { useState } from 'react';
import { Heart, Activity, Bluetooth, ShieldCheck, CheckCircle2, TrendingUp, RefreshCw } from 'lucide-react';

export const HeartRateSpo2View: React.FC = () => {
  const [paired, setPaired] = useState(true);
  const [heartRate, setHeartRate] = useState(68);
  const [spo2, setSpo2] = useState(98);
  const [scanning, setScanning] = useState(false);

  const handleRescan = () => {
    setScanning(true);
    setTimeout(() => {
      setHeartRate(Math.floor(66 + Math.random() * 6));
      setSpo2(Math.floor(98 + Math.random() * 2));
      setScanning(false);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group E. Nutrition & Wellness
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #54</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Heart Rate & Oxygen Saturation (SpO2) Telemetry</h2>
          <p className="text-xs text-slate-500">
            Real-time pulse oximetry telemetry, resting cardiac rhythm, and exercise recovery heart rates.
          </p>
        </div>
        <button
          onClick={handleRescan}
          disabled={scanning}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <RefreshCw className={`w-4 h-4 ${scanning ? 'animate-spin' : ''}`} />
          <span>{scanning ? 'Reading Sensor...' : 'Read Bluetooth Oximeter'}</span>
        </button>
      </div>

      {/* Primary Telemetry Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Heart Rate Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Heart className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Resting Pulse</span>
                <h3 className="text-3xl font-black text-slate-900 font-mono">{heartRate} BPM</h3>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Normal Sinus Rhythm
            </span>
          </div>

          {/* Pulse Wave SVG Graphic */}
          <div className="h-20 bg-slate-950 rounded-2xl flex items-center px-4 overflow-hidden relative">
            <svg className="w-full h-12 text-red-500" viewBox="0 0 500 50" fill="none">
              <path
                d="M0 25 L80 25 L90 10 L100 40 L110 5 L120 45 L130 25 L230 25 L240 10 L250 40 L260 5 L270 45 L280 25 L380 25 L390 10 L400 40 L410 5 L420 45 L430 25 L500 25"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute right-3 bottom-2 text-[10px] font-mono text-slate-500">
              Lead II Simulated ECG
            </div>
          </div>
        </div>

        {/* Oxygen Saturation SpO2 Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400">Blood Oxygen (SpO2)</span>
                <h3 className="text-3xl font-black text-teal-700 font-mono">{spo2} %</h3>
              </div>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Optimal Oxygenation
            </span>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
            <div className="flex justify-between font-bold text-slate-700">
              <span>Perfusion Index (PI)</span>
              <span className="font-mono text-teal-700">6.8% (Strong Signal)</span>
            </div>
            <div className="flex justify-between font-bold text-slate-700">
              <span>Recovery Rate Post-Exercise</span>
              <span className="font-mono text-emerald-600">22 BPM / min drop (Excellent)</span>
            </div>
            <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-200">
              Bluetooth Oximeter: Beurer PO 60 (Paired & Authenticated)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
