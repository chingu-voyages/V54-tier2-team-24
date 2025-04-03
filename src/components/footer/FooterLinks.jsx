import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FooterContent = () => {
  return (
    <div className="text-sm md:flex sm:max-w-3xl w-3/4 justify-evenly hidden text-blue-300 sm:items-center ">
      {/* <div className="text-center"> */}
      <FooterLink text="Carissa Abraham" linkedIn="LinkedIn" github="GitHub" />
      {/* <FooterLink text="Aaron Goodwin" linkedIn="LinkedIn" github="GitHub" />
      </div> */}
      <div className="text-center">
        <FooterLink
          text="Jessica Hackett"
          linkedIn="LinkedIn"
          github="GitHub"
        />
        <FooterLink
          text="Christin Martin"
          linkedIn="LinkedIn"
          github="GitHub"
        />
      </div>
      <div className="text-center">
        <FooterLink text="Matthew Neie" linkedIn="LinkedIn" github="GitHub" />
        <FooterLink text="Luis Solar" linkedIn="LinkedIn" github="GitHub" />
      </div>

      <div className="text-center">
        <FooterLink
          text="Benjamin Corbett"
          linkedIn="LinkedIn"
          github="GitHub"
        />
        <FooterLink text="Sokuen Ryan" linkedIn="LinkedIn" github="GitHub" />
      </div>
      <div>
        <FooterLink text="Christel Looky" linkedIn="LinkedIn" github="GitHub" />
      </div>
    </div>
  );
};

const FooterLink = ({ text, linkedIn }) => {
  return (
    <Link
      className="block h-[30px] overflow-hidden text-sm font-bold"
      rel="nofollow"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px]">{text}</span>
        {/* <div className="flex gap-2 items-center h-[30px]text-red-500"> */}
        <span className="flex gap-2 items-center h-[30px]text-red-500">
          {linkedIn}
        </span>
        {/* <span>{github}</span> */}
        {/* </div> */}
      </motion.div>
    </Link>
  );
};

export default FooterContent;
