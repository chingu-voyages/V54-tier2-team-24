import { motion } from "motion/react";
import { Link } from "react-router-dom";

const FooterLink = ({ text, linkedIn, github }) => {
  return (
    <Link
      className="block h-[30px] overflow-hidden text-sm font-bold"
      rel="nofollow"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px]">{text}</span>
        <div className="flex gap-2 items-center justify-evenly h-[30px] text-blue-300">
          <a>{linkedIn}</a>
          <a>{github}</a>
        </div>
      </motion.div>
    </Link>
  );
};

export default FooterLink;
