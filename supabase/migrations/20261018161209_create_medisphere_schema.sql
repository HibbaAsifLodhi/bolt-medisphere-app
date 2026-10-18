-- MEDISPHERE core schema
-- Patient profile (single-record demo app, no auth)

CREATE TABLE IF NOT EXISTS patients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_id text NOT NULL UNIQUE,            -- e.g. 'MED-PK-98241'
  name text NOT NULL,
  age int,
  dob date,
  gender text,
  blood_group text,
  cnic text,
  address text,
  city text,
  allergies jsonb NOT NULL DEFAULT '[]'::jsonb,
  conditions jsonb NOT NULL DEFAULT '[]'::jsonb,
  medications jsonb NOT NULL DEFAULT '[]'::jsonb,
  emergency_contacts jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Immutable access/event ledger (break-glass audits, clinician queries)
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_display_id text REFERENCES patients(display_id) ON DELETE CASCADE,
  time_label text NOT NULL,                   -- human-readable PKT timestamp
  event text NOT NULL,
  user_label text NOT NULL,
  reason text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Generic dated tracker entries: hydration, steps, calories, sleep,
-- bp, glucose, spo2, pain scores, etc.
CREATE TABLE IF NOT EXISTS daily_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_display_id text REFERENCES patients(display_id) ON DELETE CASCADE,
  metric text NOT NULL,                       -- 'water_glasses' | 'steps' | 'calories_in' | ...
  value numeric NOT NULL,
  recorded_on date NOT NULL DEFAULT CURRENT_DATE,
  meta jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (patient_display_id, metric, recorded_on)
);

-- Physio exercise session logbook
CREATE TABLE IF NOT EXISTS exercise_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_display_id text REFERENCES patients(display_id) ON DELETE CASCADE,
  exercise_name text NOT NULL,
  sets_completed int NOT NULL DEFAULT 0,
  reps int,
  hold_seconds int,
  soreness_level int CHECK (soreness_level BETWEEN 0 AND 10),
  completed_on date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Uploaded medical documents (metadata only; files live in storage)
CREATE TABLE IF NOT EXISTS medical_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_display_id text REFERENCES patients(display_id) ON DELETE CASCADE,
  name text NOT NULL,
  size_label text,
  doc_type text,                              -- 'Radiology' | 'Surgical Slip' | ...
  uploaded_on date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- App preferences: notification toggles, accessibility settings, consents
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_display_id text REFERENCES patients(display_id) ON DELETE CASCADE,
  category text NOT NULL,                     -- 'notifications' | 'accessibility' | 'consent'
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (patient_display_id, category)
);

-- Helpful index for the most common lookup pattern
CREATE INDEX IF NOT EXISTS idx_daily_metrics_lookup
  ON daily_metrics (patient_display_id, metric, recorded_on DESC);

CREATE INDEX IF NOT EXISTS idx_audit_logs_patient
  ON audit_logs (patient_display_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_exercise_sessions_patient
  ON exercise_sessions (patient_display_id, completed_on DESC);

CREATE INDEX IF NOT EXISTS idx_medical_documents_patient
  ON medical_documents (patient_display_id, created_at DESC);

-- Seed the demo patient from the app's INITIAL_PATIENT mock
INSERT INTO patients (display_id, name, age, dob, gender, blood_group, cnic, address, city, allergies, conditions, medications, emergency_contacts)
VALUES (
  'MED-PK-98241',
  'Zainab Ahmed',
  32,
  '1994-06-14',
  'Female',
  'B+',
  '35201-4829104-2',
  '42-C Gulberg III, Lahore, Pakistan',
  'Lahore, Punjab',
  '["Penicillin (Anaphylaxis risk)", "NSAIDs (Mild Gastric Ulceration)"]'::jsonb,
  '["L4-L5 Lumbar Disc Herniation (In Rehab)", "Mild Postural Scoliosis (Thoracic 8° Cobb)"]'::jsonb,
  '[{"name":"Pregabalin","dose":"75mg","freq":"Once daily at bedtime","doctor":"Dr. A. Rauf (Neuro)"},{"name":"Paracetamol","dose":"500mg","freq":"PRN for spinal ache","doctor":"Dr. F. Siddiqui (Pulmonology)"},{"name":"Salbutamol Inhaler","dose":"100mcg","freq":"PRN 2 puffs before exercise","doctor":"Dr. F. Siddiqui (Pulmonology)"}]'::jsonb,
  '[{"name":"Dr. Tariq Ahmed","relation":"Spouse","phone":"+92 300 4567890","primary":true},{"name":"Maryam Bibi","relation":"Mother","phone":"+92 321 9876543","primary":false}]'::jsonb
)
ON CONFLICT (display_id) DO NOTHING;
