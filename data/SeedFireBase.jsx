import helpMenuData from "./helpMenuData";
import { useEffect } from "react";
import { addItemsToStore } from "../utils/firebase/firebase";

const DevSeedHelpData = () => {
  useEffect(() => {
    addItemsToStore("helpMenuData", helpMenuData);
  }, []);

  return <p>Seeding help data to Firestore...</p>;
};

export default DevSeedHelpData;