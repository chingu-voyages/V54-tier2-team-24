import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-100">
      <main className="flex-1"> Content</main>
      <footer className="flex justify-between items-center boder-2 border-neutral-400 h-[7vh] bg-neutral-300 px-2 ">
        <a
          href="https://github.com/chingu-voyages/V54-tier2-team-24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <FaGithub />
        </a>

        <p>Voyage 54 Team 24</p>
        <div className="text-sm flex w-3/4 justify-evenly hidden">
          <p>Carissa Abraham</p>
          <p>Aaron Goodwin</p>
          <p>Chris </p>
          <p>Jessica Hackett</p>
          <p>Matthew Neie</p>
          <p>Luis Solar</p>
          <p>Sokuen Ryan</p>
          <p>Benjamin Corbett</p>
          <p>Christin Martin</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
