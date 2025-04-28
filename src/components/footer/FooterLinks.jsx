import { useState, useEffect } from "react";

const FooterLink = ({ text, linkedIn, github, linkedInUrl, githubUrl }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const handleTap = () => {
    if (!isDesktop && linkedInUrl) {
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="block h-[30px] overflow-hidden text-sm font-bold cursor-pointer"
      onClick={handleTap}
    >
      <div
        className={
          isDesktop
            ? "hover:translate-y-[-30px] transition-transform duration-300"
            : ""
        }
      >
        <span className="flex items-center h-[30px] justify-center">
          {text}
        </span>
        <div className="flex gap-2 items-center justify-evenly h-[30px] text-blue-300">
          <a
            href={linkedInUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label={`${text}'s LinkedIn`}
            onClick={(e) => !isDesktop && e.stopPropagation()}
          >
            {linkedIn}
          </a>
          <a
            href={githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label={`${text}'s GitHub`}
            onClick={(e) => !isDesktop && e.stopPropagation()}
          >
            {github}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLink;
