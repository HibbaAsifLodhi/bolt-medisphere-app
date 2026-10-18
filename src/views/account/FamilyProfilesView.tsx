import React, { useState } from 'react';
import { Users, UserPlus, Heart, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface FamilyProfilesViewProps {
  currentPatient: PatientData;
  onNavigate: (route: string) => void;
}

export const FamilyProfilesView: React.FC<FamilyProfilesViewProps> = ({ currentPatient, onNavigate }) => {
  const [activeFamilyMember, setActiveFamilyMember] = useState('self');
  const [members, setMembers] = useState([
    {
      id: 'self',
      name: 'Zainab Ahmed (Self)',
      relation: 'Primary Account Holder',
      age: 32,
      blood: 'B+',
      cnic: '35201-4829104-2',
      conditions: 'L4-L5 Lumbar Disc Herniation, Mild Asthma',
      status: 'Active'
    },
    {
      id: 'mother',
      name: 'Maryam Bibi',
      relation: 'Mother (Senior Dependent)',
      age: 62,
      blood: 'O+',
      cnic: '35201-1192840-4',
      conditions: 'Hypertension, Osteoarthritis Bilateral Knees',
      status: 'Monitored'
    },
    {
      id: 'spouse',
      name: 'Dr. Tariq Ahmed',
      relation: 'Spouse (Healthcare Pro)',
      age: 36,
      blood: 'A+',
      cnic: '35201-8392019-1',
      conditions: 'No Chronic Conditions',
      status: 'Healthy'
    },
    {
      id: 'child',
      name: 'Rayyan Ahmed',
      relation: 'Son (Pediatric Dependent)',
      age: 6,
      blood: 'B+',
      cnic: '35201-XXXXXXX-B',
      conditions: 'EPI Vaccinations 100% Up to Date',
      status: 'Pediatric Care'
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group A. Home & Account
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #3</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Family Health Profiles & Dependents</h2>
          <p className="text-xs text-slate-500">
            Switch between linked family members, pediatric growth cards, and senior chronic care monitoring under one account.
          </p>
        </div>
        <button
          onClick={() => alert('Add Family Member registration modal initialized with NADRA family tree verification.')}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Dependent</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {members.map(member => (
          <div
            key={member.id}
            onClick={() => setActiveFamilyMember(member.id)}
            className={`p-5 rounded-2xl border transition cursor-pointer text-xs space-y-3 ${
              activeFamilyMember === member.id
                ? 'bg-teal-50/50 border-teal-500 ring-2 ring-teal-500/20 shadow-md'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                  {member.relation}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-1">{member.name}</h3>
                <p className="font-mono text-slate-400 text-[11px]">CNIC: {member.cnic}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-red-600 bg-red-50 border border-red-200 px-2 py-1 rounded">
                  {member.blood}
                </span>
                <p className="text-[10px] text-slate-500 mt-1">{member.age} Years Old</p>
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-slate-700">
              <strong className="text-slate-900">Active Health Summary:</strong> {member.conditions}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
              <span className="text-emerald-700 font-bold flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                {member.status}
              </span>
              <span className="font-bold text-brand-600 flex items-center">
                {activeFamilyMember === member.id ? 'Currently Viewing' : 'Switch to Profile'}
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
