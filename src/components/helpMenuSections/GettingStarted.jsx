export default function GettingStarted({ data }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-boldmb-6">{data.title}</h2>

      {data.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semiboldmb-2">{section.heading}</h3>

          {section.content && (
            <p className=" text-base mb-2">{section.content}</p>
          )}

          {section.steps && (
            <ol className="list-decimal list-inside space-y-1 ">
              {section.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}

          {section.subsections && (
            <div className="mt-2 space-y-2">
              {section.subsections.map((sub, i) => (
                <div key={i} className="pl-4 border-l-4 border-blue-300">
                  <p className="font-medium ">{sub.name}</p>
                  <p className="text-sm ">{sub.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
