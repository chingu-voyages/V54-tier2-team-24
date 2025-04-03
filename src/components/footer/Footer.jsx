import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FooterContent from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center boder-t-2 border-blue-400 h-[10vh] bg-[#02010B]  px-2 ">
      <a
        href="https://github.com/chingu-voyages/V54-tier2-team-24"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer text-blue-300 hover:text-blue-500"
      >
        <div className="flex gap-2 justify-center items-center">
          <FaGithub />
          <p className="text-sm">GitHub Repository</p>
        </div>
      </a>
      {/* Links to LI or GitHub Flip action with LINKED and GIThub */}
      <FooterContent />
    </footer>
  );
}
