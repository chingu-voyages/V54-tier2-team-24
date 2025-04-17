import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import ExportSinglePrompt from "./ExportSinglePrompt";
import CopyButton from "./CopyButton";
import "../index.css";

const ResponseDisplay = ({ responseText, setResponseText, inputs }) => {
  const responseEndRef = useRef(null);

  useEffect(() => {
    if (responseEndRef.current) {
      responseEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [responseText]);

  const newPrompt = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <section
        ref={responseEndRef}
        className="response-display p-5 text-white rounded-lg leading-7 mt-20"
      >
        <h1 className="flex justify-center text-lg pb-5 font-Inconsolata-Bold mt-20">
          Response
        </h1>
        <ReactMarkdown
          className="font-Inconsolata-Regular lg:text-base/9 md:text-[22px]/8 sm:text-base/7"
          components={{
            strong: ({ children }) => (
              <span className="font-Inconsolata-Bold">{children}</span>
            ),
          }}
        >
          {responseText}
        </ReactMarkdown>
      </section>
      {!responseText ? null : (
        <div className="flex justify-between">
          <div className="flex justify-center items-center text-center">
            <CopyButton responseText={responseText} />
          </div>
          <div
            className="new-prompt-button"
            onClick={() => {
              newPrompt();
            }}
          >
            New Prompt
          </div>
          <div className="flex justify-center items-center text-center">
            <ExportSinglePrompt responseText={responseText} inputs={inputs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
