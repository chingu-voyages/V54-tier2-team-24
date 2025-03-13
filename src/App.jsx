import LoadingFeature from "./HandleLoading";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-neutral-300">
      Welcome{" "}
      <span className="font-bold text-2xl text-blue-950"> Team 24 </span> to AI
      Prompt Project
      <LoadingFeature />
    </div>
  );
}

export default App;
