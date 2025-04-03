import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";
import { validateInput } from "../utils/validationUtils.js";

const PromptField = () => {
  const { index, inputs, updateInput, pentaPrompts } = usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index]);
  const [error, setError] = useState("");

  useEffect(() => {
    setInputValue(inputs[index] || "");
    setError(""); // Clear error when switching fields
  }, [index, inputs]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const validationError = validateInput(value);
    setError(validationError);
    if (!validationError) {
      updateInput(value); // Update context only if input is valid
    }
  };

  return (
    <div className="prompt-field w-full">
      {/* Textarea */}
      <textarea
        className={`border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full p-4 ${
          error ? "border-red-300" : ""
        }`}
        placeholder={pentaPrompts[index].placeholder}
        value={inputValue}
        required={true}
        onChange={handleChange}
      />
      {/* Error Message */}
      {error && (
        <div className="my-2 bg-red-400 text-white text-base py-4 px-4 rounded-lg shadow-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default PromptField;
