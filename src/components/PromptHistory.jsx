import React, {useEffect} from 'react';
import { usePentagram } from './PentagramContext';

const PromptHistory = () => {
  const { inputs, setInputs } = usePentagram();

  useEffect(() => {
    const savedPrompts = localStorage.getItem('pentagramPrompts');
    if (savedPrompts) {
      setInputs(JSON.parse(savedPrompts));
    }
  }, [setInputs]);
  
  const handleSave = () => {
    localStorage.setItem('pentagramPrompts', JSON.stringify(inputs));
  };

  return (
    <button 
      className="px-6 py-2 rounded-md bg-blue-300 text-blue-500 mt-3"
      onClick={handleSave}>Save Prompt
    </button>
  );
};

export default PromptHistory;
