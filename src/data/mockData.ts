import { PatientData, AuditLogItem, RouteMeta } from '../types/index.ts';

export const INITIAL_PATIENT: PatientData = {
  id: 'MED-PK-98241',
  name: 'Zainab Ahmed',
  age: 32,
  dob: '1994-06-14',
  gender: 'Female',
  bloodGroup: 'B+',
  cnic: '35201-4829104-2',
  address: '42-C Gulberg III, Lahore, Pakistan',
  city: 'Lahore, Punjab',
  allergies: ['Penicillin (Anaphylaxis risk)', 'NSAIDs (Mild Gastric Ulceration)'],
  conditions: ['L4-L5 Lumbar Disc Herniation (In Rehab)', 'Mild Postural Scoliosis (Thoracic 8° Cobb)'],
  medications: [
    { name: 'Pregabalin', dose: '75mg', freq: 'Once daily at bedtime', doctor: 'Dr. A. Rauf (Neuro)' },
    { name: 'Paracetamol', dose: '500mg', freq: 'PRN for spinal ache', doctor: 'Dr. F. Siddiqui (Pulmonology)' },
    { name: 'Salbutamol Inhaler', dose: '100mcg', freq: 'PRN 2 puffs before exercise', doctor: 'Dr. F. Siddiqui (Pulmonology)' }
  ],
  emergencyContacts: [
    { name: 'Dr. Tariq Ahmed', relation: 'Spouse', phone: '+92 300 4567890', primary: true },
    { name: 'Maryam Bibi', relation: 'Mother', phone: '+92 321 9876543', primary: false }
  ]
};

export const INITIAL_AUDIT_LOGS: AuditLogItem[] = [
  {
    id: 'log-1',
    time: '2026-10-18 10:14:22 PKT',
    event: 'Break-Glass SOS File Decrypted',
    user: 'Paramedic Station #12 (Lahore Rescue 1122)',
    reason: 'Simulated 1122 Dispatch Check & GPS Triage Test'
  },
  {
    id: 'log-2',
    time: '2026-10-14 16:30:11 PKT',
    event: 'Radiology PACS Sync',
    user: 'Dr. Sarah Niazi (Radiologist, FCPS)',
    reason: 'Lumbar Spine MRI 1.5T Slice Review & Cobb Angle Annotation'
  },
  {
    id: 'log-3',
    time: '2026-10-02 09:15:00 PKT',
    event: 'Consent Token Refreshed',
    user: 'Zainab Ahmed (Patient)',
    reason: 'Annual Privacy Policy & Break-Glass Consent Confirmation'
  },
  {
    id: 'log-4',
    time: '2026-09-28 11:20:45 PKT',
    event: 'Physical Therapy Assessment Upload',
    user: 'Dr. Hamza Malik (DPT, Physio Specialist)',
    reason: 'Rehabilitation Milestone 1 Evaluation'
  }
];

