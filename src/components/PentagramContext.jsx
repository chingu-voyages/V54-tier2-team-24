import React, { createContext, useContext, useState, useEffect } from "react";

// create useContext hook for switching input fields and recording user inputs
// the user input can ba accessed by {inputs} = usePentagram(),string[]
// the index can be access by {index} = usePentagram(),number

const PentagramContext = createContext();

export const PentagramProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState(() => {
    // Load inputs from localStorage on initialization
    const savedInputs = JSON.parse(localStorage.getItem("inputs"));
    return savedInputs || ["", "", "", "", ""];
  });
  const [errors, setErrors] = useState(["", "", "", "", ""]); // Track errors for all fields

  useEffect(() => {
    // Save inputs to localStorage whenever they change
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  const updateInput = (value) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[index] = value || "";
      return updated;
    });
  };

  const updateError = (fieldIndex, error) => {
    setErrors((prev) => {
      const updated = [...prev];
      updated[fieldIndex] = error;
      return updated;
    });
  };

  const resetField = (fieldIndex) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[fieldIndex] = "";
      return updated;
    });
    updateError(fieldIndex, ""); // Clear error for the field
  };

  const resetAllFields = () => {
    setInputs(["", "", "", "", ""]);
    setErrors(["", "", "", "", ""]); // Clear all errors
    localStorage.removeItem("inputs"); // Clear localStorage
  };

  const pentaPrompts = [
    {
      name: "persona",
      tooltip: "Can you tell me a little bit about yourself?",
      placeholder:
        "Ex: “You are a busy parent who wants quick and healthy meal ideas.”",
    },
    {
      name: "context",
      tooltip: "What type of background information can you provide?",
      placeholder:
        "Ex: “You are someone planning a low-budget trip for the first time.”",
    },
    {
      name: "task",
      tooltip: "What would you like me to do?",
      placeholder:
        "Ex: “Help with a list of fun activities to do on weekends.”",
    },
    {
      name: "output",
      tooltip: "Is there a tone or format in how you would like me to respond?",
      placeholder:
        "Ex: “Use a friendly tone, keep it under 200 words, include practical tips, and avoid complex language.”",
    },
    {
      name: "constraints",
      tooltip: "What boundaries or limits would you like me to honor?",
      placeholder:
        "Ex: “Give the answer as a simple checklist with short descriptions.”",
    },
  ];

  return (
    <PentagramContext.Provider
      value={{
        index,
        setIndex,
        inputs,
        updateInput,
        errors,
        updateError,
        pentaPrompts,
        resetField,
        resetAllFields,
      }}
    >
      {children}
    </PentagramContext.Provider>
  );
};

export const usePentagram = () => {
  return useContext(PentagramContext);
};
