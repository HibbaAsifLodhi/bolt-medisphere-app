export interface PatientData {
  id: string;
  name: string;
  age: number;
  dob: string;
  gender: string;
  bloodGroup: string;
  cnic: string;
  address: string;
  city: string;
  allergies: string[];
  conditions: string[];
  medications: {
    name: string;
    dose: string;
    freq: string;
    doctor: string;
  }[];
  emergencyContacts: {
    name: string;
    relation: string;
    phone: string;
    primary: boolean;
  }[];
}

export interface AuditLogItem {
  id: string;
  time: string;
  event: string;
  user: string;
  reason: string;
}

export interface RouteMeta {
  route: string;
  num: number;
  title: string;
  group: string;
  icon: string;
  desc: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  textEnglish?: string;
  textUrdu?: string;
  timestamp: string;
}
