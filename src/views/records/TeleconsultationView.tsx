import React, { useState } from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Share2, Heart, Activity, FileText, Send } from 'lucide-react';
import { PatientData } from '../../types/index.ts';

interface TeleconsultationViewProps {
  patient: PatientData;
}

export const TeleconsultationView: React.FC<TeleconsultationViewProps> = ({ patient }) => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Dr. Hamza Malik', text: 'Salam Zainab, how is the lower back stiffness this morning compared to last week?', time: '11:02 AM' },
    { sender: 'You', text: 'Wa alaikum salam Doctor. The burning in the left glute is less, but bending forward still triggers a catch at L4.', time: '11:03 AM' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages(prev => [...prev, { sender: 'You', text: inputMsg, time: '11:05 AM' }]);
    setInputMsg('');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-teal-100 text-brand-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Group C. Records & Services
            </span>
            <span className="text-xs text-slate-400 font-mono">Section #31</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Teleconsultation Video Portal</h2>
          <p className="text-xs text-slate-500">
            End-to-end encrypted video consult with PMDC licensed spinal specialists and physiotherapists.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Encrypted WebRTC Session (256-bit)</span>
        </div>
      </div>

      {/* Main Video Room Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Video Viewport */}
        <div className="lg:col-span-2 space-y-3">
          <div className="relative aspect-video bg-slate-950 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-xl flex items-center justify-center">
            {videoOn ? (
              <div className="relative w-full h-full bg-gradient-to-tr from-slate-900 to-teal-950/80 flex flex-col items-center justify-center p-6 text-center">
                {/* Doctor Avatar / Mock Video Feed */}
                <div className="w-24 h-24 rounded-full bg-teal-800 border-4 border-teal-500/40 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                  HM
                </div>
                <h3 className="text-base font-extrabold text-white mt-3">Dr. Hamza Malik, DPT</h3>
                <p className="text-xs text-teal-300">Consultant Spine Physiotherapist (Mayo Hospital)</p>

                {/* Live Vitals Overlay Top-Right */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-2xl p-2.5 text-left text-xs space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                    <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span>72 BPM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-teal-300 font-bold">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>BP 118 / 76 mmHg</span>
                  </div>
                </div>

                {/* Self Mini Camera View Bottom-Right */}
                <div className="absolute bottom-4 right-4 w-32 aspect-video bg-slate-800 rounded-xl border border-slate-600 overflow-hidden flex items-center justify-center text-[10px] text-slate-300 font-bold">
                  Patient Self-View (ZA)
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-400">
                <VideoOff className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-xs">Camera is Muted</p>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`p-2.5 rounded-xl transition ${micOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-red-600 text-white'}`}
                title={micOn ? 'Mute Mic' : 'Unmute Mic'}
              >
                {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setVideoOn(!videoOn)}
                className={`p-2.5 rounded-xl transition ${videoOn ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-red-600 text-white'}`}
                title={videoOn ? 'Turn Video Off' : 'Turn Video On'}
              >
                {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setScreenSharing(!screenSharing)}
                className={`p-2.5 rounded-xl transition ${screenSharing ? 'bg-teal-600 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                title="Share Screen"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => alert('Consultation ended. Digital SOAP notes submitted to your medical file.')}
                className="p-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white transition font-bold text-xs flex items-center space-x-1"
                title="End Consultation"
              >
                <PhoneOff className="w-4 h-4" />
                <span className="hidden sm:inline">End Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* In-Call Consultation Chat & Summary */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col h-[400px] lg:h-auto overflow-hidden">
          <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-800">
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1.5 text-teal-600" />
              Clinical Consultation Chat
            </span>
            <span className="text-[10px] text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Doctor Active</span>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-xl max-w-[85%] ${
                  m.sender === 'You'
                    ? 'ml-auto bg-brand-600 text-white rounded-br-none'
                    : 'bg-slate-100 text-slate-900 rounded-bl-none'
                }`}
              >
                <p className="text-[10px] font-bold opacity-75 mb-0.5">{m.sender} • {m.time}</p>
                <p className="leading-snug">{m.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-2.5 border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              value={inputMsg}
              onChange={e => setInputMsg(e.target.value)}
              placeholder="Ask doctor a question..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-brand-600"
            />
            <button type="submit" className="p-2 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
