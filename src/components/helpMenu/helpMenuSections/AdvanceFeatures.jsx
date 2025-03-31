import React from "react";

export default function AdvanceFeatures({
  data,
  toggleSection,
  isSectionOpen,
}) {
  const sectionId = "advancedFeatures";
  return (
    <section className="p-4">
        <button
        onClick={() => toggleSection(sectionId)}
        className="w-full text-left flex justify-between items-center bg-gray-100 p-3 rounded-md hover:bg-gray-200"
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
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="mb-3">{section.heading}</h3>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {section.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {section.links && (
              <div className="mt-4 space-y-2">
                {section.links.forum && (
                  <a
                    href={section.links.forum}
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Forum
                  </a>
                )}
                {section.links.supportEmail && (
                  <a
                    href={`mailto:${section.links.supportEmail}`}
                    className=" underline"
                  >
                    Contact Support via Email
                  </a>
                )}
                {section.links.liveChat && (
                  <a
                    href={section.links.liveChat}
                    className=" underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Chat Support
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
