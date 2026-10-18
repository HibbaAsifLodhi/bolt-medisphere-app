import React, { useState } from 'react';
import {
  Dumbbell,
  PlaySquare,
  CheckCircle,
  Plus,
  Flame,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ExerciseLibraryViewProps {
  onNavigate: (route: string) => void;
}

export const ExerciseLibraryView: React.FC<ExerciseLibraryViewProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'All' | 'Lumbar' | 'Core' | 'Cervical'>('All');
  const [addedRoutine, setAddedRoutine] = useState<Record<string, boolean>>({
    'ex-cobra': true,
    'ex-bird-dog': true,
    'ex-bridge': true
  });

  const exercises = [
    {
      id: 'ex-cobra',
      name: 'Prone Cobra Extension (McKenzie)',
      category: 'Lumbar',
      level: 'Gentle',
      sets: '3 sets × 10 reps',
      hold: '15 seconds hold',
      target: 'Intervertebral Disc Anteriorization & Erector Spinae',
      instructions: 'Lie face down. Place hands beneath shoulders and gently push torso upward while keeping pelvic ring anchored to mat. Exhale on elevation.'
    },
    {
      id: 'ex-bird-dog',
      name: 'Quadruped Bird-Dog Stability',
      category: 'Core',
      level: 'Intermediate',
      sets: '3 sets × 12 reps',
      hold: '5s hold each side',
      target: 'Multifidus & Transverse Abdominis',
      instructions: 'On hands and knees, extend right arm forward and left leg backward simultaneously in a straight horizontal line. Avoid lumbar rotational sag.'
    },
    {
      id: 'ex-bridge',
      name: 'Gluteal Pelvic Bridge',
      category: 'Core',
      level: 'Gentle',
      sets: '3 sets × 15 reps',
      hold: '3s peak contraction',
      target: 'Gluteus Maximus & Pelvic Floor',
      instructions: 'Lie on your back with knees bent at 90°. Drive through heels to raise hips until torso forms a straight line from knees to shoulders.'
    },
    {
      id: 'ex-chin-tuck',
      name: 'Cervical Retraction (Chin Tuck)',
      category: 'Cervical',
      level: 'Gentle',
      sets: '3 sets × 10 reps',
      hold: '5 seconds hold',
      target: 'Deep Cervical Flexors (Longus Colli)',
      instructions: 'Sit upright. Pull chin straight backward horizontally as if making a double chin, lengthening back of neck without tilting head down.'
    },
    {
      id: 'ex-cat-camel',
      name: 'Cat-Camel Segmental Mobilization',
      category: 'Lumbar',
      level: 'Gentle',
      sets: '2 sets × 10 reps',
      hold: 'Slow continuous movement',
      target: 'Thoracolumbar Fascia & Joint Lubrication',
      instructions: 'On all fours, slowly arch your spine toward the ceiling (Cat), then smoothly allow stomach to sink toward floor while lifting chest (Camel).'
    },
    {
      id: 'ex-side-plank',
      name: 'Modified Knee Side-Plank',
      category: 'Core',
      level: 'Intermediate',
      sets: '3 sets each side',
      hold: '20 seconds hold',
      target: 'Quadratus Lumborum & Obliques',
      instructions: 'Lie on side with knees bent 90°. Lift hips off ground supporting weight on forearm and lower knees, maintaining neutral spine.'
    }
  ];

  const toggleRoutine = (id: string) => {
    setAddedRoutine(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filtered = filter === 'All' ? exercises : exercises.filter(e => e.category === filter);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Rehabilitation Library
            </span>
            <span className="text-xs text-slate-400 font-mono">120+ Evidence-Based Movements</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Therapeutic Exercise Library</h2>
          <p className="text-xs text-slate-500">
            Clinician-vetted movements for spinal disc herniation, postural correction, and core stability.
          </p>
        </div>
        <button
          onClick={() => onNavigate('physio-dashboard')}
          className="px-3.5 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition shadow-xs"
        >
          <span>Open Physio Dashboard (View 34)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 text-xs font-bold">
        {(['All', 'Lumbar', 'Core', 'Cervical'] as const).map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-xl transition ${
              filter === c ? 'bg-brand-600 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Exercises Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(ex => (
          <div key={ex.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 text-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {ex.category} • {ex.level}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-sm mt-1">{ex.name}</h3>
                </div>
                <div className="text-right font-mono text-[11px] text-slate-500 font-bold">
                  {ex.sets}
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">{ex.instructions}</p>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-[11px]">
                <strong>Target Biomechanics:</strong> {ex.target}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 font-mono text-[10px]">{ex.hold}</span>
              <button
                onClick={() => toggleRoutine(ex.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
                  addedRoutine[ex.id]
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 hover:bg-teal-50 text-slate-700 border border-slate-200'
                }`}
              >
                {addedRoutine[ex.id] ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>In My Routine</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Routine</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
