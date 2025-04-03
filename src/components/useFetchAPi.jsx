import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";

export const useFetchAPi = () => {
  const [responseText, setResponseText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [networkErrorToastId, setNetworkErrorToastId] = useState(null); // Track the network error toast ID

  const fetchData = async (inputs) => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const concatenatedText = inputs.join(" ");
      const result = await model.generateContent(concatenatedText);
      setResponseText(result.response.text || "No response text found");

      // Dismiss the network error toast if it exists
      if (networkErrorToastId) {
        toast.dismiss(networkErrorToastId);
        setNetworkErrorToastId(null); // Reset the toast ID
      }

      // Show success toast
      toast.success("Successfully reconnected and fetched data!");
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error for debugging

      if (error.message.includes("Failed to fetch")) {
        // Show network error toast with retry button
        const toastId = toast.error(
          <div>
            <p>Network error: Please check your internet connection.</p>
            <button
              onClick={() => {
                toast.dismiss(toastId); // Close the toast
                fetchData(inputs); // Retry the request
              }}
              className="px-4 py-1 rounded-md border-1 border-red-400 text-red-400 mt-3 text-sm shadow-md cursor-pointer"
            >
              Retry
            </button>
          </div>,
          { autoClose: false } // Keep the toast open until dismissed
        );
        setNetworkErrorToastId(toastId); // Store the toast ID for later dismissal
      } else if (error.response && error.response.status === 429) {
        toast.error("Rate limit exceeded: Please try again later.");
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(`API error: ${error.response.data.message}`);
      } else {
        toast.error("An error occurred while fetching data.");
      }
      setResponseText(null);
    } finally {
      setLoading(false);
    }
  };

  return { responseText, loading, fetchData };
};
