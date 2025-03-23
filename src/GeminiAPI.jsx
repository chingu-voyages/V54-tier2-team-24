import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { GoogleGenerativeAI } from "@google/generative-ai";


function GeminiAPI({ loading, setLoading, text }) {
  const [responseText, setResponseText] = useState();

  useEffect(() => {
    const fetchAIResponse = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Explain how AI works, use less than 5 sentences";
        const result = await model.generateContent(text);

        // Ensure you are accessing the correct property in the result object
        setResponseText(result.response.text || "No response text found");
      } catch (error) {
        console.error("Error fetching data:", error);

        if (error.message.includes("Failed to fetch")) {
          setResponseText(
            "Network error: Please check your internet connection."
          );
        } else if (error.response && error.response.status === 429) {
          setResponseText("Rate limit exceeded: Please try again later.");
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setResponseText(`API error: ${error.response.data.message}`);
        } else {
          setResponseText("An error occurred while fetching data.");
        }
      }
    };

    fetchAIResponse();
  }, [text]);

  console.log(responseText);

  return (
   
    <div>
       <ReactMarkdown>
      {!responseText ? setLoading(true) : setLoading(false)}
   {responseText}
   </ReactMarkdown>
    </div>
   
  );
}

export default GeminiAPI;
