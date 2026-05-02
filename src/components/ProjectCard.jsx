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
        className={`relative h-full rounded-xl overflow-hidden border transition-all duration-300 ${
          isHovered
            ? `border-transparent bg-gradient-to-br ${project.gradient}`
            : `border-gray-700 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-950 shadow-lg shadow-gray-900/50`
        }`}
      >
        {/* Gradient overlay - more visible without hover */}
        <div
          className={`absolute inset-0 rounded-xl pointer-events-none transition-all duration-300 ${
            isHovered ? `opacity-0` : `opacity-100`
          }`}
          style={{
            background: `linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%)`,
            zIndex: 0
          }}
        />

        {/* Card Content */}
        <div className="relative z-10 p-6 h-full flex flex-col bg-gradient-to-br from-gray-950/90 to-gray-950/85 backdrop-blur-sm">
          {/* Header with icon and category */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-3">
              <div className={`text-4xl p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 transition-all ${isHovered ? 'scale-110' : ''}`}>
                {project.icon}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-1 transition-all ${
                  isHovered 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r ' + project.gradient
                    : 'text-white'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider transition-all inline-block px-2 py-1 rounded-md ${
                  isHovered 
                    ? `bg-gray-700 text-gray-200`
                    : `bg-gradient-to-r ${project.gradient} bg-opacity-15 text-gray-300`
                }`}>
                  {project.category}
                </p>
              </div>
            </div>
            {isHovered && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} shadow-lg`}
              />
            )}
          </div>

          {/* Duration Badge */}
          <div className={`inline-block mb-4 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all w-fit ${
            isHovered 
              ? `bg-gray-700 text-gray-200`
              : `bg-gradient-to-r ${project.gradient} bg-opacity-20 text-gray-300 border border-opacity-30 border-gray-500`
          }`}>
            📅 {project.duration}
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-4 flex-grow">
            {project.highlights.slice(0, isHovered ? 3 : 2).map(
              (highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.3,
                  }}
                  className="flex gap-2 text-xs text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span className={`${idx % 2 === 0 ? "text-blue-400" : "text-purple-400"} flex-shrink-0 font-bold`}>
                    ✓
                  </span>
                  <span className="line-clamp-2">{highlight}</span>
                </motion.div>
              )
            )}
          </div>

          {/* Tech Stack - More colorful */}
          <div className="mb-4 pb-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-2 pt-4">
              {(isHovered ? project.tech : project.tech.slice(0, 4)).map((tech, idx) => {
                const techColors = {
                  "Python": "from-blue-500 to-blue-400 text-blue-50",
                  "React": "from-cyan-500 to-cyan-400 text-cyan-50",
                  "Node.js": "from-green-500 to-green-400 text-green-50",
                  "JavaScript": "from-yellow-500 to-yellow-400 text-yellow-900",
                  "TypeScript": "from-blue-600 to-blue-500 text-blue-50",
                  "Flask": "from-teal-500 to-teal-400 text-teal-50",
                  "Django": "from-green-600 to-green-500 text-green-50",
                  "Vue": "from-emerald-500 to-emerald-400 text-emerald-50",
                  "Docker": "from-sky-500 to-sky-400 text-sky-50",
                  "AWS": "from-orange-500 to-orange-400 text-orange-50",
                  "MongoDB": "from-green-600 to-green-500 text-green-50",
                  "PostgreSQL": "from-indigo-500 to-indigo-400 text-indigo-50",
                  "OracleDB": "from-red-600 to-red-500 text-red-50",
                  "LangChain": "from-purple-500 to-purple-400 text-purple-50",
                  "ChromaDB": "from-pink-500 to-pink-400 text-pink-50",
                  "Streamlit": "from-rose-500 to-rose-400 text-rose-50",
                  "Vite": "from-purple-500 to-purple-400 text-purple-50",
                  "Tailwind CSS": "from-cyan-500 to-cyan-400 text-cyan-50"
                };
                
                const colorClass = techColors[tech] || "from-gray-600 to-gray-500 text-gray-50";
                
                return (
                  <motion.div
                    key={tech}
                    custom={idx}
                    variants={techTagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border border-opacity-50 bg-gradient-to-r shadow-md ${
                      isHovered
                        ? `${colorClass} border-opacity-80 shadow-lg`
                        : `${colorClass} border-opacity-40 shadow-md hover:shadow-lg hover:border-opacity-70`
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
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
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 border ${
                  isHovered
                    ? `bg-gradient-to-r ${project.gradient} text-white border-transparent shadow-lg shadow-blue-500/30`
                    : `bg-gradient-to-r from-gray-800 to-gray-700 text-gray-100 border-gray-600 hover:from-gray-700 hover:to-gray-600 hover:shadow-lg`
                }`}
              >
                <FiGithub size={16} />
                Code
              </motion.a>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 border ${
                isHovered
                  ? `bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500`
                  : `bg-gray-800/70 text-gray-300 border-gray-700 hover:bg-gray-800 hover:border-gray-600 hover:text-gray-100`
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
