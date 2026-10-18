import React, { useState } from 'react';
import { Sparkles, Dumbbell, ShieldCheck, HelpCircle, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const AiPhysioGuideView: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState('My lower back feels tight during the prone cobra stretch');

  const troubleshootingMap: Record<string, { answer: string; cue: string; caution: string }> = {
    'My lower back feels tight during the prone cobra stretch': {
      answer: 'A mild tightness or paraspinal muscle fatigue in the lower back during the prone cobra is expected as the erector spinae contract. However, sharp pain or radiating electricity down the leg means you are over-arching.',
      cue: 'Modification: Do not lift your chest more than 2-3 inches off the ground. Squeeze your gluteal muscles and press your pubic bone gently into the mat to brace the pelvis.',
      caution: 'Stop immediately if pain shoots into the left buttock or calf.'
    },
    'Can I perform bodyweight squats with an L4-L5 disc protrusion?': {
      answer: 'Yes, but strictly with a neutral spine and limited range of motion (quarter or box squats). Full deep squats cause lumbar flexion at the bottom ("butt wink"), which significantly increases intradiscal hydraulic pressure at L4-L5.',
      cue: 'Modification: Squat to a chair or bench at 90 degrees knee bend. Keep your chest up and push your hips backward like sitting into a seat.',
      caution: 'Avoid barbell back squats or adding external spinal loading until Phase 3.'
    },
    'How do I engage my deep core without holding my breath?': {
      answer: 'The deep core (Transverse Abdominis) functions independently of your diaphragm. Practice the "Drawing-In Maneuver" by gently pulling your belly button toward your spine as if zipping up tight trousers.',
      cue: 'Modification: Place your fingers 1 inch inside your hip bones. Cough gently to feel the muscle tighten, then maintain 20% of that tension while counting out loud from 1 to 10.',
      caution: 'Never hold your breath, as the Valsalva maneuver spikes blood pressure and spinal disc strain.'
    }
  };

  const current = troubleshootingMap[selectedPrompt] || troubleshootingMap['My lower back feels tight during the prone cobra stretch'];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group F. AI Assistant
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #59</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Physiotherapy AI Movement & Form Guide</h2>
          <p className="text-xs text-slate-500">
            Interactive biomechanical troubleshooting and therapeutic exercise form adjustments.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs font-bold self-start sm:self-auto">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Biomechanical Form Assistant</span>
        </div>
      </div>

      {/* Common Queries Carousel */}
      <div className="space-y-2 text-xs">
        <label className="font-bold text-slate-700 block">Select a Common Physical Therapy Question:</label>
        <div className="grid sm:grid-cols-3 gap-3">
          {Object.keys(troubleshootingMap).map((q, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPrompt(q)}
              className={`p-4 rounded-2xl border text-left font-bold transition flex flex-col justify-between ${
                selectedPrompt === q
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-950 ring-2 ring-indigo-500/20 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <span>{q}</span>
              <span className="text-[10px] font-semibold text-indigo-600 mt-3 flex items-center">
                Analyze Movement <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Clinical Breakdown Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs animate-fade-in">
        <div className="flex justify-between items-center pb-3 border-b border-slate-100">
          <span className="text-[10px] font-bold uppercase bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded">
            Therapist Biomechanical Guidance
          </span>
          <span className="text-[11px] text-slate-400 font-mono">Verified Clinical Protocol</span>
        </div>

        <p className="text-sm font-semibold text-slate-900 leading-relaxed">
          {current.answer}
        </p>

        <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-1">
          <span className="font-black text-teal-900 flex items-center text-xs">
            <CheckCircle2 className="w-4 h-4 mr-1.5 text-teal-700" />
            Recommended Form Modification
          </span>
          <p className="text-teal-800 leading-relaxed text-[11px]">{current.cue}</p>
        </div>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
          <span className="font-black text-amber-900 flex items-center text-xs">
            <AlertTriangle className="w-4 h-4 mr-1.5 text-amber-600" />
            Clinical Precaution Alert
          </span>
          <p className="text-amber-800 leading-relaxed text-[11px]">{current.caution}</p>
        </div>
      </div>
    </div>
  );
};
