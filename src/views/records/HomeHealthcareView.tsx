import React, { useState } from 'react';
import { Home, UserCheck, Calendar, Clock, MapPin, CheckCircle2, PhoneCall, Plus } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface HomeHealthcareViewProps {
  patient: PatientData;
}

export const HomeHealthcareView: React.FC<HomeHealthcareViewProps> = ({ patient }) => {
  const [selectedService, setSelectedService] = useState('Spine Post-Op Mobilization');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const caregivers = [
    {
      id: 'cg-1',
      name: 'Sister Shazia Perveen, RN',
      qualification: 'Registered Nurse (PNC # 82910-N)',
      agency: 'Al-Khidmat Health Services Lahore',
      experience: '9 Years Clinical Experience',
      rating: '4.9 ★ (124 Home Visits)',
      specialty: 'Post-Spinal Surgery Care & Mobilization',
      rate: 'PKR 1,800 / Visit',
      contact: '+92 321 4455661',
      available: 'Available Today'
    },
    {
      id: 'cg-2',
      name: 'Brother Muhammad Rizwan, DPT Intern',
      qualification: 'Home Physical Therapy Attendant',
      agency: 'MedHome Physio-Care Lahore',
      experience: '5 Years Experience',
      rating: '4.8 ★ (86 Sessions)',
      specialty: 'Bedside Lumbar Decompression & Passive ROM',
      rate: 'PKR 2,200 / Session',
      contact: '+92 300 9876543',
      available: 'Available Tomorrow Morning'
    },
    {
      id: 'cg-3',
      name: 'Sister Nuzhat Fatima, RN',
      qualification: 'Senior Critical Care Nurse',
      agency: 'Shaukat Khanum Home Nursing Network',
      experience: '12 Years ICU / Trauma',
      rating: '5.0 ★ (210 Home Visits)',
      specialty: 'IV Medication Infusions & Wound Care',
      rate: 'PKR 2,500 / Visit',
      contact: '+92 333 1122334',
      available: 'Available on Booking'
    }
  ];

  const handleBook = () => {
    setBookedSuccess(true);
    setTimeout(() => setBookedSuccess(false), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group C. Records & Services
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #30</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Home Healthcare & Verified Caregivers</h2>
          <p className="text-xs text-slate-500">
            Certified Pakistan Nursing Council (PNC) nurses and bedside therapists for home-bound spinal recovery.
          </p>
        </div>
      </div>

      {bookedSuccess && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl flex items-center justify-between text-xs text-emerald-900 animate-fade-in">
          <div>
            <p className="font-extrabold text-sm">Caregiver Request Dispatched!</p>
            <p className="mt-0.5">The agency coordinator will confirm arrival time via phone at +92 300 8472910.</p>
          </div>
          <span className="bg-emerald-200 text-emerald-800 font-bold px-3 py-1 rounded-lg">Confirmed</span>
        </div>
      )}

      {/* Quick Booking Bar */}
      <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
          Request Instant Caregiver Dispatch (Model Colony, Lahore)
        </h3>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Service Type</label>
            <select
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-medium"
            >
              <option value="Spine Post-Op Mobilization">Spine Post-Op Mobilization</option>
              <option value="Bedside Wound Dressing">Bedside Wound Dressing</option>
              <option value="IV Infusion / Injection Administration">IV Infusion / Injection Administration</option>
              <option value="24/7 Elderly Patient Attendant">24/7 Elderly Patient Attendant</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-600 mb-1">Preferred Time Window</label>
            <input
              type="text"
              defaultValue="Tomorrow: 10:00 AM - 12:00 PM"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-medium"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={handleBook}
              className="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center justify-center space-x-1.5 transition shadow-xs"
            >
              <UserCheck className="w-4 h-4" />
              <span>Confirm Home Visit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Verified Providers List */}
      <div className="grid md:grid-cols-3 gap-4">
        {caregivers.map(cg => (
          <div key={cg.id} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs flex flex-col justify-between hover:border-teal-400 transition">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{cg.name}</h4>
                  <p className="text-[11px] text-teal-700 font-bold">{cg.qualification}</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {cg.available}
                </span>
              </div>
              <p className="text-slate-500 text-[11px]">{cg.agency}</p>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <p className="font-semibold text-slate-800">Specialty: {cg.specialty}</p>
                <p className="text-slate-500 text-[11px]">{cg.experience} • {cg.rating}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="font-black text-slate-900 font-mono">{cg.rate}</span>
              <a
                href={`tel:${cg.contact}`}
                className="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 rounded-lg font-bold flex items-center space-x-1 transition"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Caregiver</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
