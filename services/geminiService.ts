
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Você é o assistente virtual da R&M Elétrica & Soluções. 
        Responda dúvidas sobre serviços elétricos (residencial, comercial, industrial), 
        normas de segurança (NR10), manutenção preventiva e instalação de energia solar. 
        Seja profissional, prestativo e emita alertas de segurança quando necessário.
        Se o usuário quiser um orçamento, peça para ele preencher o formulário de contato no site ou ligar para (11) 99999-9999.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estou tendo dificuldades técnicas agora. Por favor, tente novamente mais tarde.";
  }
};
