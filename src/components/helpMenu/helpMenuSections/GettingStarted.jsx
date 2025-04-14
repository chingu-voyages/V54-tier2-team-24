export default function GettingStarted({ data, toggleSection, isSectionOpen }) {
  const sectionId = "gettingStarted";
  return (
    <section className="p-4">
      <button
        onClick={() => toggleSection(sectionId)}
        className="w-full text-left flex justify-between items-center bg-blue-200 p-3 rounded-md hover:bg-blue-300"
      >
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <span className="text-xl">
          {isSectionOpen === sectionId ? "−" : "+"}
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isSectionOpen === sectionId
            ? "max-h-screen opacity-100 mt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        {data.sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl text-white font-semibold mb-2">{section.heading}</h3>
            {section.content && (
              <p className="text-base text-white mb-2">{section.content}</p>
            )}
            {section.steps && (
              <ol className="text-white list-decimal list-inside space-y-1">
                {section.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            )}
            {section.subsections && (
              <div className="mt-2 space-y-2">
                {section.subsections.map((sub, i) => (
                  <div key={i} className="pl-4 border-l-4 border-blue-300">
                    <p className="font-medium text-white">{sub.name}</p>
                    <p className="text-sm text-white">{sub.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
