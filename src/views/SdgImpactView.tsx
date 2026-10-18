import React, { useState } from 'react';
import {
  Leaf,
  Car,
  FileText,
  Globe,
  TrendingDown,
  Award,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import {
  calculatePaperSavedKg,
  calculateAvoidedTransitKm,
  calculateCO2AvoidedKg,
  calculateConservedFuelLitres
} from '../utils/sdgCalculations.ts';

export const SdgImpactView: React.FC = () => {
  const [docsStored, setDocsStored] = useState<number>(246);
  const [gramsPerSheet, setGramsPerSheet] = useState<number>(5.0);
  const [tripsAvoided, setTripsAvoided] = useState<number>(18);
  const [kmPerTrip, setKmPerTrip] = useState<number>(24);

  const paperKg = calculatePaperSavedKg(docsStored, gramsPerSheet);
  const totalKmAvoided = calculateAvoidedTransitKm(tripsAvoided, kmPerTrip);
  const co2Kg = calculateCO2AvoidedKg(tripsAvoided, kmPerTrip, 0.171);
  const fuelL = calculateConservedFuelLitres(totalKmAvoided, 12.0);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              United Nations 2030 Agenda
            </span>
            <span className="text-xs text-slate-400 font-mono">Sustainability Engine</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">MEDISPHERE SDG & Environmental Impact Hub</h2>
          <p className="text-xs text-slate-500">
            Transparent mathematical calculations showing how digital healthcare saves paper, lowers fuel usage, and curbs emissions.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg font-semibold flex items-center space-x-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Transparent Formula Audit: Active</span>
          </span>
        </div>
      </div>

      {/* Real-Time Impact Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">Digital Docs Stored</span>
          <p className="text-2xl font-black text-slate-800 mt-1">{docsStored}</p>
          <span className="text-[10px] text-teal-600">Zero physical filing</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">Paper Biomass Saved</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">
            {paperKg} <span className="text-xs">kg</span>
          </p>
          <span className="text-[10px] text-emerald-600">Based on {gramsPerSheet}g/sheet (A4)</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">Journeys Avoided</span>
          <p className="text-2xl font-black text-blue-700 mt-1">{tripsAvoided}</p>
          <span className="text-[10px] text-blue-600">{totalKmAvoided} km transit eliminated</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs text-center">
          <span className="text-[10px] uppercase font-bold text-slate-400">CO2e Emissions Prevented</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">
            {co2Kg} <span className="text-xs">kg</span>
          </p>
          <span className="text-[10px] text-emerald-600">≈ {fuelL}L petrol conserved</span>
        </div>
      </div>

      {/* Interactive Calculators Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Calculator 1: Paper Savings */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Paper Savings Calculator (SDG 12)</span>
            </h3>
            <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
              Formula: Docs × Weight
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Every prescription, X-ray envelope, and lab sheet digitized eliminates virgin timber pulp demand and printer toner waste.
          </p>
          <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center">
              <label htmlFor="calcDocsInput" className="font-medium text-slate-700">Digital Documents in Profile:</label>
              <input
                id="calcDocsInput"
                type="number"
                min="0"
                value={docsStored}
                onChange={e => setDocsStored(Math.max(0, Number(e.target.value)))}
                className="w-24 px-2 py-1 border border-slate-300 rounded font-bold text-right text-xs bg-white"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="calcGramsInput" className="font-medium text-slate-700">Average Paper Weight (grams/page):</label>
              <input
                id="calcGramsInput"
                type="number"
                step="0.5"
                min="1"
                value={gramsPerSheet}
                onChange={e => setGramsPerSheet(Math.max(0.5, Number(e.target.value)))}
                className="w-24 px-2 py-1 border border-slate-300 rounded font-bold text-right text-xs bg-white"
              />
            </div>
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-center">
            <span className="block text-[10px] uppercase font-bold text-emerald-700">Resulting Physical Waste Diverted</span>
            <span className="text-xl font-black">{paperKg} kg ({docsStored} pages)</span>
          </div>
        </div>

        {/* Calculator 2: Travel & Fuel Impact */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Car className="w-4 h-4 text-blue-600" />
              <span>Travel & Fuel Impact Calculator (SDG 13)</span>
            </h3>
            <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded">
              Formula: Trips × Km × Emission
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Substituting physical follow-ups with teleconsultations eliminates round-trip city transit in heavy urban smog.
          </p>
          <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex justify-between items-center">
              <label htmlFor="calcTripsInput" className="font-medium text-slate-700">Teleconsultations / Follow-ups:</label>
              <input
                id="calcTripsInput"
                type="number"
                min="0"
                value={tripsAvoided}
                onChange={e => setTripsAvoided(Math.max(0, Number(e.target.value)))}
                className="w-24 px-2 py-1 border border-slate-300 rounded font-bold text-right text-xs bg-white"
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="calcKmInput" className="font-medium text-slate-700">Roundtrip Distance (km):</label>
              <input
                id="calcKmInput"
                type="number"
                min="1"
                value={kmPerTrip}
                onChange={e => setKmPerTrip(Math.max(1, Number(e.target.value)))}
                className="w-24 px-2 py-1 border border-slate-300 rounded font-bold text-right text-xs bg-white"
              />
            </div>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-center">
            <span className="block text-[10px] uppercase font-bold text-blue-700">Estimated Greenhouse Gas Avoided</span>
            <span className="text-xl font-black">{co2Kg} kg CO2e ({totalKmAvoided} km avoided)</span>
          </div>
        </div>
      </div>

      {/* All 7 UN SDG Objective Panels */}
      <div className="space-y-3">
        <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
          <Globe className="w-4 h-4 text-emerald-600" />
          <span>Aligned Sustainable Development Goals</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* SDG 3 */}
          <div className="p-4 rounded-xl border border-emerald-300 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#4C9F38] text-white font-black flex items-center justify-center text-xs">
                3
              </span>
              <span className="font-bold text-slate-800">Good Health & Well-being</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Continuous longitudinal records, spinal rehabilitation, and rapid emergency dispatch (1122).
            </p>
            <span className="inline-block text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
              Indicator: 3.8 Universal Coverage
            </span>
          </div>

          {/* SDG 8 */}
          <div className="p-4 rounded-xl border border-red-200 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#A21942] text-white font-black flex items-center justify-center text-xs">
                8
              </span>
              <span className="font-bold text-slate-800">Decent Work & Growth</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Empowering home healthcare providers, physiotherapists, and diagnostic technicians across Pakistan.
            </p>
            <span className="inline-block text-[10px] text-red-700 font-semibold bg-red-50 px-2 py-0.5 rounded">
              Indicator: 8.5 Productive Employment
            </span>
          </div>

          {/* SDG 9 */}
          <div className="p-4 rounded-xl border border-amber-300 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#FD6925] text-white font-black flex items-center justify-center text-xs">
                9
              </span>
              <span className="font-bold text-slate-800">Industry & Innovation</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Interoperable digital healthcare infrastructure connecting rural clinics with tertiary specialists.
            </p>
            <span className="inline-block text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
              Indicator: 9.c Information Tech Access
            </span>
          </div>

          {/* SDG 10 */}
          <div className="p-4 rounded-xl border border-pink-300 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#DD1367] text-white font-black flex items-center justify-center text-xs">
                10
              </span>
              <span className="font-bold text-slate-800">Reduced Inequalities</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Bilingual Urdu/English interface ensuring low-literacy patients understand complex diagnoses.
            </p>
            <span className="inline-block text-[10px] text-pink-700 font-semibold bg-pink-50 px-2 py-0.5 rounded">
              Indicator: 10.2 Social & Economic Inclusion
            </span>
          </div>

          {/* SDG 12 */}
          <div className="p-4 rounded-xl border border-yellow-400 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#BF8B2E] text-white font-black flex items-center justify-center text-xs">
                12
              </span>
              <span className="font-bold text-slate-800">Responsible Consumption</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Eliminating non-recyclable radiology film jackets, paper prescriptions, and duplicate lab tests.
            </p>
            <span className="inline-block text-[10px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded">
              Indicator: 12.5 Waste Prevention
            </span>
          </div>

          {/* SDG 13 */}
          <div className="p-4 rounded-xl border border-green-600 bg-white shadow-xs space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#3F7E44] text-white font-black flex items-center justify-center text-xs">
                13
              </span>
              <span className="font-bold text-slate-800">Climate Action</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Preventing fossil-fuel vehicular transport emissions via digital checkups and remote rehab guidance.
            </p>
            <span className="inline-block text-[10px] text-green-800 font-semibold bg-green-50 px-2 py-0.5 rounded">
              Indicator: 13.2 Climate Strategies
            </span>
          </div>

          {/* SDG 17 */}
          <div className="p-4 rounded-xl border border-blue-400 bg-white shadow-xs space-y-2 sm:col-span-2 lg:col-span-3">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded bg-[#19486A] text-white font-black flex items-center justify-center text-xs">
                17
              </span>
              <span className="font-bold text-slate-800">Partnerships for the Goals</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Unifying Rescue 1122, public sector hospitals, private diagnostic chains, and medical device innovators on one standardized open data standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
