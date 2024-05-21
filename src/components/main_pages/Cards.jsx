import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = (className, ...rest) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const Image = ({ alt, source }) => {
  return <img src={source} alt={alt} className="object-cover w-full h-full" />;
};

const Card = ({ title, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: hovered ? 1 : 0.5 }}
        className="h-full w-full absolute inset-0"
      >
        {children}
      </motion.div>

      <div className="relative z-20">
        <h2 className="dark:text-white text-3xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 text-black  mt-  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

function Cards({ title, source, alt }) {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title={title}>
          <Image source={source} alt={alt} />
        </Card>
      </div>
    </>
  );
}

export default Cards;
