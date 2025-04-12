import React from "react";
import { RotateCcw, ListRestart } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";
import { toast } from "react-toastify";
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
              className="px-4 py-1 rounded-md bg-green-500 text-black mt-3 text-sm shadow-md cursor-pointer"
            >
              OK
            </button>
            <button
              onClick={closeToast}
              className="px-4 py-1 rounded-md bg-red-500 text-black mt-3 text-sm shadow-md cursor-pointer"
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
