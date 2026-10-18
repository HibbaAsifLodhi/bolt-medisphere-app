import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  Leaf,
  ShieldAlert,
  Home,
  CheckCircle2,
  FileSpreadsheet,
  Download,
  Share2,
  Sparkles,
  RefreshCw,
  Gauge,
  Apple,
  Droplet,
  Footprints,
  Moon,
  AlertTriangle,
  Lock,
  Upload,
  User,
  Users,
  Building,
  Bell,
  Eye,
  Settings,
  HelpCircle
} from 'lucide-react';
import { ROUTE_MAP } from '../data/mockData.ts';
import { PatientData } from '../types/index.ts';

interface UniversalSubpageViewProps {
  routeId: string;
  patient: PatientData;
  onNavigate: (route: string) => void;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
}

export const UniversalSubpageView: React.FC<UniversalSubpageViewProps> = ({
  routeId,
  patient,
  onNavigate,
  onAddAuditLog
}) => {
  const meta = ROUTE_MAP.get(routeId) || {
    num: 0,
    title: routeId.replace(/-/g, ' ').toUpperCase(),
    group: 'Clinical Services',
    icon: 'activity',
    desc: 'Interactive clinical module initialized with validated demo datasets.'
  };

  const [waterGlasses, setWaterGlasses] = useState(7);
  const [activeStepFilter, setActiveStepFilter] = useState('Today');
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'MRI_Lumbar_Spine_Report_Sep2026.pdf', size: '2.4 MB', date: 'Sep 29, 2026', type: 'Radiology' },
    { name: 'Mayo_Hospital_Discharge_Summary_2021.pdf', size: '1.1 MB', date: 'Nov 14, 2021', type: 'Surgical Slip' }
  ]);
  const [odiScore, setOdiScore] = useState(24); // 24% Moderate Disability
  const [notificationToggles, setNotificationToggles] = useState({
    sms1122: true,
    whatsappMeds: true,
    exerciseReminder: true,
    emailReports: false
  });

  // Archetype classifier based on routeId
  const getArchetype = () => {
    if (['initial-assessment', 'rom-strength', 'pain-functional', 'rehab-plans', 'gait-posture', 'rehab-precautions'].includes(routeId)) {
      return 'physio-clinical';
    }
    if (['nutrition-dashboard', 'meal-plans', 'calorie-tracking', 'hydration-tracker', 'activity-steps', 'sleep-recovery', 'lifestyle-education'].includes(routeId)) {
      return 'wellness';
    }
    if (['emergency-contacts', 'allergies-contraindications', 'current-medications', 'previous-medications'].includes(routeId)) {
      return 'emergency-detail';
    }
    if (['medical-uploads', 'patient-reports-summaries', 'treatment-plans', 'diagnoses-notes'].includes(routeId)) {
      return 'documents';
    }
    if (['hospital-clinic-dashboard', 'referral-coordination', 'home-visit-requests', 'remote-rehab', 'patient-feedback', 'resource-equipment'].includes(routeId)) {
      return 'operations';
    }
    if (['family-profiles', 'account-settings', 'privacy-security', 'consent-permissions', 'notifications-reminders', 'help-centre', 'accessibility-settings', 'data-export'].includes(routeId)) {
      return 'account-security';
    }
    return 'general';
  };

  const archetype = getArchetype();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {meta.group}
            </span>
            <span className="text-xs text-slate-400 font-mono">Module #{meta.num}</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">{meta.title}</h2>
          <p className="text-xs text-slate-500">{meta.desc}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate('home-dashboard')}
            className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 transition"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
        </div>
      </div>

      {/* ARCHETYPE 1: PHYSIO CLINICAL & ROM TESTING */}
      {archetype === 'physio-clinical' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Lumbar Flexion ROM</span>
              <p className="text-2xl font-black text-brand-700 mt-1">45° <span className="text-xs font-normal text-slate-500">/ 60° Norm</span></p>
              <p className="text-[10px] text-emerald-600 mt-0.5 font-bold">+10° Improvement since Sep</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Oswestry Disability Index (ODI)</span>
              <p className="text-2xl font-black text-amber-600 mt-1">{odiScore}%</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Moderate Functional Limitation</p>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Straight Leg Raise (SLR)</span>
              <p className="text-2xl font-black text-slate-800 mt-1">75° Bilateral</p>
              <p className="text-[10px] text-emerald-600 mt-0.5 font-bold">Negative for Frank Sciatica</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 text-sm">Goniometric Range of Motion & Muscle Strength Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                    <th className="pb-2">Spinal / Joint Movement</th>
                    <th className="pb-2">Active ROM</th>
                    <th className="pb-2">Passive ROM</th>
                    <th className="pb-2">Oxford Muscle Grade</th>
                    <th className="pb-2">Pain Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-2.5 font-bold">Lumbar Flexion</td>
                    <td className="py-2.5 font-mono">45°</td>
                    <td className="py-2.5 font-mono">52°</td>
                    <td className="py-2.5 font-bold">4 / 5</td>
                    <td className="py-2.5 text-amber-700">Mild end-range ache</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Lumbar Extension (Cobra)</td>
                    <td className="py-2.5 font-mono">22°</td>
                    <td className="py-2.5 font-mono">25°</td>
                    <td className="py-2.5 font-bold">4+ / 5</td>
                    <td className="py-2.5 text-emerald-700">Pain-free (Centralizing)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Right Lateral Side-Bend</td>
                    <td className="py-2.5 font-mono">28°</td>
                    <td className="py-2.5 font-mono">30°</td>
                    <td className="py-2.5 font-bold">5 / 5</td>
                    <td className="py-2.5 text-emerald-700">Normal</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold">Left Lateral Side-Bend</td>
                    <td className="py-2.5 font-mono">26°</td>
                    <td className="py-2.5 font-mono">28°</td>
                    <td className="py-2.5 font-bold">5 / 5</td>
                    <td className="py-2.5 text-emerald-700">Normal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-2 flex justify-between items-center text-slate-500 text-[11px] border-t border-slate-100">
              <span>Evaluated by Dr. Hamza Malik, DPT</span>
              <button
                onClick={() => {
                  setOdiScore(prev => Math.max(10, prev - 2));
                  onAddAuditLog('ODI Score Updated', 'Physiotherapy Engine', 'Disability index adjusted to 22%');
                }}
                className="text-brand-600 font-bold hover:underline"
              >
                Log Assessment Progress &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ARCHETYPE 2: NUTRITION & WELLNESS */}
      {archetype === 'wellness' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 text-blue-600 mb-1">
                <Droplet className="w-4 h-4" />
                <span className="font-bold text-slate-500">Daily Disc Hydration</span>
              </div>
              <p className="text-2xl font-black text-slate-900">{waterGlasses} <span className="text-xs text-slate-500">/ 10 Glasses</span></p>
              <div className="flex gap-1.5 mt-2">
                <button
                  onClick={() => setWaterGlasses(g => Math.min(12, g + 1))}
                  className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold rounded-lg text-xs"
                >
                  + Add Glass
                </button>
                <button
                  onClick={() => setWaterGlasses(0)}
                  className="px-2 py-1 text-slate-400 hover:text-slate-600 text-xs"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 text-emerald-600 mb-1">
                <Footprints className="w-4 h-4" />
                <span className="font-bold text-slate-500">Low-Impact Spinal Steps</span>
              </div>
              <p className="text-2xl font-black text-slate-900">6,420 <span className="text-xs text-slate-500">/ 8,000</span></p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 text-purple-600 mb-1">
                <Moon className="w-4 h-4" />
                <span className="font-bold text-slate-500">Sleep & Spine Recovery</span>
              </div>
              <p className="text-2xl font-black text-slate-900">7h 45m</p>
              <p className="text-[10px] text-emerald-600 font-bold mt-1">Optimal Disc Rehydration</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Apple className="w-4 h-4 text-emerald-600" />
              <span>Anti-Inflammatory Spine & Disc Recovery Diet</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Targeted nutritional compounds to support collagen repair in the L4-L5 anulus fibrosus and soothe radicular inflammation.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-900 block">Magnesium & Zinc Rich</span>
                <p className="text-slate-600 text-[11px] mt-1">Pumpkin seeds, almonds, and lentils to facilitate paraspinal muscular relaxation.</p>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200">
                <span className="font-bold text-blue-900 block">Omega-3 Fatty Acids</span>
                <p className="text-slate-600 text-[11px] mt-1">Wild fish, flaxseeds, and walnuts to naturally downregulate systemic inflammation.</p>
              </div>
              <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200">
                <span className="font-bold text-amber-900 block">Bone Matrix Support</span>
                <p className="text-slate-600 text-[11px] mt-1">Vitamin D3 supplement (200,000 IU monthly) + calcium from sesame and dark leafy greens.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARCHETYPE 3: EMERGENCY DETAIL & ALLERGIES */}
      {archetype === 'emergency-detail' && (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5 shadow-xs space-y-3 text-xs">
            <div className="flex items-center space-x-2 text-red-700 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>High-Alert Clinical Registry for Paramedics & ER Staff</span>
            </div>
            <p className="text-red-950/80 leading-relaxed">
              The following pharmaceutical contraindications are flagged across all hospital and 1122 dispatch terminals:
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded-xl border border-red-200 flex justify-between items-center">
                <div>
                  <span className="font-extrabold text-red-700 text-sm">Penicillin & Beta-Lactams</span>
                  <p className="text-slate-500 text-[11px]">Type I IgE-Mediated Hypersensitivity (Anaphylaxis Risk)</p>
                </div>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 font-bold rounded text-[10px]">CRITICAL</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-red-200 flex justify-between items-center">
                <div>
                  <span className="font-extrabold text-amber-800 text-sm">NSAIDs (Ibuprofen, Naproxen, Diclofenac)</span>
                  <p className="text-slate-500 text-[11px]">Gastric Mucosal Irritation & Ulceration Sensitivity</p>
                </div>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded text-[10px]">MODERATE</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm">Emergency Dispatch Broadcasters</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">Dr. Tariq Ahmed (Spouse)</span>
                  <p className="text-slate-500 font-mono text-[11px]">+92 300 4567890</p>
                </div>
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">SMS Enabled</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">Maryam Bibi (Mother)</span>
                  <p className="text-slate-500 font-mono text-[11px]">+92 321 9876543</p>
                </div>
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded">SMS Enabled</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARCHETYPE 4: DOCUMENTS & REPOSITORY */}
      {archetype === 'documents' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center space-y-2 hover:border-brand-500 transition cursor-pointer">
            <Upload className="w-8 h-8 mx-auto text-brand-600" />
            <h3 className="font-bold text-slate-900 text-sm">Upload Clinical PDF, Discharge Summary or DICOM</h3>
            <p className="text-xs text-slate-500">Drag & drop files or click to browse. Automatically encrypted with AES-256 client token.</p>
            <button
              onClick={() => {
                const newDoc = {
                  name: `Clinical_Note_${new Date().toLocaleDateString().replace(/\//g, '-')}.pdf`,
                  size: '1.8 MB',
                  date: 'Just Now',
                  type: 'Discharge Slip'
                };
                setUploadedFiles([newDoc, ...uploadedFiles]);
                onAddAuditLog('Medical Document Uploaded', 'Patient Portal Client', `Uploaded ${newDoc.name}`);
              }}
              className="mt-2 px-4 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-bold"
            >
              Simulate File Upload
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden text-xs">
            <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-700 flex justify-between">
              <span>Verified Stored Documents</span>
              <span>Size & Download</span>
            </div>
            <div className="divide-y divide-slate-100">
              {uploadedFiles.map((doc, idx) => (
                <div key={idx} className="p-4 hover:bg-slate-50 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-900 text-sm">{doc.name}</span>
                    <p className="text-[11px] text-slate-400">{doc.type} • Uploaded {doc.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-slate-500 text-xs">{doc.size}</span>
                    <button
                      onClick={() => alert(`Downloading decrypted file: ${doc.name}`)}
                      className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700"
                      title="Download File"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ARCHETYPE 5: OPERATIONS & ECOSYSTEM */}
      {archetype === 'operations' && (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Triage Queue Status</span>
              <p className="text-2xl font-black text-slate-800 mt-1">4 Active</p>
              <span className="text-[10px] text-emerald-600 font-bold">1122 Ambulance Inbound: 0</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Emergency Bed Occupancy</span>
              <p className="text-2xl font-black text-brand-700 mt-1">82%</p>
              <span className="text-[10px] text-slate-500">18 / 22 Beds Available</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-slate-400 font-medium">Hospital Referral Network</span>
              <p className="text-2xl font-black text-slate-800 mt-1">Verified</p>
              <span className="text-[10px] text-teal-700 font-bold">Mayo & Doctors Hospital Sync</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
            <h3 className="font-bold text-slate-900 text-sm">Operational Dispatch & Referral Milestones</h3>
            <div className="space-y-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">Mayo Hospital &rarr; Spine Care Rehabilitation Referral</span>
                  <p className="text-slate-500 text-[11px]">Transferred on Sep 29, 2026 by Dr. A. Rauf</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[10px]">
                  Completed
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">Home Nursing & Wound Dressing Dispatch</span>
                  <p className="text-slate-500 text-[11px]">Routine weekly postoperative check</p>
                </div>
                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-full font-bold text-[10px]">
                  On-Demand Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ARCHETYPE 6: ACCOUNT, PRIVACY & SECURITY */}
      {archetype === 'account-security' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Lock className="w-4 h-4 text-brand-600" />
              <span>Security, Permissions & Automated Notifications</span>
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">Rescue 1122 Automated Distress Broadcast</span>
                  <p className="text-slate-500 text-[11px]">Transmits GPS and emergency blood group card when SOS is pressed.</p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationToggles.sms1122}
                  onChange={() => setNotificationToggles(prev => ({ ...prev, sms1122: !prev.sms1122 }))}
                  className="w-4 h-4 accent-brand-600"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">WhatsApp Medication Schedule Webhook</span>
                  <p className="text-slate-500 text-[11px]">Daily 9:00 PM reminder for Pregabalin 75mg dosage.</p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationToggles.whatsappMeds}
                  onChange={() => setNotificationToggles(prev => ({ ...prev, whatsappMeds: !prev.whatsappMeds }))}
                  className="w-4 h-4 accent-brand-600"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">Physiotherapy Exercise Routine Notifications</span>
                  <p className="text-slate-500 text-[11px]">Daily morning prompt for Cobra Stretches and Core Stabilization.</p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationToggles.exerciseReminder}
                  onChange={() => setNotificationToggles(prev => ({ ...prev, exerciseReminder: !prev.exerciseReminder }))}
                  className="w-4 h-4 accent-brand-600"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-slate-100">
              <span className="font-mono text-slate-400 text-[11px]">Token ID: 41e8...9a7b (Valid)</span>
              <button
                onClick={() => {
                  alert('Complete GDPR & HIPAA compliant health ledger exported in encrypted format.');
                  onAddAuditLog('Full Health Data Exported', 'Citizen Auth Node', 'Patient downloaded complete encrypted records');
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-lg font-bold flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Full Health Record (JSON / PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GENERAL ARCHETYPE: Fallback with Custom Action */}
      {archetype === 'general' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-700 flex items-center justify-center font-bold">
              #{meta.num}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{meta.title}</h3>
              <p className="text-slate-500">{meta.desc}</p>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-800">Verified Clinical Data Stream</span>
            <p className="text-slate-600">
              All records in this section are synchronized with Patient <strong>{patient.name} ({patient.id})</strong> and protected under zero-trust authorization.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => alert(`Operational action executed for ${meta.title}.`)}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold"
            >
              Execute Action
            </button>
            <button
              onClick={() => onNavigate('home-dashboard')}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold"
            >
              Return Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
