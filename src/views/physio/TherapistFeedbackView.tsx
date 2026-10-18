import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, User, Mic, Clock, ShieldCheck, Paperclip } from 'lucide-react';

export const TherapistFeedbackView: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      sender: 'Dr. Hamza Malik, DPT',
      role: 'Attending Physiotherapist',
      text: 'Salam Zainab. I reviewed your goniometry and session compliance logs from yesterday. Your prone cobra hold time has reached 15 seconds consistently with no drop in form. Excellent progress.',
      time: 'Yesterday, 04:30 PM',
      isTherapist: true
    },
    {
      id: 'm2',
      sender: 'Zainab Ahmed',
      role: 'Patient',
      text: 'Wa alaikum salam Doctor. Thank you! I felt a small pulling sensation in my left calf during the 3rd set. Should I reduce the hold to 10 seconds or continue?',
      time: 'Yesterday, 07:15 PM',
      isTherapist: false
    },
    {
      id: 'm3',
      sender: 'Dr. Hamza Malik, DPT',
      role: 'Attending Physiotherapist',
      text: 'If the pulling is localized to the calf and doesn\'t turn into sharp shooting electricity, it is normal hamstring/neural mobility tension. Keep it at 12 seconds for the 3rd set over the next 3 days, and let me know on Friday.',
      time: 'Today, 09:10 AM',
      isTherapist: true
    }
  ]);

  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setMessages(prev => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        sender: 'Zainab Ahmed',
        role: 'Patient',
        text: inputVal,
        time: 'Just now',
        isTherapist: false
      }
    ]);
    setInputVal('');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #45</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Therapist Feedback & Direct Clinical Messaging</h2>
          <p className="text-xs text-slate-500">
            Secure, end-to-end encrypted clinical advisory channel with your assigned physical rehabilitation specialist.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>PMDC Verified Doctor Channel</span>
        </div>
      </div>

      {/* Message Feed Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col h-[520px] overflow-hidden">
        {/* Top Doctor Snapshot */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
              HM
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">Dr. Hamza Malik, DPT</h3>
              <p className="text-[11px] text-slate-500">Consultant Spine Specialist • Mayo Hospital Outpatient</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
            Online Today
          </span>
        </div>

        {/* Scrollable Conversation */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.isTherapist ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-xl p-4 rounded-2xl shadow-xs space-y-1 ${
                  msg.isTherapist
                    ? 'bg-slate-100 text-slate-900 rounded-tl-none border border-slate-200/80'
                    : 'bg-brand-600 text-white rounded-tr-none'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold opacity-75 mb-1">
                  <span>{msg.sender}</span>
                  <span>{msg.time}</span>
                </div>
                <p className="leading-relaxed text-xs">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center space-x-2">
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Type your rehabilitation query or sensation update..."
            className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-600 transition"
          />
          <button
            type="submit"
            className="p-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl transition flex items-center justify-center shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
