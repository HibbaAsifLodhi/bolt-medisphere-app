import React, { useState } from 'react';
import { Package, ShieldCheck, MapPin, CheckCircle2, Clock, Phone, Plus } from 'lucide-react';

export const ResourceEquipmentView: React.FC = () => {
  const [cityFilter, setCityFilter] = useState('Lahore');
  const [reservedModal, setReservedModal] = useState<string | null>(null);

  const equipmentList = [
    {
      id: 'eq-1',
      name: 'Chattanooga Triton DTS Lumbar Traction Table',
      category: 'Spinal Decompression Unit',
      location: 'Mayo Hospital Spine Center (Lahore)',
      status: 'Available on Booking',
      rate: 'PKR 1,200 / Session',
      condition: 'Calibrated & Certified Sep 2026'
    },
    {
      id: 'eq-2',
      name: 'Dual-Channel Digital TENS / EMS Neuromuscular Unit',
      category: 'Home Pain Relief Device',
      location: 'Medisphere Gulberg Warehouse (Lahore)',
      status: 'In Stock (Rental / Purchase)',
      rate: 'PKR 2,500 / Month Rental',
      condition: 'New with sterile electrode gel pads'
    },
    {
      id: 'eq-3',
      name: 'Orthopedic Lumbar Support Belt with Rigid Stays (Size M/L)',
      category: 'Spine Orthotic Brace',
      location: 'Mayo Hospital Pharmacy Depository',
      status: 'Immediate Dispatch',
      rate: 'PKR 3,200 (Purchase)',
      condition: 'Medical Grade Breathable Fabric'
    },
    {
      id: 'eq-4',
      name: 'Enraf-Nonius Sonopuls 190 Therapeutic Ultrasound',
      category: 'Deep Tissue Healing Unit',
      location: 'Jinnah Hospital Physio OPD (Lahore)',
      status: 'In Clinical Use',
      rate: 'OPD Procedure',
      condition: 'Multi-Frequency 1MHz & 3MHz'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #71</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Medical Equipment & Rehabilitation Resource Directory</h2>
          <p className="text-xs text-slate-500">
            Certified lumbar traction tables, clinical TENS devices, and orthopedic support bracing inventory.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex items-center space-x-2">
          {['Lahore', 'Karachi', 'Islamabad'].map(c => (
            <button
              key={c}
              onClick={() => setCityFilter(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                cityFilter === c ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {reservedModal && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl flex items-center justify-between text-xs text-emerald-900 font-bold animate-fade-in">
          <span>✓ Reservation ticket issued for: {reservedModal}. Pickup coordinated at facility.</span>
          <button onClick={() => setReservedModal(null)} className="underline text-emerald-800">Dismiss</button>
        </div>
      )}

      {/* Equipment Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {equipmentList.map(item => (
          <div key={item.id} className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs flex flex-col justify-between hover:border-teal-400 transition">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold uppercase text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {item.status}
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900 leading-snug">{item.name}</h4>
              <p className="text-slate-500 text-[11px] flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                {item.location}
              </p>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-600 text-[11px]">
                Condition: {item.condition}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="font-black text-slate-900 font-mono">{item.rate}</span>
              <button
                onClick={() => setReservedModal(item.name)}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition shadow-xs"
              >
                Reserve Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
