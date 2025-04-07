import { motion } from "motion/react";

const FooterLink = ({ text, linkedIn, github, linkedInUrl, githubUrl }) => {
  return (
    <div 
      className="block h-[30px] overflow-hidden text-sm font-bold cursor-pointer"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] justify-center">{text}</span>
        <div className="flex gap-2 items-center justify-evenly h-[30px] text-blue-300">
          <a 
            href={linkedInUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label={`${text}'s LinkedIn`}
          >
            {linkedIn}
          </a>
          <a 
            href={githubUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label={`${text}'s GitHub`}
          >
            {github}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterLink;
