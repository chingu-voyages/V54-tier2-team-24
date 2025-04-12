import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";
import { validateInput } from "../utils/validationUtils.js";

const PromptField = () => {
  const { index, inputs, updateInput, errors, updateError, pentaPrompts } =
    usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index] ?? ""); // Default to empty string
const style = `border-3 border-icon bg-white rounded-lg w-full h-[30vh] m-0 p-0`
const PromptField = ({
  personaPrompt,
  setPersonaPrompt,
  setContextPrompt,
  setTaskPrompt,
  setOutputPrompt,
  setConstraintPrompt,
  contextPrompt,
  taskPrompt,
  outputPrompt,
  constraintPrompt,
}) => {
  const { index, inputs, updateInput, pentaPrompts } = usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index]);

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
  }, []);

  useEffect(() => {
    const savedTaskPrompt = localStorage.getItem("taskPrompt");
    if (savedTaskPrompt) {
      setTaskPrompt(savedTaskPrompt);
    }
  }, []);

  useEffect(() => {
    const savedOutputPrompt = localStorage.getItem("outputPrompt");
    if (savedOutputPrompt) {
      setOutputPrompt(savedOutputPrompt);
    }
  }, []);

  useEffect(() => {
    const savedConstraintPrompt = localStorage.getItem("constraintPrompt");
    if (savedConstraintPrompt) {
      setConstraintPrompt(savedConstraintPrompt);
    }
  }, []);

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   updateInput(e.target.value);
  //   localStorage.setItem("inputValue", inputs);
  // };

  const handlePersonaChange = (e) => {
    setPersonaPrompt(e.target.value);
    localStorage.setItem("personaPrompt", e.target.value);
  };
  const handleContextChange = (e) => {
    setContextPrompt(e.target.value);
    localStorage.setItem("contextPrompt", e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskPrompt(e.target.value);
    localStorage.setItem("taskPrompt", e.target.value);
  };
  const handleOutputChange = (e) => {
    setOutputPrompt(e.target.value);
    localStorage.setItem("outputPrompt", e.target.value);
  };
  const handleConstraintChange = (e) => {
    setConstraintPrompt(e.target.value);
    localStorage.setItem("constraintPrompt", e.target.value);
  };

  return (
    <div className="prompt-field w-full">
      {/* Textarea */}
      <textarea
        className={`border-3 bg-white h-80 border-blue-300 rounded-lg text-blue-350 w-full p-4 ${
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
    <div className="prompt-field flex flex-row items-start justify-start w-full
    font-inconsolataregular text-black
    lg:items-center lg:justify-center ">
      {pentaPrompts[index].name === "persona" ? (
        <textarea
          className={style}
          placeholder={pentaPrompts[index].placeholder}
          value={personaPrompt}
          required={true}
          onChange={handlePersonaChange}
        />
      ) : null}
      {pentaPrompts[index].name === "context" ? (
        <textarea
          className={style}
          placeholder={pentaPrompts[index].placeholder}
          value={contextPrompt}
          required={true}
          onChange={handleContextChange}
        />
      ) : null}
      {pentaPrompts[index].name === "task" ? (
        <textarea
          className={style}
          placeholder={pentaPrompts[index].placeholder}
          value={taskPrompt}
          required={true}
          onChange={handleTaskChange}
        />
      ) : null}
      {pentaPrompts[index].name === "output" ? (
        <textarea
          className={style}
          placeholder={pentaPrompts[index].placeholder}
          value={outputPrompt}
          required={true}
          onChange={handleOutputChange}
        />
      ) : null}
      {pentaPrompts[index].name === "constraint" ? (
        <textarea
          className={style}
          placeholder={pentaPrompts[index].placeholder}
          value={constraintPrompt}
          required={true}
          onChange={handleConstraintChange}
        />
      ) : null}
    </div>
  );
};

export default PromptField;
