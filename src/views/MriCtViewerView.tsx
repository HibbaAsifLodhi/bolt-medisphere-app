import React, { useState } from 'react';
import {
  Layers,
  Scan,
  ZoomIn,
  Sun,
  Eye,
  Sliders,
  Maximize2,
  FileText,
  RotateCw
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface MriCtViewerViewProps {
  patient: PatientData;
}

export const MriCtViewerView: React.FC<MriCtViewerViewProps> = ({ patient }) => {
  const [plane, setPlane] = useState<'sagittal' | 'axial' | 'coronal'>('sagittal');
  const [sliceIndex, setSliceIndex] = useState<number>(14);
  const [weighting, setWeighting] = useState<'T2' | 'T1'>('T2');
  const [contrastHigh, setContrastHigh] = useState<boolean>(false);
  const [showMeasurements, setShowMeasurements] = useState<boolean>(true);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              High-Field 1.5T MRI Suite
            </span>
            <span className="text-xs text-slate-400 font-mono">Series: LUMBAR-SPINE-SE04</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">MRI & CT Scan Multi-Planar Viewer</h2>
          <p className="text-xs text-slate-500">
            Interactive multi-slice cross-sectional DICOM viewport with sagittal and axial nerve root evaluation.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono bg-slate-900 text-teal-300 px-3 py-1.5 rounded-lg font-bold">
            Slice: {sliceIndex} / 24 ({plane.toUpperCase()})
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Main Canvas Viewport (7 Cols) */}
        <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-5 text-white shadow-2xl flex flex-col justify-between space-y-4">
          {/* Top Viewport Header */}
          <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="font-bold text-slate-200">Patient: {patient.name} • L-Spine {weighting}-Weighted</span>
            </div>
            <div className="flex items-center space-x-3 font-mono text-[11px] text-teal-300">
              <span>FOV: 260mm</span>
              <span>•</span>
              <span>Matrix: 512×512</span>
            </div>
          </div>

          {/* Interactive Simulated Slice Screen */}
          <div
            className={`h-72 sm:h-96 bg-black rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden transition-all ${
              contrastHigh ? 'brightness-125 contrast-150' : ''
            }`}
          >
            {/* Background Medical Radiance Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-950/30 via-slate-950 to-black pointer-events-none"></div>

            {/* Anatomical Slice Visual Representation */}
            <div className="text-center space-y-3 z-10 select-none">
              <Scan className="w-24 h-24 mx-auto text-teal-500/80" />
              <div className="space-y-1">
                <p className="text-sm font-mono font-bold text-teal-300">
                  {plane.toUpperCase()} VIEW — SLICE #{sliceIndex} OF 24
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  {weighting === 'T2' ? 'T2 Turbo Spin Echo (Fluid Hyperintense)' : 'T1 Spin Echo (Anatomical Bone)'}
                </p>
              </div>
            </div>

            {/* Caliper Measurement Overlay */}
            {showMeasurements && (
              <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-teal-500/50 p-2.5 rounded-lg text-[10px] font-mono text-teal-300 space-y-1 backdrop-blur shadow-md">
                <p className="font-bold text-white flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>L4-L5 Focal Protrusion: 4.8 mm</span>
                </p>
                <p>Thecal Sac AP Diameter: 10.4 mm (Mild Effacement)</p>
                <p>Bilateral Neural Foramina: Uncompromised</p>
              </div>
            )}

            <div className="absolute top-3 right-3 text-[10px] font-mono bg-slate-900/80 border border-slate-700 px-2 py-1 rounded text-slate-300">
              TR: 3200ms • TE: 104ms
            </div>
          </div>

          {/* Interactive Scrubbing Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Slice Navigation (Scrubber)</span>
              <span className="font-mono text-white font-bold">{sliceIndex} / 24</span>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              value={sliceIndex}
              onChange={e => setSliceIndex(Number(e.target.value))}
              aria-label="MRI Slice Scrubber"
              className="w-full accent-teal-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          {/* Viewport Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800 text-xs">
            <div className="flex space-x-2">
              <button
                onClick={() => setContrastHigh(!contrastHigh)}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
                  contrastHigh ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Contrast Window</span>
              </button>
              <button
                onClick={() => setShowMeasurements(!showMeasurements)}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5 transition ${
                  showMeasurements ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Measurement Calipers</span>
              </button>
            </div>
            <div className="flex space-x-1">
              {(['T2', 'T1'] as const).map(w => (
                <button
                  key={w}
                  onClick={() => setWeighting(w)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    weighting === w ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {w}-Weighted
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Settings & Radiologist Report (5 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Planar Selector */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>Anatomical Projection Plane</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {(['sagittal', 'axial', 'coronal'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => setPlane(p)}
                  className={`py-2 px-1 text-center rounded-xl font-bold uppercase transition ${
                    plane === p
                      ? 'bg-brand-600 text-white shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Radiologist Formal Impression */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">Official Radiology Impression</span>
              <span className="text-[10px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">FCPS Validated</span>
            </div>
            <div className="space-y-2 text-slate-700 leading-relaxed">
              <p>
                <strong>1. Lumbar Disc Morphology:</strong> Broad-based posterocentral disc protrusion at L4-L5 measuring 4.8mm in AP depth, causing mild impression upon the anterior aspect of the thecal sac.
              </p>
              <p>
                <strong>2. Spinal Cord / Conus:</strong> Conus medullaris terminates at normal level (L1 lower border). Cauda equina roots display normal symmetry.
              </p>
              <p>
                <strong>3. Facet Joints:</strong> Mild facet joint arthropathy noted at L5-S1 bilaterally without critical central canal stenosis.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Dr. Sarah Niazi, FCPS Radiology</span>
              <span className="font-mono">Sep 29, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
