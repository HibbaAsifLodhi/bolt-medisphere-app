import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export const AiHealthEducationView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  const modules = [
    {
      id: 'm1',
      title: 'Module 1: The Biomechanics of the 24 Vertebrae',
      readTime: '4 min read',
      content: 'The human spine features 7 cervical (neck), 12 thoracic (mid-back), and 5 lumbar (lower back) vertebrae. The lumbar spine supports the majority of bodyweight. Intervertebral discs act as hydraulic shock absorbers between adjacent bony vertebrae.',
      question: 'Which spinal region carries the highest axial compressive load during upright sitting?',
      options: ['Cervical Spine (C1-C7)', 'Thoracic Spine (T1-T12)', 'Lumbar Spine (L1-L5)', 'Coccyx'],
      correctIdx: 2
    },
    {
      id: 'm2',
      title: 'Module 2: Understanding Disc Herniation (HNP) & Recovery',
      readTime: '5 min read',
      content: 'A lumbar disc herniation occurs when the tough outer ring (annulus fibrosus) weakens, allowing the gelatinous center (nucleus pulposus) to press outward against spinal nerve roots. Over 85% of cases heal conservatively through specialized physical therapy, posture correction, and inflammation reduction without surgical discectomy.',
      question: 'What percentage of lumbar disc protrusions heal conservatively without invasive surgery?',
      options: ['Less than 20%', 'Around 50%', 'Over 85%', '100% require surgery'],
      correctIdx: 2
    },
    {
      id: 'm3',
      title: 'Module 3: Why Prolonged Sitting Increases Disc Pressure',
      readTime: '3 min read',
      content: 'Slouching in an office chair increases intradiscal pressure by up to 185% compared to standing. When sitting without lumbar support, the pelvis tilts backward, flattening the natural lumbar lordosis and forcing the disc cushion to bulge posterior toward nerve roots.',
      question: 'How much higher can intradiscal pressure be while slouching compared to standing upright?',
      options: ['20% higher', '50% higher', 'Up to 185% higher', 'Pressure is lower while sitting'],
      correctIdx: 2
    }
  ];

  const current = modules[selectedModule];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group F. AI Assistant
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #61</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Personalized Spine Health Education Academy</h2>
          <p className="text-xs text-slate-500">
            Interactive micro-learning modules explaining spinal kinematics, disc physiology, and injury prevention.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs font-bold self-start sm:self-auto">
          <Award className="w-4 h-4 text-indigo-600" />
          <span>Patient Health Literacy: Level 2</span>
        </div>
      </div>

      {/* Module Selector */}
      <div className="grid sm:grid-cols-3 gap-3">
        {modules.map((mod, idx) => (
          <div
            key={mod.id}
            onClick={() => { setSelectedModule(idx); setQuizAnswer(null); }}
            className={`p-4 rounded-2xl border cursor-pointer transition text-xs space-y-1 ${
              selectedModule === idx
                ? 'bg-indigo-50/70 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <span className="text-[10px] font-mono font-bold text-slate-400">{mod.readTime}</span>
            <h4 className="font-extrabold text-slate-900 text-xs leading-snug">{mod.title}</h4>
          </div>
        ))}
      </div>

      {/* Reading & Quiz Card */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5 text-xs">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded">
            Clinical Micro-Lecture
          </span>
          <h3 className="text-base font-black text-slate-900">{current.title}</h3>
          <p className="text-slate-700 leading-relaxed text-xs pt-1">{current.content}</p>
        </div>

        {/* Interactive Knowledge Check Quiz */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
          <span className="font-extrabold text-slate-900 flex items-center text-xs">
            <HelpCircle className="w-4 h-4 mr-1.5 text-indigo-600" />
            Knowledge Check: {current.question}
          </span>

          <div className="grid sm:grid-cols-2 gap-2 pt-1">
            {current.options.map((opt, oIdx) => {
              const isSelected = quizAnswer === oIdx;
              const isCorrect = oIdx === current.correctIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => setQuizAnswer(oIdx)}
                  className={`p-3 rounded-xl border text-left font-medium transition ${
                    isSelected
                      ? isCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                        : 'bg-red-50 border-red-400 text-red-950 font-bold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="mr-2 font-mono text-[11px] text-slate-400">[{String.fromCharCode(65 + oIdx)}]</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {quizAnswer !== null && (
            <div className={`p-3 rounded-xl text-xs font-bold ${
              quizAnswer === current.correctIdx ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900'
            }`}>
              {quizAnswer === current.correctIdx
                ? '✓ Correct! You have successfully mastered this anatomical concept.'
                : '✕ Incorrect. Review the lecture above and try again.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
