import ReactMarkdown from 'react-markdown';

const ResponseDisplay = ({ responseText })=>{

   
return (
    <section className="p-5 text-white rounded-lg leading-7">
        <h1 className="flex justify-center text-lg pb-5 font-bold">Response</h1>
    <ReactMarkdown children={responseText} /> 
    </section>
  );
};
    
export default ResponseDisplay;