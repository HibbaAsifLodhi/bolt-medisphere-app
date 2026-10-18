import React from 'react';
import { Megaphone, Share2, Download, Languages, HeartPulse, ShieldAlert, Award } from 'lucide-react';

export const HealthAwarenessView: React.FC = () => {
  const campaigns = [
    {
      id: 'c-1',
      titleEnglish: 'Protect Your Spine: Ergonomics in the Workplace & Home',
      titleUrdu: 'کمر کا درد اور درست طرزِ زندگی: مہروں کی حفاظت',
      tag: 'Spine Health & SDG 3',
      color: 'border-teal-500 bg-teal-50/50',
      description: 'Educational drive across Pakistani offices and universities raising awareness on lumbar posture, avoiding heavy forward bending, and early signs of disc herniation.',
      reach: '450,000+ Citizens Reached'
    },
    {
      id: 'c-2',
      titleEnglish: 'Rescue 1122 Golden Hour: Stroke & Spinal Trauma First Response',
      titleUrdu: 'ریسکیو 1122 گولڈن آور: فالج اور ریڑھ کی ہڈی کی چوٹ کا بروقت علاج',
      tag: 'Emergency Response',
      color: 'border-red-400 bg-red-50/50',
      description: 'Standardizing spine immobilization on accident sites across Punjab. Never move an unconscious trauma patient without a rigid cervical collar.',
      reach: '1.2 Million Citizens Reached'
    },
    {
      id: 'c-3',
      titleEnglish: 'Say No to Antibiotic Over-Prescription & Self-Medication',
      titleUrdu: 'اینٹی بائیوٹک کا غیر ضروری استعمال روکیں',
      tag: 'Public Safety',
      color: 'border-indigo-400 bg-indigo-50/50',
      description: 'National campaign preventing antimicrobial resistance. Antibiotics do not cure spinal disc pain or non-bacterial back spasms.',
      reach: '820,000+ Citizens Reached'
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
            <span className="text-xs text-slate-400 font-mono">Section #73</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">National Public Health Awareness Campaigns</h2>
          <p className="text-xs text-slate-500">
            Bilingual community health education, spinal strain prevention posters, and emergency golden hour awareness.
          </p>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="space-y-4">
        {campaigns.map(camp => (
          <div key={camp.id} className={`p-6 rounded-3xl border shadow-xs space-y-3 text-xs ${camp.color}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 self-start sm:self-auto">
                {camp.tag}
              </span>
              <span className="font-mono text-slate-500 text-[11px] font-bold">{camp.reach}</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-black text-slate-900">{camp.titleEnglish}</h3>
              <p className="text-sm font-bold text-teal-900 font-urdu">{camp.titleUrdu}</p>
            </div>

            <p className="text-slate-700 leading-relaxed font-medium">
              {camp.description}
            </p>

            <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2">
              <button
                onClick={() => alert(`Downloaded high-res community infographic in Urdu & English: ${camp.titleEnglish}`)}
                className="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl font-bold flex items-center space-x-1.5 text-slate-800 transition"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>Download Printable Poster (Urdu / EN)</span>
              </button>
              <button
                onClick={() => alert('Campaign link copied to clipboard. Share with your community!')}
                className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center space-x-1.5 transition shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Campaign</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
