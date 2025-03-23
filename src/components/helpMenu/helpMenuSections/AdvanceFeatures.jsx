import React from "react";

export default function AdvanceFeatures({ data }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl mb-6">{data.title}</h2>

      {data.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="mb-3">{section.heading}</h3>

          {/* List features */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {section.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* If the section has links (Community & Support) */}
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
    </section>
  );
}
