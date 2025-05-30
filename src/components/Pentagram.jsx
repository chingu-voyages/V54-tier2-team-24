import React from "react";
import { Circle } from "lucide-react";
import { usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import { useFetchAPi } from "./useFetchAPi.jsx";
import ResponseDisplay from "./ResponseDisplay.jsx";
import "../HandleLoading.css";
import { addUserHistory, useFirebaseAuth } from  "../../utils/firebase/firebase";
import Rectangle from "./Rectangle";

import { toast } from "react-toastify";

import { validateInput } from "../utils/validationUtils.js";

const PentagramContent = () => {
  const { index, setIndex, pentaPrompts, inputs } = usePentagram();
  const { responseText, setResponseText, loading, fetchData } = useFetchAPi();
  const { user } = useFirebaseAuth();
  const onChangeIndex = (num) => setIndex(num);
  const onPrevious = () => setIndex(index === 0 ? 0 : index - 1);
  const onNext = () => setIndex(index === 4 ? 4 : index + 1);

  const saveUserHistory = async (historyData) => {
    if (user) {
      try {
        await addUserHistory(user.uid, historyData);
        console.log("User prompt saved");
      } catch (error) {
        console.error("Error saving user history: ", error);
      }
    } else {
      console.log("User not logged in.");
    }
  };
  const handleSubmit = async () => {
    const hasEmptyFields = inputs.some((value) => value.trim() === "");
    const hasErrors = inputs.some((value) => validateInput(value) !== "");

    if (hasEmptyFields || hasErrors) {
      toast.warn("Please fill out all fields before submitting.");
      return;
    }

    try {
        const updatedResponseText = await fetchData(inputs);
        console.log(updatedResponseText);
        if (updatedResponseText) {
        const historyData = {
            input: inputs,
            response: updatedResponseText,}
        await saveUserHistory(historyData);
        console.log("User prompt saved");
        }
    } catch (e) { toast.warn("Error saving user history: ", e)}
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl lg:max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-4xl text-[#A3CAF6] font-karlabold font-bold text-center mb-2">
        AiQ
      </h1>
      <p className="text-white text-lg text-center font-inconsolataregular mb-8 max-sm:mb-12">
        AI Prompting. Simplified. Perfected.
      </p>

      <div className="flex justify-center items-center gap-6 mb-10 max-sm:gap-2">
        {/* //number 0: persona, 1: context, 2 : task, 3 : output, 4 : constrain */}
        {[0, 1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => onChangeIndex(num)} className="p-1">
              {     /* <Circle
              size={28}
              className={
                index === num
                  ? "fill-blue-400 stroke-1 stroke-blue-400"
                  : "stroke-1 stroke-gray-300"
              }
            />*/}<Rectangle key={num} isFilled={inputs[num]} isSelected={index===num}/>
          </button>
        ))}
      </div>

      <div className="w-full">
        {/* Pentagram Category and Tooltip */}
        <div className="flex justify-between items-center pb-2">
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
              {pentaPrompts[index].prompt}
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

      <div className="w-full mb-6">
        <PromptField />
      </div>

      <div className="flex justify-between items-center mb-8 w-full">
        <button
          onClick={onPrevious}
          className={`font-inconsolataregular px-4 py-1 transition-colors text-black text-base rounded ${
            index === 0
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-blue-300  hover:bg-blue-400 cursor-pointer"
          }`}
          disabled={index === 0}
        >
          Back
        </button>

        <button
          onClick={index === 4 ? handleSubmit : onNext}
          className="font-inconsolataregular px-4 py-1 bg-blue-300 text-black text-base rounded hover:bg-blue-400 transition cursor-pointer"
        >
          {index === 4 ? "Generate" : "Next"}
        </button>
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      )}

      {responseText && (
        <ResponseDisplay
          responseText={responseText}
          setResponseText={setResponseText}
          inputs={inputs}
          toScroll={true}
        />
      )}
    </div>
  );
};

export default PentagramContent;
