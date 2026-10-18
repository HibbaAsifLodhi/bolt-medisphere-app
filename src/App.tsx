import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { PrintableEmergencyCard } from './components/PrintableEmergencyCard.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { HomeDashboard } from './views/HomeDashboard.tsx';
import { EmergencySosView } from './views/EmergencySosView.tsx';
import { EmergencyFileView } from './views/EmergencyFileView.tsx';
import { EmergencyAuditView } from './views/EmergencyAuditView.tsx';
import { SpinalImagingView } from './views/SpinalImagingView.tsx';
import { PhysioDashboardView } from './views/PhysioDashboardView.tsx';
import { AiAssistantView } from './views/AiAssistantView.tsx';
import { UrduHubView } from './views/UrduHubView.tsx';
import { SdgImpactView } from './views/SdgImpactView.tsx';
import { PatientProfileView } from './views/PatientProfileView.tsx';
import { MedicalHistoryView } from './views/MedicalHistoryView.tsx';
import { PrescriptionsView } from './views/PrescriptionsView.tsx';
import { LabReportsView } from './views/LabReportsView.tsx';
import { MriCtViewerView } from './views/MriCtViewerView.tsx';
import { AppointmentsView } from './views/AppointmentsView.tsx';
import { DirectoryView } from './views/DirectoryView.tsx';
import { ExerciseLibraryView } from './views/ExerciseLibraryView.tsx';
import { VitalsTrackerView } from './views/VitalsTrackerView.tsx';
import { SystemStatusView } from './views/SystemStatusView.tsx';
import { ProductRoadmapView } from './views/ProductRoadmapView.tsx';
import { UniversalSubpageView } from './views/UniversalSubpageView.tsx';
// Account group
import { AccountSettingsView } from './views/account/AccountSettingsView.tsx';
import { PrivacySecurityView } from './views/account/PrivacySecurityView.tsx';
import { ConsentPermissionsView } from './views/account/ConsentPermissionsView.tsx';
import { NotificationsRemindersView } from './views/account/NotificationsRemindersView.tsx';
import { HelpCentreView } from './views/account/HelpCentreView.tsx';
import { FamilyProfilesView } from './views/account/FamilyProfilesView.tsx';
// AI group
import { AiReportExplainerView } from './views/ai/AiReportExplainerView.tsx';
import { AiMedicationInfoView } from './views/ai/AiMedicationInfoView.tsx';
import { AiPhysioGuideView } from './views/ai/AiPhysioGuideView.tsx';
import { AiAppointmentPrepView } from './views/ai/AiAppointmentPrepView.tsx';
import { AiHealthEducationView } from './views/ai/AiHealthEducationView.tsx';
// Ecosystem group
import { ProviderPortalView } from './views/ecosystem/ProviderPortalView.tsx';
// import { ServiceDirectoryView } from './views/ecosystem/ServiceDirectoryView.tsx';
import { ProfessionalProfileView } from './views/ecosystem/ProfessionalProfileView.tsx';
import { PatientFeedbackView } from './views/ecosystem/PatientFeedbackView.tsx';
import { ReferralCoordinationView } from './views/ecosystem/ReferralCoordinationView.tsx';
import { RemoteRehabView } from './views/ecosystem/RemoteRehabView.tsx';
import { ResourceEquipmentView } from './views/ecosystem/ResourceEquipmentView.tsx';
// Emergency group
import { AllergiesContraindicationsView } from './views/emergency/AllergiesContraindicationsView.tsx';
import { PreviousMedicationsView } from './views/emergency/PreviousMedicationsView.tsx';
// Physio group
import { RomStrengthView } from './views/physio/RomStrengthView.tsx';
import { PainFunctionalView } from './views/physio/PainFunctionalView.tsx';
import { RehabPlansView } from './views/physio/RehabPlansView.tsx';
import { GaitPostureView } from './views/physio/GaitPostureView.tsx';
import { RehabPrecautionsView } from './views/physio/RehabPrecautionsView.tsx';
import { ExerciseDemosView } from './views/physio/ExerciseDemosView.tsx';
import { ExerciseTrackerView } from './views/physio/ExerciseTrackerView.tsx';
import { RehabChartsView } from './views/physio/RehabChartsView.tsx';
import { HomeExerciseProgView } from './views/physio/HomeExerciseProgView.tsx';
import { TherapistFeedbackView } from './views/physio/TherapistFeedbackView.tsx';
// Records group
import { TeleconsultationView } from './views/records/TeleconsultationView.tsx';
import { HomeHealthcareView } from './views/records/HomeHealthcareView.tsx';
import { MedicalUploadsView } from './views/records/MedicalUploadsView.tsx';
import { PatientReportsSummariesView } from './views/records/PatientReportsSummariesView.tsx';
import { TreatmentPlansView } from './views/records/TreatmentPlansView.tsx';
// System group
import { ResearchClinicalEdView } from './views/system/ResearchClinicalEdView.tsx';
import { HealthAwarenessView } from './views/system/HealthAwarenessView.tsx';
import { CommunityProgramsView } from './views/system/CommunityProgramsView.tsx';
import { AccessibilitySettingsView } from './views/system/AccessibilitySettingsView.tsx';
import { DataExportView } from './views/system/DataExportView.tsx';
// Wellness group
import { MealPlansView } from './views/wellness/MealPlansView.tsx';
import { NutritionDashboardView } from './views/wellness/NutritionDashboardView.tsx';
import { ServiceDirectoryView } from './views/ecosystem/ServiceDirectoryView.tsx';
import { CalorieTrackingView } from './views/wellness/CalorieTrackingView.tsx';
import { HydrationTrackerView } from './views/wellness/HydrationTrackerView.tsx';
import { ActivityStepsView } from './views/wellness/ActivityStepsView.tsx';
import { SleepRecoveryView } from './views/wellness/SleepRecoveryView.tsx';
import { LifestyleEducationView } from './views/wellness/LifestyleEducationView.tsx';
import { INITIAL_PATIENT, INITIAL_AUDIT_LOGS } from './data/mockData.ts';
import { AuditLogItem, PatientData } from './types/index.ts';
import { fetchPatient, savePatient, fetchAuditLogs, addAuditLog as persistAuditLog } from './lib/supabase.ts';

