import React from "react";
import { RotateCcw, ListRestart } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

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
                toast.success("All fields have been reset.", {
                  icon: <FaCheckCircle className="text-blue-400 text-xl" />,
                });
                closeToast();
              }}
              className="px-4 py-1 rounded-md border-1 border-blue-400 text-blue-400 mt-3 text-sm shadow-md cursor-pointer"
            >
              OK
            </button>
            <button
              onClick={closeToast}
              className="px-4 py-1 rounded-md border-1 border-red-400 text-red-400 mt-3 text-sm shadow-md cursor-pointer"
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
      className="p-1 bg-[#A3CAF6] hover:bg-[#A3CAF6]/70 text-black rounded-full cursor-pointer"
    >
      {isResetAll ? <ListRestart size={16} /> : <RotateCcw size={16} />}
    </button>
  );
};

export default ResetButtons;
