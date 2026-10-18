import React, { useState } from 'react';
import { PlaySquare, Play, Pause, RotateCcw, AlertTriangle, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';

export const ExerciseDemosView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAngle, setSelectedAngle] = useState<'Sagittal' | 'Coronal' | 'Overhead'>('Sagittal');
  const [selectedExercise, setSelectedExercise] = useState('Prone Cobra Stretch');

  const exercises = [
    {
      name: 'Prone Cobra Stretch',
      target: 'Erector Spinae & Scapular Retractors',
      level: 'Lumbar Stabilization',
      cues: [
        'Lie prone with arms along your sides, palms facing down',
        'Gently pinch shoulder blades together and lift chest 2 inches off the mat',
        'Keep chin tucked to maintain a neutral cervical spine (do NOT crane neck upwards)',
        'Breathe normally through diaphragm; hold for 15 seconds'
      ],
      mistakes: 'Do NOT hyper-extend the lower back or lift thighs off the mat.'
    },
    {
      name: 'Quadruped Bird-Dog',
      target: 'Multifidus & Gluteus Maximus',
      level: 'Core Cross-Stabilization',
      cues: [
        'Begin on hands and knees with hands directly under shoulders',
        'Simultaneously reach right arm forward and left leg straight back',
        'Form a straight line from fingertip to heel without pelvic tilt',
        'Hold for 3 seconds, return slowly, and alternate sides'
      ],
      mistakes: 'Avoid rotating the pelvis or sagging through the lumbar spine.'
    },
    {
      name: 'Pelvic Bridging with Neutral Spine',
      target: 'Gluteal Activation & Hamstrings',
      level: 'Hip Extensor Drive',
      cues: [
        'Lie supine with knees bent at 90 degrees and feet flat on the floor',
        'Engage deep core by drawing belly button toward spine',
        'Drive through heels to lift hips until thighs and torso align',
        'Squeeze glutes at top for 2 seconds, lower under control'
      ],
      mistakes: 'Do not arch the lower back at the top of the bridge.'
    }
  ];

  const current = exercises.find(e => e.name === selectedExercise) || exercises[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #40</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Exercise Demonstrations & Biomechanical Video Hub</h2>
          <p className="text-xs text-slate-500">
            Multi-angle kinematic video simulations, critical spinal cues, and form correction guidelines.
          </p>
        </div>
      </div>

      {/* Exercise Selector Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-1 text-xs font-bold">
        {exercises.map(ex => (
          <button
            key={ex.name}
            onClick={() => { setSelectedExercise(ex.name); setIsPlaying(false); }}
            className={`px-4 py-2 rounded-xl border transition whitespace-nowrap ${
              selectedExercise === ex.name
                ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {ex.name}
          </button>
        ))}
      </div>

      {/* Video Simulation Canvas */}
      <div className="bg-slate-950 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-xl relative aspect-video flex flex-col justify-between p-6">
        {/* Top Video Overlay */}
        <div className="flex justify-between items-start z-10">
          <div>
            <span className="text-[10px] uppercase font-bold text-teal-400 bg-teal-950/80 border border-teal-800/80 px-2 py-0.5 rounded">
              High-Speed Form Demonstration
            </span>
            <h3 className="text-white font-extrabold text-base mt-1">{current.name}</h3>
            <p className="text-slate-400 text-xs">{current.target}</p>
          </div>

          {/* Angle Switcher */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-1 flex space-x-1 text-[11px] font-bold">
            {(['Sagittal', 'Coronal', 'Overhead'] as const).map(angle => (
              <button
                key={angle}
                onClick={() => setSelectedAngle(angle)}
                className={`px-2.5 py-1 rounded-lg transition ${
                  selectedAngle === angle ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {angle} View
              </button>
            ))}
          </div>
        </div>

        {/* Center Animated Video Demonstration Graphic */}
        <div className="flex flex-col items-center justify-center my-auto text-center space-y-3 z-10">
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-teal-500/90 hover:bg-teal-400 text-slate-950 flex items-center justify-center cursor-pointer transition transform hover:scale-110 shadow-lg"
          >
            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </div>
          <p className="text-xs text-slate-300 font-mono">
            {isPlaying ? `▶ Playing Form Loop (${selectedAngle} Plane)` : 'Click to Play Movement Video'}
          </p>
        </div>

        {/* Bottom Status Bar */}
        <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800/80 z-10">
          <span>Tempo: 3s Hold • 2s Reset</span>
          <span className="text-teal-400 font-bold font-mono">L4-L5 Safe Clearance Certified</span>
        </div>
      </div>

      {/* Clinical Biomechanics Checklist & Red Flag Cues */}
      <div className="grid md:grid-cols-2 gap-5 text-xs">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <h4 className="font-extrabold text-sm text-slate-900 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
            Key Form Instructions & Cues
          </h4>
          <div className="space-y-2">
            {current.cues.map((cue, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-slate-700">
                <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-snug">{cue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50/70 p-5 rounded-3xl border border-amber-200 shadow-xs space-y-3">
          <h4 className="font-extrabold text-sm text-amber-900 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-amber-600" />
            Common Pitfalls & Contraindicated Motion
          </h4>
          <p className="text-amber-800 leading-relaxed font-medium">
            {current.mistakes}
          </p>
          <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-[11px] text-amber-900">
            <strong>Therapist Rule:</strong> If you experience radicular pain shooting past your knee at any point, immediately discontinue the movement and log a symptom note.
          </div>
        </div>
      </div>
    </div>
  );
};
