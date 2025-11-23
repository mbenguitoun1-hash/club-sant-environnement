export enum Language {
  AR = 'ar',
  FR = 'fr',
  ES = 'es'
}

export interface SectionContent {
  title: string;
  content: string | string[];
  icon?: string;
}

export interface TranslationData {
  title: string;
  institution: string;
  supervision: string;
  definition: SectionContent;
  objectives: SectionContent;
  motivations: SectionContent;
  softSkills: SectionContent;
  activities: SectionContent;
  vision: SectionContent;
  register: {
    title: string;
    name: string;
    class: string;
    age: string;
    level: string;
    submit: string;
    success: string;
    emailSubject: string;
    emailBodyIntro: string;
  };
  aiChat: {
    title: string;
    placeholder: string;
    send: string;
    thinking: string;
    welcome: string;
  };
  footer: string;
}

export interface StudentData {
  name: string;
  className: string;
  age: string;
  level: string;
}