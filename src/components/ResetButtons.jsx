import React from "react";
import { RotateCcw, ListRestart } from "lucide-react";

const ResetButtons = ({ field, fields, setFields, isResetAll = false }) => {
  const handleResetField = () => {
    setFields({ ...fields, [field]: "" });
  };

  const handleResetAll = () => {
    if (window.confirm("Are you sure you want to reset all fields?")) {
      setFields(
        Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
      );
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
