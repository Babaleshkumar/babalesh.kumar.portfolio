import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hover: {
    scale: 1.08,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

const iconVariants = {
  hover: {
    rotate: 12,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function SkillCard({ name, icon, highlighted = false }) {
  return (
    <motion.div
      className={`rounded-2xl p-6 flex flex-col items-center justify-center backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
        highlighted
          ? "bg-gradient-to-br from-yellow-300/20 to-yellow-400/10 border-yellow-400/50 text-yellow-400 hover:border-yellow-300 shadow-lg shadow-yellow-400/20"
          : "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 text-gray-200 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20"
      }`}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="mb-3 transition-transform duration-300"
        variants={iconVariants}
        whileHover="hover"
      >
        {icon}
      </motion.div>
      <div className="text-sm font-semibold text-center">{name}</div>
      
      {/* Animated gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 -z-10 pointer-events-none"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
