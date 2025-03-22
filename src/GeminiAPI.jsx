import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function GeminiAPI({ loading, setLoading, text }) {
  const [responseText, setResponseText] = useState();

  useEffect(() => {
    const fetchAIResponse = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Explain how AI works";
        const result = await model.generateContent("Explain how AI works. Answer in 5 sentences");

        // Ensure you are accessing the correct property in the result object
        setResponseText(result.response.text || "No response text found");
      } catch (error) {
        console.error("Error fetching data:", error);
        setResponseText("An error occurred while fetching data.");
      }
    };

    fetchAIResponse();
  }, []);

  console.log(responseText);

  return (
    <div>
      {!responseText ? setLoading(true) : setLoading(false)}
      {responseText}
      
    </div>
  );
}

export default GeminiAPI;
