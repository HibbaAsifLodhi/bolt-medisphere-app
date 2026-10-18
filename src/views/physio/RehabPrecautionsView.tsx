import React from 'react';
import { ShieldAlert, AlertOctagon, CheckCircle2, XCircle, PhoneCall, ArrowRight } from 'lucide-react';

interface RehabPrecautionsViewProps {
  onNavigate?: (route: string) => void;
}

export const RehabPrecautionsView: React.FC<RehabPrecautionsViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-red-100 text-red-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #46</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Rehabilitation Precautions & Spinal Red Flags</h2>
          <p className="text-xs text-slate-500">
            Emergency red-flag symptom identification, Cauda Equina triggers, and contraindicated lumbar biomechanics.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-red-50 text-red-800 px-3 py-1.5 rounded-xl border border-red-200 text-xs font-bold self-start sm:self-auto">
          <AlertOctagon className="w-4 h-4 text-red-600" />
          <span>Immediate 1122 Escalation Protocols Active</span>
        </div>
      </div>

      {/* Critical Cauda Equina Red-Flag Box */}
      <div className="p-6 bg-red-600 text-white rounded-3xl shadow-xl space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
            <AlertOctagon className="w-7 h-7 text-white" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-black tracking-widest text-red-200">
              Surgical Emergency Level 1
            </span>
            <h3 className="text-lg font-black tracking-tight">Cauda Equina Syndrome Warning Signs</h3>
          </div>
        </div>

        <p className="text-xs text-red-100 leading-relaxed">
          If you experience ANY of the following 4 symptoms, STOP all physical exercises immediately and call Rescue 1122 or proceed to the nearest tertiary neurosurgical emergency room (Mayo Hospital Trauma / Lahore General Hospital):
        </p>

        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-red-700/80 rounded-2xl border border-red-500/60 font-semibold space-y-1">
            <span className="block font-black text-white">1. Loss of Bowel or Bladder Function</span>
            <span className="text-red-200 text-[11px]">Sudden incontinence, loss of sensation of fullness, or inability to urinate.</span>
          </div>
          <div className="p-3 bg-red-700/80 rounded-2xl border border-red-500/60 font-semibold space-y-1">
            <span className="block font-black text-white">2. Saddle Anesthesia</span>
            <span className="text-red-200 text-[11px]">Numbness or pins & needles around groin, buttocks, or perineum.</span>
          </div>
          <div className="p-3 bg-red-700/80 rounded-2xl border border-red-500/60 font-semibold space-y-1">
            <span className="block font-black text-white">3. Rapid Bilateral Foot Drop</span>
            <span className="text-red-200 text-[11px]">Sudden progressive motor weakness in both feet making walking impossible.</span>
          </div>
          <div className="p-3 bg-red-700/80 rounded-2xl border border-red-500/60 font-semibold space-y-1">
            <span className="block font-black text-white">4. Unrelenting Severe Nocturnal Pain</span>
            <span className="text-red-200 text-[11px]">Severe deep pain that cannot be eased by changing sleep or resting positions.</span>
          </div>
        </div>

        {onNavigate && (
          <button
            onClick={() => onNavigate('emergency-sos')}
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-red-700 hover:bg-red-50 rounded-xl font-black text-xs flex items-center justify-center space-x-2 transition shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Launch Rescue 1122 SOS Protocol</span>
          </button>
        )}
      </div>

      {/* Movement Guidelines: DOs vs DONTs */}
      <div className="grid md:grid-cols-2 gap-6 text-xs">
        {/* DOs */}
        <div className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-xs space-y-4">
          <h4 className="text-sm font-black text-emerald-900 flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
            Safe & Prescribed Spinal Movements (DO)
          </h4>
          <div className="space-y-2.5 text-slate-700">
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 leading-snug">
              <strong>Hip Hinging:</strong> Bend at the hips and knees while maintaining a straight, braced spine when reaching down.
            </div>
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 leading-snug">
              <strong>Short Frequent Walks:</strong> Walk on level surfaces for 15-20 minutes daily to encourage intervertebral disc nutrient diffusion.
            </div>
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 leading-snug">
              <strong>Lumbar Support Sitting:</strong> Place an ergonomic lumbar cushion at L4-L5 level during desk work and driving.
            </div>
          </div>
        </div>

        {/* DONTs */}
        <div className="bg-white p-6 rounded-3xl border border-red-200 shadow-xs space-y-4">
          <h4 className="text-sm font-black text-red-900 flex items-center">
            <XCircle className="w-5 h-5 mr-2 text-red-600" />
            Strictly Prohibited Movements (DON&apos;T)
          </h4>
          <div className="space-y-2.5 text-slate-700">
            <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 leading-snug">
              <strong>Heavy Rotational Lifting:</strong> Never twist your torso while carrying groceries or heavy objects.
            </div>
            <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 leading-snug">
              <strong>Toe Touches / Slouching:</strong> Avoid rounded lumbar spinal flexion stretches that squeeze the disc backward.
            </div>
            <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 leading-snug">
              <strong>High-Impact Running & Jumping:</strong> Avoid hard pavement running until Dr. Hamza clears the L4-L5 stability test.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
