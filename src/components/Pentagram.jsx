import React from "react";
import { PentagramProvider, usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import {useFetchAPi} from "./useFetchAPi.jsx";
import ResponseDisplay from './ResponseDisplay.jsx';
import "../HandleLoading.css";
import ExportSinglePrompt from "./ExportSinglePrompt.jsx";
import Rectangle from "./Rectangle.jsx";
import Triangle from "/public/triangle.svg";
import Lightbulb from "/public/lightbulb.svg";


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
      <h1 className="text-2xl font-bold mb-8 text-left font-karlasemibold text-[32px] lg:font-karlabold lg:text-[42px]
       md:text-center md:text-[40px]">
        PENTAGRAM
      </h1>

      <div className="flex sm:justify-center items-center lg:gap-6 lg:mb-8 justify-start sm:gap-2 sm:mb-2">
        {/* //number 0: persona, 1: context, 2 : task, 3 : output, 4 : constrain */}
        {[0, 1, 2, 3, 4].map((num) => (
          <button key={num} onClick={() => onChangeIndex(num)} className="p-1">
          <Rectangle key={num} isFilled={inputs[num]} isSelected={index===num}/>
          </button>
        ))}
      </div>
      <div className="w-full flex justify-between pb-2 font-inconsolataregular">
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

      <div className="flex justify-between items-center mb-8
      font-inconsolataexpanded text-[20px] lg:text-[35px] md:text-[29px]">
          {/*20pt=27px*/}
        <button
          onClick={onPrevious}
  /*        className={`px-6 py-2 rounded-md font-medium transition-colors ${
            index === 0
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-blue-300 text-blue-500"
          }`}
          disabled={index === 0}*/
        >
            <div className="flex gap-2 mt-2 items-center">
                <img src={Triangle} alt="Back Button" className="w-8 rotate-90"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                />
                <span>Back</span>
            </div>
        </button>

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
                 {/*<Lightbulb color="#A3CAF6" size={27} /> Generate Prompt*/}
              </div>)
              : (
              <div className="flex gap-2 mt-2 items-center">
                  <span>Submit</span>
                <img src={Triangle} alt="Submit Button" className="w-8 rotate-270"
                     style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(19%) saturate(1090%) " +
                             "hue-rotate(185deg) brightness(103%) contrast(96%) " +
                             "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3))"}}
                />
              </div>)}
        </button>
      </div>


      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {/*{responseText && <p className="text-green-500 mt-2">{responseText}</p>}*/}
      <ResponseDisplay responseText={responseText}/>

        <PromptHistory />
        <ExportSinglePrompt inputs={inputs} responseText={responseText} />


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
