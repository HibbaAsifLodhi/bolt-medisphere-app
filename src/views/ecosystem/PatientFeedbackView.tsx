import React, { useState } from 'react';
import { Star, MessageSquare, Send, CheckCircle2, Award, Heart } from 'lucide-react';

export const PatientFeedbackView: React.FC = () => {
  const [effectivenessRating, setEffectivenessRating] = useState(5);
  const [commRating, setCommRating] = useState(5);
  const [cleanlinessRating, setCleanlinessRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('Dr. Hamza Malik explained my L4-L5 MRI clearly without making me feel scared. The exercise instructions were straightforward and helped reduce my numbness.');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group G. Connected Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #69</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Patient Feedback & Quality of Clinical Care</h2>
          <p className="text-xs text-slate-500">
            Patient-Reported Outcome Measures (PROMs), clinician ratings, and healthcare quality assurance.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold self-start sm:self-auto">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span>Patient Satisfaction Index: 98.4%</span>
        </div>
      </div>

      {submitted && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-500 rounded-2xl flex items-center justify-between text-xs text-emerald-900 font-bold animate-fade-in">
          <span>✓ Thank you! Your review has been submitted to the Mayo Hospital Quality Board.</span>
          <span className="bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded font-mono">Verified PROM</span>
        </div>
      )}

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5 text-xs">
        <h3 className="font-extrabold text-sm text-slate-900">Rate Your Recent Clinical Experience (Mayo Hospital Spine Unit)</h3>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="font-bold text-slate-800 block">Treatment Effectiveness</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setEffectivenessRating(star)}
                  className={`p-1 transition ${star <= effectivenessRating ? 'text-amber-500' : 'text-slate-300'}`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{effectivenessRating} of 5 Stars</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="font-bold text-slate-800 block">Doctor Communication</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setCommRating(star)}
                  className={`p-1 transition ${star <= commRating ? 'text-amber-500' : 'text-slate-300'}`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{commRating} of 5 Stars</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
            <span className="font-bold text-slate-800 block">Clinic Cleanliness & Hygiene</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setCleanlinessRating(star)}
                  className={`p-1 transition ${star <= cleanlinessRating ? 'text-amber-500' : 'text-slate-300'}`}
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 font-medium">{cleanlinessRating} of 5 Stars</p>
          </div>
        </div>

        <div>
          <label className="font-bold text-slate-800 block mb-1">Your Written Review / Suggestions:</label>
          <textarea
            rows={3}
            value={feedbackText}
            onChange={e => setFeedbackText(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-800 focus:outline-none focus:border-brand-600"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold flex items-center space-x-1.5 transition shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span>Submit Clinical Feedback</span>
          </button>
        </div>
      </form>
    </div>
  );
};
