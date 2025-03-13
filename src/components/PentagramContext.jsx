import React, { createContext, useContext, useState } from "react";

// create useContext hook for switching input fields and recording user inputs
// the user input can ba accessed by {inputs} = usePentagram(),string[]
// the index can be access by { index} = usePentagram(),number

const PentagramContext = createContext();

export const PentagramProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [inputs, setInputs] = useState(["", "", "", "", ""]);

    const updateInput = (value) => {
        setInputs((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    return (
        <PentagramContext.Provider value={{ index, setIndex, inputs, updateInput}}>
            {children}
        </PentagramContext.Provider>
    );
};

export const usePentagram = () => {
    return useContext(PentagramContext);
};
