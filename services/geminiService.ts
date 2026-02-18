
import { GoogleGenAI } from "@google/genai";
import { PROPERTIES, BRAND_NAME } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
You are "TRENDYVILLE Assistant", a sophisticated advisor for a cutting-edge real estate and investment platform.
Your goal is to help users navigate their journey: Buying, Renting, Airbnb stays, or High-yield Investments.

Available properties: ${JSON.stringify(PROPERTIES)}

Guidelines:
1. Be professional, vibrant, and concise.
2. If the user asks about investment, highlight the 10%+ potential ROI.
3. If they ask about Airbnb, focus on the "Traveler" experience and ease of booking.
4. Mention that they can switch to "Investor Mode" if they want to see deep metrics.
5. Suggest specific properties from our list.
6. Use grounding in real estate market terms.

Encourage users to view their dashboard for specific financial details.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of a technical hiccup. Feel free to explore our properties while I get back online!";
  }
};
