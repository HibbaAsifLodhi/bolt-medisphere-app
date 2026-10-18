export interface VertebraInfo {
  code: string;
  name: string;
  region: 'Cervical' | 'Thoracic' | 'Lumbar' | 'Pelvic Ring' | 'Pelvic Base';
  role: string;
  status: 'Normal' | 'Normal alignment' | 'Attention' | 'Clinical Focal Point';
  findings: string;
}

export const VERTEBRAE_MAP: Record<string, VertebraInfo> = {
  'C1': { code: 'C1', name: 'C1 Atlas', region: 'Cervical', role: 'Supports globe of skull, ring-shaped, allows nodding motion.', status: 'Normal alignment', findings: 'No subluxation noted.' },
  'C2': { code: 'C2', name: 'C2 Axis', region: 'Cervical', role: 'Forms pivot odontoid process (dens) enabling cervical rotation.', status: 'Normal', findings: 'Dens intact without fracture.' },
  'C3': { code: 'C3', name: 'C3 Vertebra', region: 'Cervical', role: 'Innervates diaphragm motor function via phrenic root.', status: 'Normal', findings: 'Preserved disc height.' },
  'C4': { code: 'C4', name: 'C4 Vertebra', region: 'Cervical', role: 'Shoulder elevation and phrenic nerve contributors.', status: 'Normal', findings: 'Intact pedicles.' },
  'C5': { code: 'C5', name: 'C5 Vertebra', region: 'Cervical', role: 'Shoulder abduction and elbow flexion control.', status: 'Normal', findings: 'Mild uncal spurs; no stenosis.' },
  'C6': { code: 'C6', name: 'C6 Vertebra', region: 'Cervical', role: 'Wrist extensors and biceps reflex.', status: 'Normal', findings: 'Lordotic curvature maintained.' },
  'C7': { code: 'C7', name: 'C7 Vertebra Prominens', region: 'Cervical', role: 'Key palpable landmark; triceps reflex and finger extension.', status: 'Normal', findings: 'Prominent spinous process without displacement.' },
  'T1': { code: 'T1', name: 'T1 Vertebra', region: 'Thoracic', role: 'Articulates with 1st rib, finger abductor pathway.', status: 'Normal', findings: 'Costovertebral joints preserved.' },
  'T2': { code: 'T2', name: 'T2 Vertebra', region: 'Thoracic', role: 'Thoracic cage stabilization and upper chest cage protection.', status: 'Normal', findings: 'Slight kyphotic angle.' },
  'T3': { code: 'T3', name: 'T3 Vertebra', region: 'Thoracic', role: 'Rib 3 junction and postural thoracic column.', status: 'Normal', findings: 'Intact vertebral body.' },
  'T4': { code: 'T4', name: 'T4 Vertebra', region: 'Thoracic', role: 'Nipple line dermatome landmark.', status: 'Normal', findings: 'No anterior wedging.' },
  'T5': { code: 'T5', name: 'T5 Vertebra', region: 'Thoracic', role: 'Thoracic spine cage support.', status: 'Normal', findings: 'Trabecular pattern normal.' },
  'T6': { code: 'T6', name: 'T6 Vertebra', region: 'Thoracic', role: 'Mid-thoracic mobility transition.', status: 'Normal', findings: 'Endplates intact.' },
  'T7': { code: 'T7', name: 'T7 Vertebra', region: 'Thoracic', role: 'Inferior angle of scapula landmark.', status: 'Normal', findings: 'Mild postural rotation (8° Cobb).' },
  'T8': { code: 'T8', name: 'T8 Vertebra', region: 'Thoracic', role: 'Mid-lower thoracic load distribution.', status: 'Normal', findings: 'Preserved intervertebral disc spaces.' },
  'T9': { code: 'T9', name: 'T9 Vertebra', region: 'Thoracic', role: 'Adrenal / splanchnic sympathetic outlet zone.', status: 'Normal', findings: 'Normal.' },
  'T10': { code: 'T10', name: 'T10 Vertebra', region: 'Thoracic', role: 'Umbilicus dermatome landmark.', status: 'Normal', findings: 'Cortical margins intact.' },
  'T11': { code: 'T11', name: 'T11 Vertebra (Floating rib)', region: 'Thoracic', role: 'False rib junction; increased flexural stress point.', status: 'Normal', findings: 'No spondylolisthesis.' },
  'T12': { code: 'T12', name: 'T12 Vertebra', region: 'Thoracic', role: 'Thoracolumbar transitional junction; high biomechanical stress.', status: 'Attention', findings: 'Early osteophytic fringing at inferior anterior lip.' },
  'L1': { code: 'L1', name: 'L1 Vertebra', region: 'Lumbar', role: 'Conus medullaris termination zone; high load bearing.', status: 'Normal', findings: 'Spinal canal dimensions wide.' },
  'L2': { code: 'L2', name: 'L2 Vertebra', region: 'Lumbar', role: 'Hip flexor motor root origin (L2-L4).', status: 'Normal', findings: 'Preserved posterior heights.' },
  'L3': { code: 'L3', name: 'L3 Vertebra', region: 'Lumbar', role: 'Knee extension (quadriceps) coordination.', status: 'Normal', findings: 'Mild facet joint arthrosis.' },
  'L4': { code: 'L4', name: 'L4 Vertebra', region: 'Lumbar', role: 'Foot dorsiflexion; principal biomechanical flexion point.', status: 'Clinical Focal Point', findings: 'Posterocentral disc bulge with mild effacement of the thecal sac. Correlates with patient L4-L5 physical therapy regime.' },
  'L5': { code: 'L5', name: 'L5 Vertebra', region: 'Lumbar', role: 'Great toe extension and gluteus medius pathway.', status: 'Clinical Focal Point', findings: 'Desiccation and narrowing of L4-L5 disc space. Stable alignment on flexion-extension.' },
  'Sacrum': { code: 'Sacrum', name: 'Sacrum (S1–S5 Fused)', region: 'Pelvic Ring', role: 'Triangular bone wedged between iliac crests; transmits torso mass to lower limbs.', status: 'Normal', findings: 'Sacroiliac joints symmetric; no sacroiliitis.' },
  'Coccyx': { code: 'Coccyx', name: 'Coccyx (Tailbone)', region: 'Pelvic Base', role: '3–5 fused or partially mobile rudimentary segments; attachment for pelvic floor muscles.', status: 'Normal', findings: 'Intact anterior curvature; no subluxation.' }
};

export function getVertebra(code: string): VertebraInfo {
  return VERTEBRAE_MAP[code] || VERTEBRAE_MAP['L4'];
}

export function getAllVertebraeCodes(): string[] {
  return Object.keys(VERTEBRAE_MAP);
}
