import React, { createContext, useContext, useState } from "react";

// create useContext hook for switching input fields and recording user inputs
// the user input can ba accessed by {inputs} = usePentagram(),string[]
// the index can be access by { index} = usePentagram(),number

const PentagramContext = createContext();

export const PentagramProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [inputs, setInputs] = useState(["", "", "", "", ""]);

  const updateInput = (value) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const resetField = (fieldIndex) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[fieldIndex] = "";
      return updated;
    });
  };

  const resetAllFields = () => {
    setInputs(["", "", "", "", ""]);
  };

  const pentaPrompts = [
    {
      name: "persona",
      tooltip:
        "Defines who the prompt will be for. Is there a specific audience?",
      placeholder: "",
    },
    {
      name: "context",
      tooltip:
        "The situation in which the prompt is for. Do you have any background information to generate the relevant response? ",
      placeholder: "",
    },
    {
      name: "task",
      tooltip:
        "Specifies what you want from the AI. Do you want it to construct a document?",
      placeholder: "",
    },
    {
      name: "output",
      tooltip:
        "Defines the format, tone, or style of the response. Do you want me to contruct my response in a certain format or in a certain language?",
      placeholder: "",
    },
    {
      name: "constraint",
      tooltip:
        "Defines boundries and limitations. Do you want me to avoid any language or geography? ",
      placeholder: "",
    },
  ];

  return (
    <PentagramContext.Provider
      value={{
        index,
        setIndex,
        inputs,
        updateInput,
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
