
import { GoogleGenAI } from "@google/genai";

export const getMarketAnalysis = async (symbol: string, price: number, change: number) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a very brief (max 2 sentences) technical analysis for ${symbol} currently priced at $${price} with a 24h change of ${change}%. Focus on market sentiment and potential trend.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Analysis error:", error);
    return "Market analysis currently unavailable. Please check technical indicators.";
  }
};
