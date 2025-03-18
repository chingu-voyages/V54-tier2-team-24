import React from "react";
import { RotateCcw, ListRestart } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";

const ResetButtons = ({ field, isResetAll = false }) => {
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
    }
  };

  return (
    <button
      onClick={isResetAll ? handleResetAll : handleResetField}
      className="p-1 bg-blue-500 hover:bg-blue-400 text-white rounded-full cursor-pointer"
    >
      {isResetAll ? <ListRestart size={16} /> : <RotateCcw size={16} />}
    </button>
  );
};

export default ResetButtons;
