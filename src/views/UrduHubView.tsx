import React from 'react';
import { ShieldAlert, Bone, HeartPulse, Leaf, ArrowRight, Languages } from 'lucide-react';

interface UrduHubViewProps {
  onNavigate: (route: string) => void;
}

export const UrduHubView: React.FC<UrduHubViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <span>قومی زبان میں صحت کی رہنمائی</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
              Urdu Health Hub
            </span>
          </h2>
          <p className="text-xs text-slate-500">
            Accessible health education in Pakistan's national language, ensuring equal digital access (SDG 10).
          </p>
        </div>
        <button
          onClick={() => onNavigate('home-dashboard')}
          className="text-xs bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1 transition"
        >
          <span>English View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Urdu Hero Card */}
      <div className="bg-gradient-to-l from-emerald-950 via-teal-900 to-[#0b192c] text-white rounded-2xl p-6 shadow-lg text-right font-urdu space-y-3 border border-emerald-800/40">
        <span className="bg-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-sans inline-block">
          میڈی سفیئر ڈیجیٹل صحت کا نظام
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold leading-relaxed">
          ایک مکمل، آسان اور محفوظ ڈیجیٹل ہیلتھ کیئر نیٹ ورک
        </h3>
        <p className="text-teal-100 text-sm leading-loose">
          میڈی سفیئر کا مقصد پاکستان بھر میں ہر مریض تک ایمرجنسی سروسز (1122)، ہسپتالوں کے ریکارڈ، فزیو تھراپی اور ماہر ڈاکٹرز کی رہنمائی کو آسان ترین انداز میں پہنچانا ہے۔
        </p>
      </div>

      {/* Urdu Interactive Modules Grid */}
      <div className="grid md:grid-cols-2 gap-4 text-right font-urdu">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 bg-red-100 text-red-700 rounded-lg">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-red-700">۱. ایمرجنسی 1122 بٹن</h4>
            </div>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              کسی بھی حادثے کی صورت میں براہ راست ایمرجنسی کال اور بغیر وقت ضائع کیے ضروری طبی معلومات حاصل کریں۔
            </p>
          </div>
          <button
            onClick={() => onNavigate('emergency-sos')}
            className="mt-3 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-sans font-bold transition text-center"
          >
            ایمرجنسی سینٹر کھولیں (1122 SOS)
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 bg-teal-100 text-teal-700 rounded-lg">
                <Bone className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-teal-800">۲. مہروں اور ریڑھ کی ہڈی کا ایکسرے</h4>
            </div>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              ریڑھ کی ہڈی کے تمام چوبیس (24) مہروں کی مکمل تفصیلات اور ڈاکٹرز کی ہدایات آسان اردو میں دیکھیں۔
            </p>
          </div>
          <button
            onClick={() => onNavigate('xray-imaging')}
            className="mt-3 py-2 px-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-sans font-bold transition text-center"
          >
            ایکسرے لیب دیکھیں (Spine Lab)
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                <HeartPulse className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-emerald-800">۳. روزمرہ فزیو تھراپی ورزشیں</h4>
            </div>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              کمر درد اور مہروں کے تناؤ کو کم کرنے کے لیے ماہر فزیو تھراپسٹ کے بتائے ہوئے طریقے اور روزانہ کا ریکارڈ۔
            </p>
          </div>
          <button
            onClick={() => onNavigate('physio-dashboard')}
            className="mt-3 py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-sans font-bold transition text-center"
          >
            ورزش کا شیڈول (Physio Care)
          </button>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <Leaf className="w-5 h-5" />
              </span>
              <h4 className="text-lg font-bold text-blue-800">۴. ماحول اور کاغذ کی بچت (SDGs)</h4>
            </div>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              ڈیجیٹل رپورٹس کے ذریعے اب تک سینکڑوں صفحات کاغذ اور پٹرول کے اخراجات کی بچت کا شفاف تخمینہ۔
            </p>
          </div>
          <button
            onClick={() => onNavigate('sdg-impact')}
            className="mt-3 py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-sans font-bold transition text-center"
          >
            ماحولیاتی بچت کا حساب (SDG Hub)
          </button>
        </div>
      </div>
    </div>
  );
};
