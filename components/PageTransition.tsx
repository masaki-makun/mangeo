"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0, transitionEnter: { display: "none" } },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5 },
    transitionEnter: { display: "none" },
  },
  exit: {
    opacity: 0,
    x: 200,
    y: 0,
    transition: { duration: 0.5 },
    transitionEnd: { display: "none" },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={pathname}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
