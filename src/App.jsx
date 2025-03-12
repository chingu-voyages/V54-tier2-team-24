import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />

    <div className="w-full h-[100vh] flex items-center justify-center bg-neutral-300">
      Welcome{" "}
      <span className="font-bold text-2xl text-blue-950"> Team 24 </span> to AI
      Prompt Project
    </div>
    </>
  );
}

export default App;