export default function App() {
  const [viewMode, setViewMode] = useState<'app' | 'landing'>('app');
  const [currentRoute, setCurrentRoute] = useState<string>('home-dashboard');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);
  const [patient, setPatient] = useState<PatientData>(INITIAL_PATIENT);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(INITIAL_AUDIT_LOGS);
  const [dataReady, setDataReady] = useState<boolean>(false);
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
      } finally {
        if (!cancelled) setDataReady(true);
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
          <PatientProfileView
            patient={patient}
            onUpdatePatient={handleUpdatePatient}
            onPrintCard={handlePrintCard}
            onNavigate={handleNavigate}
          />
        );
      case 'complete-medical-history':
        return (
          <MedicalHistoryView
            patient={patient}
            onNavigate={handleNavigate}
          />
        );
      case 'prescriptions-records':
      case 'current-medications':
        return (
          <PrescriptionsView
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'lab-reports':
        return (
          <LabReportsView
            patient={patient}
          />
        );
      case 'mri-ct-viewer':
        return (
          <MriCtViewerView
            patient={patient}
          />
        );
      case 'vitals-height-weight':
      case 'bp-glucose':
      case 'heart-rate-spo2':
        return (
          <VitalsTrackerView
            patient={patient}
          />
        );
      case 'appointments-history':
        return (
          <AppointmentsView
            patient={patient}
            onAddAuditLog={handleAddAuditLog}
            onNavigate={handleNavigate}
          />
        );
      case 'doctors-directory':
        return (
          <DirectoryView
            type="doctors"
            onNavigate={handleNavigate}
          />
        );
      case 'physio-directory':
        return (
          <DirectoryView
            type="physios"
            onNavigate={handleNavigate}
          />
        );
      case 'hospitals-directory':
        return (
          <DirectoryView
            type="hospitals"
            onNavigate={handleNavigate}
          />
        );
      case 'laboratories-directory':
        return (
          <DirectoryView
            type="labs"
            onNavigate={handleNavigate}
          />
        );
      case 'pharmacy-info':
        return (
          <DirectoryView
            type="pharmacies"
            onNavigate={handleNavigate}
          />
        );
      case 'emergency-sos':
        return (
          <EmergencySosView
            patient={patient}
            onNavigate={handleNavigate}
            onAddAuditLog={handleAddAuditLog}
            onPrintCard={handlePrintCard}
          />
        );
      case 'emergency-file':
        return (
          <EmergencyFileView
            patient={patient}
            onPrintCard={handlePrintCard}
          />
        );
      case 'emergency-audit':
        return (
          <EmergencyAuditView
            auditLogs={auditLogs}
            onAddAuditLog={handleAddAuditLog}
          />
        );
      case 'xray-imaging':
        return (
          <SpinalImagingView
            selectedVertebra={selectedVertebra}
            onSelectVertebra={setSelectedVertebra}
            onNavigate={handleNavigate}
          />
        );
      case 'physio-dashboard':
        return (
          <PhysioDashboardView
            onNavigate={handleNavigate}
          />
        );
      case 'exercise-library':
        return (
          <ExerciseLibraryView
            onNavigate={handleNavigate}
          />
        );
      case 'ai-assistant':
        return (
          <AiAssistantView
            onNavigate={handleNavigate}
          />
        );
      case 'multilingual-urdu':
        return (
          <UrduHubView
            onNavigate={handleNavigate}
          />
        );
      case 'system-status':
        return (
          <SystemStatusView />
        );
      case 'product-roadmap':
        return (
          <ProductRoadmapView />
        );
      case 'sdg-impact':
      case 'sdg-reports':
        return (
          <SdgImpactView />
        );
      // === Account group ===
      case 'account-settings':
        return <AccountSettingsView patient={patient} onUpdatePatient={handleUpdatePatient} />;
      case 'privacy-security':
        return <PrivacySecurityView patient={patient} />;
      case 'consent-permissions':
        return <ConsentPermissionsView patient={patient} onAddAuditLog={handleAddAuditLog} />;
      case 'notifications-reminders':
        return <NotificationsRemindersView patient={patient} />;
      case 'help-centre':
        return <HelpCentreView />;
      case 'family-profiles':
        return <FamilyProfilesView currentPatient={patient} onNavigate={handleNavigate} />;
      // === AI group ===
      case 'ai-report-explainer':
        return <AiReportExplainerView />;
      case 'ai-medication-info':
        return <AiMedicationInfoView patient={patient} />;
      case 'ai-physio-guide':
        return <AiPhysioGuideView />;
      case 'ai-appointment-prep':
        return <AiAppointmentPrepView />;
      case 'ai-health-education':
        return <AiHealthEducationView />;
      // === Ecosystem group ===
      case 'provider-portal':
        return <ProviderPortalView patient={patient} onAddAuditLog={handleAddAuditLog} />;
      case 'healthcare-service-directory':
        return <ServiceDirectoryView />;
      case 'professional-profile':
        return <ProfessionalProfileView />;
      case 'patient-feedback':
        return <PatientFeedbackView />;
      case 'referral-coordination':
        return <ReferralCoordinationView patient={patient} />;
      case 'remote-rehab':
        return <RemoteRehabView />;
      case 'resource-equipment':
        return <ResourceEquipmentView />;
      // === Emergency group ===
      case 'allergies-contraindications':
        return <AllergiesContraindicationsView patient={patient} />;
      case 'previous-medications':
        return <PreviousMedicationsView patient={patient} />;
      // === Physio group ===
      case 'rom-strength':
        return <RomStrengthView />;
      case 'pain-functional':
        return <PainFunctionalView />;
      case 'rehab-plans':
        return <RehabPlansView />;
      case 'gait-posture':
        return <GaitPostureView />;
      case 'rehab-precautions':
        return <RehabPrecautionsView />;
      case 'exercise-demos':
        return <ExerciseDemosView />;
      case 'exercise-tracker':
        return <ExerciseTrackerView />;
      case 'rehab-charts':
        return <RehabChartsView />;
      case 'home-exercise-prog':
        return <HomeExerciseProgView />;
      case 'therapist-feedback':
        return <TherapistFeedbackView />;
      // === Records group ===
      case 'teleconsultation':
        return <TeleconsultationView patient={patient} />;
      case 'home-healthcare':
        return <HomeHealthcareView patient={patient} />;
      case 'medical-uploads':
        return <MedicalUploadsView patient={patient} />;
      case 'patient-reports-summaries':
      case 'diagnoses-notes':
        return <PatientReportsSummariesView patient={patient} />;
      case 'treatment-plans':
        return <TreatmentPlansView patient={patient} />;
      // === System group ===
      case 'research-clinical-ed':
        return <ResearchClinicalEdView />;
      case 'health-awareness':
        return <HealthAwarenessView />;
      case 'community-programs':
        return <CommunityProgramsView />;
      case 'accessibility-settings':
        return <AccessibilitySettingsView />;
      case 'data-export':
        return <DataExportView patient={patient} />;
      // === Wellness group ===
      case 'nutrition-dashboard':
        return <NutritionDashboardView />;
      case 'meal-plans':
        return <MealPlansView />;
      case 'calorie-tracking':
        return <CalorieTrackingView />;
      case 'hydration-tracker':
        return <HydrationTrackerView />;
      case 'activity-steps':
        return <ActivityStepsView />;
      case 'sleep-recovery':
        return <SleepRecoveryView />;
      case 'lifestyle-education':
        return <LifestyleEducationView />;
      default:
        return (
          <UniversalSubpageView
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
        <LandingPage
          onLaunchPlatform={(initialRoute) => {
            if (initialRoute) setCurrentRoute(initialRoute);
            setViewMode('app');
          }}
        />
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
