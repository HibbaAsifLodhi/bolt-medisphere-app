import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { PrintableEmergencyCard } from './components/PrintableEmergencyCard.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { LazyRoute } from './components/LazyRoute.tsx';
import { HomeDashboard } from './views/HomeDashboard.tsx';
import { INITIAL_PATIENT, INITIAL_AUDIT_LOGS } from './data/mockData.ts';
import { AuditLogItem, PatientData } from './types/index.ts';
import { fetchPatient, savePatient, fetchAuditLogs, addAuditLog as persistAuditLog } from './lib/supabase.ts';

type Loader = () => Promise<{ default: React.ComponentType<any> }>;

// Views use named exports; wrap each dynamic import to surface its named export
// as the default that React.lazy expects.
function named(name: string, loader: () => Promise<Record<string, unknown>>): Loader {
  return () =>
    loader().then(m => ({ default: (m[name] ?? m.default) as React.ComponentType<any> }));
}

const loaders = {
  EmergencySosView: named('EmergencySosView', () => import('./views/EmergencySosView.tsx')),
  EmergencyFileView: named('EmergencyFileView', () => import('./views/EmergencyFileView.tsx')),
  EmergencyAuditView: named('EmergencyAuditView', () => import('./views/EmergencyAuditView.tsx')),
  SpinalImagingView: named('SpinalImagingView', () => import('./views/SpinalImagingView.tsx')),
  PhysioDashboardView: named('PhysioDashboardView', () => import('./views/PhysioDashboardView.tsx')),
  AiAssistantView: named('AiAssistantView', () => import('./views/AiAssistantView.tsx')),
  UrduHubView: named('UrduHubView', () => import('./views/UrduHubView.tsx')),
  SdgImpactView: named('SdgImpactView', () => import('./views/SdgImpactView.tsx')),
  PatientProfileView: named('PatientProfileView', () => import('./views/PatientProfileView.tsx')),
  MedicalHistoryView: named('MedicalHistoryView', () => import('./views/MedicalHistoryView.tsx')),
  PrescriptionsView: named('PrescriptionsView', () => import('./views/PrescriptionsView.tsx')),
  LabReportsView: named('LabReportsView', () => import('./views/LabReportsView.tsx')),
  MriCtViewerView: named('MriCtViewerView', () => import('./views/MriCtViewerView.tsx')),
  AppointmentsView: named('AppointmentsView', () => import('./views/AppointmentsView.tsx')),
  DirectoryView: named('DirectoryView', () => import('./views/DirectoryView.tsx')),
  ExerciseLibraryView: named('ExerciseLibraryView', () => import('./views/ExerciseLibraryView.tsx')),
  VitalsTrackerView: named('VitalsTrackerView', () => import('./views/VitalsTrackerView.tsx')),
  SystemStatusView: named('SystemStatusView', () => import('./views/SystemStatusView.tsx')),
  ProductRoadmapView: named('ProductRoadmapView', () => import('./views/ProductRoadmapView.tsx')),
  UniversalSubpageView: named('UniversalSubpageView', () => import('./views/UniversalSubpageView.tsx')),
  // Account group
  AccountSettingsView: named('AccountSettingsView', () => import('./views/account/AccountSettingsView.tsx')),
  PrivacySecurityView: named('PrivacySecurityView', () => import('./views/account/PrivacySecurityView.tsx')),
  ConsentPermissionsView: named('ConsentPermissionsView', () => import('./views/account/ConsentPermissionsView.tsx')),
  NotificationsRemindersView: named('NotificationsRemindersView', () => import('./views/account/NotificationsRemindersView.tsx')),
  HelpCentreView: named('HelpCentreView', () => import('./views/account/HelpCentreView.tsx')),
  FamilyProfilesView: named('FamilyProfilesView', () => import('./views/account/FamilyProfilesView.tsx')),
  // AI group
  AiReportExplainerView: named('AiReportExplainerView', () => import('./views/ai/AiReportExplainerView.tsx')),
  AiMedicationInfoView: named('AiMedicationInfoView', () => import('./views/ai/AiMedicationInfoView.tsx')),
  AiPhysioGuideView: named('AiPhysioGuideView', () => import('./views/ai/AiPhysioGuideView.tsx')),
  AiAppointmentPrepView: named('AiAppointmentPrepView', () => import('./views/ai/AiAppointmentPrepView.tsx')),
  AiHealthEducationView: named('AiHealthEducationView', () => import('./views/ai/AiHealthEducationView.tsx')),
  // Ecosystem group
  ProviderPortalView: named('ProviderPortalView', () => import('./views/ecosystem/ProviderPortalView.tsx')),
  ServiceDirectoryView: named('ServiceDirectoryView', () => import('./views/ecosystem/ServiceDirectoryView.tsx')),
  ProfessionalProfileView: named('ProfessionalProfileView', () => import('./views/ecosystem/ProfessionalProfileView.tsx')),
  PatientFeedbackView: named('PatientFeedbackView', () => import('./views/ecosystem/PatientFeedbackView.tsx')),
  ReferralCoordinationView: named('ReferralCoordinationView', () => import('./views/ecosystem/ReferralCoordinationView.tsx')),
  RemoteRehabView: named('RemoteRehabView', () => import('./views/ecosystem/RemoteRehabView.tsx')),
  ResourceEquipmentView: named('ResourceEquipmentView', () => import('./views/ecosystem/ResourceEquipmentView.tsx')),
  // Emergency group
  AllergiesContraindicationsView: named('AllergiesContraindicationsView', () => import('./views/emergency/AllergiesContraindicationsView.tsx')),
  PreviousMedicationsView: named('PreviousMedicationsView', () => import('./views/emergency/PreviousMedicationsView.tsx')),
  // Physio group
  RomStrengthView: named('RomStrengthView', () => import('./views/physio/RomStrengthView.tsx')),
  PainFunctionalView: named('PainFunctionalView', () => import('./views/physio/PainFunctionalView.tsx')),
  RehabPlansView: named('RehabPlansView', () => import('./views/physio/RehabPlansView.tsx')),
  GaitPostureView: named('GaitPostureView', () => import('./views/physio/GaitPostureView.tsx')),
  RehabPrecautionsView: named('RehabPrecautionsView', () => import('./views/physio/RehabPrecautionsView.tsx')),
  ExerciseDemosView: named('ExerciseDemosView', () => import('./views/physio/ExerciseDemosView.tsx')),
  ExerciseTrackerView: named('ExerciseTrackerView', () => import('./views/physio/ExerciseTrackerView.tsx')),
  RehabChartsView: named('RehabChartsView', () => import('./views/physio/RehabChartsView.tsx')),
  HomeExerciseProgView: named('HomeExerciseProgView', () => import('./views/physio/HomeExerciseProgView.tsx')),
  TherapistFeedbackView: named('TherapistFeedbackView', () => import('./views/physio/TherapistFeedbackView.tsx')),
  // Records group
  TeleconsultationView: named('TeleconsultationView', () => import('./views/records/TeleconsultationView.tsx')),
  HomeHealthcareView: named('HomeHealthcareView', () => import('./views/records/HomeHealthcareView.tsx')),
  MedicalUploadsView: named('MedicalUploadsView', () => import('./views/records/MedicalUploadsView.tsx')),
  PatientReportsSummariesView: named('PatientReportsSummariesView', () => import('./views/records/PatientReportsSummariesView.tsx')),
  TreatmentPlansView: named('TreatmentPlansView', () => import('./views/records/TreatmentPlansView.tsx')),
  // System group
  ResearchClinicalEdView: named('ResearchClinicalEdView', () => import('./views/system/ResearchClinicalEdView.tsx')),
  HealthAwarenessView: named('HealthAwarenessView', () => import('./views/system/HealthAwarenessView.tsx')),
  CommunityProgramsView: named('CommunityProgramsView', () => import('./views/system/CommunityProgramsView.tsx')),
  AccessibilitySettingsView: named('AccessibilitySettingsView', () => import('./views/system/AccessibilitySettingsView.tsx')),
  DataExportView: named('DataExportView', () => import('./views/system/DataExportView.tsx')),
  // Wellness group
  NutritionDashboardView: named('NutritionDashboardView', () => import('./views/wellness/NutritionDashboardView.tsx')),
  MealPlansView: named('MealPlansView', () => import('./views/wellness/MealPlansView.tsx')),
  CalorieTrackingView: named('CalorieTrackingView', () => import('./views/wellness/CalorieTrackingView.tsx')),
  HydrationTrackerView: named('HydrationTrackerView', () => import('./views/wellness/HydrationTrackerView.tsx')),
  ActivityStepsView: named('ActivityStepsView', () => import('./views/wellness/ActivityStepsView.tsx')),
  SleepRecoveryView: named('SleepRecoveryView', () => import('./views/wellness/SleepRecoveryView.tsx')),
  LifestyleEducationView: named('LifestyleEducationView', () => import('./views/wellness/LifestyleEducationView.tsx')),
} as const;

