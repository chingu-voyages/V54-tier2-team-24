export default function Faq({ data }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-6">{data.title}</h2>

      {data.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold  mb-3">{section.heading}</h3>

          <div className="space-y-4">
            {section.questions.map((qa, i) => (
              <div key={i} className="bg-white shadow rounded-lg p-4">
                <p className="font-medium ">{qa.question}</p>
                <p className="text-sm whitespace-pre-line">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
