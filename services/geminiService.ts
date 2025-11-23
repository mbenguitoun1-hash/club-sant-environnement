import { GoogleGenAI } from "@google/genai";
import { CONTENT } from '../constants';
import { Language } from '../types';

export const generateClubResponse = async (question: string, language: Language) => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Chat functionality will be limited.");
    return "System Error: API Key missing. Please configure the environment.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const context = JSON.stringify(CONTENT[language]);
  
  const systemPrompt = `
    You are the AI assistant for "Nadi Asdiqaa Al Bi'a Wasihha" (Friends of the Environment and Health Club) at Abdallah Laroui High School.
    Your goal is to help students understand the club's mission, activities, and benefits.
    
    Current Context (in ${language}):
    ${context}

    Instructions:
    1. Answer the user's question based ONLY on the provided context.
    2. Be encouraging, friendly, and professional.
    3. Keep answers concise (under 100 words).
    4. Respond in the same language as the user's question or the current active language (${language}).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemPrompt,
      }
    });
    
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I am having trouble connecting to the server right now.";
  }
};