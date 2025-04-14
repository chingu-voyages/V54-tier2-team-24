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
    <div ref={responseEndRef}>
      <section className="p-5 text-white rounded-lg leading-7 mt-20">
        <h1 className="flex justify-center text-lg pb-5 font-Inconsolata-Bold">
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
            <p className="ml-2 text-white">Copy</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <ExportSinglePrompt />
            <p className="ml-2 text-white">Export</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
