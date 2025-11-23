import React, { useState, useEffect } from 'react';
import { Language, SectionContent } from './types';
import { CONTENT } from './constants';
import { 
  HeartPulseIcon, 
  TargetIcon, 
  BrainIcon, 
  GlobeIcon,
  CheckIcon
} from './components/Icons';
import RegistrationForm from './components/RegistrationForm';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.AR);
  const data = CONTENT[lang];
  const isRTL = lang === Language.AR;

  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // Helper to render section content which might be string or array
  const renderContent = (content: string | string[]) => {
    if (typeof content === 'string') {
      return <p className="leading-relaxed text-slate-600">{content}</p>;
    }
    return (
      <ul className="space-y-2 mt-2">
        {content.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1.5 min-w-[6px] min-h-[6px] rounded-full bg-primary-500 block"></span>
            <span className="text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  const SectionCard: React.FC<{ 
    data: SectionContent, 
    icon?: React.ReactNode, 
    className?: string 
  }> = ({ data, icon, className = "" }) => (
    <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center min-w-[3rem] min-h-[3rem]">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">{data.title}</h2>
      </div>
      <div className="text-lg">
        {renderContent(data.content)}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans ${isRTL ? 'font-arabic' : ''} pb-20`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="./logo.png" 
              alt="Club Logo" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            
            <span className={`font-bold text-xl tracking-tight hidden md:block ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'نادي أصدقاء البيئة والصحة' : 'Friends of Environment & Health'}
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
            {Object.values(Language).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  lang === l 
                    ? 'bg-white text-primary-700 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-primary-50 via-white to-white pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Logo Display */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
              <img 
                src="./logo.png" 
                alt="Club Logo Large" 
                className="relative w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl transform transition duration-500 group-hover:scale-105 bg-white rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-40 h-40 md:w-56 md:h-56 bg-primary-50 border-4 border-dashed border-primary-200 rounded-full flex flex-col items-center justify-center text-primary-400 p-4"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span class="text-xs text-center font-semibold">Missing logo.png</span></div>';
                }}
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6 border border-primary-200 shadow-sm">
            <HeartPulseIcon className="w-4 h-4" />
            <span>{data.institution}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light leading-normal">
            {data.supervision}
          </p>
          
          {/* Decorative Icons Row */}
          <div className="flex justify-center items-center gap-8 text-slate-400 opacity-60">
             <img 
              src="./logo.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain grayscale opacity-80"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} 
             />
             <GlobeIcon className="w-8 h-8" />
             <BrainIcon className="w-8 h-8" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 space-y-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Core Info */}
          <div className="lg:col-span-2 space-y-8">
            <SectionCard 
              data={data.definition} 
              icon={<GlobeIcon className="w-6 h-6" />} 
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard 
                data={data.motivations} 
                icon={<CheckIcon className="w-6 h-6" />} 
                className="h-full"
              />
              <SectionCard 
                data={data.activities} 
                icon={<HeartPulseIcon className="w-6 h-6" />} 
                className="h-full"
              />
            </div>

            <SectionCard 
              data={data.objectives} 
              icon={<TargetIcon className="w-6 h-6" />} 
            />

            <SectionCard 
              data={data.softSkills} 
              icon={<BrainIcon className="w-6 h-6" />} 
            />

            <SectionCard 
              data={data.vision} 
              icon={
                <img 
                  src="./logo.png" 
                  alt="Vision" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    // Fallback to a generic icon if image fails
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
                    }
                  }} 
                />
              } 
              className="bg-gradient-to-br from-primary-50 to-white border-primary-100"
            />
          </div>

          {/* Right Column: Form & Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <RegistrationForm content={data.register} lang={lang} />
              
              {/* Contact/Quick Info Box */}
              <div className="bg-slate-800 text-slate-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5" />
                  Contact
                </h3>
                <p className="text-sm mb-2 opacity-80">{data.institution}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
        <p>{data.footer}</p>
      </footer>

      {/* AI Assistant */}
      <AIChat content={data.aiChat} lang={lang} />
    </div>
  );
};

export default App;