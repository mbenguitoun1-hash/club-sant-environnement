import React, { useState, useRef, useEffect } from 'react';
import { TranslationData, Language } from '../types';
import { MessageSquareIcon, SparklesIcon, SendIcon } from './Icons';
import { generateClubResponse } from '../services/geminiService';

interface AIChatProps {
  content: TranslationData['aiChat'];
  lang: Language;
}

const AIChat: React.FC<AIChatProps> = ({ content, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: content.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  // Reset chat when language changes if it's only the initial message
  useEffect(() => {
    if (messages.length === 1) {
        setMessages([{ role: 'model', text: content.welcome }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, content.welcome]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await generateClubResponse(userMsg, lang);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-6 ${lang === Language.AR ? 'left-6' : 'right-6'} z-50 flex flex-col items-end gap-4`}>
      
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[400px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-primary-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-500 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-5 h-5 text-yellow-200" />
              <h3 className="font-bold text-sm">{content.title}</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl rounded-bl-none text-xs text-slate-500 flex items-center gap-2 shadow-sm">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                  <span>{content.thinking}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={content.placeholder}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-100 border-none focus:ring-2 focus:ring-primary-300 text-sm outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
            >
              <SendIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'scale-0' : 'scale-100'} transition-transform duration-300 bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-500 hover:to-secondary-400 text-white p-4 rounded-full shadow-lg hover:shadow-primary-500/30 flex items-center justify-center group`}
      >
        <MessageSquareIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default AIChat;