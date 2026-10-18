import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const DEMO_DISPLAY_ID = 'MED-PK-98241';

import type { AuditLogItem, PatientData } from '@/types/index.ts';

type PatientRow = {
  display_id: string;
  name: string;
  age: number | null;
  dob: string | null;
  gender: string | null;
  blood_group: string | null;
  cnic: string | null;
  address: string | null;
  city: string | null;
  allergies: unknown;
  conditions: unknown;
  medications: unknown;
  emergency_contacts: unknown;
};

export function rowToPatient(row: PatientRow): PatientData {
  return {
    id: row.display_id,
    name: row.name,
    age: row.age ?? 0,
    dob: row.dob ?? '',
    gender: row.gender ?? '',
    bloodGroup: row.blood_group ?? '',
    cnic: row.cnic ?? '',
    address: row.address ?? '',
    city: row.city ?? '',
    allergies: Array.isArray(row.allergies) ? (row.allergies as string[]) : [],
    conditions: Array.isArray(row.conditions) ? (row.conditions as string[]) : [],
    medications: Array.isArray(row.medications)
      ? (row.medications as PatientData['medications'])
      : [],
    emergencyContacts: Array.isArray(row.emergency_contacts)
      ? (row.emergency_contacts as PatientData['emergencyContacts'])
      : [],
  };
}

export function patientToRow(patient: Partial<PatientData>) {
  const row: Record<string, unknown> = {};
  if (patient.name !== undefined) row.name = patient.name;
  if (patient.age !== undefined) row.age = patient.age;
  if (patient.dob !== undefined) row.dob = patient.dob;
  if (patient.gender !== undefined) row.gender = patient.gender;
  if (patient.bloodGroup !== undefined) row.blood_group = patient.bloodGroup;
  if (patient.cnic !== undefined) row.cnic = patient.cnic;
  if (patient.address !== undefined) row.address = patient.address;
  if (patient.city !== undefined) row.city = patient.city;
  if (patient.allergies !== undefined) row.allergies = patient.allergies;
  if (patient.conditions !== undefined) row.conditions = patient.conditions;
  if (patient.medications !== undefined) row.medications = patient.medications;
  if (patient.emergencyContacts !== undefined) row.emergency_contacts = patient.emergencyContacts;
  row.updated_at = new Date().toISOString();
  return row;
}

export async function fetchPatient(): Promise<PatientData | null> {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('display_id', DEMO_DISPLAY_ID)
    .maybeSingle();
  if (error) throw error;
  return data ? rowToPatient(data as PatientRow) : null;
}

export async function savePatient(updated: Partial<PatientData>): Promise<void> {
  const { error } = await supabase
    .from('patients')
    .update(patientToRow(updated))
    .eq('display_id', DEMO_DISPLAY_ID);
  if (error) throw error;
}

type AuditRow = {
  id: string;
  time_label: string;
  event: string;
  user_label: string;
  reason: string;
};

export function auditRowToItem(row: AuditRow): AuditLogItem {
  return {
    id: row.id,
    time: row.time_label,
    event: row.event,
    user: row.user_label,
    reason: row.reason,
  };
}

export async function fetchAuditLogs(): Promise<AuditLogItem[]> {
  const { data, error } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return (data as AuditRow[]).map(auditRowToItem);
}

export async function addAuditLog(
  event: string,
  user: string,
  reason: string
): Promise<AuditLogItem> {
  const timeLabel = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Karachi',
    timeZoneName: 'short',
  });
  const { data, error } = await supabase
    .from('audit_logs')
    .insert({
      patient_display_id: DEMO_DISPLAY_ID,
      time_label: timeLabel,
      event,
      user_label: user,
      reason,
    })
    .select('*')
    .single();
  if (error) throw error;
  return auditRowToItem(data as AuditRow);
}
