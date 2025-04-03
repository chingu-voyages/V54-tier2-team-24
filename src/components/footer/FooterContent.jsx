import FooterLink from "./FooterLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterContent = () => {
  return (
    <div className="text-sm md:flex sm:max-w-3xl w-3/4 justify-evenly hidden text-blue-300 sm:items-center ">
      <div className="text-center">
        <FooterLink
          text="Carissa Abraham"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
        <FooterLink
          text="Aaron Goodwin"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
      </div>
      <div className="text-center">
        <FooterLink
          text="Jessica Hackett"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
        <FooterLink
          text="Christin Martin"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
      </div>
      <div className="text-center">
        <FooterLink
          text="Matthew Neie"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
        <FooterLink
          text="Luis Solar"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
      </div>

      <div className="text-center">
        <FooterLink
          text="Benjamin Corbett"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
        <FooterLink
          text="Sokuen Ryan"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
      </div>
      <div>
        <FooterLink
          text="Christel Looky"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
        />
      </div>
    </div>
  );
};

export default FooterContent;
