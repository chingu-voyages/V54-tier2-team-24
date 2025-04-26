import React, { useState, useEffect } from "react";
import { getHistoryItemById } from "../../utils/firebase/firebase";
import { useParams } from "react-router-dom";
import ResponseDisplay from "./ResponseDisplay.jsx";

export default function HistoryView() {
  const { userId, historyId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        setLoading(true);
        const result = await getHistoryItemById(userId, historyId);
        setItem(result);
      } catch (err) {
        console.error("Error fetching history item:", err);
        setError("Failed to load history item");
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, [userId, historyId]);

  if (loading) return(
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading your history</div>
        </div>
      )
  if (error) return <div className="w-full flex justify-center text-red-500">Error: {error}</div>;
  if (!item) return <div className="w-full flex justify-center text-red-500">Item not found</div>;

  const list = ["persona", "context", "task", "output", "constrain"];

  return (
    <div className="text-white flex flex-col items-center w-full max-w-4xl
    mx-auto font-Inconsolata-Regular mt-8 leading-7">
      <h2 className="font-Inconsolata-Bold">Your Prompt</h2>
      <table className="w-full rounded-lg bg-white/20 m-10 border-collapse">
        <tbody>
          {item.input.map((field, index) => (
            <tr key={index} >
              <td className="font-Inconsolata-Bold p-5 text-right align-top whitespace-nowrap">{list[index]}:</td>
              <td className="p-5 align-top w-full">{field}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="font-Inconsolata-Bold m-10">Gemini Response</h2>
      <ResponseDisplay responseText={item.response} inputs={item.input} toScroll={false} />
    </div>
  );
}