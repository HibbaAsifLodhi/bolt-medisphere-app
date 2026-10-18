import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  ShieldAlert,
  Send,
  Sparkles,
  Languages,
  CheckCircle2,
  User
} from 'lucide-react';
import { ChatMessage } from '../types/index.ts';

interface AiAssistantViewProps {
  onNavigate: (route: string) => void;
}

export const AiAssistantView: React.FC<AiAssistantViewProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      textEnglish: 'Assalam-o-Alaikum, Zainab! I am your MEDISPHERE Clinical Assistant. You can ask me to explain your MRI results, verify your medication schedule, or translate technical medical terms into simple Urdu or English.',
      textUrdu: 'آپ مجھ سے اپنے ایکسرے، ایم آر آئی رپورٹ اور دوائیوں کے بارے میں اردو میں بھی سوال پوچھ سکتے ہیں۔',
      timestamp: '10:00 AM'
    },
    {
      id: 'u1',
      sender: 'user',
      textEnglish: 'What does "L4-L5 disc protrusion effacing the thecal sac" mean in my latest spine scan?',
      timestamp: '10:01 AM'
    },
    {
      id: 'a1',
      sender: 'assistant',
      textEnglish: 'In simple terms, your intervertebral disc between your 4th and 5th lower back bones (lumbar) has bulged slightly backwards. "Effacing the thecal sac" means the outer cushion is gently touching the fluid-filled protective sheath surrounding spinal nerves. This often correlates with the low back tightness and occasional leg sensations you report.',
      textUrdu: 'آسان الفاظ میں: آپ کی کمر کے نچلے حصے کے دو مہروں (L4-L5) کے درمیان موجود کشن (ڈسک) تھوڑا سا باہر ابھرا ہوا ہے۔ یہ اعصابی تھیلی پر ہلکا دباؤ ڈال رہا ہے، جس کی وجہ سے درد یا اکڑن محسوس ہو سکتی ہے۔',
      timestamp: '10:02 AM'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      textEnglish: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let respEn = `Regarding your inquiry on "${text}": In clinical rehabilitation, preserving lumbar neutrality, following Dr. Hamza's prescribed extension exercises, and avoiding twisting under loads &gt; 5kg is recommended.`;
      let respUr = `آپ کے سوال کے حوالے سے: کمر کی حفاظت کے لیے وزن اٹھانے اور جھٹکے سے جھکنے سے پرہیز کریں۔ فزیو تھراپسٹ کی بتائی ہوئی ورزشوں کو جاری رکھیں۔`;

      const lower = text.toLowerCase();
      if (lower.includes('pregabalin') || lower.includes('dose') || lower.includes('دوا')) {
        respEn = `Pregabalin (75mg) is an FDA-approved neuropathic agent prescribed to soothe irritated spinal nerve roots and promote restorative sleep. Take 1 capsule nightly at bedtime as instructed by Dr. A. Rauf. Avoid combining with heavy sedatives or alcohol.`;
        respUr = `پری گیبالن (Pregabalin) اعصابی تناؤ کو کم کرنے اور پرسکون نیند کے لیے رات کے وقت لی جاتی ہے۔ ڈاکٹر کی بتائی ہوئی خوراک پر سختی سے عمل کریں۔`;
      } else if (lower.includes('penicillin') || lower.includes('allergy') || lower.includes('الرجی')) {
        respEn = `Critical Alert: Your medical profile records severe Penicillin Anaphylaxis. Always notify any surgeon, dental practitioner, or emergency paramedic before receiving injectable antibiotics (e.g., Amoxicillin, Augmentin). Your printable emergency card prominently displays this contraindication.`;
        respUr = `اہم تنبیہ: آپ کے ریکارڈ میں پینسلین (Penicillin) سے شدید جان لیوا الرجی درج ہے۔ کسی بھی ڈاکٹر یا ہسپتال جانے پر یہ بات فوراً بتائیں۔`;
      } else if (lower.includes('ورزش') || lower.includes('exercise') || lower.includes('cobra')) {
        respEn = `For L4-L5 posterior disc protrusion, McKenzie extension routines like the Prone Cobra Stretch and Bird-Dog stabilization strengthen the deep multifidus muscle without compressing disc margins. Stop immediately if any leg numbness or sharp radiating sensations occur.`;
        respUr = `کمر کے نچلے مہروں کے لیے پرون کوبرا اسٹریچ اور برڈ-ڈاگ ورزش انتہائی مفید ہے۔ اگر ٹانگ میں سن پن یا تیز درد ہو تو فوری طور پر ورزش روک دیں۔`;
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        textEnglish: respEn,
        textUrdu: respUr,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Bilingual Health AI
            </span>
            <span className="text-xs text-slate-400 font-mono">Triage Engine v2.4</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">AI Health Assistant & Report Explainer</h2>
          <p className="text-xs text-slate-500">
            Ask questions in English or Urdu. Clarifies clinical medical reports without replacing physician diagnosis.
          </p>
        </div>
        <button
          onClick={() => onNavigate('multilingual-urdu')}
          className="font-urdu font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 rounded-lg text-xs hover:bg-emerald-100 transition"
        >
          مکمل اردو رہنمائی (Urdu Hub)
        </button>
      </div>

      {/* Medical Disclaimer Strip */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start space-x-2.5 text-xs text-amber-900">
        <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Safety Boundary:</strong> This AI assistant provides patient education and medical report simplification only. It cannot prescribe medication, verify clinical emergencies, or override your doctor's instructions. In an emergency, call <strong>1122</strong> immediately.
        </div>
      </div>

      {/* Chat Window Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[530px] overflow-hidden">
        {/* Messages Scroll Area */}
        <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 text-xs">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl max-w-lg space-y-2 text-xs ${
                  msg.sender === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-none'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/60'
                }`}
              >
                {msg.textEnglish && <p className="leading-relaxed">{msg.textEnglish}</p>}
                {msg.textUrdu && (
                  <p className="font-urdu text-sm text-emerald-950 font-medium leading-relaxed border-t border-slate-200/80 pt-2 text-right">
                    {msg.textUrdu}
                  </p>
                )}
                <div
                  className={`text-[9px] font-mono mt-1 ${
                    msg.sender === 'user' ? 'text-teal-100 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-teal-800 text-white flex items-center justify-center font-bold flex-shrink-0 text-xs mt-0.5">
                  ZA
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-slate-400 text-xs italic">
              <Bot className="w-4 h-4 animate-spin text-teal-600" />
              <span>MEDISPHERE AI is formulating bilingual response...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestions Bar */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap gap-2 text-[11px]">
          <span className="text-slate-400 py-1 pl-1 font-medium">Suggested:</span>
          <button
            onClick={() => handleSend('Explain my Pregabalin 75mg dosage')}
            className="bg-white border border-slate-200 hover:border-brand-500 px-2.5 py-1 rounded-full text-slate-700 hover:text-brand-700 transition"
          >
            💊 Explain Pregabalin 75mg
          </button>
          <button
            onClick={() => handleSend('کمر کے درد میں کون سی محفوظ ورزشیں کرنی چاہئیں؟')}
            className="bg-white border border-slate-200 hover:border-brand-500 px-2.5 py-1 rounded-full font-urdu text-emerald-800 transition"
          >
            کمر کے درد کی محفوظ ورزشیں؟
          </button>
          <button
            onClick={() => handleSend('Is my allergy to Penicillin dangerous?')}
            className="bg-white border border-slate-200 hover:border-brand-500 px-2.5 py-1 rounded-full text-slate-700 hover:text-brand-700 transition"
          >
            ⚠️ Penicillin allergy warning
          </button>
        </div>

        {/* Input Bar */}
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSend(inputText);
          }}
          className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Type a clinical question in English or اردو..."
            className="flex-1 border border-slate-300 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-brand-600 transition"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm transition"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