export const ALL_80_ROUTES: RouteMeta[] = [
  // Group A. Home & Account (1-8)
  { route: 'home-dashboard', num: 1, title: '1. Home Dashboard', group: 'A. Home & Account', icon: 'layout-dashboard', desc: 'Real-time overview of vitals, next consultations, and quick emergency launchers.' },
  { route: 'patient-profile', num: 2, title: '2. Patient Profile & Bio-Data', group: 'A. Home & Account', icon: 'user', desc: 'Core demographic identifier, national CNIC registration, emergency baseline, and biometric access controls.' },
  { route: 'family-profiles', num: 3, title: '3. Family Health Profiles', group: 'A. Home & Account', icon: 'users', desc: 'Manage dependent pediatric records, elderly parents care plans, and shared caregiver access.' },
  { route: 'account-settings', num: 4, title: '4. Account Settings & Preferences', group: 'A. Home & Account', icon: 'settings', desc: 'Manage password, multi-factor authentication (MFA), session keys, and regional server nodes.' },
  { route: 'privacy-security', num: 5, title: '5. Privacy & Security Center', group: 'A. Home & Account', icon: 'lock', desc: 'Zero-trust architecture, encrypted storage disclosures, and granular HIPAA / PK-Data protection policies.' },
  { route: 'consent-permissions', num: 6, title: '6. Consent & Access Permissions', group: 'A. Home & Account', icon: 'key', desc: 'Grant or revoke temporary clinical access tokens to consulting specialists, labs, and clinics.' },
  { route: 'notifications-reminders', num: 7, title: '7. Notifications & Medication Reminders', group: 'A. Home & Account', icon: 'bell', desc: 'SMS alerts, WhatsApp reminder webhooks, and push notifications for rehabilitation exercises.' },
  { route: 'help-centre', num: 8, title: '8. Help Centre & About MEDISPHERE', group: 'A. Home & Account', icon: 'help-circle', desc: 'User guides, clinical verification notices, and 24/7 technical support hotline.' },

  // Group B. Emergency & Safety (9-15)
  { route: 'emergency-sos', num: 9, title: '9. Emergency SOS Centre (1122)', group: 'B. Emergency & Safety', icon: 'shield-alert', desc: 'Rescue 1122 Gateway, GPS dispatch simulation, and critical break-glass consent token.' },
  { route: 'emergency-file', num: 10, title: '10. Emergency Medical File', group: 'B. Emergency & Safety', icon: 'file-text', desc: 'Comprehensive responder dossier optimized for paramedics, ER triage, and offline fallback.' },
  { route: 'emergency-contacts', num: 11, title: '11. Emergency Contacts & Family Alerts', group: 'B. Emergency & Safety', icon: 'phone-call', desc: 'Primary and secondary kin dispatch lists with automated GPS broadcast configurations.' },
  { route: 'allergies-contraindications', num: 12, title: '12. Medical Allergies & Contraindications', group: 'B. Emergency & Safety', icon: 'alert-triangle', desc: 'High-risk pharmaceutical allergies, food sensitivities, and surgical implant contraindications.' },
  { route: 'current-medications', num: 13, title: '13. Current Medications & Dosing Regimens', group: 'B. Emergency & Safety', icon: 'pill', desc: 'Active pharmaceutical schedule, prescribing physician details, and refill tracking.' },
  { route: 'previous-medications', num: 14, title: '14. Previous Medications & Treatment History', group: 'B. Emergency & Safety', icon: 'history', desc: 'Historical pharmacological logs, discontinued compounds, and past adverse drug reactions.' },
  { route: 'emergency-audit', num: 15, title: '15. Emergency Access & Break-Glass Audit', group: 'B. Emergency & Safety', icon: 'shield-check', desc: 'Immutable ledger of all emergency overrides, clinician queries, and token decryptions.' },

  // Group C. Records & Services (16-33)
  { route: 'complete-medical-history', num: 16, title: '16. Complete Medical History', group: 'C. Records & Services', icon: 'clipboard-list', desc: 'Longitudinal medical records, chronic conditions, surgical operations, and childhood immunizations.' },
  { route: 'diagnoses-notes', num: 17, title: '17. Diagnoses & Clinical Notes', group: 'C. Records & Services', icon: 'file-edit', desc: 'Physician soap notes, discharge summaries, and ICD-10 diagnostic coding logs.' },
  { route: 'prescriptions-records', num: 18, title: '18. Prescriptions & Medication Records', group: 'C. Records & Services', icon: 'receipt', desc: 'Digital QR-verified prescriptions from licensed practitioners across Pakistan.' },
  { route: 'lab-reports', num: 19, title: '19. Laboratory Reports & Bloodwork', group: 'C. Records & Services', icon: 'test-tube-2', desc: 'Complete blood count (CBC), lipid panels, HbA1c, and renal function test trends.' },
  { route: 'medical-uploads', num: 20, title: '20. Medical Documents & File Uploads', group: 'C. Records & Services', icon: 'upload-cloud', desc: 'Secure repository for external PDF summaries, discharge slips, and insurance claims.' },
  { route: 'xray-imaging', num: 21, title: '21. Spinal & X-Ray Imaging Centre', group: 'C. Records & Services', icon: 'bone', desc: 'Interactive 24-vertebra column, lateral lumbar radiograph viewer, and standing height logs.' },
  { route: 'mri-ct-viewer', num: 22, title: '22. MRI & CT Scan DICOM Viewer', group: 'C. Records & Services', icon: 'layers', desc: 'Multi-planar cross-sectional slice review (Axial, Sagittal, Coronal) with contrast adjustments.' },
  { route: 'vitals-height-weight', num: 23, title: '23. Height, Weight & Vital Signs Tracker', group: 'C. Records & Services', icon: 'scale', desc: 'Longitudinal BMI tracking, calibrated stadiometer height logs, and core body temperatures.' },
  { route: 'appointments-history', num: 24, title: '24. Appointments & Consultation History', group: 'C. Records & Services', icon: 'calendar', desc: 'Past and upcoming hospital visits, follow-up slots, and video tele-consultation receipts.' },
  { route: 'doctors-directory', num: 25, title: '25. Doctors & Specialists Directory', group: 'C. Records & Services', icon: 'stethoscope', desc: 'PMDC-verified doctors across orthopedic surgery, neurosurgery, and general medicine.' },
  { route: 'physio-directory', num: 26, title: '26. Physiotherapists & Rehabilitation Centers', group: 'C. Records & Services', icon: 'activity', desc: 'Accredited physical therapy clinics and specialized spine rehabilitation centers.' },
  { route: 'hospitals-directory', num: 27, title: '27. Hospitals & Healthcare Institutions', group: 'C. Records & Services', icon: 'building-2', desc: 'Tertiary hospitals, trauma centers, and district headquarters (DHQ) hospital coordinates.' },
  { route: 'laboratories-directory', num: 28, title: '28. Laboratories & Home Sample Collection', group: 'C. Records & Services', icon: 'flask-conical', desc: 'Chughtai Lab, Shaukat Khanum, and Excel Labs door-step sample booking directory.' },
  { route: 'pharmacy-info', num: 29, title: '29. Pharmacy & Medication Information Guide', group: 'C. Records & Services', icon: 'shopping-bag', desc: 'Generic drug substitutions, side-effect monographs, and verified pharmacy locations.' },
  { route: 'home-healthcare', num: 30, title: '30. Home Healthcare & Caregivers', group: 'C. Records & Services', icon: 'home', desc: 'Certified home nursing staff, post-operative wound care, and elderly patient assistance.' },
  { route: 'teleconsultation', num: 31, title: '31. Teleconsultation Video Portal', group: 'C. Records & Services', icon: 'video', desc: 'End-to-end encrypted video link connecting patients with remote medical consultants.' },
  { route: 'treatment-plans', num: 32, title: '32. Treatment Plans & Follow-Up Milestones', group: 'C. Records & Services', icon: 'workflow', desc: 'Multi-disciplinary recovery trajectories agreed upon by physician and physical therapist.' },
  { route: 'patient-reports-summaries', num: 33, title: '33. Patient Reports & Printable Summaries', group: 'C. Records & Services', icon: 'printer', desc: 'Consolidated one-page health briefing cards designed for external second opinions.' },

  // Group D. Physio & Rehab (34-46)
  { route: 'physio-dashboard', num: 34, title: '34. Physiotherapy & Rehabilitation Dashboard', group: 'D. Physio & Rehab', icon: 'heart-pulse', desc: 'Prescribed mobility routines, visual analogue pain scoring (VAS), and compliance tracking.' },
  { route: 'initial-assessment', num: 35, title: '35. Initial Physiotherapy Assessment', group: 'D. Physio & Rehab', icon: 'clipboard-check', desc: 'Baseline physical assessment: posture symmetry, palpatory findings, and neurologic reflexes.' },
  { route: 'rom-strength', num: 36, title: '36. Range of Motion (ROM) & Muscle Strength', group: 'D. Physio & Rehab', icon: 'gauge', desc: 'Goniometric joint angles (degrees) and Oxford manual muscle testing grades (0 to 5).' },
  { route: 'pain-functional', num: 37, title: '37. Pain & Functional Assessment Scales', group: 'D. Physio & Rehab', icon: 'frown', desc: 'Visual Analogue Scale (VAS) and Oswestry Disability Index (ODI) tracking.' },
  { route: 'rehab-plans', num: 38, title: '38. Rehabilitation Plans & Phases', group: 'D. Physio & Rehab', icon: 'list-ordered', desc: 'Phase-gated spinal recovery roadmap from acute pain relief to core strengthening.' },
  { route: 'exercise-library', num: 39, title: '39. Therapeutic Exercise Library', group: 'D. Physio & Rehab', icon: 'dumbbell', desc: 'Evidence-based catalog of 120+ spine, neck, and lower extremity restorative movements.' },
  { route: 'exercise-demos', num: 40, title: '40. Exercise Demonstrations & Form Videos', group: 'D. Physio & Rehab', icon: 'play-square', desc: 'High-definition video instructions highlighting proper biomechanics and breathing.' },
  { route: 'exercise-tracker', num: 41, title: '41. Exercise Session Tracker', group: 'D. Physio & Rehab', icon: 'check-circle-2', desc: 'Daily logbook for sets completed, hold durations, and immediate post-exercise soreness.' },
  { route: 'rehab-charts', num: 42, title: '42. Rehabilitation Progress Charts', group: 'D. Physio & Rehab', icon: 'line-chart', desc: 'Longitudinal graphs plotting pain reduction curves versus weekly adherence scores.' },
  { route: 'gait-posture', num: 43, title: '43. Gait & Posture Analysis', group: 'D. Physio & Rehab', icon: 'person-standing', desc: 'Coronal plumb-line alignment, pelvic tilt assessment, and stride cadence measurements.' },
  { route: 'home-exercise-prog', num: 44, title: '44. Home Exercise Programme (HEP)', group: 'D. Physio & Rehab', icon: 'home', desc: 'Self-guided home routine printable sheet with therapist precautionary annotations.' },
  { route: 'therapist-feedback', num: 45, title: '45. Therapist Feedback & Consult Notes', group: 'D. Physio & Rehab', icon: 'message-square', desc: 'Two-way clinical messaging between patient and attending physical therapist.' },
  { route: 'rehab-precautions', num: 46, title: '46. Rehabilitation Precautions & Red Flags', group: 'D. Physio & Rehab', icon: 'shield-x', desc: 'Mandatory red-flag alerts: stop immediately if experiencing radicular numbness or cauda equina signs.' },

  // Group E. Nutrition & Wellness (47-55)
  { route: 'nutrition-dashboard', num: 47, title: '47. Nutrition & Metabolic Dashboard', group: 'E. Nutrition & Wellness', icon: 'apple', desc: 'Caloric balance, macronutrient distribution, and hydration status for optimal tissue healing.' },
  { route: 'meal-plans', num: 48, title: '48. Meal Plans & Food Diary', group: 'E. Nutrition & Wellness', icon: 'utensils', desc: 'Anti-inflammatory diet plans rich in magnesium, calcium, and bone-strengthening vitamins.' },
  { route: 'calorie-tracking', num: 49, title: '49. Calorie & Micronutrient Tracking', group: 'E. Nutrition & Wellness', icon: 'flame', desc: 'Daily energy intake logs calibrated against patient height, weight, and basal metabolic rate.' },
  { route: 'hydration-tracker', num: 50, title: '50. Hydration Tracker', group: 'E. Nutrition & Wellness', icon: 'droplet', desc: 'Daily water intake tracker ensuring adequate intervertebral disc nucleus rehydration.' },
  { route: 'activity-steps', num: 51, title: '51. Activity & Step Count Tracker', group: 'E. Nutrition & Wellness', icon: 'footprints', desc: 'Daily walking distance, active minutes, and low-impact spinal movement goals.' },
  { route: 'sleep-recovery', num: 52, title: '52. Sleep & Physical Recovery', group: 'E. Nutrition & Wellness', icon: 'moon', desc: 'Sleep duration, mattress ergonomics guidance, and nocturnal pain interruptions.' },
  { route: 'bp-glucose', num: 53, title: '53. Blood Pressure & Blood Glucose Log', group: 'E. Nutrition & Wellness', icon: 'heart', desc: 'Home glucometer readings and sphygmomanometer logs plotted over 90 days.' },
  { route: 'heart-rate-spo2', num: 54, title: '54. Heart Rate & Oxygen Saturation (SpO2)', group: 'E. Nutrition & Wellness', icon: 'activity', desc: 'Pulse oximeter readings, resting pulse, and post-exercise recovery heart rates.' },
  { route: 'lifestyle-education', num: 55, title: '55. Healthy Lifestyle & Ergonomics Guide', group: 'E. Nutrition & Wellness', icon: 'book-open', desc: 'Workplace ergonomics, desk height setup, driving posture, and spine safety.' },

  // Group F. AI Assistant (56-61)
  { route: 'ai-assistant', num: 56, title: '56. AI Healthcare Assistant (Bilingual)', group: 'F. AI Assistant', icon: 'bot', desc: 'Ask questions in English or Urdu. Clarifies clinical medical reports without replacing physician diagnosis.' },
  { route: 'ai-report-explainer', num: 57, title: '57. Medical Report Explainer (AI)', group: 'F. AI Assistant', icon: 'file-search', desc: 'Upload or paste clinical lab terminology to receive plain-language summaries.' },
  { route: 'ai-medication-info', num: 58, title: '58. Medication Questions & Drug Interactions', group: 'F. AI Assistant', icon: 'help-circle', desc: 'Interactive AI drug database checking for harmful cross-reactions and food contraindications.' },
  { route: 'ai-physio-guide', num: 59, title: '59. Physiotherapy AI Movement Guide', group: 'F. AI Assistant', icon: 'sparkles', desc: 'Dynamic technique hints and exercise variation advice based on daily soreness levels.' },
  { route: 'ai-appointment-prep', num: 60, title: '60. Appointment Preparation Assistant', group: 'F. AI Assistant', icon: 'calendar-check', desc: 'Generate customized question checklists to ask your specialist at your next consultation.' },
  { route: 'ai-health-education', num: 61, title: '61. Personalized Health Education', group: 'F. AI Assistant', icon: 'graduation-cap', desc: 'Interactive micro-learning modules explaining spinal biomechanics and healthy aging.' },

  // Group G. Connected Ecosystem (62-71)
  { route: 'multilingual-urdu', num: 62, title: '62. Multilingual Urdu Hub (اردو پورٹل)', group: 'G. Connected Ecosystem', icon: 'languages', desc: 'Accessible health education in Pakistan national language, ensuring equal digital access (SDG 10).' },
  { route: 'provider-portal', num: 63, title: '63. Healthcare Provider Portal', group: 'G. Connected Ecosystem', icon: 'user-check', desc: 'Secure clinical login for verified physicians, physical therapists, and nurses.' },
  { route: 'hospital-clinic-dashboard', num: 64, title: '64. Hospital Operations Dashboard', group: 'G. Connected Ecosystem', icon: 'building', desc: 'Bed occupancy, outpatient queues, triage prioritization, and ambulance reception.' },
  { route: 'referral-coordination', num: 65, title: '65. Referral & Care Coordination', group: 'G. Connected Ecosystem', icon: 'share-2', desc: 'Seamless electronic referral transfers between primary clinics and tertiary trauma centres.' },
  { route: 'healthcare-service-directory', num: 66, title: '66. Healthcare Service Directory', group: 'G. Connected Ecosystem', icon: 'compass', desc: 'Categorized geo-located medical services across Punjab, Sindh, KPK, and Balochistan.' },
  { route: 'home-visit-requests', num: 67, title: '67. Home Visit Requests & Dispatch', group: 'G. Connected Ecosystem', icon: 'map-pin', desc: 'Schedule verified home visits for bedridden patients, wound dressings, and physio.' },
  { route: 'remote-rehab', num: 68, title: '68. Remote Rehabilitation Portal', group: 'G. Connected Ecosystem', icon: 'cast', desc: 'Live video tele-rehabilitation sessions with interactive form feedback.' },
  { route: 'patient-feedback', num: 69, title: '69. Patient Feedback & Quality of Care', group: 'G. Connected Ecosystem', icon: 'star', desc: 'Patient-reported outcome measures (PROMs) and institutional rating forms.' },
  { route: 'professional-profile', num: 70, title: '70. Healthcare Professional Profile', group: 'G. Connected Ecosystem', icon: 'badge-check', desc: 'Practitioner credentialing, license status, peer reviews, and clinical specialty.' },
  { route: 'resource-equipment', num: 71, title: '71. Equipment & Resource Directory', group: 'G. Connected Ecosystem', icon: 'package', desc: 'Inventory of available lumbar traction units, ultrasound therapy machines, and wheelchairs.' },

  // Group H. SDGs & System (72-79)
  { route: 'research-clinical-ed', num: 72, title: '72. Research & Clinical Education', group: 'H. SDGs & System', icon: 'microscope', desc: 'Anonymized epidemiology datasets, spinal biomechanics trials, and clinical research papers.' },
  { route: 'health-awareness', num: 73, title: '73. Public Health Awareness Campaigns', group: 'H. SDGs & System', icon: 'megaphone', desc: 'Community prevention guidelines for spinal strain, stroke identification, and maternal care.' },
  { route: 'community-programs', num: 74, title: '74. Community Health Programs', group: 'H. SDGs & System', icon: 'heart-handshake', desc: 'Free rural screening camps, mobile clinic outreach, and school posture screenings.' },
  { route: 'accessibility-settings', num: 75, title: '75. Accessibility & Font Settings', group: 'H. SDGs & System', icon: 'eye', desc: 'Adjust typography scaling, high contrast mode, and screen-reader assistance.' },
  { route: 'data-export', num: 76, title: '76. Data Export & Account Management', group: 'H. SDGs & System', icon: 'download', desc: 'Download complete medical file in encrypted JSON or portable PDF format (GDPR compliant).' },
  { route: 'system-status', num: 77, title: '77. System Status & API Integrations', group: 'H. SDGs & System', icon: 'server', desc: 'Live operational status of 1122 dispatch nodes, SMS gateways, and cloud PACS servers.' },
  { route: 'product-roadmap', num: 78, title: '78. Product Roadmap & AI Vision', group: 'H. SDGs & System', icon: 'map', desc: 'Timeline for wearable Bluetooth integration, offline mesh SOS, and hospital EHR bridges.' },
  { route: 'sdg-impact', num: 79, title: '79. UN SDG Impact & Carbon Audit', group: 'H. SDGs & System', icon: 'file-check', desc: 'Live mathematical models proving paper biomass savings and avoided fuel CO2 emissions.' }
];

export const ROUTE_MAP = new Map(ALL_80_ROUTES.map(r => [r.route, r]));
