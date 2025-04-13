import React from "react";
import { Circle } from "lucide-react";
import { PentagramProvider, usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import { useFetchAPi } from "./useFetchAPi.jsx";
import ResponseDisplay from "./ResponseDisplay.jsx";
import "../HandleLoading.css";
import ExportSinglePrompt from "./ExportSinglePrompt.jsx";
import PromptHistory from "./PromptHistory.jsx";
import { toast } from "react-toastify";
import { validateInput } from "../utils/validationUtils.js";

const PentagramContent = () => {
  const { index, setIndex, pentaPrompts, inputs, resetField, resetAllFields } =
    usePentagram();
  const { responseText, loading, fetchData } = useFetchAPi();

  const onChangeIndex = (num) => setIndex(num);
  const onPrevious = () => setIndex(index === 0 ? 0 : index - 1);
  const onNext = () => setIndex(index === 4 ? 4 : index + 1);

  const handleSubmit = async () => {
    const hasEmptyFields = inputs.some((value) => value.trim() === "");
    const hasErrors = inputs.some((value) => validateInput(value) !== "");

    if (hasEmptyFields || hasErrors) {
      toast.warn("Please fill out all fields before submitting.");
      return;
    }

    await fetchData(inputs);
  };

  return (
    <div className="flex flex-1 flex-col max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-4xl text-blue-400 font-karlabold font-bold text-center mb-2">
        AiQ
      </h1>
      <p className="text-white text-lg text-center font-inconsolataregular mb-8 max-sm:mb-12">
        AI Prompting. Simplified. Perfected.
      </p>

      <div className="flex justify-center items-center gap-6 mb-8 max-sm:gap-2">
        {/* //number 0: persona, 1: context, 2 : task, 3 : output, 4 : constrain */}
        {[0, 1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => onChangeIndex(num)} className="p-1">
            <Circle
              size={28}
              className={
                index === num
                  ? "fill-blue-400 stroke-1 stroke-blue-400"
                  : "stroke-1 stroke-gray-300"
              }
            />
          </button>
        ))}
      </div>

      <div className="w-full">
        {/* Pentagram Category and Tooltip */}
        <div className="flex justify-between items-center pb-1">
          {pentaPrompts[index] && (
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-xl capitalize">
                {pentaPrompts[index].name}
              </span>
              <Tooltips pentaPrompts={pentaPrompts[index]} />
            </div>
          )}
        </div>

        {/* Tooltip Message and Reset Buttons */}
        <div className="flex justify-between items-center pb-5 font-karlabold gap-4">
          {pentaPrompts[index] && (
            <div className="text-white/70 text-base leading-5 font-inconsolataregular">
              {pentaPrompts[index].tooltip}
            </div>
          )}
          <div className="flex gap-4">
            {pentaPrompts[index] && (
              <ResetButtons field={pentaPrompts[index].name} />
            )}
            <ResetButtons isResetAll={true} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <PromptField />
      </div>

      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onPrevious}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            index === 0
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-blue-300 text-blue-500"
          }`}
          disabled={index === 0}
        >
          Back
        </button>

        <PromptHistory />

        <button
          onClick={index === 4 ? handleSubmit : onNext}
          className="px-6 py-2 rounded-md bg-blue-300 text-blue-500 mt-3"
        >
          {index === 4 ? "Submit" : "Next"}
        </button>
      </div>
      <ExportSinglePrompt inputs={inputs} responseText={responseText} />

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      )}
      {responseText && <ResponseDisplay responseText={responseText} />}
    </div>
  );
};

const Pentagram = () => {
  return (
    <PentagramProvider>
      <PentagramContent />
    </PentagramProvider>
  );
};

export default Pentagram;
