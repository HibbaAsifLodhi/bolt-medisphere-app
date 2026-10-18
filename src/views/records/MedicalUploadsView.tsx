import React, { useState } from 'react';
import { UploadCloud, FileText, Download, Eye, CheckCircle2, Lock, Tag, Trash2 } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface MedicalUploadsViewProps {
  patient: PatientData;
}

export const MedicalUploadsView: React.FC<MedicalUploadsViewProps> = ({ patient }) => {
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [selectedFileForPreview, setSelectedFileForPreview] = useState<string | null>(null);

  const [files, setFiles] = useState([
    {
      id: 'doc-1',
      name: 'MRI_Lumbar_Spine_T2_Sagittal_MayoHospital.pdf',
      category: 'Radiology / MRI',
      size: '14.2 MB',
      uploadDate: '2026-09-29',
      checksum: 'sha256:4a8f9b...112e',
      verified: true
    },
    {
      id: 'doc-2',
      name: 'Mayo_Hospital_Discharge_Summary_L4L5_Radiculopathy.pdf',
      category: 'Discharge Slip',
      size: '2.1 MB',
      uploadDate: '2026-09-15',
      checksum: 'sha256:7b2e11...90ab',
      verified: true
    },
    {
      id: 'doc-3',
      name: 'Chughtai_Lab_CBC_ESR_VitaminD3_Report.pdf',
      category: 'Laboratory Report',
      size: '890 KB',
      uploadDate: '2026-08-20',
      checksum: 'sha256:19ad44...88ef',
      verified: true
    },
    {
      id: 'doc-4',
      name: 'State_Life_Health_Insurance_PreAuth_Card.pdf',
      category: 'Insurance Claim',
      size: '1.4 MB',
      uploadDate: '2026-07-02',
      checksum: 'sha256:90cd12...34fe',
      verified: true
    }
  ]);

  const [isUploading, setIsUploading] = useState(false);

  const handleSimulatedUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setFiles(prev => [
        {
          id: `doc-${Date.now()}`,
          name: `Clinical_Record_Upload_${new Date().toLocaleDateString('en-GB')}.pdf`,
          category: 'Radiology / MRI',
          size: '3.6 MB',
          uploadDate: new Date().toISOString().split('T')[0],
          checksum: 'sha256:e3b0c4...729a',
          verified: true
        },
        ...prev
      ]);
      setIsUploading(false);
    }, 1500);
  };

  const filteredFiles = categoryFilter === 'ALL' ? files : files.filter(f => f.category.includes(categoryFilter));

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group C. Records & Services
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #20</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Medical Documents & Secure PACS Vault</h2>
          <p className="text-xs text-slate-500">
            Encrypted cloud repository for radiology scans, hospital discharge slips, and biopsy reports.
          </p>
        </div>
      </div>

      {/* Upload Zone */}
      <div
        onClick={handleSimulatedUpload}
        className="p-8 border-2 border-dashed border-teal-300 hover:border-teal-500 bg-teal-50/40 hover:bg-teal-50/80 rounded-2xl text-center cursor-pointer transition flex flex-col items-center justify-center space-y-2 group"
      >
        <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center group-hover:scale-105 transition">
          <UploadCloud className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">
            {isUploading ? 'Encrypting & Uploading File...' : 'Click to Upload DICOM / PDF Medical Record'}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Supported formats: PDF, DICOM (.dcm), JPEG high-res radiograph (Max 100MB per file)
          </p>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-teal-700 font-semibold pt-1">
          <span className="flex items-center"><Lock className="w-3.5 h-3.5 mr-1" /> AES-256 Encrypted</span>
          <span>•</span>
          <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Auto-Virus Scanned</span>
        </div>
      </div>

      {/* Categories & Filter */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs font-bold">
        {['ALL', 'Radiology', 'Discharge', 'Laboratory', 'Insurance'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1.5 rounded-xl border transition whitespace-nowrap ${
              categoryFilter === cat
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat} Files
          </button>
        ))}
      </div>

      {/* File List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
        {filteredFiles.map(file => (
          <div key={file.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 transition text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-teal-700 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 truncate max-w-md">{file.name}</p>
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-0.5">
                  <span className="font-semibold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">{file.category}</span>
                  <span>•</span>
                  <span>{file.size}</span>
                  <span>•</span>
                  <span>Uploaded {file.uploadDate}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 self-end sm:self-auto">
              <button
                onClick={() => setSelectedFileForPreview(file.name)}
                className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold flex items-center space-x-1 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
              <button
                onClick={() => alert(`Downloading encrypted copy of ${file.name}`)}
                className="px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-lg font-bold flex items-center space-x-1 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {selectedFileForPreview && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm truncate">{selectedFileForPreview}</h3>
              <button onClick={() => setSelectedFileForPreview(null)} className="text-slate-400 hover:text-slate-700 font-bold">✕</button>
            </div>
            <div className="h-64 bg-slate-950 rounded-xl flex flex-col items-center justify-center text-slate-300 p-4 text-center">
              <FileText className="w-12 h-12 text-teal-400 mb-2" />
              <p className="text-xs font-mono">Encrypted DICOM / PDF Stream Loaded</p>
              <p className="text-[11px] text-slate-400 mt-1">Verified with SHA-256 signature against Mayo Hospital Radiology Database</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedFileForPreview(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
