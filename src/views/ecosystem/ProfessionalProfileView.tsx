import React from 'react';
import { BadgeCheck, ShieldCheck, Award, Calendar, Clock, MapPin, Phone, Star, Building2 } from 'lucide-react';

export const ProfessionalProfileView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #70</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Healthcare Professional Profile & PMDC Verification</h2>
          <p className="text-xs text-slate-500">
            Licensed practitioner credentialing, institutional affiliations, and clinical specialty registrations.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <BadgeCheck className="w-4 h-4 text-emerald-600" />
          <span>PMDC Verified Practitioner</span>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6 text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pb-6 border-b border-slate-100">
          <div className="w-20 h-20 rounded-3xl bg-teal-700 text-white font-black text-2xl flex items-center justify-center shadow-md">
            HM
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-black text-slate-900">Dr. Hamza Malik, DPT, MS-OMPT</h3>
              <span className="text-[10px] font-mono font-bold bg-teal-100 text-teal-800 px-2 py-0.5 rounded">
                PMDC # 49201-P
              </span>
            </div>
            <p className="text-xs text-teal-800 font-bold">Consultant Orthopedic Spine Physical Therapist</p>
            <p className="text-slate-500 text-[11px] flex items-center">
              <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" />
              Mayo Hospital Lahore • King Edward Medical University Faculty
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Clinical Experience</span>
            <p className="text-lg font-black text-slate-900 font-mono">12+ Years</p>
            <p className="text-[11px] text-slate-500">Spine Rehabilitation</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Patient Rating</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <p className="text-lg font-black text-slate-900 font-mono">4.92 / 5.0</p>
            </div>
            <p className="text-[11px] text-slate-500">240+ Verified Reviews</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Consultation Slots</span>
            <p className="text-lg font-black text-emerald-600 font-mono">Mon — Fri</p>
            <p className="text-[11px] text-slate-500">09:00 AM - 02:00 PM</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">OPD Room</span>
            <p className="text-lg font-black text-indigo-700 font-mono">Room 14-B</p>
            <p className="text-[11px] text-slate-500">Mayo Outpatient Block</p>
          </div>
        </div>

        {/* Specialty Expertise */}
        <div className="space-y-2 pt-2">
          <span className="font-bold text-slate-900 block text-xs">Registered Clinical Competencies:</span>
          <div className="flex flex-wrap gap-2">
            {[
              'Lumbar Spine McKenzie Decompression',
              'Post-Surgical Discectomy Rehabilitation',
              'Gait & Plumb-Line Posture Re-Education',
              'Myofascial Trigger Point Dry Needling',
              'Sciatic Nerve Mobilization & Flossing'
            ].map((spec, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-800 rounded-xl font-medium border border-slate-200">
                ✓ {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
