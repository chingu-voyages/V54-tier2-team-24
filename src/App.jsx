import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/hero/HeroSection";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
import BackgroundEffect from "./components/BackgroundEffect";
import PentagramContent from "./components/Pentagram";
import { PentagramProvider } from "./components/PentagramContext.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#02010B] to-[#070062]">
        <BackgroundEffect />
        <Header />
        <main className="flex-1 relative flex flex-col items-center">
          <PentagramProvider>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/pentagram" element={<PentagramContent />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PentagramProvider>

          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            toastStyle={{
              backgroundColor: "#000",
              color: "#fff", // #B3B3B3
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
