import React, { useState } from 'react';
import {
  TestTube2,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle2,
  Filter,
  FileSpreadsheet
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface LabReportsViewProps {
  patient: PatientData;
}

export const LabReportsView: React.FC<LabReportsViewProps> = ({ patient }) => {
  const [selectedPanel, setSelectedPanel] = useState<'all' | 'cbc' | 'spine' | 'metabolic'>('all');

  const labTests = [
    {
      name: 'Vitamin D3 (25-Hydroxycalciferol)',
      category: 'spine',
      value: '18.2',
      unit: 'ng/mL',
      refRange: '30.0 – 100.0',
      status: 'Low / Deficient',
      statusType: 'warning',
      lab: 'Chughtai Healthcare (Lahore Central)',
      date: 'Oct 04, 2026',
      notes: 'Suboptimal levels correlate with chronic low-back musculoskeletal soreness. Oral Cholecalciferol 200,000 IU monthly recommended.'
    },
    {
      name: 'Erythrocyte Sedimentation Rate (ESR)',
      category: 'spine',
      value: '18',
      unit: 'mm/1st hr',
      refRange: '0 – 20',
      status: 'Normal',
      statusType: 'normal',
      lab: 'Chughtai Healthcare',
      date: 'Oct 04, 2026',
      notes: 'No high-grade systemic spondyloarthropathy or active inflammatory discitis detected.'
    },
    {
      name: 'Hemoglobin (Hb)',
      category: 'cbc',
      value: '13.2',
      unit: 'g/dL',
      refRange: '12.0 – 15.5',
      status: 'Normal',
      statusType: 'normal',
      lab: 'Shaukat Khanum Diagnostic Centre',
      date: 'Sep 22, 2026',
      notes: 'Normocytic normochromic red cell indices.'
    },
    {
      name: 'Total Leukocyte Count (WBC)',
      category: 'cbc',
      value: '6,800',
      unit: '/mcL',
      refRange: '4,000 – 11,000',
      status: 'Normal',
      statusType: 'normal',
      lab: 'Shaukat Khanum Diagnostic Centre',
      date: 'Sep 22, 2026',
      notes: 'Normal differential count (Neutrophils 62%, Lymphocytes 31%).'
    },
    {
      name: 'Platelet Count',
      category: 'cbc',
      value: '245,000',
      unit: '/mcL',
      refRange: '150,000 – 450,000',
      status: 'Normal',
      statusType: 'normal',
      lab: 'Shaukat Khanum Diagnostic Centre',
      date: 'Sep 22, 2026',
      notes: 'Normal smear morphology.'
    },
    {
      name: 'Serum Creatinine',
      category: 'metabolic',
      value: '0.82',
      unit: 'mg/dL',
      refRange: '0.60 – 1.10',
      status: 'Normal',
      statusType: 'normal',
      lab: 'Excel Labs Lahore',
      date: 'Aug 14, 2026',
      notes: 'Estimated GFR &gt; 90 mL/min/1.73m2. Normal renal clearance.'
    },
    {
      name: 'Glycated Hemoglobin (HbA1c)',
      category: 'metabolic',
      value: '5.4',
      unit: '%',
      refRange: '&lt; 5.7',
      status: 'Normal (Non-Diabetic)',
      statusType: 'normal',
      lab: 'Excel Labs Lahore',
      date: 'Aug 14, 2026',
      notes: 'Optimal glycemic index over past 90 days.'
    }
  ];

  const filteredTests = selectedPanel === 'all' ? labTests : labTests.filter(t => t.category === selectedPanel);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Diagnostic Pathology Suite
            </span>
            <span className="text-xs text-slate-400 font-mono">ISO 15189 Accredited</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Laboratory Reports & Bloodwork</h2>
          <p className="text-xs text-slate-500">
            Validated biochemical, hematological, and spine biomarkers from partner clinical laboratories.
          </p>
        </div>
        <button
          onClick={() => alert('Official Chughtai Lab & Shaukat Khanum consolidated blood panel PDF downloaded.')}
          className="px-3.5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download Lab Dossier (PDF)</span>
        </button>
      </div>

      {/* Filter Badges */}
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <button
          onClick={() => setSelectedPanel('all')}
          className={`px-3 py-1.5 rounded-lg border transition ${
            selectedPanel === 'all' ? 'bg-brand-600 text-white border-brand-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          All Panels ({labTests.length})
        </button>
        <button
          onClick={() => setSelectedPanel('spine')}
          className={`px-3 py-1.5 rounded-lg border transition ${
            selectedPanel === 'spine' ? 'bg-brand-600 text-white border-brand-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Spine & Bone Biomarkers (Vit D3, ESR)
        </button>
        <button
          onClick={() => setSelectedPanel('cbc')}
          className={`px-3 py-1.5 rounded-lg border transition ${
            selectedPanel === 'cbc' ? 'bg-brand-600 text-white border-brand-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Hematology (CBC)
        </button>
        <button
          onClick={() => setSelectedPanel('metabolic')}
          className={`px-3 py-1.5 rounded-lg border transition ${
            selectedPanel === 'metabolic' ? 'bg-brand-600 text-white border-brand-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Renal & Metabolic (HbA1c, Creatinine)
        </button>
      </div>

      {/* Tests Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="divide-y divide-slate-100">
          {filteredTests.map((test, index) => (
            <div key={index} className="p-4 hover:bg-slate-50/70 transition space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-extrabold text-slate-900 text-sm">{test.name}</span>
                  <p className="text-[11px] text-slate-400 font-medium">{test.lab} • Tested: {test.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <span className="text-base font-black text-slate-900">{test.value}</span>
                    <span className="text-slate-500 ml-1 text-xs">{test.unit}</span>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      test.statusType === 'warning'
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {test.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                <span>Reference Range: <strong className="text-slate-700 font-mono">{test.refRange} {test.unit}</strong></span>
                <span className="text-slate-600 italic mt-0.5 sm:mt-0">{test.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
