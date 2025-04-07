import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";

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
    setInputValue(inputs[index] || "");
  }, [index, inputs]);

  useEffect(() => {
    const savedPersonaPrompt = localStorage.getItem("personaPrompt");
    if (savedPersonaPrompt) {
      setPersonaPrompt(savedPersonaPrompt);
    }
  }, []);

  useEffect(() => {
    const savedContextPrompt = localStorage.getItem("contextPrompt");
    if (savedContextPrompt) {
      setContextPrompt(savedContextPrompt);
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
    <div className="prompt-field flex flex-row items-center justify-center  max-sm:justify-start max-sm:w-full rounded-md bg-white">
      {pentaPrompts[index].name === "persona" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={personaPrompt}
          required={true}
          onChange={handlePersonaChange}
        />
      ) : null}
      {pentaPrompts[index].name === "context" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={contextPrompt}
          required={true}
          onChange={handleContextChange}
        />
      ) : null}
      {pentaPrompts[index].name === "task" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={taskPrompt}
          required={true}
          onChange={handleTaskChange}
        />
      ) : null}
      {pentaPrompts[index].name === "output" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={outputPrompt}
          required={true}
          onChange={handleOutputChange}
        />
      ) : null}
      {pentaPrompts[index].name === "constraint" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
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
