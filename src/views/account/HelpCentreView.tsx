import React, { useState } from 'react';
import { HelpCircle, Search, PhoneCall, MessageCircle, FileText, ChevronDown, ChevronUp, ExternalLink, LifeBuoy } from 'lucide-react';

export const HelpCentreView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Rescue 1122 emergency dispatch integrate with my profile?',
      a: 'When you tap "Trigger 1122 SOS", MEDISPHERE packages your high-accuracy GPS coordinates, critical B+ blood type, and severe Penicillin anaphylaxis alert into an encrypted short-token. This token is instantly routed into Punjab Emergency Service 1122 dispatch consoles, allowing ambulance crews to prepare before arriving on scene.'
    },
    {
      q: 'What is the "Break-Glass" clinical access override protocol?',
      a: 'In catastrophic emergencies where a patient is unconscious or unable to provide 2FA approval, certified emergency department physicians can initiate a "Break-Glass Override" using their PMDC license credentials. This override grants immediate read-only access to vital allergies, cardiac history, and spinal stability notes. Every override is immutably logged on the audit ledger and triggers instant SMS alerts to your emergency kin.'
    },
    {
      q: 'How do I download or share my DICOM spinal MRI scans with overseas doctors?',
      a: 'Navigate to "Spinal & X-Ray Imaging Centre" or "MRI/CT DICOM Viewer", select the desired study date, and click "Export Encrypted Study". You can generate a time-limited 72-hour secure view link or download the DICOM series with cryptographic integrity verification.'
    },
    {
      q: 'Can I log exercises and track my pain levels without internet connectivity?',
      a: 'Yes. MEDISPHERE utilizes progressive web application offline caching. Your daily Visual Analogue Scale (VAS) ratings and completed sets are securely queued in local device storage and automatically synchronize with your physiotherapist’s portal upon reconnecting.'
    }
  ];

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group A. Home & Account
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #8</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Help Centre & Clinical Knowledgebase</h2>
          <p className="text-xs text-slate-500">
            Platform user guides, 1122 dispatch guidelines, and 24/7 technical assistance.
          </p>
        </div>
      </div>

      {/* Support Hotlines */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-2xl flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-teal-800 uppercase">24/7 PMDC Patient Line</p>
            <p className="text-sm font-black text-teal-950 font-mono">042-111-MED-PK</p>
          </div>
        </div>

        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-emerald-800 uppercase">WhatsApp Helpdesk</p>
            <p className="text-sm font-black text-emerald-950 font-mono">+92 300 1122900</p>
          </div>
        </div>

        <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-indigo-800 uppercase">User Manual v3.2</p>
            <p className="text-xs font-bold text-indigo-900 hover:underline cursor-pointer">Download PDF (4.8MB)</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search FAQs, emergency protocols, or radiology export questions..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-brand-600 transition"
          />
        </div>

        <div className="divide-y divide-slate-100">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="py-3">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-xs font-bold text-slate-800 hover:text-teal-700 py-1 transition"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </button>
              {openFaq === idx && (
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pr-4 pl-1">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
