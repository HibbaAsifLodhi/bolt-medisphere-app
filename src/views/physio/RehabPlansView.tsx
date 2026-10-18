import React, { useState } from 'react';
import { ListOrdered, CheckCircle2, Clock, Calendar, CheckSquare, Square, ChevronRight } from 'lucide-react';

export const RehabPlansView: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 't1', phase: 1, week: 'Week 1-4', title: 'McKenzie Prone on Elbows Decompression (2x daily)', done: true },
    { id: 't2', phase: 1, week: 'Week 1-4', title: 'Lumbar Cryotherapy 15 mins post-activity', done: true },
    { id: 't3', phase: 2, week: 'Week 5-8', title: 'Prone Cobra Stretch (3 sets x 15s hold)', done: true },
    { id: 't4', phase: 2, week: 'Week 5-8', title: 'Pelvic Tilts & Transverse Abdominis Drawing-In Maneuver', done: true },
    { id: 't5', phase: 2, week: 'Week 5-8', title: 'Bird-Dog Quadruped Arm/Leg Extensions (10 reps per side)', done: false },
    { id: 't6', phase: 3, week: 'Week 9-12', title: 'Dead-Bug Isometric Progression with Core Brace', done: false },
    { id: 't7', phase: 3, week: 'Week 9-12', title: 'Theraband Lateral Monster Walks for Gluteus Medius', done: false }
  ]);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const completedCount = tasks.filter(t => t.done).length;
  const overallPct = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #38</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Rehabilitation Plans & Phased Protocol</h2>
          <p className="text-xs text-slate-500">
            Structured week-by-week clinical recovery pathway for L4-L5 Lumbar HNP conservative resolution.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold self-start sm:self-auto">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Curriculum Adherence: {overallPct}%</span>
        </div>
      </div>

      {/* Week-by-Week Phases Timeline */}
      <div className="space-y-4">
        {[
          {
            phaseNum: 1,
            title: 'Phase I: Protection & Centralization (Weeks 1 - 4)',
            badge: 'Completed',
            badgeClass: 'bg-emerald-100 text-emerald-800',
            desc: 'Objective: Eliminate radicular pain below the knee through McKenzie directional preference and spinal resting positions.'
          },
          {
            phaseNum: 2,
            title: 'Phase II: Dynamic Spinal Stabilization (Weeks 5 - 8)',
            badge: 'Active Focus',
            badgeClass: 'bg-teal-600 text-white animate-pulse',
            desc: 'Objective: Re-educate deep local stabilizers (Transverse Abdominis & Multifidus) while maintaining a neutral spine posture.'
          },
          {
            phaseNum: 3,
            title: 'Phase III: Functional Conditioning & Return to Work (Weeks 9 - 12+)',
            badge: 'Scheduled',
            badgeClass: 'bg-slate-100 text-slate-600',
            desc: 'Objective: High-endurance core control during rotational and lifting tasks to prevent re-herniation.'
          }
        ].map(p => (
          <div key={p.phaseNum} className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-sm font-extrabold text-slate-900">{p.title}</h3>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full self-start sm:self-auto ${p.badgeClass}`}>
                {p.badge}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">{p.desc}</p>

            {/* Tasks under this phase */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              {tasks.filter(t => t.phase === p.phaseNum).map(task => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition ${
                    task.done ? 'bg-teal-50/50 border-teal-200 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    {task.done ? <CheckSquare className="w-4 h-4 text-teal-600" /> : <Square className="w-4 h-4 text-slate-400" />}
                    <span className={`font-semibold ${task.done ? 'line-through text-slate-500' : 'text-slate-900'}`}>{task.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{task.week}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
