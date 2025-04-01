import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Header from "./components/Header";
import Pentagram from "./components/Pentagram";
import HeroSection from "./components/hero/HeroSection";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen ">
      <Header />
      <HeroSection />
      <main className="flex-1">
        <Pentagram />
        <LoadingFeature />
      </main>
      <footer className="flex justify-between items-center boder-t-2 border-blue-400 h-[10vh] bg-[#02010B]  px-2 ">
        <a
          href="https://github.com/chingu-voyages/V54-tier2-team-24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer text-blue-300 hover:text-blue-500"
        >
          <div className="flex gap-2 justify-center items-center">
            <FaGithub />
            <p className="text-sm">GitHub Repository</p>
          </div>
        </a>
        {/* Links to LI or GitHub Flip action with LINKED and GIThub */}
        <div className="text-sm md:flex sm:max-w-3xl w-3/4 justify-evenly hidden text-blue-300 sm:items-center ">
          <div className="text-center">
            <p>Carissa Abraham</p>
            <p>Aaron Goodwin</p>
          </div>
          <div className="text-center">
            <p>Jessica Hackett</p>
            <p>Christin Martin </p>
          </div>
          <div className="text-center">
            <p>Matthew Neie</p>
            <p>Luis Solar</p>
          </div>

          <div className="text-center">
            <p>Benjamin Corbett</p>
            <p>Sokuen Ryan</p>
          </div>
          <div>
            <p>Christel Looky</p>
          </div>
        </div>
      </footer>
    </div>
=======
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
        <footer className="flex justify-between items-center border-t-2 border-blue-400 h-[7vh] bg-blue-100 px-2">
          <a
            href="https://github.com/chingu-voyages/V54-tier2-team-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer text-blue-300 hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <p className="text-blue-400">Voyage 54 Team 24</p>
          <div className="text-sm md:flex sm:max-w-3xl w-3/4 justify-evenly hidden text-blue-400 sm:items-center">
            <div className="text-center">
              <p>Carissa Abraham</p>
              <p>Aaron Goodwin</p>
            </div>
            <div className="text-center">
              <p>Jessica Hackett</p>
              <p>Christin Martin</p>
            </div>
            <div className="text-center">
              <p>Matthew Neie</p>
              <p>Luis Solar</p>
            </div>
            <div className="text-center">
              <p>Benjamin Corbett</p>
              <p>Sokuen Ryan</p>
            </div>
            <p>Chris</p>
          </div>
        </footer>
      </div>
    </Router>
>>>>>>> development
  );
}

export default App;
