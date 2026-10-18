export interface TriageInput {
  systolicBP: number;
  heartRate: number;
  hasSevereAllergy: boolean;
  spinalImmobilizationRequired: boolean;
}

export interface TriageResult {
  code: 'CODE RED' | 'CODE YELLOW' | 'CODE GREEN';
  priorityLevel: number;
  summary: string;
}

export function evaluateEmergencyTriage(input: TriageInput): TriageResult {
  if (input.systolicBP < 90 || input.systolicBP > 180 || input.heartRate > 120 || input.heartRate < 50) {
    return {
      code: 'CODE RED',
      priorityLevel: 1,
      summary: 'Critical Hemodynamic Instability - Immediate 1122 Resuscitation Required'
    };
  }

  if (input.hasSevereAllergy && input.spinalImmobilizationRequired) {
    return {
      code: 'CODE RED',
      priorityLevel: 1,
      summary: 'High Alert: Severe Anaphylaxis Risk + Spinal Precautions Mandated'
    };
  }

  if (input.spinalImmobilizationRequired) {
    return {
      code: 'CODE YELLOW',
      priorityLevel: 2,
      summary: 'Urgent: Log-Roll Spinal Precautions Active'
    };
  }

  return {
    code: 'CODE GREEN',
    priorityLevel: 3,
    summary: 'Stable: Standard Ambulatory Care'
  };
}

export function generateBreakGlassToken(patientId: string): string {
  const cleanId = patientId.replace(/[^A-Za-z0-9]/g, '');
  const timestamp = Date.now().toString(36).toUpperCase();
  return `#BG-${cleanId}-${timestamp}`;
}
