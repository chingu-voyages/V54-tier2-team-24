import React from "react";
import { RotateCcw, ListRestart } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";
import { toast } from "react-toastify";

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
    toast(
      ({ closeToast }) => (
        <div>
          <p className="mt-1">Are you sure you want to reset all fields?</p>
          <div className="flex justify-start gap-2">
            <button
              onClick={() => {
                resetAllFields();
                toast.success("All fields have been reset.");
                closeToast();
              }}
              className="px-4 py-1 rounded-md border-1 border-white-400 text-white-500 mt-3 text-sm shadow-md cursor-pointer"
            >
              OK
            </button>
            <button
              onClick={closeToast}
              className="px-4 py-1 rounded-md border-1 border-white-400 text-white-500 mt-3 text-sm shadow-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: 5000,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
      }
    );
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
