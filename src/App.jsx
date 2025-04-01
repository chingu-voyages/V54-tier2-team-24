import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Header from "./components/Header";
import Pentagram from "./components/Pentagram";
import HeroSection from "./components/hero/HeroSection";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/pentagram" element={<Pentagram />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-center"
            theme="dark"
            autoClose={3000}
            hideProgressBar
          />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
