import React, { useState } from "react";
import { Circle } from "lucide-react";
import { PentagramProvider, usePentagram } from "./PentagramContext.jsx";
import PromptField from "./PromptField.jsx";
import Tooltips from "./tooltips/Tooltips.jsx";
import ResetButtons from "./ResetButtons.jsx";
import {useFetchAPi} from "./useFetchAPi.jsx";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ResponseDisplay from "./ResponseDisplay.jsx";
import "../HandleLoading.css";

import ExportSinglePrompt from "./ExportSinglePrompt.jsx";
import PromptHistory from "./PromptHistory.jsx";
import { toast } from "react-toastify";

const PentagramContent = ({ pentagramShowing, setPentagramShowing }) => {
  const { index, setIndex, pentaPrompts, inputs } = usePentagram();
  const { responseText, error, loading,fetchData } = useFetchAPi();
  // const [responseText, setResponseText] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [personaPrompt, setPersonaPrompt] = useState("");
  const [contextPrompt, setContextPrompt] = useState("");
  const [taskPrompt, setTaskPrompt] = useState("");
  const [outputPrompt, setOutputPrompt] = useState("");
  const [constraintPrompt, setConstraintPrompt] = useState("");

  const onChangeIndex = (num) => setIndex(num);
  const onPrevious = () => setIndex(index === 0 ? 0 : index - 1);
  const onNext = () => setIndex(index === 4 ? 4 : index + 1);

  const handleSubmit = async () => {
    if (
      personaPrompt === "" ||
      contextPrompt === "" ||
      taskPrompt === "" ||
      outputPrompt === "" ||
      constraintPrompt === ""
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const concatenatedText =
        personaPrompt +
        " " +
        contextPrompt +
        " " +
        taskPrompt +
        " " +
        outputPrompt +
        " " +
        constraintPrompt;
      console.log(concatenatedText);
      const result = await model.generateContent(concatenatedText);

      setResponseText(result.response.text || "No response text found");
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);

      if (error.message.includes("Failed to fetch")) {
        setResponseText(
          "Network error: Please check your internet connection."
        );
      } else if (error.response && error.response.status === 429) {
        setResponseText("Rate limit exceeded: Please try again later.");
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setResponseText(`API error: ${error.response.data.message}`);
      } else {
        setResponseText("An error occurred while fetching data.");
      }

      setError(error.message);
      setResponse(null);
    } finally {
      setLoading(false);
    }
    
    if (inputs.some((value) => value.trim() === "")) {
      toast.warn("Please fill out all fields before submitting.");
      return;
    }

    await fetchData(inputs)

  };

  return (
    <div className="flex flex-1 flex-col max-w-4xl mx-auto px-4 py-6">
      <button
        className="border border-black-500 p-2"
        onClick={() => {
          setPentagramShowing(false);
        }}
      >
        Back to Hero
      </button>
      <h1 className="text-2xl text-blue-400 font-bold text-center mb-8 max-sm:text-left">
        PENTAGRAM
      </h1>

      <div className="flex justify-center items-center gap-6 mb-8 max-sm:justify-start max-sm:gap-2 max-sm:mb-3">
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
          <ResetButtons
            isResetAll={true}
            setPersonaPrompt={setPersonaPrompt}
            setContextPrompt={setContextPrompt}
            setTaskPrompt={setTaskPrompt}
            setOutputPrompt={setOutputPrompt}
            setConstraintPrompt={setConstraintPrompt}
          />
        </div>
        {pentaPrompts[index] && <Tooltips pentaPrompts={pentaPrompts[index]} />}
      </div>

      <div className="w-full">
        <PromptField
          personaPrompt={personaPrompt}
          contextPrompt={contextPrompt}
          taskPrompt={taskPrompt}
          outputPrompt={outputPrompt}
          constraintPrompt={constraintPrompt}
          setPersonaPrompt={setPersonaPrompt}
          setContextPrompt={setContextPrompt}
          setTaskPrompt={setTaskPrompt}
          setOutputPrompt={setOutputPrompt}
          setConstraintPrompt={setConstraintPrompt}
        />
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

const Pentagram = ({ pentagramShowing, setPentagramShowing }) => {
  return (
    <PentagramProvider>
      <PentagramContent
        pentagramShowing={pentagramShowing}
        setPentagramShowing={setPentagramShowing}
      />
    </PentagramProvider>
  );
};

export default Pentagram;
