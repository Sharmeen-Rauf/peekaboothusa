import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "placeholder",
});

export async function getBoothRecommendation(eventDescription: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or gpt-4
      messages: [
        {
          role: "system",
          content: `You are an expert event consultant for Peekabooth PK, a premium photo booth company in Pakistan. 
          Your goal is to recommend the best booth based on the user's event description.
          Options:
          1. Party Box: Best for small birthdays, casual hangouts, and tight spaces.
          2. Classic Booth: Best for corporate events, office activities, and professional settings.
          3. 360 Video Booth: Best for high-energy weddings, viral content, and major celebrations.
          4. Registration Booth: Best for corporate events needing guest tracking and badges.
          
          Respond in a friendly, professional tone. Give the recommendation and a brief reason why.`
        },
        {
          role: "user",
          content: eventDescription
        }
      ],
      max_tokens: 150,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Recommendation Error:", error);
    return "Based on your event, we recommend our most popular 360 Video Booth for an unforgettable experience!";
  }
}
