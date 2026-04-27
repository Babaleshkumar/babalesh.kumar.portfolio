import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const borderAnimationVariants = {
    hidden: { pathLength: 0 },
    visible: (i) => ({
      pathLength: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05 + 0.4,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <div
        className={`relative h-full rounded-xl overflow-hidden border-2 transition-colors duration-300 ${
          isHovered
            ? `border-transparent bg-gradient-to-br ${project.gradient}`
            : "border-gray-700 bg-gray-900/50 backdrop-blur"
        }`}
      >
        {/* Gradient border on hover */}
        {isHovered && (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl pointer-events-none opacity-0`}
            style={{
              animation: "shimmer 2s infinite",
            }}
          />
        )}

        {/* Card Content */}
        <div className="relative z-10 p-6 h-full flex flex-col bg-gray-950/95 backdrop-blur-sm">
          {/* Header with icon and category */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <span className="text-3xl">{project.icon}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </div>
            {isHovered && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
              />
            )}
          </div>

          {/* Duration */}
          <p className="text-sm text-gray-400 mb-4 font-medium">
            {project.duration}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-4 flex-grow">
            {project.highlights.slice(0, isHovered ? 3 : 1).map(
              (highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.3,
                  }}
                  className="flex gap-2 text-xs text-gray-400"
                >
                  <span className={`text-${idx % 2 === 0 ? "blue" : "purple"}-400 flex-shrink-0`}>
                    ✓
                  </span>
                  <span className="line-clamp-2">{highlight}</span>
                </motion.div>
              )
            )}
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <motion.div
                  key={tech}
                  custom={idx}
                  variants={techTagVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-xs font-semibold text-gray-200 border border-gray-600 hover:border-gray-500 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isHovered
                    ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <FiGithub size={16} />
                Code
              </motion.a>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                isHovered
                  ? `bg-gray-800 text-white border border-gray-600 hover:border-gray-500`
                  : "bg-gray-800/50 text-gray-400 border border-gray-700"
              }`}
            >
              <span>Learn More</span>
              <FiArrowRight size={16} />
            </motion.button>
          </div>
        </div>

        {/* Animated background gradient */}
        <style>{`
          @keyframes shimmer {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 0.1;
            }
          }

          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </div>
    </motion.div>
  );
}