export default function App() {
  const [viewMode, setViewMode] = useState<'app' | 'landing'>('app');
  const [currentRoute, setCurrentRoute] = useState<string>('home-dashboard');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);
  const [patient, setPatient] = useState<PatientData>(INITIAL_PATIENT);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(INITIAL_AUDIT_LOGS);
  const [selectedVertebra, setSelectedVertebra] = useState<string>('L4');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load patient + audit logs from the database on first render
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [remotePatient, remoteLogs] = await Promise.all([fetchPatient(), fetchAuditLogs()]);
        if (cancelled) return;
        if (remotePatient) setPatient(remotePatient);
        if (remoteLogs.length > 0) setAuditLogs(remoteLogs);
      } catch (err) {
        console.error('Failed to load data from database', err);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Check URL parameters for initial view or route
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const routeParam = params.get('route');
    const viewParam = params.get('view');
    if (viewParam === 'landing') {
      setViewMode('landing');
    }
    if (routeParam) {
      setCurrentRoute(routeParam);
    }
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleUpdatePatient = (updated: Partial<PatientData>) => {
    setPatient(prev => ({ ...prev, ...updated }));
    savePatient(updated).catch(err => console.error('Failed to save patient record', err));
    showToast('Patient record updated');
  };

  const handleAddAuditLog = (event: string, user: string, reason: string) => {
    persistAuditLog(event, user, reason)
      .then(savedLog => {
        setAuditLogs(prev => [savedLog, ...prev]);
        showToast(`Audit Log Recorded: ${savedLog.event}`);
      })
      .catch(err => {
        console.error('Failed to record audit log', err);
        showToast('Could not record audit log');
      });
  };

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    if (viewMode === 'landing') {
      setViewMode('app');
    }
    const mainContent = document.getElementById('mainPageContent');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  };

  const handlePrintCard = () => {
    window.print();
  };

  const renderActiveRoute = () => {
    switch (currentRoute) {
      case 'home-dashboard':
        return (
          <HomeDashboard
            patient={patient}
            onNavigate={handleNavigate}
            onPrintCard={handlePrintCard}
          />
        );
      case 'patient-profile':
        return (
          <LazyRoute
            loader={loaders.PatientProfileView}
            patient={patient}
            onUpdatePatient={handleUpdatePatient}
            onPrintCard={handlePrintCard}
            onNavigate={handleNavigate}
          />
        );
      case 'complete-medical-history':
        return (
          <LazyRoute
            loader={loaders.MedicalHistoryView}
            patient={patient}
            onNavigate={handleNavigate}
          />
        );
      case 'prescriptions-records':
      case 'current-medications':
        return (
          <LazyRoute
            loader={loaders.PrescriptionsView}
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'lab-reports':
        return <LazyRoute loader={loaders.LabReportsView} patient={patient} />;
      case 'mri-ct-viewer':
        return <LazyRoute loader={loaders.MriCtViewerView} patient={patient} />;
      case 'vitals-height-weight':
      case 'bp-glucose':
      case 'heart-rate-spo2':
        return <LazyRoute loader={loaders.VitalsTrackerView} patient={patient} />;
      case 'appointments-history':
        return (
          <LazyRoute
            loader={loaders.AppointmentsView}
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
            onNavigate={handleNavigate}
          />
        );
      case 'doctors-directory':
        return <LazyRoute loader={loaders.DirectoryView} type="doctors" onNavigate={handleNavigate} />;
      case 'physio-directory':
        return <LazyRoute loader={loaders.DirectoryView} type="physios" onNavigate={handleNavigate} />;
      case 'hospitals-directory':
        return <LazyRoute loader={loaders.DirectoryView} type="hospitals" onNavigate={handleNavigate} />;
      case 'laboratories-directory':
        return <LazyRoute loader={loaders.DirectoryView} type="labs" onNavigate={handleNavigate} />;
      case 'pharmacy-info':
        return <LazyRoute loader={loaders.DirectoryView} type="pharmacies" onNavigate={handleNavigate} />;
      case 'emergency-sos':
        return (
          <LazyRoute
            loader={loaders.EmergencySosView}
            patient={patient}
            onNavigate={handleNavigate}
            onAddAuditLog={handleAddAuditLog}
            onPrintCard={handlePrintCard}
          />
        );
      case 'emergency-file':
        return (
          <LazyRoute
            loader={loaders.EmergencyFileView}
            patient={patient}
            onPrintCard={handlePrintCard}
          />
        );
      case 'emergency-audit':
        return (
          <LazyRoute
            loader={loaders.EmergencyAuditView}
            auditLogs={auditLogs}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'xray-imaging':
        return (
          <LazyRoute
            loader={loaders.SpinalImagingView}
            selectedVertebra={selectedVertebra}
            onSelectVertebra={setSelectedVertebra}
            onNavigate={handleNavigate}
          />
        );
      case 'physio-dashboard':
        return <LazyRoute loader={loaders.PhysioDashboardView} onNavigate={handleNavigate} />;
      case 'exercise-library':
        return <LazyRoute loader={loaders.ExerciseLibraryView} onNavigate={handleNavigate} />;
      case 'ai-assistant':
        return <LazyRoute loader={loaders.AiAssistantView} onNavigate={handleNavigate} />;
      case 'multilingual-urdu':
        return <LazyRoute loader={loaders.UrduHubView} onNavigate={handleNavigate} />;
      case 'system-status':
        return <LazyRoute loader={loaders.SystemStatusView} />;
      case 'product-roadmap':
        return <LazyRoute loader={loaders.ProductRoadmapView} />;
      case 'sdg-impact':
      case 'sdg-reports':
        return <LazyRoute loader={loaders.SdgImpactView} />;
      // === Account group ===
      case 'account-settings':
        return (
          <LazyRoute
            loader={loaders.AccountSettingsView}
            patient={patient}
            onUpdatePatient={handleUpdatePatient}
          />
        );
      case 'privacy-security':
        return <LazyRoute loader={loaders.PrivacySecurityView} patient={patient} />;
      case 'consent-permissions':
        return (
          <LazyRoute
            loader={loaders.ConsentPermissionsView}
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'notifications-reminders':
        return <LazyRoute loader={loaders.NotificationsRemindersView} patient={patient} />;
      case 'help-centre':
        return <LazyRoute loader={loaders.HelpCentreView} />;
      case 'family-profiles':
        return (
          <LazyRoute
            loader={loaders.FamilyProfilesView}
            currentPatient={patient}
            onNavigate={handleNavigate}
          />
        );
      // === AI group ===
      case 'ai-report-explainer':
        return <LazyRoute loader={loaders.AiReportExplainerView} />;
      case 'ai-medication-info':
        return <LazyRoute loader={loaders.AiMedicationInfoView} patient={patient} />;
      case 'ai-physio-guide':
        return <LazyRoute loader={loaders.AiPhysioGuideView} />;
      case 'ai-appointment-prep':
        return <LazyRoute loader={loaders.AiAppointmentPrepView} />;
      case 'ai-health-education':
        return <LazyRoute loader={loaders.AiHealthEducationView} />;
      // === Ecosystem group ===
      case 'provider-portal':
        return (
          <LazyRoute
            loader={loaders.ProviderPortalView}
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'healthcare-service-directory':
        return <LazyRoute loader={loaders.ServiceDirectoryView} />;
      case 'professional-profile':
        return <LazyRoute loader={loaders.ProfessionalProfileView} />;
      case 'patient-feedback':
        return <LazyRoute loader={loaders.PatientFeedbackView} />;
      case 'referral-coordination':
        return <LazyRoute loader={loaders.ReferralCoordinationView} patient={patient} />;
      case 'remote-rehab':
        return <LazyRoute loader={loaders.RemoteRehabView} />;
      case 'resource-equipment':
        return <LazyRoute loader={loaders.ResourceEquipmentView} />;
      // === Emergency group ===
      case 'allergies-contraindications':
        return <LazyRoute loader={loaders.AllergiesContraindicationsView} patient={patient} />;
      case 'previous-medications':
        return <LazyRoute loader={loaders.PreviousMedicationsView} patient={patient} />;
      // === Physio group ===
      case 'rom-strength':
        return <LazyRoute loader={loaders.RomStrengthView} />;
      case 'pain-functional':
        return <LazyRoute loader={loaders.PainFunctionalView} />;
      case 'rehab-plans':
        return <LazyRoute loader={loaders.RehabPlansView} />;
      case 'gait-posture':
        return <LazyRoute loader={loaders.GaitPostureView} />;
      case 'rehab-precautions':
        return <LazyRoute loader={loaders.RehabPrecautionsView} />;
      case 'exercise-demos':
        return <LazyRoute loader={loaders.ExerciseDemosView} />;
      case 'exercise-tracker':
        return <LazyRoute loader={loaders.ExerciseTrackerView} />;
      case 'rehab-charts':
        return <LazyRoute loader={loaders.RehabChartsView} />;
      case 'home-exercise-prog':
        return <LazyRoute loader={loaders.HomeExerciseProgView} />;
      case 'therapist-feedback':
        return <LazyRoute loader={loaders.TherapistFeedbackView} />;
      // === Records group ===
      case 'teleconsultation':
        return <LazyRoute loader={loaders.TeleconsultationView} patient={patient} />;
      case 'home-healthcare':
        return <LazyRoute loader={loaders.HomeHealthcareView} patient={patient} />;
      case 'medical-uploads':
        return <LazyRoute loader={loaders.MedicalUploadsView} patient={patient} />;
      case 'patient-reports-summaries':
      case 'diagnoses-notes':
        return <LazyRoute loader={loaders.PatientReportsSummariesView} patient={patient} />;
      case 'treatment-plans':
        return <LazyRoute loader={loaders.TreatmentPlansView} patient={patient} />;
      // === System group ===
      case 'research-clinical-ed':
        return <LazyRoute loader={loaders.ResearchClinicalEdView} />;
      case 'health-awareness':
        return <LazyRoute loader={loaders.HealthAwarenessView} />;
      case 'community-programs':
        return <LazyRoute loader={loaders.CommunityProgramsView} />;
      case 'accessibility-settings':
        return <LazyRoute loader={loaders.AccessibilitySettingsView} />;
      case 'data-export':
        return <LazyRoute loader={loaders.DataExportView} patient={patient} />;
      // === Wellness group ===
      case 'nutrition-dashboard':
        return <LazyRoute loader={loaders.NutritionDashboardView} />;
      case 'meal-plans':
        return <LazyRoute loader={loaders.MealPlansView} />;
      case 'calorie-tracking':
        return <LazyRoute loader={loaders.CalorieTrackingView} />;
      case 'hydration-tracker':
        return <LazyRoute loader={loaders.HydrationTrackerView} />;
      case 'activity-steps':
        return <LazyRoute loader={loaders.ActivityStepsView} />;
      case 'sleep-recovery':
        return <LazyRoute loader={loaders.SleepRecoveryView} />;
      case 'lifestyle-education':
        return <LazyRoute loader={loaders.LifestyleEducationView} />;
      default:
        return (
          <LazyRoute
            loader={loaders.UniversalSubpageView}
            routeId={currentRoute}
            patient={patient}
            onNavigate={handleNavigate}
            onAddAuditLog={handleAddAuditLog}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs flex items-center space-x-2 border border-slate-700 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Public Portal View */}
      {viewMode === 'landing' ? (
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
              <div className="w-8 h-8 border-2 border-teal-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <LandingLazy onLaunchPlatform={(initialRoute: string | undefined) => {
            if (initialRoute) setCurrentRoute(initialRoute);
            setViewMode('app');
          }} />
        </Suspense>
      ) : (
        /* 2. Platform OS View */
        <div id="appView" className="flex h-screen overflow-hidden">
          {/* Main Sidebar */}
          <Sidebar
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            isOpenMobile={isSidebarOpenMobile}
            onCloseMobile={() => setIsSidebarOpenMobile(false)}
            patient={patient}
          />

          {/* Main View Container */}
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Top Navigation Bar */}
            <Header
              currentRoute={currentRoute}
              onNavigate={handleNavigate}
              onToggleSidebar={() => setIsSidebarOpenMobile(prev => !prev)}
              onToggleViewMode={() => setViewMode(prev => (prev === 'app' ? 'landing' : 'app'))}
            />

            {/* Scrollable Main Page Body */}
            <main
              id="mainPageContent"
              className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50"
            >
              {renderActiveRoute()}
            </main>
          </div>
        </div>
      )}

      {/* 3. Dedicated Printable Emergency Card (Visible only in print media) */}
      <PrintableEmergencyCard patient={patient} />
    </div>
  );
}

const LandingLazy = React.lazy(() =>
  import('./components/LandingPage.tsx').then(m => ({ default: m.LandingPage as React.ComponentType<any> }))
);
