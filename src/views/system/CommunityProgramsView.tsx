import React, { useState } from 'react';
import { HeartHandshake, MapPin, Calendar, Users, CheckCircle2, Plus, Clock } from 'lucide-react';

export const CommunityProgramsView: React.FC = () => {
  const [registeredCamp, setRegisteredCamp] = useState<string | null>(null);

  const camps = [
    {
      id: 'camp-1',
      title: 'Free Spine, Posture & Neuropathy Screening Camp',
      venue: 'Lahore High Court Bar Association Hall (The Mall, Lahore)',
      date: 'Sunday, October 26, 2026',
      time: '09:00 AM - 04:00 PM',
      organizer: 'Mayo Hospital Spine Unit & MEDISPHERE Volunteers',
      services: ['Free Goniometric Range of Motion Test', 'Free Blood Glucose & Vitals Check', 'Free Lumbar Ergonomics Support Cushions'],
      registeredPatients: 148,
      status: 'Registration Open'
    },
    {
      id: 'camp-2',
      title: 'Rural Maternal & Elderly Bone Health Outreach',
      venue: 'Rural Health Center (RHC) Raja Jang, District Kasur',
      date: 'Saturday, November 08, 2026',
      time: '10:00 AM - 03:00 PM',
      organizer: 'Al-Khidmat Foundation & King Edward Medical University',
      services: ['Calcium & Vitamin D3 Distribution', 'Osteoarthritis Screening', 'Free Ultrasound Bone Densitometry'],
      registeredPatients: 210,
      status: 'Registration Open'
    },
    {
      id: 'camp-3',
      title: 'Ergonomic Backpack & Posture Screening for School Children',
      venue: 'Government Central Model High School (Lower Mall, Lahore)',
      date: 'Thursday, November 19, 2026',
      time: '08:30 AM - 01:30 PM',
      organizer: 'Punjab School Education Dept & MEDISPHERE',
      services: ['Backpack Weight to Bodyweight Ratio Assessment', 'Spinal Plumb-Line Screening', 'Student Ergonomics Booklets'],
      registeredPatients: 380,
      status: 'Confirmed'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group H. SDGs & System
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #74</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Community Health Programs & Free Medical Camps</h2>
          <p className="text-xs text-slate-500">
            Outreach mobile screening camps, rural health initiatives, and free orthopedic rehabilitation clinics.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <HeartHandshake className="w-4 h-4 text-emerald-600" />
          <span>730+ Citizens Screened This Quarter</span>
        </div>
      </div>

      {registeredCamp && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl flex items-center justify-between text-xs text-emerald-900 font-bold animate-fade-in">
          <span>✓ Pre-registration confirmed for: {registeredCamp}. An SMS e-token was sent to your phone.</span>
          <button onClick={() => setRegisteredCamp(null)} className="underline text-emerald-800">Dismiss</button>
        </div>
      )}

      {/* Camps List */}
      <div className="space-y-4">
        {camps.map(camp => (
          <div key={camp.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs flex flex-col justify-between hover:border-teal-400 transition">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded self-start sm:self-auto">
                  {camp.status}
                </span>
                <span className="text-slate-500 font-mono text-[11px] font-bold">
                  {camp.registeredPatients} Patients Pre-Registered
                </span>
              </div>

              <h3 className="font-extrabold text-sm text-slate-900">{camp.title}</h3>

              <div className="grid sm:grid-cols-2 gap-2 text-slate-600 pt-1">
                <p className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                  <span>{camp.venue}</span>
                </p>
                <p className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400 flex-shrink-0" />
                  <span>{camp.date} • {camp.time}</span>
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-slate-900 text-[11px]">Free Services Provided:</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {camp.services.map((srv, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 px-2.5 py-0.5 rounded-lg text-slate-700 text-[10px] font-medium">
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 text-[11px]">Partner: {camp.organizer}</span>
              <button
                onClick={() => setRegisteredCamp(camp.title)}
                className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition shadow-xs"
              >
                Pre-Register for Free
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
