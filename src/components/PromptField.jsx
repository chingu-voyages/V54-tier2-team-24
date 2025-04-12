import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";
import { validateInput } from "../utils/validationUtils.js";

const PromptField = () => {
  const { index, inputs, updateInput, errors, updateError, pentaPrompts } = usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index] ?? ""); // Default to empty string
  const style = `border-3 border-icon bg-white rounded-lg w-full h-[30vh] m-0 p-0`

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
  }
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   updateInput(e.target.value);
  //   localStorage.setItem("inputValue", inputs);
  // };
  return (
    <div className="prompt-field flex flex-row items-start justify-start w-full
    font-inconsolataregular text-black
    lg:items-center lg:justify-center ">
      {/* Textarea */}
      <textarea
        className={`${style} ${
          errors[index] ? "border-red-300" : ""
        }`}
        placeholder={pentaPrompts[index].placeholder}
        value={inputValue}
        required={true}
        onChange={handleChange}
      />
      {/* Error Message */}
      {errors[index] && (
        <div
          className="my-2 bg-red-400 text-white text-base py-4 px-4 rounded-lg shadow-md"
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
