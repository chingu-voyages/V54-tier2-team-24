import { GiSpellBook } from "react-icons/gi";

function App() {
  return (
    <>
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

      <div className="w-full h-[100vh] flex items-center justify-center">
        Welcome{" "}
        <span className="font-bold text-2xl text-blue-950"> Team 24 </span> to
        AI Prompt Project
      </div>
    </>
  );
}

export default App;
