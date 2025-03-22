import { useState } from 'react';
import { PentagramProvider } from './PentagramContext';
import { GoogleGeneratingAI } from '@google/generative-ai';
import { LoadingFeature } from '../HandleLoading';

const Response = () => {
    const { inputs } = PentagramProvider();
    const [responseText, setResponseText] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //taken from Pentagram.jsx
    const handleSubmit = async () => {
        if (inputs.some((value) => value.trim() === "")) {
          alert("Please fill out all fields before submitting.");
          return;
        }

        setLoading(true);
//from GeminiAPI.jsx
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


    return(
        <div className="response-container">
            <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-blue-300 text-blue-500">
                Submit
            </button>
            <LoadingFeature />
       
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {responseTExt && <p className="text-green-500 mt-2">{responseText}</p>}
        </div>
    )
}

export default Response