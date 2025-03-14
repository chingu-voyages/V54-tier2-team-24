import React, { useState } from "react";

const SubmitButton = ({ fields }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (fields.some((value) => value.trim() === "")) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    try {
      const res = await fetch("https://api.gemini.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs: fields }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch response from Gemini API");
      }

      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponse(null);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Submit
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {response && (
        <p className="text-green-500 mt-2">Submission Successful!</p>
      )}
    </div>
  );
};

export default SubmitButton;
