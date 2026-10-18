export interface SdgMetrics {
  docsStored: number;
  gramsPerSheet: number; // e.g. 5.0g per A4 sheet
  tripsAvoided: number;
  kmPerTrip: number; // roundtrip km
  kgCO2PerKm: number; // e.g. 0.171 kg CO2/km
}

export function calculatePaperSavedKg(docsStored: number, gramsPerSheet: number = 5.0): number {
  if (docsStored < 0 || gramsPerSheet < 0) return 0;
  const totalGrams = docsStored * gramsPerSheet;
  return Number((totalGrams / 1000).toFixed(2));
}

export function calculateAvoidedTransitKm(tripsAvoided: number, kmPerTrip: number = 24): number {
  if (tripsAvoided < 0 || kmPerTrip < 0) return 0;
  return tripsAvoided * kmPerTrip;
}

export function calculateCO2AvoidedKg(
  tripsAvoided: number,
  kmPerTrip: number = 24,
  kgCO2PerKm: number = 0.171
): number {
  const totalKm = calculateAvoidedTransitKm(tripsAvoided, kmPerTrip);
  return Number((totalKm * kgCO2PerKm).toFixed(2));
}

export function calculateConservedFuelLitres(totalKm: number, kmPerLitre: number = 12.0): number {
  if (totalKm <= 0 || kmPerLitre <= 0) return 0;
  return Number((totalKm / kmPerLitre).toFixed(1));
}
