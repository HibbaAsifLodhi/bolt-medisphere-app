import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculatePaperSavedKg,
  calculateAvoidedTransitKm,
  calculateCO2AvoidedKg,
  calculateConservedFuelLitres
} from './sdgCalculations.ts';
import { getVertebra, getAllVertebraeCodes } from './spineData.ts';
import { evaluateEmergencyTriage, generateBreakGlassToken } from './emergencyProtocol.ts';

test('SDG Paper Saved Calculation', () => {
  // 246 documents * 5.0 grams = 1230 grams = 1.23 kg
  const paperKg = calculatePaperSavedKg(246, 5.0);
  assert.equal(paperKg, 1.23);

  // Negative input protection
  assert.equal(calculatePaperSavedKg(-10, 5.0), 0);
});

test('SDG Transit & Carbon Emission Calculation', () => {
  // 18 trips * 24 km = 432 km
  const totalKm = calculateAvoidedTransitKm(18, 24);
  assert.equal(totalKm, 432);

  // 432 km * 0.171 kg CO2/km = 73.872 kg -> rounded to 73.87 kg
  const co2Kg = calculateCO2AvoidedKg(18, 24, 0.171);
  assert.equal(co2Kg, 73.87);

  // 432 km / 12 km/L = 36.0 L
  const fuelL = calculateConservedFuelLitres(totalKm, 12.0);
  assert.equal(fuelL, 36.0);
});

test('Spine Database contains full anatomical column', () => {
  const codes = getAllVertebraeCodes();
  assert.equal(codes.length, 26); // 7 cervical + 12 thoracic + 5 lumbar + Sacrum + Coccyx

  const l4 = getVertebra('L4');
  assert.equal(l4.code, 'L4');
  assert.equal(l4.region, 'Lumbar');
  assert.equal(l4.status, 'Clinical Focal Point');

  const c1 = getVertebra('C1');
  assert.equal(c1.code, 'C1');
  assert.equal(c1.region, 'Cervical');
});

test('Emergency Triage Protocol correctly evaluates Code Red', () => {
  const highRisk = evaluateEmergencyTriage({
    systolicBP: 195,
    heartRate: 110,
    hasSevereAllergy: true,
    spinalImmobilizationRequired: true
  });
  assert.equal(highRisk.code, 'CODE RED');
  assert.equal(highRisk.priorityLevel, 1);

  const stable = evaluateEmergencyTriage({
    systolicBP: 120,
    heartRate: 72,
    hasSevereAllergy: false,
    spinalImmobilizationRequired: false
  });
  assert.equal(stable.code, 'CODE GREEN');
  assert.equal(stable.priorityLevel, 3);
});

test('Break Glass Token formats with patient prefix', () => {
  const token = generateBreakGlassToken('MED-PK-98241');
  assert.match(token, /^#BG-MEDPK98241-/);
});
