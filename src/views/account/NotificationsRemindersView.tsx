import React, { useState } from 'react';
import { Bell, Clock, MessageSquare, Send, CheckCircle2, Smartphone, Volume2, Plus } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface NotificationsRemindersViewProps {
  patient: PatientData;
}

export const NotificationsRemindersView: React.FC<NotificationsRemindersViewProps> = ({ patient }) => {
  const [channels, setChannels] = useState({
    sms: true,
    whatsapp: true,
    sound: true,
    email: false
  });

  const [reminders, setReminders] = useState([
    { id: 'rem-1', time: '08:00 AM', title: 'Gabapentin 300mg + Standing Posture Calibration', type: 'Medication', enabled: true },
    { id: 'rem-2', time: '11:30 AM', title: 'Lumbar Decompression & Prone Cobra (15-min Break)', type: 'Physical Therapy', enabled: true },
    { id: 'rem-3', time: '02:00 PM', title: 'Disc Rehydration: 500ml Water Intake Check', type: 'Hydration', enabled: true },
    { id: 'rem-4', time: '08:30 PM', title: 'Hot Pack Therapy (20 mins) & Ergonomic Bedding Setup', type: 'Spine Care', enabled: true }
  ]);

  const [testSent, setTestSent] = useState(false);

  const toggleReminder = (id: string) => {
    setReminders(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const handleSendTestSms = () => {
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group A. Home & Account
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #7</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Notifications & Clinical Reminders</h2>
          <p className="text-xs text-slate-500">
            Automated WhatsApp reminders, medication alarms, and scheduled spinal decompression alerts.
          </p>
        </div>
        <button
          onClick={handleSendTestSms}
          disabled={testSent}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <Send className="w-4 h-4" />
          <span>{testSent ? '✓ SMS Dispatched via PTCL' : 'Send Test WhatsApp/SMS'}</span>
        </button>
      </div>

      {testSent && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between animate-fade-in">
          <span className="font-semibold">
            Test Notification sent to +92 300 8472910: &ldquo;[MEDISPHERE Reminder] Time for Prone Cobra stretch (15s hold). Neutral spine!&rdquo;
          </span>
          <span className="text-[10px] font-mono bg-emerald-200 px-2 py-0.5 rounded">Delivered</span>
        </div>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Schedule */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-teal-600" />
                Active Daily Care Schedule
              </h3>
              <span className="text-xs text-teal-700 font-semibold">{reminders.filter(r => r.enabled).length} Active</span>
            </div>

            <div className="space-y-3">
              {reminders.map(rem => (
                <div
                  key={rem.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition ${
                    rem.enabled ? 'bg-slate-50 border-slate-200' : 'bg-slate-100/50 border-slate-200/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs font-black text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                      {rem.time}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{rem.title}</p>
                      <span className="text-[10px] font-medium text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                        {rem.type}
                      </span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rem.enabled}
                      onChange={() => toggleReminder(rem.id)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Notification Channels */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-bold text-slate-900 flex items-center">
              <Bell className="w-4 h-4 mr-2 text-slate-700" />
              Delivery Channels
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center font-semibold text-slate-800">
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                  WhatsApp Webhook
                </span>
                <input
                  type="checkbox"
                  checked={channels.whatsapp}
                  onChange={e => setChannels(prev => ({ ...prev, whatsapp: e.target.checked }))}
                  className="rounded text-brand-600 h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center font-semibold text-slate-800">
                  <Smartphone className="w-4 h-4 mr-2 text-teal-600" />
                  Pakistan SMS Gateway
                </span>
                <input
                  type="checkbox"
                  checked={channels.sms}
                  onChange={e => setChannels(prev => ({ ...prev, sms: e.target.checked }))}
                  className="rounded text-brand-600 h-4 w-4"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center font-semibold text-slate-800">
                  <Volume2 className="w-4 h-4 mr-2 text-indigo-600" />
                  App Audio Chime
                </span>
                <input
                  type="checkbox"
                  checked={channels.sound}
                  onChange={e => setChannels(prev => ({ ...prev, sound: e.target.checked }))}
                  className="rounded text-brand-600 h-4 w-4"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-[11px]">
              Critical Rescue 1122 dispatch broadcasts bypass channel silences during active emergency state.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
