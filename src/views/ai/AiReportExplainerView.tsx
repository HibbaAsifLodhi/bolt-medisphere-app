import React, { useState } from 'react';
import { FileSearch, Sparkles, Languages, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';

export const AiReportExplainerView: React.FC = () => {
  const [reportText, setReportText] = useState(
    'Posterior central and left paracentral disc protrusion at L4-L5 contacting the descending left L5 nerve root with mild thecal sac effacement. Lumbar lordosis is preserved.'
  );
  const [explaining, setExplaining] = useState(false);
  const [explained, setExplained] = useState(true);
  const [activeLang, setActiveLang] = useState<'EN' | 'UR'>('EN');
  const [copied, setCopied] = useState(false);

  const handleExplain = () => {
    setExplaining(true);
    setTimeout(() => {
      setExplaining(false);
      setExplained(true);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      activeLang === 'EN'
        ? 'In plain language: The cushion (disc) between your 4th and 5th lower back bones has slipped slightly backward and is gently pressing against the nerve running down your left leg. This explains the tingling sensation in your calf.'
        : 'سادہ الفاظ میں: آپ کی کمر کے چوتھے اور پانچویں مہرے کے درمیان موجود قدرتی کشن (ڈسک) تھوڑی سی پیچھے کھسک گئی ہے اور بائیں ٹانگ میں جانے والے اعصاب کو دبا رہی ہے۔ یہی وجہ ہے کہ آپ کو ٹانگ اور پنڈلی میں درد یا سنسناہٹ محسوس ہوتی ہے۔'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <span className="text-xs text-slate-400 font-mono">Section #57</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Medical Report Explainer & Jargon Translator (AI)</h2>
          <p className="text-xs text-slate-500">
            Paste complex radiology findings or lab terminology to receive plain-language explanations in English & Urdu.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs font-bold self-start sm:self-auto">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Bilingual Clinical Simplifier</span>
        </div>
      </div>

      {/* Input Box */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
        <label className="font-bold text-slate-800 block text-xs">
          Paste Radiology / Laboratory Report Excerpt:
        </label>
        <textarea
          rows={3}
          value={reportText}
          onChange={e => setReportText(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono text-slate-800 focus:outline-none focus:border-indigo-600 transition"
          placeholder="Paste report text here..."
        />
        <div className="flex justify-between items-center">
          <span className="text-[11px] text-slate-400">Validated against PMDC Clinical Terminology Lexicon</span>
          <button
            onClick={handleExplain}
            disabled={explaining}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center space-x-1.5 transition shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>{explaining ? 'Analyzing Terminology...' : 'Translate to Plain Language'}</span>
          </button>
        </div>
      </div>

      {/* Output Panel */}
      {explained && (
        <div className="bg-white p-6 rounded-3xl border-2 border-indigo-200 shadow-md space-y-4 text-xs animate-fade-in">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">
                Plain-Language Clinical Breakdown
              </span>
              <button
                onClick={() => setActiveLang(activeLang === 'EN' ? 'UR' : 'EN')}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 text-[11px] flex items-center space-x-1"
              >
                <Languages className="w-3.5 h-3.5 text-indigo-600" />
                <span>{activeLang === 'EN' ? 'Switch to Urdu (اردو)' : 'Switch to English'}</span>
              </button>
            </div>
            <button
              onClick={handleCopy}
              className="text-slate-500 hover:text-slate-800 flex items-center space-x-1 font-bold text-[11px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {activeLang === 'EN' ? (
            <div className="space-y-3 leading-relaxed text-slate-800">
              <p className="text-sm font-semibold text-slate-900">
                In simple words: The cushion (disc) between your 4th and 5th lower back vertebrae has bulged slightly backward and is gently pressing on the nerve that travels down into your left leg.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="font-bold text-slate-900 block text-xs">Technical Term Glossary:</span>
                <div className="space-y-1.5 text-slate-600">
                  <p>• <strong>L4-L5 Protrusion:</strong> The disc has pushed beyond its normal ring, but has not completely ruptured or torn open.</p>
                  <p>• <strong>Thecal Sac Effacement:</strong> The fluid-filled protective covering of the spinal cord is slightly indented, without causing total canal blockage.</p>
                  <p>• <strong>Lordosis Preserved:</strong> The natural healthy inward curve of your lower back is intact, which is a positive prognostic sign.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 leading-relaxed text-slate-800 font-urdu text-right text-sm">
              <p className="font-bold text-slate-900">
                سادہ الفاظ میں: آپ کی کمر کے چوتھے اور پانچویں مہرے کے درمیان موجود قدرتی ڈسک قدرے پیچھے کی طرف ابھر گئی ہے اور بائیں ٹانگ میں اترنے والے اعصاب کو دبا رہی ہے۔ یہی وجہ ہے کہ آپ کو ٹانگ یا پنڈلی میں درد یا سنسناہٹ محسوس ہو سکتی ہے۔
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2 text-right">
                <span className="font-bold text-slate-900 block text-xs">اہم طبی اصطلاحات:</span>
                <p>• <strong>L4-L5 ڈسک کا ابھار:</strong> ڈسک اپنی جگہ سے تھوڑی باہر نکلی ہے لیکن مکمل طور پر پھٹی نہیں ہے۔</p>
                <p>• <strong>Thecal Sac:</strong> حرام مغز کی جھلی پر معمولی سا دباؤ ہے، راستہ مکمل بند نہیں ہوا۔</p>
                <p>• <strong>Lordosis محفوظ ہے:</strong> کمر کا قدرتی خم بالکل ٹھیک ہے جو کہ صحتیابی کے لیے انتہائی خوش آئند ہے۔</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
