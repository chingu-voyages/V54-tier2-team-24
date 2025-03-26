import { createContext, useContext, useEffect, useState } from "react";
import {
  getItemsFromStore,
  addItemToStore,
  deleteItemFromStore,
  addItemsToStore,
} from "../../utils/firebase/firebase";

const FirestoreContext = createContext();

export const FirestoreProvider = ({ children }) => {
  const [helpDataObject, setHelpDataObject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHelpData = async () => {
      const data = await getItemsFromStore("helpMenuData");
      setHelpDataObject(data);
      setLoading(false);
    };

    fetchHelpData();
  }, []);

  return (
    <FirestoreContext.Provider value={{ helpDataObject, loading, addItemToStore, deleteItemFromStore, addItemsToStore }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => useContext(FirestoreContext);
