import React from "react";
import { motion } from "framer-motion";

export default function Overlay({ popupIsOpen }) {
  return (
    <motion.div
      animate={{
        opacity: 0.7,
      }}
      transition={{ duration: 0.2 }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed z-30 w-full h-full bg-ultraBlack inset-0"
    ></motion.div>
  );
}
