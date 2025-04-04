import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const ResponseDisplay = ({ responseText })=>{

   
return (
    <section className="p-5 text-white rounded-lg leading-7">
        <h1 className="flex justify-center text-lg pb-5 font-inconsolata-bold">Response</h1>
    <ReactMarkdown className="font-inconsolata lg:text-base/9 md:text-[22px]/8 sm:text-base/7" children={responseText} /> 
    </section>
  );
};
    
export default ResponseDisplay;