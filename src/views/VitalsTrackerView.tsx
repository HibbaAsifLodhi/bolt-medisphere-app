import React, { useState } from 'react';
import {
  Scale,
  Heart,
  Activity,
  Droplet,
  Plus,
  CheckCircle2,
  TrendingUp,
  Ruler
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface VitalsTrackerViewProps {
  patient: PatientData;
}

export const VitalsTrackerView: React.FC<VitalsTrackerViewProps> = ({ patient }) => {
  const [readings, setReadings] = useState([
    { date: 'Today, 08:30 AM', bp: '118/78 mmHg', hr: '72 bpm', glucose: '94 mg/dL', weight: '59.2 kg', status: 'Optimal' },
    { date: 'Oct 16, 2026', bp: '120/80 mmHg', hr: '74 bpm', glucose: '96 mg/dL', weight: '59.3 kg', status: 'Normal' },
    { date: 'Oct 14, 2026', bp: '122/82 mmHg', hr: '76 bpm', glucose: '92 mg/dL', weight: '59.5 kg', status: 'Normal' },
    { date: 'Oct 10, 2026', bp: '119/79 mmHg', hr: '71 bpm', glucose: '95 mg/dL', weight: '59.2 kg', status: 'Optimal' }
  ]);

  const [inputBp, setInputBp] = useState('118/78');
  const [inputHr, setInputHr] = useState('72');
  const [inputGlucose, setInputGlucose] = useState('94');
  const [inputWeight, setInputWeight] = useState('59.2');

  const handleAddReading = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      date: 'Just Now',
      bp: `${inputBp} mmHg`,
      hr: `${inputHr} bpm`,
      glucose: `${inputGlucose} mg/dL`,
      weight: `${inputWeight} kg`,
      status: 'Recorded'
    };
    setReadings([newEntry, ...readings]);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Biometric Telemetry
            </span>
            <span className="text-xs text-slate-400 font-mono">Real-Time Vitals Stream</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Height, Weight & Vital Signs Tracker</h2>
          <p className="text-xs text-slate-500">
            Cardiovascular pressure, fasting blood glucose, pulse rate, and calibrated stadiometer height trends.
          </p>
        </div>
      </div>

      {/* 4 Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center space-x-2 text-brand-600 mb-1">
            <Activity className="w-4 h-4" />
            <span className="text-xs font-bold text-slate-500">Blood Pressure</span>
          </div>
          <p className="text-2xl font-black text-slate-900">118/78</p>
          <p className="text-[10px] text-emerald-600 font-bold mt-0.5">Optimal Range (&lt;120/80)</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center space-x-2 text-red-600 mb-1">
            <Heart className="w-4 h-4" />
            <span className="text-xs font-bold text-slate-500">Resting Heart Rate</span>
          </div>
          <p className="text-2xl font-black text-slate-900">72 <span className="text-xs text-slate-500 font-normal">bpm</span></p>
          <p className="text-[10px] text-emerald-600 font-bold mt-0.5">Resting Normal (60–100)</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center space-x-2 text-amber-600 mb-1">
            <Droplet className="w-4 h-4" />
            <span className="text-xs font-bold text-slate-500">Fasting Blood Glucose</span>
          </div>
          <p className="text-2xl font-black text-slate-900">94 <span className="text-xs text-slate-500 font-normal">mg/dL</span></p>
          <p className="text-[10px] text-emerald-600 font-bold mt-0.5">Normoglycemic (&lt;100)</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center space-x-2 text-blue-600 mb-1">
            <Scale className="w-4 h-4" />
            <span className="text-xs font-bold text-slate-500">BMI / Mass Ratio</span>
          </div>
          <p className="text-2xl font-black text-slate-900">21.9 <span className="text-xs text-slate-500 font-normal">kg/m²</span></p>
          <p className="text-[10px] text-emerald-600 font-bold mt-0.5">Healthy Weight (18.5–24.9)</p>
        </div>
      </div>

      {/* Add Reading Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
        <h3 className="font-bold text-slate-900 text-sm">Log New Vital Measurement</h3>
        <form onSubmit={handleAddReading} className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div>
            <label className="block text-slate-500 mb-1">Blood Pressure (mmHg)</label>
            <input
              type="text"
              value={inputBp}
              onChange={e => setInputBp(e.target.value)}
              className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
              placeholder="e.g. 120/80"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Heart Rate (bpm)</label>
            <input
              type="number"
              value={inputHr}
              onChange={e => setInputHr(e.target.value)}
              className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
              placeholder="72"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Fasting Glucose (mg/dL)</label>
            <input
              type="number"
              value={inputGlucose}
              onChange={e => setInputGlucose(e.target.value)}
              className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
              placeholder="94"
            />
          </div>
          <div>
            <label className="block text-slate-500 mb-1">Weight (kg)</label>
            <input
              type="number"
              step="0.1"
              value={inputWeight}
              onChange={e => setInputWeight(e.target.value)}
              className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
              placeholder="59.2"
            />
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold flex items-center justify-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Log Reading</span>
            </button>
          </div>
        </form>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
        <h3 className="font-bold text-slate-900 text-sm">Longitudinal Measurements History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                <th className="pb-2">Timestamp</th>
                <th className="pb-2">Blood Pressure</th>
                <th className="pb-2">Heart Rate</th>
                <th className="pb-2">Fasting Glucose</th>
                <th className="pb-2">Weight</th>
                <th className="pb-2">Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {readings.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="py-2.5 font-bold text-slate-900">{r.date}</td>
                  <td className="py-2.5 font-mono">{r.bp}</td>
                  <td className="py-2.5 font-mono">{r.hr}</td>
                  <td className="py-2.5 font-mono">{r.glucose}</td>
                  <td className="py-2.5 font-mono">{r.weight}</td>
                  <td className="py-2.5">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
