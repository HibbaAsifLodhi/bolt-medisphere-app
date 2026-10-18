import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Video,
  MapPin,
  CheckCircle2,
  Plus,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { PatientData } from '../types/index.ts';

interface AppointmentsViewProps {
  patient: PatientData;
  onAddAuditLog: (event: string, user: string, reason: string) => void;
  onNavigate: (route: string) => void;
}

export const AppointmentsView: React.FC<AppointmentsViewProps> = ({
  patient,
  onAddAuditLog,
  onNavigate
}) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Hamza Malik, DPT');
  const [bookingDate, setBookingDate] = useState('2026-10-22');
  const [bookingTime, setBookingTime] = useState('11:30 AM');
  const [bookingType, setBookingType] = useState<'In-Clinic' | 'Video Teleconsult'>('In-Clinic');

  const [appointments, setAppointments] = useState([
    {
      id: 'APT-1082',
      doctor: 'Dr. Hamza Malik, DPT',
      specialty: 'Physical Therapy & Spine Rehabilitation',
      type: 'In-Clinic Physical Assessment',
      date: 'Tomorrow, Oct 19, 2026',
      time: '11:00 AM PKT',
      location: 'Spine Care Center, 14-L Gulberg III, Lahore',
      status: 'Confirmed',
      isUpcoming: true
    },
    {
      id: 'APT-1065',
      doctor: 'Dr. Fatima Siddiqui, MD',
      specialty: 'Pulmonology & Internal Medicine',
      type: 'Encrypted Video Teleconsultation',
      date: 'Oct 24, 2026',
      time: '03:30 PM PKT',
      location: 'MEDISPHERE Tele-Portal (Link Active 15m Prior)',
      status: 'Confirmed',
      isUpcoming: true
    },
    {
      id: 'APT-0982',
      doctor: 'Dr. A. Rauf, FCPS',
      specialty: 'Neurosurgery & Spine Specialist',
      type: 'Consultation & MRI Review',
      date: 'Sep 29, 2026',
      time: '05:00 PM PKT',
      location: 'Doctors Hospital Lahore',
      status: 'Completed',
      isUpcoming: false
    }
  ]);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const newApt = {
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      doctor: selectedDoctor,
      specialty: selectedDoctor.includes('Hamza') ? 'Spine Physio' : 'Clinical Consultation',
      type: bookingType,
      date: bookingDate,
      time: bookingTime,
      location: bookingType === 'Video Teleconsult' ? 'MEDISPHERE Tele-Portal' : 'Gulberg III, Lahore',
      status: 'Confirmed',
      isUpcoming: true
    };
    setAppointments([newApt, ...appointments]);
    setShowBookingModal(false);
    onAddAuditLog(
      `Appointment Booked: ${selectedDoctor}`,
      'Hospital Scheduling Engine',
      `Confirmed slot for ${bookingDate} at ${bookingTime}`
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Care Coordination
            </span>
            <span className="text-xs text-slate-400 font-mono">Real-Time Scheduling</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Appointments & Consultation History</h2>
          <p className="text-xs text-slate-500">
            Confirmed doctor visits, remote teleconsultations, and rehabilitation milestones.
          </p>
        </div>
        <button
          onClick={() => setShowBookingModal(true)}
          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Book New Consultation</span>
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-sm">Schedule Clinical Consultation</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleBook} className="space-y-3">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Select Practitioner</label>
                <select
                  value={selectedDoctor}
                  onChange={e => setSelectedDoctor(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600 bg-white"
                >
                  <option value="Dr. Hamza Malik, DPT (Physical Therapy)">Dr. Hamza Malik, DPT (Spine Physio)</option>
                  <option value="Dr. Fatima Siddiqui, MD (Pulmonology)">Dr. Fatima Siddiqui, MD (Pulmonology)</option>
                  <option value="Dr. A. Rauf, FCPS (Neurosurgery)">Dr. A. Rauf, FCPS (Neurosurgery)</option>
                  <option value="Dr. Sarah Niazi, FCPS (Radiology)">Dr. Sarah Niazi, FCPS (Radiology)</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Consultation Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setBookingType('In-Clinic')}
                    className={`py-2 text-center rounded-lg font-semibold transition ${
                      bookingType === 'In-Clinic' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    In-Clinic Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType('Video Teleconsult')}
                    className={`py-2 text-center rounded-lg font-semibold transition ${
                      bookingType === 'Video Teleconsult' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    Video Teleconsult
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={e => setBookingDate(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Time Slot</label>
                  <select
                    value={bookingTime}
                    onChange={e => setBookingTime(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600 bg-white"
                  >
                    <option value="10:00 AM">10:00 AM PKT</option>
                    <option value="11:30 AM">11:30 AM PKT</option>
                    <option value="02:30 PM">02:30 PM PKT</option>
                    <option value="04:30 PM">04:30 PM PKT</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Appointments List */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">Upcoming Consultations</h3>
        <div className="space-y-3">
          {appointments.filter(a => a.isUpcoming).map(apt => (
            <div key={apt.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-brand-700 flex items-center justify-center font-bold flex-shrink-0">
                    {apt.type.includes('Video') ? <Video className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{apt.doctor}</h4>
                    <p className="text-slate-500 font-medium text-[11px]">{apt.specialty}</p>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-[10px] self-start sm:self-center">
                  {apt.status}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-slate-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="font-bold text-slate-900">{apt.date} at {apt.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{apt.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                <span className="font-mono text-slate-400">Ref: {apt.id}</span>
                {apt.type.includes('Video') ? (
                  <button
                    onClick={() => onNavigate('teleconsultation')}
                    className="text-brand-600 font-bold hover:underline flex items-center space-x-1"
                  >
                    <span>Join Video Room</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-slate-500">Reminder sent via WhatsApp</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-slate-900 text-sm pt-4">Past Consultations Archive</h3>
        <div className="space-y-3">
          {appointments.filter(a => !a.isUpcoming).map(apt => (
            <div key={apt.id} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-800">{apt.doctor} ({apt.specialty})</span>
                <span className="font-mono text-slate-500 text-[11px]">{apt.date}</span>
              </div>
              <p className="text-slate-600">{apt.type} • {apt.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
