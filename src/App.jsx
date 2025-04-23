import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import Header from "./components/Header";
import HeroSection from "./components/hero/HeroSection";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import PentagramContent from "./components/Pentagram";
import { PentagramProvider } from "./components/PentagramContext.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 1.2, ease: "circIn" },
              }}
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <HeroSection />
              <motion.div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "20%", // Adjust height for blending
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #02010B 100%)",
                  pointerEvents: "none",
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0, // Fade out the gradient
                  transition: { duration: 1.2, ease: "circIn" },
                }}
              />
            </motion.div>
          }
        />
        <Route
          path="/pentagram"
          element={
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{
                y: "100%",
                transition: { duration: 1.2, ease: "circIn" },
              }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
              }}
            >
              <PentagramContent />
            </motion.div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#02010B] to-[#070062]">
        <BackgroundEffect />
        <Header />
        <main
          className="flex-1 relative flex flex-col items-center w-full h-full"
          style={{ overflow: "hidden" }}
        >
          <PentagramProvider>
            <AnimatedRoutes />
          </PentagramProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            toastStyle={{
              backgroundColor: "#000",
              color: "#fff",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            }}
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
