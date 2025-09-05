import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import profileData from './profileData';

// FAQSection: Collapsible, styled, and interactive
function FAQSection({ onQuestionClick }) {
  const [stage, setStage] = React.useState('pill'); // pill, category, questions
  const [selectedCat, setSelectedCat] = React.useState(null);
  const faqs = profileData.faq;
  return (
    <div className="mb-2">
      {stage === 'pill' && (
        <button
          className="block mx-auto flex items-center justify-center px-2 py-1 border border-blue-600 text-blue-600 bg-white rounded-full font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 text-xs hover:bg-blue-50 transition"
          style={{ minWidth: 120 }}
          onClick={() => setStage('category')}
        >
          <span className="mr-2">💡</span> General Questions
        </button>
      )}
      {stage === 'category' && (
        <div className="flex flex-col gap-2 mb-2 bg-blue-50/60 rounded-xl p-2">
          {faqs.map(cat => (
            <button
              key={cat.category}
              className="w-full px-3 py-1 bg-white/70 text-sn border border-sn-light rounded-lg font-medium shadow hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-left text-xs"
              onClick={() => { setSelectedCat(cat); setStage('questions'); }}
            >
              {cat.category}
            </button>
          ))}
          <button
            className="px-2 py-1 text-xs text-gray-500 underline mt-1 self-start"
            onClick={() => setStage('pill')}
          >Back</button>
        </div>
      )}
      {stage === 'questions' && selectedCat && (
        <div className="mb-2 bg-blue-50/60 rounded-xl p-2">
          <div className="flex items-center gap-2 mb-2">
            <button
              className="text-xs text-gray-500 underline"
              onClick={() => setStage('category')}
            >Back</button>
            <span className="font-semibold text-sn text-xs">{selectedCat.category}</span>
          </div>
          <div className="flex flex-col gap-2">
            {selectedCat.qa.map(({q}) => (
              <button
                key={q}
                className="w-full px-3 py-1 rounded-lg bg-gradient-to-r from-blue-100 to-green-100 text-sn font-medium shadow hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-left text-xs"
                onClick={() => onQuestionClick(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am PrasadBot. Ask me about my experience, certifications, or portfolio by selecting any question from the General Questions below!' }
  ]);
  const [input, setInput] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    if (open && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages, open]);

  // Flatten all Q&A pairs for lookup
  const allQA = (profileData.faq || []).flatMap(cat => cat.qa);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { from: 'user', text: input }]);
    // Find matching answer
    const found = allQA.find(r => input.toLowerCase().includes(r.q.toLowerCase()));
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'bot', text: found ? found.a : 'I am here to help! Please ask about my experience, certifications, or portfolio.' }]);
    }, 700);
    setInput('');
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99] bg-sn text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:scale-110 transition focus:outline-none focus:ring-4 focus:ring-sn-light/40 animate-pulse"
        style={{ boxShadow: '0 0 24px 4px #10736066, 0 2px 12px rgba(16,115,96,0.18)' }}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chatbot"
      >
        {open ? <FaTimes className="text-xl sm:text-2xl" /> : <FaRobot className="text-xl sm:text-2xl" />}
      </button>
      {open && (
        <div className="fixed bottom-20 right-2 sm:bottom-24 sm:right-6 z-[99] w-[95vw] max-w-xs sm:max-w-sm sm:w-96 glass-chatbot border border-sn rounded-2xl shadow-2xl flex flex-col backdrop-blur-xl bg-white/80" style={{ boxShadow: '0 8px 32px rgba(16,115,96,0.14), 0 2px 12px rgba(16,115,96,0.09)', minHeight: 420, height: 420 }}>
          <div className="flex items-center gap-2 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-t-2xl shadow-lg">
            <FaRobot className="text-white text-xl sm:text-2xl drop-shadow" />
            <span className="text-white font-bold tracking-wide text-base sm:text-lg">AskPrasad</span>
          </div>
          {/* Main content area: chat scroll area, FAQSection, input fixed at bottom */}
          <div className="flex flex-col flex-1 min-h-0">
            {/* Chat area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0" ref={ref}>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 rounded-2xl max-w-[80%] shadow ${
                    m.from === 'bot'
                      ? 'bg-sn-light text-white self-start rounded-bl-none'
                      : 'bg-white border border-sn-light text-sn self-end rounded-br-none'
                  } animate-fadein`}
                  style={{ alignSelf: m.from === 'bot' ? 'flex-start' : 'flex-end', wordBreak: 'break-word' }}
                >
                  {m.text}
                </div>
              ))}
            </div>
            {/* FAQSection as horizontal scrollable row of bubbles on right */}
            <div className="flex flex-row gap-2 px-3 pb-2 overflow-x-auto justify-end items-end w-full flex-shrink-0">
              <FAQSection onQuestionClick={q => setInput(q)} />
            </div>
            {/* Input box and send button, always at the bottom */}
            <div className="flex gap-2 p-3 border-t border-sn-light bg-white/60 rounded-b-2xl flex-shrink-0">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 px-3 py-2 border border-sn-light rounded-xl bg-white/90 shadow focus:outline-none focus:ring-2 focus:ring-sn-light"
                placeholder="Ask me anything..."
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button className="button-sn px-4 py-2 shadow-md" onClick={handleSend} aria-label="Send"><FaPaperPlane /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
