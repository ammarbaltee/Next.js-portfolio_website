"use client";
import React from "react";
import { motion } from "framer-motion";

// Define shared transition configuration
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Memoize Menu component to prevent unnecessary re-renders
export const Menu = React.memo(({ children }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-md ring-1 ring-black/[0.1] dark:ring-white/[0.1] flex justify-center space-x-0 px-[10px]">
      {children}
    </nav>
  );
});

// Memoize MenuItem component
export const MenuItem = React.memo(({ children }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      transition={{ ...transition, duration: 0.3 }} // Use shared transition
    >
      {children}
    </motion.div>
  );
});

// Memoize HoveredLink component
export const HoveredLink = React.memo(({ children, ...rest }) => {
  return (
    <a 
      {...rest} 
      className="text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  );
});
