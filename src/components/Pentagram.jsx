import React from "react";
import { Circle } from "lucide-react";
import { PentagramProvider, usePentagram } from "./PentagramContext";
import PromptField from "./PromptField";

const Pentagram = () => {
    return (
        <PentagramProvider>
            <PentagramContent />
        </PentagramProvider>
    );
};

// Extract main content to a separate component so `usePentagram` can work
const PentagramContent = () => {
    const { index, setIndex } = usePentagram();

    const onChangeIndex = (num) => setIndex(num);
    const onPrevious = () => setIndex(index === 0 ? 0 : index - 1);
    const onNext = () => setIndex(index === 4 ? 4 : index + 1);

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h1 className="text-2xl text-blue-400 font-bold text-center mb-8 max-sm:text-left">PENTAGRAM</h1>

            <div className="flex justify-center items-center gap-6 mb-8 max-sm:justify-start max-sm:gap-2 max-sm:mb-3 ">
                {[0, 1, 2, 3, 4].map((num) => (
                    <button key={num} onClick={() => onChangeIndex(num)} className="p-1">
                        <Circle
                            size={28}
                            className={index === num ? "fill-blue-400 stroke-1 stroke-blue-400" : "stroke-1 stroke-gray-300"}
                        />
                    </button>
                ))}
            </div>

            <div className="w-full">
                <PromptField />
            </div>

            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={onPrevious}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        index === 0 ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-blue-300 text-blue-500"
                    }`}
                    disabled={index === 0}
                >
                    Back
                </button>

                <button onClick={onNext} className="px-6 py-2 rounded-md bg-blue-300 text-blue-500 mt-3">
                    {index === 4 ? "Submit" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default Pentagram;
