import React from 'react';
import {
  Activity,
  ShieldAlert,
  Bone,
  HeartPulse,
  Bot,
  Leaf,
  ArrowRight,
  ShieldCheck,
  Languages,
  Smartphone,
  Globe2,
  FileCheck2,
  Lock,
  ChevronRight
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlatform: (initialRoute?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLaunchPlatform }) => {
  return (
    <div id="landingView" className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Banner Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-teal-500/20">
            <Activity className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <span className="font-black text-lg tracking-tight text-white flex items-center gap-2">
              MEDISPHERE
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                Pakistan Health OS
              </span>
            </span>
            <p className="text-[11px] text-slate-400">Integrated Clinical Care & Emergency First-Response</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onLaunchPlatform('multilingual-urdu')}
            className="text-xs font-urdu font-bold bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 px-3 py-1.5 rounded-lg transition flex items-center space-x-1.5"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>اردو پورٹل</span>
          </button>
          <button
            onClick={() => onLaunchPlatform('home-dashboard')}
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl transition flex items-center space-x-2 shadow-md shadow-teal-500/20"
          >
            <span>Launch Platform OS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-teal-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Empowering 240M Citizens Across Pakistan</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Integrated Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">Pakistani Healthcare</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From <strong>Rescue 1122 break-glass triage</strong> and interactive <strong>24-vertebrae spinal imaging</strong> to <strong>bilingual Urdu AI assistance</strong> and <strong>UN SDG carbon audits</strong>—MEDISPHERE unifies clinical records across all 80 health facets with zero dead links.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onLaunchPlatform('home-dashboard')}
              className="px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-sm rounded-xl transition flex items-center space-x-2 shadow-xl shadow-teal-500/25"
            >
              <span>Explore Platform OS (79 Modules)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onLaunchPlatform('emergency-sos')}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-black text-sm rounded-xl transition flex items-center space-x-2 shadow-lg shadow-red-600/30"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Simulate 1122 SOS</span>
            </button>
          </div>
        </div>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur text-center">
            <p className="text-2xl sm:text-3xl font-black text-teal-400">79</p>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Active Clinical Hubs</p>
            <p className="text-[10px] text-teal-300/80 mt-0.5">Distinct clinical views</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur text-center">
            <p className="text-2xl sm:text-3xl font-black text-red-400">1122</p>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Rescue Protocol</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Break-glass audit tokens</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">24</p>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Spinal Vertebrae</p>
            <p className="text-[10px] text-slate-400 mt-0.5">C1 to L5 + Sacrum/Coccyx</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur text-center">
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">7 SDGs</p>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">UN Impact Aligned</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Paper & Carbon metrics</p>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of MEDISPHERE */}
      <section className="bg-slate-950 py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-teal-400 font-bold uppercase tracking-widest text-xs">Architectural Innovation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Engineered for Real-World Clinical Impact</h2>
            <p className="text-xs text-slate-400">Solving fragmentation between public rescue services, private diagnostics, and patient home care.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div
              onClick={() => onLaunchPlatform('emergency-sos')}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/50 hover:bg-slate-800/50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5 flex items-center justify-between">
                <span>1122 Emergency SOS</span>
                <span className="text-[10px] font-mono text-red-400">View 9</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Emergency GPS coordinates, instant SMS alerts to family, and cryptographic break-glass records that protect patient privacy while saving lives.
              </p>
            </div>

            {/* Pillar 2 */}
            <div
              onClick={() => onLaunchPlatform('xray-imaging')}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:bg-slate-800/50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Bone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5 flex items-center justify-between">
                <span>Spinal Imaging Suite</span>
                <span className="text-[10px] font-mono text-teal-400">View 21</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interactive cervical, thoracic, and lumbar column with DICOM radiographic viewing, Cobb angle documentation, and standing height logs.
              </p>
            </div>

            {/* Pillar 3 */}
            <div
              onClick={() => onLaunchPlatform('physio-dashboard')}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5 flex items-center justify-between">
                <span>Physio Rehabilitation</span>
                <span className="text-[10px] font-mono text-emerald-400">View 34</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evidence-based lumbar stabilization routines, interactive session logger, VAS pain score tracking, and computer-vision posture roadmap.
              </p>
            </div>

            {/* Pillar 4 */}
            <div
              onClick={() => onLaunchPlatform('ai-assistant')}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-white mb-1.5 flex items-center justify-between">
                <span>Bilingual Health AI</span>
                <span className="text-[10px] font-mono text-cyan-400">View 56</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ask in English or Urdu. Deciphers clinical radiology summaries, drug dosing precautions, and anatomical biomechanics into clear words.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals Section */}
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
              <Leaf className="w-4 h-4" />
              <span>United Nations 2030 Sustainability Target</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Measurable Environmental & Healthcare Decarbonization
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every digital X-ray eliminates heavy chemical film processing and paper jackets (SDG 12). Remote follow-ups remove tens of thousands of urban vehicular trips in polluted metropolitan corridors (SDG 13).
            </p>
          </div>
          <button
            onClick={() => onLaunchPlatform('sdg-impact')}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl flex items-center space-x-2 flex-shrink-0 transition shadow-lg shadow-emerald-500/20"
          >
            <span>Open SDG Impact Calculator (View 79)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800 py-6 px-4 sm:px-8 text-center text-xs text-slate-500">
        <p>MEDISPHERE Health OS • Developed for National Healthcare Impact in Pakistan</p>
        <p className="text-[10px] mt-1 text-slate-600">Zero Dead Links • 80 Fully Functional Clinical Pages • Patient ID: MED-PK-98241</p>
      </footer>
    </div>
  );
};
