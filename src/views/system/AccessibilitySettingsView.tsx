import React, { useState } from 'react';
import { Eye, Type, Volume2, CheckCircle2, ShieldCheck, Sun, Moon } from 'lucide-react';

export const AccessibilitySettingsView: React.FC = () => {
  const [fontSize, setFontSize] = useState<'Standard' | 'Large' | 'ExtraLarge'>('Standard');
  const [highContrast, setHighContrast] = useState(false);
  const [screenReaderFriendly, setScreenReaderFriendly] = useState(true);
  const [ttsSpeed, setTtsSpeed] = useState('1.0x');
  const [appliedNotice, setAppliedNotice] = useState(false);

  const handleApply = () => {
    setAppliedNotice(true);
    setTimeout(() => setAppliedNotice(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group H. SDGs & System
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #75</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Accessibility, Typography & Universal Inclusion</h2>
          <p className="text-xs text-slate-500">
            WCAG 2.1 AA compliant typography scaling, high-contrast modes, and screen-reader assistance (SDG 10).
          </p>
        </div>
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5 transition shadow-xs self-start sm:self-auto"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Apply Accessibility Profile</span>
        </button>
      </div>

      {appliedNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between font-bold animate-fade-in">
          <span>✓ Universal accessibility profile updated across current user session.</span>
          <span className="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded text-[10px] font-mono">WCAG 2.1 AA</span>
        </div>
      )}

      {/* Settings Grid */}
      <div className="grid md:grid-cols-2 gap-6 text-xs">
        {/* Typography Scaling */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5">
            <Type className="w-5 h-5 text-teal-600" />
            <h3 className="font-extrabold text-sm text-slate-900">Font Size & Display Scale</h3>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Standard', label: '100% (Default)', desc: 'Standard UI' },
              { id: 'Large', label: '115% (Large)', desc: 'Comfortable' },
              { id: 'ExtraLarge', label: '130% (Senior)', desc: 'High Visibility' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFontSize(item.id as any)}
                className={`p-3 rounded-2xl border text-center transition ${
                  fontSize === item.id
                    ? 'bg-teal-50 border-teal-500 text-teal-900 ring-2 ring-teal-500/20 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="block text-xs font-black">{item.label}</span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">{item.desc}</span>
              </button>
            ))}
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <span className="font-bold text-slate-800 text-[11px]">Live Preview:</span>
            <p className={`text-slate-700 transition-all ${
              fontSize === 'Standard' ? 'text-xs' : fontSize === 'Large' ? 'text-sm font-semibold' : 'text-base font-extrabold'
            }`}>
              &ldquo;Zainab Ahmed: Blood Type B+, Penicillin Anaphylaxis Alert, L4-L5 Lumbar Spine Rehab.&rdquo;
            </p>
          </div>
        </div>

        {/* Contrast & Assistive Modes */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center space-x-2.5">
            <Eye className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-sm text-slate-900">Visual Contrast & Audio</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <span className="font-bold text-slate-900 block">High Contrast Monochrome Mode</span>
                <span className="text-slate-500 text-[11px]">Enhanced contrast borders for low-vision patients</span>
              </div>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={e => setHighContrast(e.target.checked)}
                className="h-4 w-4 rounded text-brand-600"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <span className="font-bold text-slate-900 block">Screen Reader ARIA Enhancement</span>
                <span className="text-slate-500 text-[11px]">Structured semantic landmarks for TalkBack & NVDA</span>
              </div>
              <input
                type="checkbox"
                checked={screenReaderFriendly}
                onChange={e => setScreenReaderFriendly(e.target.checked)}
                className="h-4 w-4 rounded text-brand-600"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Text-to-Speech (TTS) Speed</label>
              <select
                value={ttsSpeed}
                onChange={e => setTtsSpeed(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium"
              >
                <option value="0.75x">0.75x (Slower & Deliberate for Urdu/English)</option>
                <option value="1.0x">1.0x (Standard Conversational Speed)</option>
                <option value="1.25x">1.25x (Fast Reading)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
