import ReactMarkdown from "react-markdown";
import '../index.css'

const ResponseDisplay = ({ responseText })=>{

   
return (
    <section className="p-5 text-white rounded-lg leading-7">
        <h1 className="flex justify-center text-lg pb-5 font-Inconsolata-Bold">Response</h1>
    <ReactMarkdown className="font-Inconsolata-Regular lg:text-base/9 md:text-[22px]/8 sm:text-base/7">{responseText}</ReactMarkdown>
    </section>
  );
};
    
export default ResponseDisplay;