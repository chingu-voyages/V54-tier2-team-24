import React, { useEffect, useState } from "react";
import { usePentagram } from "./PentagramContext.jsx";
import { firestore, auth } from "../../utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useFirestore } from "../contexts/FirestoreContext.jsx";

const PromptField = ({
  personaPrompt,
  setPersonaPrompt,
  setContextPrompt,
  setTaskPrompt,
  setOutputPrompt,
  setConstraintPrompt,
  contextPrompt,
  taskPrompt,
  outputPrompt,
  constraintPrompt,
}) => {
  const [user] = useAuthState(auth); // Check if user is logged in
  const { index, inputs, updateInput, pentaPrompts } = usePentagram();
  const [inputValue, setInputValue] = useState(inputs[index]);

  useEffect(() => {
    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.onSnapshot((doc) => {
        if (doc.personaPrompt) {
          setPersonaPrompt(doc.data().personaPrompt);
        }
        if (doc.contextPrompt) {
          setContextPrompt(doc.data().contextPrompt);
        }
        if (doc.taskPrompt) {
          setTaskPrompt(doc.data().taskPrompt);
        }
        if (doc.outputPrompt) {
          setOutputPrompt(doc.data().outputPrompt);
        }
        if (doc.constraintPrompt) {
          setConstraintPrompt(doc.data().constraintPrompt);
        }
      });
    }
  }, [user]);

  useEffect(() => {
    setInputValue(inputs[index] || "");
  }, [index, inputs]);

  useEffect(() => {
    const savedPersonaPrompt = localStorage.getItem("personaPrompt");
    if (user) {
      null;
    } else if (savedPersonaPrompt) {
      setPersonaPrompt(savedPersonaPrompt);
    }
  }, [user]);

  useEffect(() => {
    const savedContextPrompt = localStorage.getItem("contextPrompt");
    if (user) {
      null;
    } else if (savedContextPrompt) {
      setContextPrompt(savedContextPrompt);
    }
  }, [user]);

  useEffect(() => {
    const savedTaskPrompt = localStorage.getItem("taskPrompt");
    if (user) {
      null;
    } else if (savedTaskPrompt) {
      setTaskPrompt(savedTaskPrompt);
    }
  }, [user]);

  useEffect(() => {
    const savedOutputPrompt = localStorage.getItem("outputPrompt");
    if (user) {
      null;
    } else if (savedOutputPrompt) {
      setOutputPrompt(savedOutputPrompt);
    }
  }, [user]);

  useEffect(() => {
    const savedConstraintPrompt = localStorage.getItem("constraintPrompt");
    if (user) {
      null;
    } else if (savedConstraintPrompt) {
      setConstraintPrompt(savedConstraintPrompt);
    }
  }, [user]);

  const handlePersonaChange = (e) => {
    const personaPromptInput = e.target.value;
    setPersonaPrompt(personaPromptInput);

    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.set(
        { ...prev, personaPrompt: personaPromptInput },
        { merge: true }
      );
    } else {
      localStorage.setItem("personaPrompt", e.target.value);
    }
  };

  const handleContextChange = (e) => {
    const contextPromptInput = e.target.value;
    setContextPrompt(contextPromptInput);

    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.set(
        { ...prev, contextPrompt: contextPromptInput },
        { merge: true }
      );
    } else {
      localStorage.setItem("contextPrompt", e.target.value);
    }
  };

  const handleTaskChange = (e) => {
    const taskPromptInput = e.target.value;
    setTaskPrompt(taskPromptInput);

    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.set({ ...prev, taskPrompt: taskPromptInput }, { merge: true });
    } else {
      localStorage.setItem("taskPrompt", e.target.value);
    }
  };

  const handleOutputChange = (e) => {
    const outputPromptInput = e.target.value;
    setOutputPrompt(outputPromptInput);

    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.set({ ...prev, outputPrompt: outputPromptInput }, { merge: true });
    } else {
      localStorage.setItem("outputPrompt", e.target.value);
    }
  };

  const handleConstraintChange = (e) => {
    const constraintPromptInput = e.target.value;
    setConstraintPrompt(constraintPromptInput);

    if (user) {
      const docRef = firestore.collection("userData").doc(user.uid);
      docRef.set(
        { ...prev, constraintPrompt: constraintPromptInput },
        { merge: true }
      );
    } else {
      localStorage.setItem("constraintPrompt", e.target.value);
    }
  };

  return (
    <div className="prompt-field flex flex-row items-center justify-center  max-sm:justify-start max-sm:w-full">
      {pentaPrompts[index].name === "persona" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={personaPrompt}
          required={true}
          onChange={handlePersonaChange}
        />
      ) : null}
      {pentaPrompts[index].name === "context" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={contextPrompt}
          required={true}
          onChange={handleContextChange}
        />
      ) : null}
      {pentaPrompts[index].name === "task" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={taskPrompt}
          required={true}
          onChange={handleTaskChange}
        />
      ) : null}
      {pentaPrompts[index].name === "output" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={outputPrompt}
          required={true}
          onChange={handleOutputChange}
        />
      ) : null}
      {pentaPrompts[index].name === "constraint" ? (
        <textarea
          className="border-3 h-80 border-blue-300 rounded-lg text-blue-350 w-full"
          placeholder={pentaPrompts[index].placeholder}
          value={constraintPrompt}
          required={true}
          onChange={handleConstraintChange}
        />
      ) : null}
    </div>
  );
};
export default PromptField;
