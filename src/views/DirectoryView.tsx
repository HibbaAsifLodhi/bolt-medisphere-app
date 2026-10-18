import React, { useState } from 'react';
import {
  Stethoscope,
  Building2,
  FlaskConical,
  ShoppingBag,
  Activity,
  MapPin,
  Phone,
  Star,
  CheckCircle2,
  Search,
  Calendar,
  ExternalLink
} from 'lucide-react';

interface DirectoryViewProps {
  type: 'doctors' | 'physios' | 'hospitals' | 'labs' | 'pharmacies';
  onNavigate: (route: string) => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({ type, onNavigate }) => {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('All');

  const DIRECTORY_DATA = {
    doctors: {
      title: 'Doctors & Medical Specialists Directory',
      badge: 'PMDC Verified Practitioners',
      desc: 'Browse verified consultants across Orthopedic Surgery, Neurosurgery, Pulmonology, and Internal Medicine in Pakistan.',
      icon: Stethoscope,
      items: [
        {
          name: 'Dr. Fatima Siddiqui, MD',
          specialty: 'Pulmonology & Respiratory Medicine',
          hospital: 'Mayo Hospital & Private Clinic, Lahore',
          pmdc: 'PMDC: 48912-P',
          experience: '16 Yrs Exp',
          rating: '4.9 (184 reviews)',
          city: 'Lahore',
          fee: 'PKR 2,500',
          timing: 'Mon–Thu: 4:00 PM – 8:00 PM'
        },
        {
          name: 'Dr. A. Rauf, FCPS (Neuro)',
          specialty: 'Neurosurgery & Spine Intervention',
          hospital: 'Doctors Hospital & Medical Center, Lahore',
          pmdc: 'PMDC: 39182-P',
          experience: '22 Yrs Exp',
          rating: '4.9 (240 reviews)',
          city: 'Lahore',
          fee: 'PKR 3,500',
          timing: 'Tue–Sat: 5:00 PM – 9:00 PM'
        },
        {
          name: 'Dr. Sarah Niazi, FCPS',
          specialty: 'Diagnostic Neuroradiology & Musculoskeletal Imaging',
          hospital: 'Shaukat Khanum Memorial Hospital, Lahore',
          pmdc: 'PMDC: 51204-P',
          experience: '14 Yrs Exp',
          rating: '4.8 (112 reviews)',
          city: 'Lahore',
          fee: 'PKR 3,000',
          timing: 'Mon–Fri: 9:00 AM – 3:00 PM'
        },
        {
          name: 'Dr. Kamran Baig, FRCS',
          specialty: 'Orthopedic Spine Surgery',
          hospital: 'Shifa International Hospital, Islamabad',
          pmdc: 'PMDC: 32019-P',
          experience: '20 Yrs Exp',
          rating: '4.9 (310 reviews)',
          city: 'Islamabad',
          fee: 'PKR 3,500',
          timing: 'Mon–Wed: 11:00 AM – 4:00 PM'
        }
      ]
    },
    physios: {
      title: 'Physiotherapists & Rehabilitation Centers',
      badge: 'Licensed Physical Therapy Clinics',
      desc: 'Accredited spine rehabilitation institutes, manual physical therapists, and postural correction specialists.',
      icon: Activity,
      items: [
        {
          name: 'Dr. Hamza Malik, DPT',
          specialty: 'Spinal Decompression & Lumbar Stabilization',
          hospital: 'Spine Care & Physio Institute, 14-L Gulberg, Lahore',
          pmdc: 'Licensed DPT # PT-8219',
          experience: '9 Yrs Exp',
          rating: '4.9 (142 reviews)',
          city: 'Lahore',
          fee: 'PKR 2,000 / session',
          timing: 'Daily: 10:00 AM – 7:00 PM'
        },
        {
          name: 'Dr. Ayesha Tariq, MS-OMPT',
          specialty: 'Orthopedic Manual Therapy & Ergonomics',
          hospital: 'Rehab Dynamics, DHA Phase 5, Lahore',
          pmdc: 'Licensed DPT # PT-6501',
          experience: '11 Yrs Exp',
          rating: '4.8 (98 reviews)',
          city: 'Lahore',
          fee: 'PKR 2,200 / session',
          timing: 'Mon–Fri: 2:00 PM – 8:00 PM'
        },
        {
          name: 'Spine Motion Clinic',
          specialty: 'Post-Operative & Disc Herniation Rehab Center',
          hospital: 'F-8 Markaz, Islamabad',
          pmdc: 'Clinical Registration # ISB-902',
          experience: 'Center of Excellence',
          rating: '4.9 (215 reviews)',
          city: 'Islamabad',
          fee: 'PKR 2,500 / session',
          timing: 'Mon–Sat: 9:00 AM – 6:00 PM'
        }
      ]
    },
    hospitals: {
      title: 'Hospitals & Healthcare Institutions Directory',
      badge: 'Tertiary & Trauma Facilities',
      desc: 'Public and private tertiary hospitals, 24/7 trauma emergency rooms, and 1122 ambulance intake centers.',
      icon: Building2,
      items: [
        {
          name: 'Mayo Hospital (King Edward Medical University)',
          specialty: 'Public Tertiary Teaching Hospital • 2,400 Beds',
          hospital: 'Nelagumbad, Anarkali, Lahore',
          pmdc: 'Govt. Hospital Node # 01',
          experience: 'Emergency Trauma Hub',
          rating: '4.6 (1,820 reviews)',
          city: 'Lahore',
          fee: 'Subsidized / Free with Sehat Card',
          timing: '24/7 Emergency & ICU'
        },
        {
          name: 'Doctors Hospital & Medical Center',
          specialty: 'Private Tertiary Care • Spine & Neurosurgery Center',
          hospital: '152/1 Canal Bank Rd, Johar Town, Lahore',
          pmdc: 'Private License # DH-102',
          experience: 'Comprehensive PACS Facility',
          rating: '4.7 (950 reviews)',
          city: 'Lahore',
          fee: 'Standard Private Tariff',
          timing: '24/7 Emergency & Radiology'
        },
        {
          name: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre',
          specialty: 'Specialized Oncology & Tertiary Diagnostic Radiology',
          hospital: '7A Block R-3, Johar Town, Lahore',
          pmdc: 'JCIA Accredited',
          experience: 'State-of-the-Art Imaging Center',
          rating: '4.9 (3,400 reviews)',
          city: 'Lahore',
          fee: 'Tiered Financial Support',
          timing: '24/7 Emergency Intake'
        },
        {
          name: 'Shifa International Hospital',
          specialty: 'Multi-Disciplinary Tertiary Trauma Facility',
          hospital: 'Sector H-8/4, Islamabad',
          pmdc: 'JCIA Accredited',
          experience: 'International Standards',
          rating: '4.8 (2,100 reviews)',
          city: 'Islamabad',
          fee: 'Standard Tariff',
          timing: '24/7 Emergency Service'
        }
      ]
    },
    labs: {
      title: 'Laboratories & Home Sample Collection Directory',
      badge: 'ISO 15189 Accredited',
      desc: 'Book home sample extraction or locate certified diagnostic pathology centers across Pakistan.',
      icon: FlaskConical,
      items: [
        {
          name: 'Chughtai Healthcare Central Lab',
          specialty: 'Full Pathology, Hematology, ESR & Vit D3',
          hospital: 'Jail Road, Main Gulberg, Lahore (120+ Collection Centers)',
          pmdc: 'ISO 15189:2012 Certified',
          experience: 'Home Sample Collection Available',
          rating: '4.8 (4,200 reviews)',
          city: 'Lahore',
          fee: 'Home Extraction Free &gt; PKR 1,500',
          timing: '24/7 Sample Reception'
        },
        {
          name: 'Shaukat Khanum Pathology Laboratory',
          specialty: 'Advanced Histopathology & Molecular Diagnostics',
          hospital: 'Over 80 collection centers in Punjab & Sindh',
          pmdc: 'CAP Accredited',
          experience: 'Gold Standard Clinical Quality',
          rating: '4.9 (2,900 reviews)',
          city: 'Lahore',
          fee: 'Standard Lab Charges',
          timing: 'Mon–Sat: 7:00 AM – 10:00 PM'
        },
        {
          name: 'Excel Labs',
          specialty: 'Biochemistry, Hormone Panels & Renal Profiles',
          hospital: 'Reshi Building, Blue Area, Islamabad',
          pmdc: 'ISO Certified Lab',
          experience: 'Fast Turnaround Online Reporting',
          rating: '4.7 (890 reviews)',
          city: 'Islamabad',
          fee: 'Home Pickup Available',
          timing: 'Daily: 7:30 AM – 9:00 PM'
        }
      ]
    },
    pharmacies: {
      title: 'Verified Pharmacies & Drug Information Guide',
      badge: 'DRAP Licensed Dispensaries',
      desc: 'Locate verified pharmacies with cold-chain storage for sensitive medications across Pakistan.',
      icon: ShoppingBag,
      items: [
        {
          name: 'Servaid Pharmacy (Flagship Gulberg Branch)',
          specialty: 'Licensed Dispensary • Cold Chain Insulins & Biologics',
          hospital: 'Main Boulevard Gulberg, Lahore',
          pmdc: 'DRAP License: PHA-LHE-410',
          experience: 'Official Dispense Partner',
          rating: '4.8 (820 reviews)',
          city: 'Lahore',
          fee: 'Home Delivery Within 2 Hours',
          timing: '24 Hours Open'
        },
        {
          name: 'Fazal Din’s Pharma Plus',
          specialty: 'Prescription Pharmaceuticals & Surgical Equipment',
          hospital: 'Mall Road & DHA Branches, Lahore',
          pmdc: 'DRAP License: PHA-LHE-102',
          experience: 'Over 70 Years of Service',
          rating: '4.8 (1,150 reviews)',
          city: 'Lahore',
          fee: 'Free Delivery Available',
          timing: '24 Hours Open'
        },
        {
          name: 'D. Watson Chemist',
          specialty: 'Imported Prescription Formulations & Braces',
          hospital: 'F-6 Super Market, Islamabad',
          pmdc: 'DRAP License: PHA-ISB-201',
          experience: 'Complete Orthopedic Braces Inventory',
          rating: '4.7 (1,400 reviews)',
          city: 'Islamabad',
          fee: 'Standard Retail',
          timing: 'Daily: 8:00 AM – 12:00 Midnight'
        }
      ]
    }
  };

  const currentCategory = DIRECTORY_DATA[type] || DIRECTORY_DATA.doctors;
  const CategoryIcon = currentCategory.icon;

  const filteredItems = currentCategory.items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.specialty.toLowerCase().includes(search.toLowerCase()) ||
                          item.hospital.toLowerCase().includes(search.toLowerCase());
    const matchesCity = cityFilter === 'All' || item.city === cityFilter;
    return matchesSearch && matchesCity;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {currentCategory.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">Pakistan Nationwide</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">{currentCategory.title}</h2>
          <p className="text-xs text-slate-500">{currentCategory.desc}</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={`Search ${type} by name, specialty, or hospital...`}
            className="w-full text-xs pl-9 pr-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-slate-500">City:</span>
          {['All', 'Lahore', 'Islamabad'].map(c => (
            <button
              key={c}
              onClick={() => setCityFilter(c)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                cityFilter === c ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-700 flex items-center justify-center font-bold flex-shrink-0">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm leading-snug">{item.name}</h3>
                    <p className="text-teal-700 font-medium text-[11px]">{item.specialty}</p>
                  </div>
                </div>
                <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-emerald-600 text-emerald-600" />
                  <span>{item.rating.split(' ')[0]}</span>
                </span>
              </div>

              <div className="space-y-1 text-slate-600 pt-1">
                <p className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>{item.hospital}</span>
                </p>
                <div className="flex justify-between text-[11px] text-slate-500 pt-1">
                  <span>{item.pmdc}</span>
                  <span className="font-mono text-slate-700 font-bold">{item.fee}</span>
                </div>
                <p className="text-[10px] text-slate-400">Timings: {item.timing}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] text-emerald-700 font-bold flex items-center">
                <CheckCircle2 className="w-3 h-3 mr-1" /> Verified Partner
              </span>
              <button
                onClick={() => {
                  if (type === 'doctors' || type === 'physios') {
                    onNavigate('appointments-history');
                  } else {
                    alert(`Contact details and verified portal link opened for ${item.name}.`);
                  }
                }}
                className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold text-xs transition"
              >
                {type === 'doctors' || type === 'physios' ? 'Book Slot' : 'Connect / Request'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
