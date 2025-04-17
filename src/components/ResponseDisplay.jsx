import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import ExportSinglePrompt from "./ExportSinglePrompt";
import CopyButton from "./CopyButton";
import "../index.css";

const ResponseDisplay = ({ responseText }) => {
  const responseEndRef = useRef(null);

  useEffect(() => {
    if (responseEndRef.current) {
      responseEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [responseText]);

  return (
    <div>
      <section
        ref={responseEndRef}
        className="response-display p-5 text-white rounded-lg leading-7 mt-20"
      >
        <ReactMarkdown
          className=" lg:text-base/9 md:text-[22px]/8 sm:text-base/7 mt-20 mb-4"
          components={{
            strong: ({ children }) => (
              <span className="font-Inconsolata-Bold text-2xl text-center">
                {children}
              </span>
            ),
          }}
        >
          {responseText}
        </ReactMarkdown>
      </section>
      {!responseText ? null : (
        <div className="flex justify-between mb-20 mt-5">
          <div className="flex justify-center items-center text-center">
            <CopyButton responseText={responseText} />
            <p className="ml-2 text-white">Copy</p>
          </div>
          <div className="flex justify-center items-center text-center">
            {/* <ExportSinglePrompt />
            <p className="ml-2 text-white">Export</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
