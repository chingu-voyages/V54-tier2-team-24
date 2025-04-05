import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const ResponseDisplay = ({ responseText })=>{

   
return (
    <section className="p-5 bg-gradient-to-b from-[#02010B] to-[#0D00A4] text-white rounded-lg leading-7">
        <h1 className="flex justify-center text-lg pb-5 font-inconsolata-bold">Response</h1>
    <ReactMarkdown className="font-inconsolata lg:text-base/9 md:text-[22px]/8 sm:text-base/7">{responseText}</ReactMarkdown>
    </section>
  );
};
    
export default ResponseDisplay;