import React, { useState } from 'react';
import { CalendarCheck, Printer, Share2, Sparkles, CheckSquare, Square, MessageSquare } from 'lucide-react';

export const AiAppointmentPrepView: React.FC = () => {
  const [specialistType, setSpecialistType] = useState('Consultant Spine Surgeon');
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Based on my recent MRI at Mayo Hospital, is my L4-L5 protrusion continuing to heal conservatively, or are there any indications for microdiscectomy?', checked: true },
    { id: 2, text: 'What is the safe timeline for weaning off Gabapentin 300mg now that my VAS pain score is down to 2.8/10?', checked: true },
    { id: 3, text: 'Can I safely resume driving 45 minutes to work without compromising the healing annulus fibrosus?', checked: true },
    { id: 4, text: 'Are there any updated limitations regarding my bone mineral density or dietary calcium supplementation?', checked: false },
    { id: 5, text: 'When should my next follow-up MRI radiograph be scheduled to compare canal dimensions?', checked: false }
  ]);

  const toggleQ = (id: number) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, checked: !q.checked } : q));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group F. AI Assistant
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #60</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Specialist Consultation Preparation Assistant (AI)</h2>
          <p className="text-xs text-slate-500">
            Generate high-yield clinical question agendas for your upcoming orthopedic or physiotherapy consultations.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>Print Question Agenda</span>
        </button>
      </div>

      {/* Specialist Selector */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs">
        <label className="font-bold text-slate-800 block">Select Consulting Specialist Discipline:</label>
        <div className="flex flex-wrap gap-2">
          {['Consultant Spine Surgeon', 'Physical Therapy Specialist (DPT)', 'General Physician (GP)', 'Neurologist'].map(spec => (
            <button
              key={spec}
              onClick={() => setSpecialistType(spec)}
              className={`px-4 py-2 rounded-xl border transition ${
                specialistType === spec
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Question Agenda Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase text-indigo-700">AI Generated Clinical Agenda</span>
            <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">Top Priority Questions for {specialistType}</h3>
          </div>
          <span className="text-slate-400 text-[11px] font-mono">5 Questions Formulated</span>
        </div>

        <div className="space-y-3">
          {questions.map(q => (
            <div
              key={q.id}
              onClick={() => toggleQ(q.id)}
              className={`p-4 rounded-2xl border flex items-start space-x-3 cursor-pointer transition ${
                q.checked ? 'bg-indigo-50/50 border-indigo-200 text-slate-900' : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <div className="mt-0.5">
                {q.checked ? <CheckSquare className="w-4 h-4 text-indigo-600" /> : <Square className="w-4 h-4 text-slate-400" />}
              </div>
              <div className="space-y-1">
                <span className="font-semibold leading-relaxed block">{q.text}</span>
                <span className="text-[10px] text-slate-400 font-mono">Question #{q.id}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-[11px]">
          Tip: You can export this checklist to WhatsApp or hand a printed physical copy to your doctor during clinical rounds.
        </div>
      </div>
    </div>
  );
};
