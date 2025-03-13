import React, { createContext, useContext, useState } from "react";

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
    const context = useContext(PentagramContext);
    if (!context) {
        throw new Error("usePentagram must be used within a PentagramProvider");
    }
    return context;
};
