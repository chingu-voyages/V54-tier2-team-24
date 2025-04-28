import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";
import { validateInput } from "../utils/validationUtils.js";

const PromptField = () => {
  const { index, inputs, updateInput, errors, updateError, pentaPrompts } =
    usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index] ?? ""); // Default to empty string
  const style = `border-3 border-icon bg-white/20 rounded-lg w-full h-[30vh] py-2 px-4`;

  useEffect(() => {
    setInputValue(inputs[index] ?? ""); // Sync with context when index or inputs change
  }, [index, inputs]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const validationError = validateInput(value);
    updateError(index, validationError); // Update error in context
    updateInput(value || ""); // Ensure empty values are explicitly set to ""
    if (!validationError) {
      localStorage.setItem(pentaPrompts[index].name + "Prompt", value); // Update local storage
    }
  };

  return (
    <div
      className="prompt-field flex flex-col items-start justify-start w-full font-Inconsolata-Regular lg:text-base/9 md:text-base/8 sm:text-base/7 text-white
    lg:items-center lg:justify-center"
    >
      {/* Textarea */}
      <textarea
        className={`${style} ${errors[index] ? "border-red-300" : ""}`}
        placeholder={pentaPrompts[index].placeholder}
        value={inputValue}
        required={true}
        onChange={handleChange}
      />
      {/* Error Message */}
      {errors[index] && (
        <div
          className="my-2 bg-red-400 text-white text-base py-4 px-4 rounded-lg shadow-md w-full flex justify-center"
          role="alert"
          aria-live="assertive"
        >
          {errors[index]}
        </div>
      )}
    </div>
  );
};

export default PromptField;
