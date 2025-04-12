import React from "react";
import { PentagramProvider, usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import {useFetchAPi} from "./useFetchAPi.jsx";
import ResponseDisplay from "./ResponseDisplay.jsx";
import "../HandleLoading.css";
import PromptHistory from "./PromptHistory.jsx";
import { toast } from "react-toastify";
import Rectangle from "./Rectangle.jsx";
import Triangle from "/src/assets/svg_assets/triangle-svgrepo-com.svg";
import Lightbulb from "/src/assets/svg_assets/lightbulb.svg";
import { validateInput } from "../utils/validationUtils.js";


const PentagramContent = () => {
  const { index, setIndex, pentaPrompts, inputs } = usePentagram();
  const { responseText, loading,fetchData } = useFetchAPi();

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
    <div className="mx-auto px-4 py-6
    bg-gradient-to-b from-[#02010B] to-[#0D00A4] text-white
    w-screen justify-items-center">
      <h1 className="mb-8 text-left font-karlasemibold
      text-[32px]
      lg:font-karlabold lg:text-[42px]
      md:text-center md:text-[40px]">
        PENTAGRAM
      </h1>

      <div className="flex items-center justify-start w-7/8
       lg:gap-6 lg:mb-8
       sm:gap-2 sm:mb-2 sm:justify-center ">
        {/* //number 0: persona, 1: context, 2 : task, 3 : output, 4 : constrain */}
        {[0, 1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => onChangeIndex(num)} className="p-1">
            <Rectangle key={num} isFilled={inputs[num]} isSelected={index===num}/>
          </button>
        ))}
      </div>
      <div className="flex justify-between pb-2 align-bottom
      font-inconsolataregular
      w-7/8 md:w-1/2">
        <div className="flex gap-2">
          {pentaPrompts[index] && (
            <ResetButtons field={pentaPrompts[index].name} />
          )}
          <ResetButtons isResetAll={true} />
        </div>
        {pentaPrompts[index] && <Tooltips pentaPrompts={pentaPrompts[index]} />}
      </div>

      <div className="md:w-1/2 w-7/8 ">
          <PromptField/></div>

      <div className="flex justify-between items-center mb-8 w-7/8 md:w-1/2
      font-inconsolataexpanded text-[20px] lg:text-[26px] md:text-[22px]">
          <button onClick={onPrevious}>
          <div className="flex gap-2 mt-2 items-center">
                <img src={Triangle} alt="Back Button" className="w-8 rotate-90"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                />
                <span>Back</span>
          </div>
         </button>

        <PromptHistory />

            <button onClick={index === 4 ? handleSubmit : onNext}>
                {index === 4
              ? (
              <div className="flex gap-2 mt-2 items-center">
                  <img src={Lightbulb} alt="Submit Button" className="w-6"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                    />
                  <span>Generate Prompt</span>
              </div>)
              : (
              <div className="flex gap-2 mt-2 items-center">
                  <span>Next</span>
                <img src={Triangle} alt="Submit Button" className="w-8 rotate-270"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                />
              </div>)}</button>
      </div>


      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      )}
      <ResponseDisplay responseText={responseText}/>
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
