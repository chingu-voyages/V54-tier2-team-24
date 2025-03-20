import { createContext, useContext, useState } from "react";
import helpData from "../data/helpData";

const HelpDataContext = createContext();

export const HelpDataProvider = ({ children }) => {
  const [helpDataObject] = useState(helpData);
  return (
    <HelpDataContext.Provider value={{ helpDataObject }}>
      {children}
    </HelpDataContext.Provider>
  );
};

export const useHelpData = () => useContext(HelpDataContext);
