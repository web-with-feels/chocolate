import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Ensure process.env.API_KEY is available. If not, the component handles the error state gracefully.
const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateRomanticPoem = async (topic: string): Promise<string> => {
  if (!ai) {
    return "I need an API Key to write a fresh poem, but know that I love you endlessly! ❤️";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a very short, romantic, 2-line poem about ${topic}. Make it sweet and chocolate-themed if possible.`,
    });
    
    return response.text || "You are sweeter than the sweetest chocolate.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Even without words, my heart beats only for you.";
  }
};
