import React, { useState, useEffect } from 'react';
import { CheckCircle2, Play, Pause, RotateCcw, Flame, Dumbbell, Award, Plus } from 'lucide-react';

export const ExerciseTrackerView: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [rpeScore, setRpeScore] = useState(4); // Borg RPE 1-10
  const [sorenessTag, setSorenessTag] = useState<'None' | 'Mild' | 'Moderate'>('Mild');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [loggedSets, setLoggedSets] = useState([
    { setNum: 1, reps: '15s Static Hold', weight: 'Bodyweight', completed: true },
    { setNum: 2, reps: '15s Static Hold', weight: 'Bodyweight', completed: true },
    { setNum: 3, reps: '12s Static Hold', weight: 'Bodyweight', completed: false }
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSaveSession = () => {
    setSavedSuccess(true);
    setTimerRunning(false);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group D. Physio & Rehab
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #41</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Exercise Session Tracker & Stopwatch</h2>
          <p className="text-xs text-slate-500">
            Log completed sets, static hold durations, Borg rate of perceived exertion (RPE), and symptom response.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-amber-50 text-amber-800 px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold self-start sm:self-auto">
          <Flame className="w-4 h-4 text-amber-600 fill-current" />
          <span>Active Streak: 12 Consecutive Days!</span>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-800 flex items-center justify-between animate-fade-in font-bold">
          <span>✓ Session Saved! Telemetry transmitted to Dr. Hamza Malik.</span>
          <span className="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded font-mono">Sync: OK</span>
        </div>
      )}

      {/* Main Tracker Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Stopwatch & Rest Timer */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-lg flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider">Hold Timer / Rest Counter</span>
            <div className="text-5xl font-black font-mono tracking-tight text-white mt-2">
              {formatTimer(seconds)}
            </div>
            <p className="text-xs text-slate-400 mt-1">Target Hold: 15 seconds per set</p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className={`flex-1 py-3 rounded-2xl font-black text-xs flex items-center justify-center space-x-1.5 transition ${
                timerRunning ? 'bg-amber-500 hover:bg-amber-600 text-slate-950' : 'bg-teal-500 hover:bg-teal-400 text-slate-950'
              }`}
            >
              {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{timerRunning ? 'Pause Stopwatch' : 'Start Hold'}</span>
            </button>
            <button
              onClick={() => { setTimerRunning(false); setSeconds(0); }}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl transition"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sets Logger */}
        <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-teal-700 uppercase">Target Exercise</span>
              <h3 className="text-base font-extrabold text-slate-900">Prone Cobra Spinal Extension</h3>
            </div>
            <button
              onClick={() => setLoggedSets(prev => [...prev, { setNum: prev.length + 1, reps: '15s Static Hold', weight: 'Bodyweight', completed: true }])}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-bold flex items-center space-x-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Set</span>
            </button>
          </div>

          <div className="space-y-2">
            {loggedSets.map((s, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                    {s.setNum}
                  </span>
                  <div>
                    <span className="font-bold text-slate-900">{s.reps}</span>
                    <span className="text-[11px] text-slate-500 ml-2">({s.weight})</span>
                  </div>
                </div>
                <button
                  onClick={() => setLoggedSets(prev => prev.map((item, i) => i === idx ? { ...item, completed: !item.completed } : item))}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition flex items-center space-x-1 ${
                    s.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{s.completed ? 'Completed' : 'Mark Done'}</span>
                </button>
              </div>
            ))}
          </div>

          {/* RPE Exertion & Feedback */}
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold text-slate-800 text-[11px]">Borg Rate of Perceived Exertion (RPE 1 - 10)</label>
                <span className="font-black text-brand-600 font-mono text-sm">{rpeScore} / 10 (Moderate Effort)</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={rpeScore}
                onChange={e => setRpeScore(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold text-slate-600">Immediate Post-Set Soreness:</span>
                {(['None', 'Mild', 'Moderate'] as const).map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSorenessTag(tag)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      sorenessTag === tag ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <button
                onClick={handleSaveSession}
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition shadow-xs"
              >
                Save Daily Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
