import React, { useState } from 'react';
import { Microscope, FileText, Download, CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';

export const ResearchClinicalEdView: React.FC = () => {
  const papers = [
    {
      id: 'p-1',
      title: 'Conservative Physical Rehabilitation vs Microdiscectomy in Urban Pakistani Cohort with L4-L5 Herniation: An 8-Week Observational Trial',
      journal: 'Pakistan Journal of Medical Sciences (PJMS 2026)',
      authors: 'Malik H., Siddiqui A., Akram M. (King Edward Medical University)',
      findings: '68.4% of patients achieved significant pain reduction (VAS < 3) and functional return to work without surgical intervention through targeted lumbar stabilization.',
      doi: '10.12669/pjms.2026.98241',
      citations: '42 Citations'
    },
    {
      id: 'p-2',
      title: 'Epidemiological Prevalence of Lower Lumbar Spine Desiccation Among Desk Workers in Lahore and Karachi: A Digital Health Registry Analysis',
      journal: 'Journal of the College of Physicians and Surgeons Pakistan (JCPSP 2025)',
      authors: 'National Spine Research Group & MEDISPHERE Registry',
      findings: 'Mean age of symptomatic onset is 34.2 years, closely correlated with daily sedentary screen time exceeding 7.5 hours and insufficient daily hydration.',
      doi: '10.29271/jcpsp.2025.1120',
      citations: '89 Citations'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group H. SDGs & System
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #72</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Spinal Research & Clinical Evidence Database</h2>
          <p className="text-xs text-slate-500">
            Peer-reviewed clinical trials, epidemiological Pakistani registry data, and open-access medical publications.
          </p>
        </div>
      </div>

      {/* Cohort Stats Banner */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Conservative Success Rate</span>
          <p className="text-2xl font-black text-emerald-600 font-mono">68.4%</p>
          <p className="text-slate-500 font-medium">Resolution without invasive discectomy</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Mean Onset Age in Pakistan</span>
          <p className="text-2xl font-black text-teal-700 font-mono">34.2 Years</p>
          <p className="text-slate-500 font-medium">Urban sedentary workforce cohort</p>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-1 text-xs">
          <span className="text-[10px] font-bold uppercase text-slate-400">Total Anonymized Patients</span>
          <p className="text-2xl font-black text-indigo-700 font-mono">14,280+</p>
          <p className="text-slate-500 font-medium">Registered in national database</p>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {papers.map(paper => (
          <div key={paper.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
              <span className="text-[10px] font-mono text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">
                {paper.journal}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">{paper.citations}</span>
            </div>

            <h3 className="font-extrabold text-sm text-slate-900 leading-snug">{paper.title}</h3>
            <p className="text-slate-500 text-[11px] italic">{paper.authors}</p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-700 leading-relaxed">
              <strong>Key Finding:</strong> {paper.findings}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-mono text-slate-400">DOI: {paper.doi}</span>
              <button
                onClick={() => alert(`Downloading open-access PDF: ${paper.title}`)}
                className="px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-lg font-bold flex items-center space-x-1 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Paper (PDF)</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
