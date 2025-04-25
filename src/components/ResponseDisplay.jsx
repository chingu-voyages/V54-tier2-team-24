import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import ExportSinglePrompt from "./ExportSinglePrompt";
import CopyButton from "./CopyButton";
import "../index.css";

const ResponseDisplay = ({ responseText, inputs }) => {
  const responseEndRef = useRef(null);

  useEffect(() => {
    if (responseEndRef.current) {
      const headerHeight = window.innerHeight * 0.09; // 7vh - The height of the header + the top margin
      const elementPosition =
        responseEndRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [responseText]);

  const newPrompt = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="w-full">
      <section
        ref={responseEndRef}
        className="p-5 text-white rounded-lg leading-7 bg-white/20" // Translucent background and matching width
      >
        {/* <h1 className="flex justify-center text-lg pb-5 font-Inconsolata-Bold mt-20">
          Response
        </h1> */}
        <div className="font-Inconsolata-Regular lg:text-base/9 md:text-base/8 sm:text-base/7 space-y-4">
          <ReactMarkdown
            components={{
              strong: ({ children }) => (
                <span className="font-Inconsolata-Bold">{children}</span>
              ),
              p: ({ children }) => <p className="mb-4">{children}</p>,
            }}
          >
            {responseText}
          </ReactMarkdown>
        </div>
      </section>
      {!responseText ? null : (
        <div className="flex justify-between">
          <div className="flex justify-center items-center text-center">
            <CopyButton responseText={responseText} />
          </div>

          <div
            className="font-inconsolataregular px-4 py-1 bg-blue-300 text-black text-base rounded hover:bg-blue-400 transition cursor-pointer"
            onClick={() => {
              newPrompt();
            }}
          >
            + New Prompt
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
