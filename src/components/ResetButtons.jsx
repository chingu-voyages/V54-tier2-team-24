import React from "react";
import { RotateCcw } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";
import Eraser from "/src/assets/svg_assets/eraser.svg";

const ResetButtons = ({
  field,
  isResetAll = false,
  setPersonaPrompt,
  setContextPrompt,
  setTaskPrompt,
  setOutputPrompt,
  setConstraintPrompt,
}) => {
  const { pentaPrompts, resetField, resetAllFields } = usePentagram();

  const handleResetField = () => {
    const fieldIndex = pentaPrompts.findIndex(
      (prompt) => prompt.name === field
    );
    if (fieldIndex !== -1) {
      resetField(fieldIndex);
    }
  };

  const handleResetAll = () => {
    if (window.confirm("Are you sure you want to reset all fields?")) {
      resetAllFields();
      setPersonaPrompt("");
      setContextPrompt("");
      setTaskPrompt("");
      setOutputPrompt("");
      setConstraintPrompt("");
      localStorage.removeItem("personaPrompt");
      localStorage.removeItem("contextPrompt");
      localStorage.removeItem("taskPrompt");
      localStorage.removeItem("outputPrompt");
      localStorage.removeItem("constraintPrompt");
    }
  };

  return (
    <button
      onClick={isResetAll ? handleResetAll : handleResetField}
      className="p-1 rounded-full cursor-pointer"
    >
      {isResetAll ?
          (<div className="flex items-center gap-1 font-inconsolataexpanded text-[20px] lg:text-[26px] md:text-[22px]">
            <img src={Eraser} alt="Reset All Fields Button" className="w-8"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                />
            <span>Clear All</span>
          </div>) :
          (<div className="flex items-center gap-1 font-inconsolataexpanded text-[20px] lg:text-[26px] md:text-[22px]">
            <RotateCcw color="#A3CAF6" size={24} />Clear This</div>)}
    </button>
  );
};

export default ResetButtons;
