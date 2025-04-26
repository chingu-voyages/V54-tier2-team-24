import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

export const useFetchAPi = () => {
  const [responseText, setResponseText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [networkErrorToastId, setNetworkErrorToastId] = useState(null); // Track the network error toast ID
  const [retrying, setRetrying] = useState(false); // Track if the user is retrying after a network error

  const fetchData = async (inputs, isRetry = false) => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const concatenatedText = inputs.join(" ");
      const result = await model.generateContent(concatenatedText);
      const resultText=result.response.text() || "No response text found"
      setResponseText(resultText);

      // Dismiss the network error toast if it exists
      if (networkErrorToastId) {
        toast.dismiss(networkErrorToastId);
        setNetworkErrorToastId(null); // Reset the toast ID
      }

      // Show success toast only if this was a retry
      if (isRetry) {
        toast.success("Successfully reconnected and fetched data!", {
          icon: <FaCheckCircle className="text-blue-400 text-xl" />,
        });
        setRetrying(false); // Reset retrying state
      }

      return resultText;
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error for debugging

      if (error.message.includes("Failed to fetch")) {
        // Show network error toast with retry button
        if (!networkErrorToastId) {
          const toastId = toast.error(
            <div>
              <p>Network error: Please check your internet connection.</p>
              <button
                onClick={() => {
                  toast.dismiss(toastId); // Close the toast
                  setRetrying(true); // Set retrying state
                  fetchData(inputs, true); // Retry the request
                }}
                className="px-4 py-1 rounded-md border-1 border-red-400 text-red-400 mt-3 text-sm shadow-md cursor-pointer"
              >
                Retry
              </button>
            </div>,
            { autoClose: false } // Keep the toast open until dismissed
          );
          setNetworkErrorToastId(toastId); // Store the toast ID for later dismissal
        }
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
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { responseText, setResponseText, loading, fetchData };
};
