import React from "react";
import { Circle } from "lucide-react";
import { PentagramProvider, usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import {useFetchAPi} from "./useFetchAPi.jsx";
import "../HandleLoading.css";
import ExportSinglePrompt from "./ExportSinglePrompt.jsx";


const PentagramContent = () => {
  const { index, setIndex, pentaPrompts, inputs } = usePentagram();
  const { responseText, error, loading,fetchData } = useFetchAPi();

  const onChangeIndex = (num) => setIndex(num);
  const onPrevious = () => setIndex(index === 0 ? 0 : index - 1);
  const onNext = () => setIndex(index === 4 ? 4 : index + 1);

  const handleSubmit = async () => {
    if (inputs.some((value) => value.trim() === "")) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    await fetchData(inputs)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl text-blue-400 font-bold text-center mb-8 max-sm:text-left">
        PENTAGRAM
      </h1>

      <div className="flex justify-center items-center gap-6 mb-8 max-sm:justify-start max-sm:gap-2 max-sm:mb-3 ">
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

      <div className="w-full flex justify-between pb-2">
        <div className="flex gap-4">
          {pentaPrompts[index] && (
            <ResetButtons field={pentaPrompts[index].name} />
          )}
          <ResetButtons isResetAll={true} />
        </div>
        {pentaPrompts[index] && <Tooltips pentaPrompts={pentaPrompts[index]} />}
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
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {responseText && <p className="text-green-500 mt-2">{responseText}</p>}

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
