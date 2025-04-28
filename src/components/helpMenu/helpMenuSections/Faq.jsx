export default function Faq({ data, toggleSection, isSectionOpen }) {
  const sectionId = "faq";
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
        className={`transition-all duration-300 overflow-y-auto ${
          isSectionOpen === sectionId
            ? "max-h-screen opacity-100 mt-4"
            : "max-h-0 opacity-0"
        }`}
      >
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl text-white font-semibold  mb-3">{section.heading}</h3>

            <div className="space-y-4">
              {section.questions.map((qa, i) => (
                <div key={i} className="bg-black  shadow rounded-lg p-4">
                  <p className="font-medium text-white">{qa.question}</p>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{qa.answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
