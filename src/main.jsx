import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import App from "./App.jsx";
import { FirestoreProvider } from "./contexts/FirestoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirestoreProvider>
      <App />
    </FirestoreProvider>
  </StrictMode>
);

