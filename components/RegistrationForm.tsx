import React, { useState } from 'react';
import { Language, StudentData, TranslationData } from '../types';
import { UserIcon, CheckIcon } from './Icons';

interface RegistrationFormProps {
  content: TranslationData['register'];
  lang: Language;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ content, lang }) => {
  const [formData, setFormData] = useState<StudentData>({
    name: '',
    className: '',
    age: '',
    level: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Email Body
    const body = `${content.emailBodyIntro}\n\n` +
      `${content.name}: ${formData.name}\n` +
      `${content.class}: ${formData.className}\n` +
      `${content.age}: ${formData.age}\n` +
      `${content.level}: ${formData.level}\n`;

    const mailtoLink = `mailto:m.benguitoun1@gmail.com?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.open(mailtoLink, '_blank');

    // Reset optional or show feedback
    // setFormData({ name: '', className: '', age: '', level: '' });
    alert(content.success);
  };

  const inputClass = "w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white/80 backdrop-blur-sm";

  return (
    <div className="bg-gradient-to-br from-white to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <UserIcon className="text-primary-600" />
        {content.title}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">{content.name}</label>
          <input 
            type="text" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">{content.age}</label>
            <input 
              type="number" 
              name="age" 
              required 
              value={formData.age}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">{content.class}</label>
            <input 
              type="text" 
              name="className" 
              required 
              value={formData.className}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">{content.level}</label>
          <input 
            type="text" 
            name="level" 
            required 
            value={formData.level}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <button 
          type="submit" 
          className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <span>{content.submit}</span>
          <CheckIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;