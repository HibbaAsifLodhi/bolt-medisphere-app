import React, { useState } from 'react';
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Building2,
  Stethoscope,
  FlaskConical,
  ShoppingBag,
  BadgeCheck,
  Navigation,
  Star
} from 'lucide-react';

type Category = 'All' | 'Hospitals' | 'Clinics' | 'Labs' | 'Pharmacies' | 'Physio';

interface DirectoryEntry {
  name: string;
  category: Exclude<Category, 'All'>;
  city: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  verified: boolean;
  services: string[];
}

const ENTRIES: DirectoryEntry[] = [
  {
    name: 'Mayo Hospital Lahore', category: 'Hospitals', city: 'Lahore',
    address: 'Link Road, Garhi Shahu', phone: '042 3721 4141',
    hours: '24/7 Emergency', rating: 4.6, verified: true,
    services: ['Spine Surgery', 'Neurology', 'Radiology (MRI/CT)', 'Emergency'],
  },
  {
    name: 'Shaukat Khanum Memorial Hospital', category: 'Hospitals', city: 'Lahore',
    address: '7-A Block R-3, M.A. Johar Town', phone: '042 3594 5100',
    hours: 'OPD 8am–8pm', rating: 4.8, verified: true,
    services: ['Oncology', 'Diagnostic Imaging', 'Physiotherapy Unit'],
  },
  {
    name: 'Doctors Hospital Multan', category: 'Hospitals', city: 'Multan',
    address: 'Surrey Street, Qasim Bela', phone: '061 458 6701',
    hours: '24/7 Emergency', rating: 4.3, verified: true,
    services: ['Orthopedics', 'General Surgery', 'ICU'],
  },
  {
    name: 'Dr. A. Rauf — Neuro Spine Clinic', category: 'Clinics', city: 'Lahore',
    address: '124-Y, DHA Phase 3', phone: '0321 442 8890',
    hours: 'Mon–Sat, 5pm–9pm', rating: 4.9, verified: true,
    services: ['Lumbar Disc Assessment', 'Nerve Block Injections', 'Second Opinions'],
  },
  {
    name: 'City Care Family Clinic', category: 'Clinics', city: 'Karachi',
    address: '12-C Khayaban-e-Shahbaz, DHA', phone: '021 3534 7788',
    hours: 'Mon–Sat, 9am–10pm', rating: 4.2, verified: false,
    services: ['General OPD', 'Minor Procedures', 'Vaccination'],
  },
  {
    name: 'Islamabad Diagnostics Centre', category: 'Labs', city: 'Islamabad',
    address: 'Blue Area, Jinnah Avenue', phone: '051 287 3311',
    hours: 'Mon–Sun, 7am–10pm', rating: 4.5, verified: true,
    services: ['MRI', 'CT Scan', 'DCA Blood Panel', 'Home Sampling'],
  },
  {
    name: 'Punjab Lab Diagnostics', category: 'Labs', city: 'Lahore',
    address: 'Main Boulevard, Gulberg III', phone: '042 3577 1900',
    hours: 'Mon–Sat, 8am–9pm', rating: 4.1, verified: true,
    services: ['CBC', 'CRP / ESR', 'Vitamin D Panel', 'Same-day Reports'],
  },
  {
    name: 'Servaid Pharmacy Gulberg', category: 'Pharmacies', city: 'Lahore',
    address: 'Main Boulevard, Gulberg II', phone: '042 3588 2200',
    hours: '24/7', rating: 4.4, verified: true,
    services: ['Prescription Refills', 'Home Delivery', 'Insurance Billing'],
  },
  {
    name: 'D.Watson Pharmacy Blue Area', category: 'Pharmacies', city: 'Islamabad',
    address: 'Blue Area, Jinnah Avenue', phone: '051 280 1444',
    hours: '9am–11pm', rating: 4.0, verified: false,
    services: ['Prescription Refills', 'Medical Devices', 'Walk-in Consult'],
  },
  {
    name: 'PhysioActive Rehabilitation Studio', category: 'Physio', city: 'Lahore',
    address: '542-F, Johar Town', phone: '0300 845 2210',
    hours: 'Mon–Sat, 8am–8pm', rating: 4.7, verified: true,
    services: ['Lumbar Rehab Program', 'Manual Therapy', 'Gait Retraining'],
  },
  {
    name: 'Karachi Spine & Sports Physio', category: 'Physio', city: 'Karachi',
    address: 'Riyadh Lines, Clifton Block 5', phone: '021 3583 4412',
    hours: 'Mon–Sat, 9am–9pm', rating: 4.5, verified: true,
    services: ['McKenzie Method', 'Post-Op Spine Rehab', 'Dry Needling'],
  },
];

