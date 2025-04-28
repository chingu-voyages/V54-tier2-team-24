import { useEffect, useState } from "react";
import { FaCompass, FaPalette, FaCode, FaBullseye } from "react-icons/fa";

const teamMembers = [
  {
    text: "Christel Looky",
    linkedInUrl: "https://www.linkedin.com/in/welahlookymba/",
    role: "Product Owner",
  },
  {
    text: "Carissa Abraham",
    linkedInUrl: "https://www.linkedin.com/in/carissa-abraham/",
    role: "Scrum Master",
  },
  {
    text: "Aaron Goodwin",
    linkedInUrl: "https://www.linkedin.com/in/goodwinaaron/",
    role: "Scrum Master",
  },
  {
    text: "Jessica Hackett",
    linkedInUrl: "https://www.linkedin.com/in/jessica-hackett-6725a4325/",
    role: "Designer",
  },
  {
    text: "Christin Martin",
    linkedInUrl: "https://www.linkedin.com/in/christin-martin/",
    role: "Developer",
  },
  {
    text: "Matthew Neie",
    linkedInUrl: "https://www.linkedin.com/in/matthew-neie/",
    role: "Developer",
  },
  {
    text: "Luis Solar",
    linkedInUrl: "https://www.linkedin.com/in/solarluiso/",
    role: "Developer",
  },
  {
    text: "Benjamin Corbett",
    linkedInUrl: "https://www.linkedin.com/in/benjamin-corbett-84822424a/",
    role: "Developer",
  },
  {
    text: "Sokuen Ryan",
    linkedInUrl: "https://www.linkedin.com/in/sokuenryan/",
    role: "Developer",
  },
  {
    text: "Gentiana Han",
    linkedInUrl: "https://www.linkedin.com/in/gentiana-han-006b39353/",
    role: "Developer",
  },
];

const roleIcons = {
  "Product Owner": <FaBullseye />,
  "Scrum Master": <FaCompass />,
  Developer: <FaCode />,
  Designer: <FaPalette />,
};

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
        <div className="flex justify-center items-center gap-2">
          <span className="font-medium">{member.text}</span>
          {roleIcons[member.role]}
        </div>
      </a>
    </div>
  );
};

export default MobileFooter;
