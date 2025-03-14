import { FaGithub } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
     <header className="flex justify-between items-center p-8 bg-blue-100">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          <GiSpellBook className="text-blue-400 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" />
        </div>
        <div>
          <h1 className="text-blue-400 font-sans text-2xl sm:text-3xl md:text-4xl w-full whitespace-nowrap md:pr-20 sm:pr-10">
            App Name
          </h1>
        </div>
      </header>
    
      <main className="flex-1"> </main>
      <footer className="flex justify-between items-center boder-t-2 border-blue-400 h-[7vh] bg-blue-100 px-2 ">
        <a
          href="https://github.com/chingu-voyages/V54-tier2-team-24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer text-blue-300 hover:text-blue-500"
        >
          <FaGithub />
        </a>

        <p className="text-blue-400">Voyage 54 Team 24</p>
        <div className="text-sm md:flex sm:max-w-3xl w-3/4 justify-evenly hidden text-blue-400 sm:items-center ">
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

          <p>Chris</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
