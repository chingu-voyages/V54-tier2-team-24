import React from "react";

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
      className="mt-2 p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full"
    >
      {isResetAll ? "Reset All" : "Reset Field"}
    </button>
  );
};

export default ResetButtons;
