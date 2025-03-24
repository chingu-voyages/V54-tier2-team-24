import React from 'react';

const PromptHistory = ({ prompts }) => {

  // const dataToSave = prompts || {
  //   prompt1: 'Mock Prompt 1',
  //   prompt2: 'Mock Prompt 2',
  //   prompt2: 'Mock Prompt 3', 
  // };

  const savePrompts = () => {
    const promptArray = Object.values(dataToSave);

    if (promptArray.some((prompt) => prompt.trim() === '')) {
      console.log('Some prompts are empty, not saving');
      return;
    }

    const savedPrompts = JSON.parse(localStorage.getItem('promptHistory')) || [];
    savedPrompts.push(promptArray);
    localStorage.setItem('promptHistory', JSON.stringify(savedPrompts));

    console.log('Prompts saved:', promptArray);
  };
    
  return (
    <button onClick={savePrompts}>Save Prompts</button>
  );
};

export default PromptHistory;