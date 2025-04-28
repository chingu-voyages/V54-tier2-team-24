import { FaGithub } from "react-icons/fa";
import FooterContent from "./FooterContent";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-[7vh] bg-[#02010B] px-2 z-50">
      <a
        href="https://github.com/chingu-voyages/V54-tier2-team-24"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl transition-transform duration-300 hover:scale-110 cursor-pointer text-blue-300 hover:text-blue-500"
      >
        <div className="flex gap-2 justify-center items-center">
          <FaGithub />
          <p className="text-sm font-medium">GitHub Repository</p>
        </div>
      </a>
      <FooterContent />
      <MobileFooter />
    </footer>
  );
}
