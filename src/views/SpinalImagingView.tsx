import React, { useState } from 'react';
import {
  Bone,
  Info,
  FileCheck,
  Scan,
  ZoomIn,
  Sun,
  Upload,
  Ruler,
  AlertCircle
} from 'lucide-react';
import { VERTEBRAE_MAP, getVertebra } from '../utils/spineData.ts';

interface SpinalImagingViewProps {
  selectedVertebra: string;
  onSelectVertebra: (code: string) => void;
  onNavigate: (route: string) => void;
}

export const SpinalImagingView: React.FC<SpinalImagingViewProps> = ({
  selectedVertebra,
  onSelectVertebra,
  onNavigate
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [contrastHigh, setContrastHigh] = useState(false);
  const [showCalibrationAlert, setShowCalibrationAlert] = useState(false);

  const v = getVertebra(selectedVertebra);

  const cervicalKeys = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7'];
  const thoracicKeys = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
  const lumbarKeys = ['L1', 'L2', 'L3', 'L4', 'L5'];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Radiology Suite & Posture Lab
            </span>
            <span className="text-xs text-slate-400 font-mono">DICOM 3.0 Viewport</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Spinal Vertebrae & Imaging Centre</h2>
          <p className="text-xs text-slate-500">
            Interactive 24-vertebra column, calibrated radiographic measurement guidelines, and standing height logs.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowCalibrationAlert(!showCalibrationAlert)}
            className="px-3 py-1.5 bg-amber-50 text-amber-800 border border-amber-300 rounded-lg text-xs font-semibold flex items-center space-x-1 hover:bg-amber-100 transition"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Calibration Standard</span>
          </button>
        </div>
      </div>

      {showCalibrationAlert && (
        <div className="p-3.5 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs flex items-start space-x-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Radiographic Measurement Notice:</strong> Absolute vertebral dimensions require calibrated metal ball markers and known source-to-image distance (SID) logs. Uncalibrated X-rays yield proportional estimates only.
          </div>
        </div>
      )}

      {/* Main Spinal Workspace Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left 5 Cols: Interactive Spinal Column Vertebrae Selector */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Bone className="w-4 h-4 text-brand-600" />
              <span>Spinal Column Selector</span>
            </h3>
            <span className="text-[11px] text-slate-400">Click any segment</span>
          </div>

          <div className="space-y-3 max-h-[620px] overflow-y-auto pr-1">
            {/* Cervical C1-C7 */}
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 flex justify-between">
                <span>Cervical Spine (C1–C7)</span>
                <span className="text-slate-400 font-normal">Lordotic</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {cervicalKeys.map(k => (
                  <button
                    key={k}
                    onClick={() => onSelectVertebra(k)}
                    className={`py-2 px-1 text-center rounded-lg border text-xs font-bold transition ${
                      selectedVertebra === k
                        ? 'bg-brand-600 text-white border-brand-700 shadow-sm'
                        : 'bg-slate-50 hover:bg-teal-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Thoracic T1-T12 */}
            <div>
              <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1 flex justify-between">
                <span>Thoracic Spine (T1–T12)</span>
                <span className="text-slate-400 font-normal">Kyphotic</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {thoracicKeys.map(k => (
                  <button
                    key={k}
                    onClick={() => onSelectVertebra(k)}
                    className={`py-2 px-1 text-center rounded-lg border text-xs font-bold transition ${
                      selectedVertebra === k
                        ? 'bg-brand-600 text-white border-brand-700 shadow-sm'
                        : 'bg-slate-50 hover:bg-teal-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Lumbar L1-L5 */}
            <div>
              <div className="text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1 flex justify-between">
                <span>Lumbar Spine (L1–L5)</span>
                <span className="text-slate-400 font-normal">Primary Load</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {lumbarKeys.map(k => (
                  <button
                    key={k}
                    onClick={() => onSelectVertebra(k)}
                    className={`py-2.5 px-1 text-center rounded-lg border text-xs font-bold transition ${
                      selectedVertebra === k
                        ? 'bg-brand-600 text-white border-brand-700 shadow-sm'
                        : 'bg-slate-50 hover:bg-teal-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Pelvic Complex */}
            <div>
              <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider mb-1">
                <span>Pelvic Complex (Fused)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectVertebra('Sacrum')}
                  className={`py-2 px-2 text-center rounded-lg border text-xs font-bold transition ${
                    selectedVertebra === 'Sacrum'
                      ? 'bg-brand-600 text-white border-brand-700 shadow-sm'
                      : 'bg-slate-50 hover:bg-purple-50 border-slate-200 text-slate-700'
                  }`}
                >
                  Sacrum (S1–S5 Fused)
                </button>
                <button
                  onClick={() => onSelectVertebra('Coccyx')}
                  className={`py-2 px-2 text-center rounded-lg border text-xs font-bold transition ${
                    selectedVertebra === 'Coccyx'
                      ? 'bg-brand-600 text-white border-brand-700 shadow-sm'
                      : 'bg-slate-50 hover:bg-purple-50 border-slate-200 text-slate-700'
                  }`}
                >
                  Coccyx (Tailbone)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Detailed Vertebra Inspector & Digital X-Ray Viewer */}
        <div className="lg:col-span-7 space-y-6">
          {/* Inspector Panel for Selected Vertebra */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs text-brand-600 font-bold uppercase tracking-wider">{v.region} Region</span>
                <h3 className="text-xl font-black text-slate-900">{v.name}</h3>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  v.status.includes('Focal') || v.status.includes('Attention')
                    ? 'bg-red-100 text-red-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {v.status}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <p className="font-bold text-slate-700 uppercase text-[10px]">Anatomical Role & Biomechanics</p>
                <p className="text-slate-600 mt-1 leading-relaxed">{v.role}</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-800 uppercase text-[10px] flex items-center space-x-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Clinician Radiologist Annotation</span>
                </p>
                <p className="text-slate-700 mt-1 italic leading-relaxed">"{v.findings}"</p>
                <p className="text-[10px] text-slate-400 mt-2">Validated by Dr. Sarah Niazi, FCPS Radiology</p>
              </div>
            </div>
          </div>

          {/* Digital X-Ray Viewer with Controls */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                <span className="font-bold text-slate-200">Lateral Lumbar Radiograph (Demo DICOM)</span>
              </div>
              <div className="flex items-center space-x-1 font-mono text-[11px] text-teal-300">
                <span>{zoomLevel}x Zoom</span>
                <span>•</span>
                <span>{contrastHigh ? 'High Contrast' : 'Normal'}</span>
              </div>
            </div>

            {/* Simulated X-Ray Canvas */}
            <div
              className={`h-56 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden transition-all ${
                contrastHigh ? 'brightness-125 contrast-150' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-transparent to-black pointer-events-none"></div>
              {/* Silhouette Simulation */}
              <div
                className="text-center space-y-2 opacity-80 transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Scan className="w-16 h-16 mx-auto text-teal-500 animate-pulse" />
                <p className="text-xs font-mono text-slate-300">Target Segment: [ {selectedVertebra} ] Selected</p>
                <p className="text-[10px] text-slate-400">Calibration Grid: 10mm Reference Marker Validated</p>
              </div>
              {/* Radiographic measurement overlay */}
              <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-700 px-2.5 py-1 rounded text-[10px] font-mono text-teal-300">
                Cobb Angle: 8.2° Thoracic | Disc Space L4-L5: 6.4mm
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex space-x-2">
                <button
                  onClick={() => setZoomLevel(prev => (prev >= 2 ? 1 : prev + 0.5))}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-semibold flex items-center space-x-1 transition"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom ({zoomLevel}x)</span>
                </button>
                <button
                  onClick={() => setContrastHigh(!contrastHigh)}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-300 font-semibold flex items-center space-x-1 transition"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Contrast</span>
                </button>
              </div>
              <button
                onClick={() => onNavigate('medical-uploads')}
                className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded font-semibold text-xs flex items-center space-x-1.5 transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload External DICOM/X-Ray</span>
              </button>
            </div>
          </div>

          {/* Standing Height & Posture Log */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Ruler className="w-4 h-4 text-brand-600" />
              <span>Standing Height & Spine Decompression Log</span>
            </h4>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-400 font-medium">Standing Height</p>
                <p className="text-lg font-black text-slate-800 mt-0.5">164.5 cm</p>
                <p className="text-[10px] text-emerald-600">+0.3cm post-traction</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-400 font-medium">Measurement</p>
                <p className="text-sm font-bold text-slate-800 mt-1">Stadiometer</p>
                <p className="text-[10px] text-slate-500">Clinical Validated</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-400 font-medium">Last Measured</p>
                <p className="text-sm font-bold text-slate-800 mt-1">Oct 16, 2026</p>
                <p className="text-[10px] text-slate-500">10:30 AM PKT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