const CATEGORY_ICON: Record<Exclude<Category, 'All'>, React.ElementType> = {
  Hospitals: Building2,
  Clinics: Stethoscope,
  Labs: FlaskConical,
  Pharmacies: ShoppingBag,
  Physio: Stethoscope,
};

const CITIES = ['All', 'Lahore', 'Karachi', 'Multan', 'Islamabad'];

export const ServiceDirectoryView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [city, setCity] = useState('All');

  const filtered = ENTRIES.filter(e => {
    const matchesQuery =
      !query ||
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.services.some(s => s.toLowerCase().includes(query.toLowerCase()));
    const matchesCategory = category === 'All' || e.category === category;
    const matchesCity = city === 'All' || e.city === city;
    return matchesQuery && matchesCategory && matchesCity;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #66</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Healthcare Service Directory</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Verified hospitals, clinics, labs, and pharmacies across the MEDISPHERE partner network.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search services, e.g. MRI, Rehab…"
            className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {(Object.values(['All', 'Hospitals', 'Clinics', 'Labs', 'Pharmacies', 'Physio']) as Category[]).map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${
              category === c
                ? 'bg-teal-600 border-teal-600 text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-700'
            }`}
          >
            {c}
          </button>
        ))}
        <span className="mx-1 w-px h-5 bg-slate-200" />
        {CITIES.map(ct => (
          <button
            key={ct}
            onClick={() => setCity(ct)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold border transition ${
              city === ct
                ? 'bg-slate-900 border-slate-900 text-white'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'
            }`}
          >
            {ct}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="text-xs text-slate-500">
        Showing <span className="font-black text-slate-900">{filtered.length}</span> of {ENTRIES.length} partner facilities
        {city !== 'All' && <> in <span className="font-bold text-slate-700">{city}</span></>}
      </p>

      {/* Directory grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(entry => {
          const Icon = CATEGORY_ICON[entry.category];
          return (
            <div
              key={entry.name}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-teal-200 transition group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start space-x-3">
                  <span className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h3 className="text-sm font-black text-slate-900">{entry.name}</h3>
                      {entry.verified && <BadgeCheck className="w-4 h-4 text-teal-600" />}
                    </div>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wide mt-0.5">{entry.category}</p>
                  </div>
                </div>
                <span className="flex items-center space-x-1 text-xs font-black text-amber-600 shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {entry.rating.toFixed(1)}
                </span>
              </div>

              <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                <p className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {entry.address}, {entry.city}
                </p>
                <p className="flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-mono">{entry.phone}</span>
                </p>
                <p className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {entry.hours}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {entry.services.map(s => (
                  <span key={s} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{entry.city} Network</span>
                <a
                  href={`tel:${entry.phone.replace(/\s/g, '')}`}
                  className="text-[11px] font-black text-teal-700 hover:text-teal-800 flex items-center space-x-1 transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
          <Search className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700 mt-3">No facilities match your filters</p>
          <p className="text-xs text-slate-500 mt-1">Try clearing the city or category filter, or search a broader term like "MRI".</p>
        </div>
      )}
    </div>
  );
};
