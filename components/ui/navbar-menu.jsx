"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({ children }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-md ring-1 ring-black/[0.1] dark:ring-white/[0.1] flex justify-center space-x-0 px-[10px]">
      {children}
    </nav>
  );
};

export const MenuItem = ({ children }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-primary transition-colors duration-200">
      {children}
    </a>
  );
};
