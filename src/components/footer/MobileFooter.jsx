import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FooterLink from "./FooterLinks";

const teamMembers = [
  {
    text: "Carissa Abraham",
    linkedInUrl: "https://www.linkedin.com/in/carissa-abraham/",
    githubUrl: "https://github.com/carissayeaaa",
  },
  {
    text: "Aaron Goodwin",
    linkedInUrl: "https://www.linkedin.com/in/goodwinaaron/",
    githubUrl: "https://github.com/tradingwait",
  },
  {
    text: "Jessica Hackett",
    linkedInUrl: "https://www.linkedin.com/in/jessica-hackett-6725a4325/",
    githubUrl: "https://github.com/mooglemoxie0018",
  },
  {
    text: "Christin Martin",
    linkedInUrl: "https://www.linkedin.com/in/christin-martin/",
    githubUrl: "https://github.com/Christin-paige",
  },
  {
    text: "Matthew Neie",
    linkedInUrl: "https://www.linkedin.com/in/matthew-neie/",
    githubUrl: "https://github.com/MatthewNeie",
  },
  {
    text: "Luis Solar",
    linkedInUrl: "https://www.linkedin.com/in/solarluiso/",
    githubUrl: "https://github.com/solarluiso",
  },
  {
    text: "Benjamin Corbett",
    linkedInUrl: "https://www.linkedin.com/in/benjamin-corbett-84822424a/",
    githubUrl: "https://github.com/bcsurf2822",
  },
  {
    text: "Sokuen Ryan",
    linkedInUrl: "https://www.linkedin.com/in/sokuenryan/",
    githubUrl: "https://github.com/sokuenryan",
  },
  {
    text: "Christel Looky",
    linkedInUrl: "https://www.linkedin.com/in/welahlookymba/",
    githubUrl: "https://github.com/christel-l",
  },
  {
    text: "Gentiana Han",
    linkedInUrl: "https://www.linkedin.com/in/gentiana-han-006b39353/",
    githubUrl: "https://github.com/gentianaZ1",
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
      <FooterLink
        text={member.text}
        linkedIn={<FaLinkedin />}
        github={<FaGithub />}
        linkedInUrl={member.linkedInUrl}
        githubUrl={member.githubUrl}
      />
    </div>
  );
};

export default MobileFooter;
