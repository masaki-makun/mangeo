"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0, transition: { duration: 0.5 } },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="site-wrapper"
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
