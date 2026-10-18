import React, { useState } from 'react';
import {
  ClipboardList,
  Calendar,
  Activity,
  ShieldAlert,
  Syringe,
  Scissors,
  Plus,
  CheckCircle,
  FileText,
  UserCheck
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface MedicalHistoryViewProps {
  patient: PatientData;
  onNavigate: (route: string) => void;
}

export const MedicalHistoryView: React.FC<MedicalHistoryViewProps> = ({ patient, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'surgeries' | 'vaccines' | 'family'>('timeline');

  const [historyItems, setHistoryItems] = useState([
    {
      year: '2026',
      date: 'Aug 2026 – Present',
      title: 'L4-L5 Lumbar Disc Herniation (Active Rehabilitation)',
      icd: 'ICD-10: M51.26',
      doctor: 'Dr. A. Rauf (Neuro) & Dr. Hamza Malik (PT)',
      facility: 'Spine Care & Diagnostic Clinic, Lahore',
      notes: 'Posterocentral protrusion with mild thecal sac effacement. Managed conservatively with McKenzie extension therapy and oral Pregabalin.',
      status: 'Active Care'
    },
    {
      year: '2024',
      date: 'Mar 2024',
      title: 'Postural Thoracic Scoliosis (Mild)',
      icd: 'ICD-10: M41.04',
      doctor: 'Dr. Sarah Niazi (Radiology review)',
      facility: 'Doctors Hospital, Lahore',
      notes: 'Cobb angle measured at 8.2° on standing AP whole-spine radiograph. No surgical intervention indicated.',
      status: 'Monitored'
    },
    {
      year: '2021',
      date: 'Nov 12, 2021',
      title: 'Acute Appendicitis (Laparoscopic Appendectomy)',
      icd: 'ICD-10: K35.80',
      doctor: 'Prof. Dr. Tariq Saeed, FRCS',
      facility: 'Mayo Hospital, Lahore',
      notes: 'Elective 3-port laparoscopic excision. Histology confirmed acute suppurative appendicitis without perforation. Uneventful recovery.',
      status: 'Resolved'
    },
    {
      year: '2018',
      date: 'May 2018',
      title: 'Exercise-Induced Bronchospasm (Mild Asthma)',
      icd: 'ICD-10: J45.909',
      doctor: 'Dr. Fatima Siddiqui, MD',
      facility: 'Services Hospital, Lahore',
      notes: 'Spirometry showed FEV1/FVC ratio 79% with 14% post-bronchodilator reversibility. Managed with PRN Salbutamol 100mcg.',
      status: 'Managed PRN'
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Longitudinal Clinical Record
            </span>
            <span className="text-xs text-slate-400 font-mono">Patient: {patient.id}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Complete Medical & Surgical History</h2>
          <p className="text-xs text-slate-500">
            Validated health record spanning diagnosed chronic illnesses, surgical operations, and immunizations.
          </p>
        </div>
        <button
          onClick={() => onNavigate('diagnoses-notes')}
          className="px-3.5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Physician Clinical Notes (View 17)</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 space-x-2 text-xs font-bold">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`pb-2.5 px-3 border-b-2 transition ${
            activeTab === 'timeline' ? 'border-brand-600 text-brand-800' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Conditions Timeline
        </button>
        <button
          onClick={() => setActiveTab('surgeries')}
          className={`pb-2.5 px-3 border-b-2 transition ${
            activeTab === 'surgeries' ? 'border-brand-600 text-brand-800' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Surgical History
        </button>
        <button
          onClick={() => setActiveTab('vaccines')}
          className={`pb-2.5 px-3 border-b-2 transition ${
            activeTab === 'vaccines' ? 'border-brand-600 text-brand-800' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Immunization Records
        </button>
        <button
          onClick={() => setActiveTab('family')}
          className={`pb-2.5 px-3 border-b-2 transition ${
            activeTab === 'family' ? 'border-brand-600 text-brand-800' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Family Medical History
        </button>
      </div>

      {/* Tab 1: Conditions Timeline */}
      {activeTab === 'timeline' && (
        <div className="space-y-4">
          {historyItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <span className="font-mono font-bold text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    {item.year}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm">{item.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-slate-400">{item.icd}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.status.includes('Active')
                        ? 'bg-amber-100 text-amber-800'
                        : item.status.includes('Resolved')
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{item.notes}</p>
              <div className="pt-2 text-[11px] text-slate-500 flex flex-wrap gap-4">
                <span><strong>Consultant:</strong> {item.doctor}</span>
                <span><strong>Hospital/Facility:</strong> {item.facility}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Surgical History */}
      {activeTab === 'surgeries' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
            <Scissors className="w-4 h-4 text-brand-600" />
            <span>Documented Surgical Interventions</span>
          </h3>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between font-bold text-slate-900">
              <span>Laparoscopic Appendectomy (Closed Abdominal Excision)</span>
              <span className="text-slate-500 font-mono">Nov 12, 2021</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              3-port laparoscopic technique performed under general anesthesia. No perioperative complications. Patient mobilized at 12 hours post-op. Surgical clips removed after 8 days.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 flex justify-between border-t border-slate-200">
              <span>Lead Surgeon: Prof. Dr. Tariq Saeed (Mayo Hospital Lahore)</span>
              <span>Anesthesia: Dr. N. Qureshi (FCPS)</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Immunizations */}
      {activeTab === 'vaccines' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
            <Syringe className="w-4 h-4 text-brand-600" />
            <span>Verified Immunization Registry (EPI Pakistan & Adult Boosters)</span>
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-bold text-[10px] uppercase">
                  <th className="pb-2">Vaccine Name</th>
                  <th className="pb-2">Dose Series</th>
                  <th className="pb-2">Administration Date</th>
                  <th className="pb-2">Provider</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-2.5 font-bold">BCG (Tuberculosis)</td>
                  <td className="py-2.5">Single Birth Dose</td>
                  <td className="py-2.5 font-mono">1994 (Birth)</td>
                  <td className="py-2.5">Government Hospital Lahore</td>
                  <td className="py-2.5"><span className="text-emerald-700 font-bold">✓ Verified</span></td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Oral Polio (OPV + IPV)</td>
                  <td className="py-2.5">Complete Childhood Series</td>
                  <td className="py-2.5 font-mono">1994–1999</td>
                  <td className="py-2.5">Punjab EPI Campaign</td>
                  <td className="py-2.5"><span className="text-emerald-700 font-bold">✓ Complete</span></td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Hepatitis B Recombinant</td>
                  <td className="py-2.5">3-Dose Series</td>
                  <td className="py-2.5 font-mono">2012</td>
                  <td className="py-2.5">Chughtai Health Services</td>
                  <td className="py-2.5"><span className="text-emerald-700 font-bold">✓ Immune (Anti-HBs &gt; 100)</span></td>
                </tr>
                <tr>
                  <td className="py-2.5 font-bold">Tetanus Toxoid (TT Booster)</td>
                  <td className="py-2.5">Booster Dose</td>
                  <td className="py-2.5 font-mono">Nov 2021 (Pre-op)</td>
                  <td className="py-2.5">Mayo Hospital Lahore</td>
                  <td className="py-2.5"><span className="text-emerald-700 font-bold">✓ Active (Valid to 2031)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Family History */}
      {activeTab === 'family' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
            <UserCheck className="w-4 h-4 text-brand-600" />
            <span>Hereditary & Familial Risk Factors</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Maternal Lineage (Mother - Maryam Bibi)</span>
              <p className="text-slate-600 mt-1">Essential Hypertension (Diagnosed age 52, well-managed on Amlodipine 5mg). No early cardiac ischemia.</p>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Paternal Lineage (Father - Deceased)</span>
              <p className="text-slate-600 mt-1">Osteoarthritis of bilateral knees. History of mild lumbar spinal stenosis in late sixties.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
