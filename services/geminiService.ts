
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateItinerary = async (destination: string, days: number, vibe: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a ${days}-day ${vibe} travel itinerary for ${destination}. 
      Include daily activities, estimated budget in INR, and essential gear.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            itinerary: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.NUMBER },
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                },
                required: ["day", "title", "description"]
              }
            },
            estimatedBudget: { type: Type.STRING },
            essentialGear: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["itinerary", "estimatedBudget", "essentialGear"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const findCompatibleBuddies = async (userProfile: string, communityMembers: any[]) => {
    // Logic to use Gemini to find the best match based on profiles
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Given this user profile: "${userProfile}" 
        And these community members: ${JSON.stringify(communityMembers)}. 
        Tell me which member is the best travel partner match and why. Return a short friendly explanation.`
    });
    return response.text;
};
