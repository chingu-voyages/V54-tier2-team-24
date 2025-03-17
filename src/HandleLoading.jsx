import React, { useState, useEffect } from "react";
import GeminiAPI from "./GeminiAPI";
import "./HandleLoading.css";

const LoadingFeature = () => {
  const [loading, setLoading] = useState(false);
  const [fetchAPI, setFetchAPI] = useState();
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setFetchAPI(true);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Simulate loading for 2 seconds
  //   return () => clearTimeout(timer); // Clean up the timer on unmount
  // }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      ) : null}
      {fetchAPI !== true ? (
        <div className="AI-prompt-test">
          <textarea
            className="example-input"
            value={text} // Set the value to the state variable
            onChange={handleInputChange} // Update the state on each change
            rows="5" // Set rows for the textarea size
            cols="40" // Set columns for the textarea size
            required
          />
          <button
            className="loading-button"
            onClick={() => {
              handleClick();
            }}
            disabled={loading}
          >
            Ask Gemini AI
          </button>
        </div>
      ) : null}
      <div>
        {fetchAPI === true ? (
          <GeminiAPI loading={loading} setLoading={setLoading} text={text} />
        ) : null}
      </div>
    </div>
  );
};

export default LoadingFeature;
