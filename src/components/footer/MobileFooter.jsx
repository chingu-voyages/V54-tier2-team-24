import { useEffect, useState } from "react";

const teamMembers = [
  {
    text: "Carissa Abraham",
    linkedInUrl: "https://www.linkedin.com/in/carissa-abraham/",
  },
  {
    text: "Aaron Goodwin",
    linkedInUrl: "https://www.linkedin.com/in/goodwinaaron/",
  },
  {
    text: "Jessica Hackett",
    linkedInUrl: "https://www.linkedin.com/in/jessica-hackett-6725a4325/",
  },
  {
    text: "Christin Martin",
    linkedInUrl: "https://www.linkedin.com/in/christin-martin/",
  },
  {
    text: "Matthew Neie",
    linkedInUrl: "https://www.linkedin.com/in/matthew-neie/",
  },
  {
    text: "Luis Solar",
    linkedInUrl: "https://www.linkedin.com/in/solarluiso/",
  },
  {
    text: "Benjamin Corbett",
    linkedInUrl: "https://www.linkedin.com/in/benjamin-corbett-84822424a/",
  },
  {
    text: "Sokuen Ryan",
    linkedInUrl: "https://www.linkedin.com/in/sokuenryan/",
  },
  {
    text: "Christel Looky",
    linkedInUrl: "https://www.linkedin.com/in/welahlookymba/",
  },
  {
    text: "Gentiana Han",
    linkedInUrl: "https://www.linkedin.com/in/gentiana-han-006b39353/",
  },
];

const MobileFooter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const member = teamMembers[index];

  return (
    <div className="md:hidden text-center text-sm text-blue-300 py-4 animate-fade-in">
      <a
        href={member.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-opacity duration-300 ease-in-out"
      >
        {member.text}
      </a>
    </div>
  );
};

export default MobileFooter;
