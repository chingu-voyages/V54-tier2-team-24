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
          linkedInUrl="https://www.linkedin.com/in/carissa-abraham/"
          githubUrl="https://github.com/carissayeaaa"
        />
        <FooterLink
          text="Aaron Goodwin"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/goodwinaaron/"
          githubUrl="https://github.com/tradingwait"
        />
      </div>
      <div className="text-center">
        <FooterLink
          text="Jessica Hackett"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/jessica-hackett-6725a4325/"
          githubUrl="https://github.com/mooglemoxie0018"
        />
        <FooterLink
          text="Christin Martin"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/christin-martin/"
          githubUrl="https://github.com/Christin-paige"
        />
      </div>
      <div className="text-center">
        <FooterLink
          text="Matthew Neie"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/matthew-neie/"
          githubUrl="https://github.com/MatthewNeie"
        />
        <FooterLink
          text="Luis Solar"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/solarluiso/"
          githubUrl="https://github.com/solarluiso"
        />
      </div>

      <div className="text-center">
        <FooterLink
          text="Benjamin Corbett"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/benjamin-corbett-84822424a/"
          githubUrl="https://github.com/bcsurf2822"
        />
        <FooterLink
          text="Sokuen Ryan"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/sokuenryan/"
          githubUrl="https://github.com/sokuenryan"
        />
      </div>
      <div>
        <FooterLink
          text="Christel Looky"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/welahlookymba/"
          githubUrl="https://github.com/christel-l"
        />
              <FooterLink
          text="Gentiana Han"
          linkedIn={<FaLinkedin />}
          github={<FaGithub />}
          linkedInUrl="https://www.linkedin.com/in/gentiana-han-006b39353/"
          githubUrl="https://github.com/gentianaZ1"
        />
      </div>
    </div>
  );
};

export default FooterContent;
