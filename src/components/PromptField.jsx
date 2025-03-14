import React, { useEffect, useState } from "react";
import {usePentagram} from "./PentagramContext.jsx";
    const examplePrompt =[//order: persona, context, task, output, constrain
        "You are a Product Owner, Scrum Master, UI/UX Designer, Web Developer, or" +
        "Data Scientist who is at the beginning of your career and is looking to apply" +
        "what you've learned to build practical experience to help you get noticed in" +
        "the job market.",
        "The information provided should assume that I am a Frontend Web Developer" +
        "who understands the technical aspects of what is needed to build websites." +
        "But, I have not worked in team projects with individuals in different roles.",
        "Provide a list of websites for organizations that provide programs and" +
        "services which will help me transform what I've learned into experience that" +
        "other job applicants will not have.",
        "The tone should be informal and the list of websites should include a link" +
        "to the site, it's name, and cost information.",
        "Avoid generating lots of text only a summary of the websites are needed. Also," +
        "responses should be tailored to readers with a high school level of education." +
        "Avoid overly technical responses."
    ]

const PromptField = () => {
        const { index,inputs,updateInput } = usePentagram();
        const [inputValue, setInputValue] = useState(inputs[index]);
        useEffect(() => {
            setInputValue(inputs[index] || "");
    }, [index, inputs]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        updateInput(e.target.value);
    };
        return (
            <div className="prompt-field flex flex-row items-center justify-center  max-sm:justify-start max-sm:w-full">
                <textarea
                    className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
                    placeholder={examplePrompt[index]}
                    value={inputValue}
                    required={true}
                    onChange={handleChange}
                />
            </div>
        )
}
export default PromptField;