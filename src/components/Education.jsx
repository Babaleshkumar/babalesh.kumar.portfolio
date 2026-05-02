import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    type: "B.Tech",
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    institution: "Institute of Engineering and Technology, Lucknow",
    duration: "2015 - 2019",
    location: "Lucknow, India",
    description: "Completed a comprehensive 4-year program in Mechanical Engineering with focus on thermal engineering, CAD/CAM, and numerical computing.",
    details: "Percentage: 74.44",
    highlights: ["Solidworks", "ANSYS", "Thermal Engineering", "Heat Transfer"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    type: "M.Tech",
    degree: "Master of Technology",
    field: "Aerodynamic and Propulsion",
    institution: "Indian Institute of Technology (IIT), Guwahati, Assam",
    duration: "2021 - 2023",
    location: "Guwahati, Assam",
    description: "Advanced 2-year program specializing in Aerodynamics, Propulsion Systems, and Computational Fluid Dynamics.",
    details: "CGPA: 8.05",
    highlights: ["Soft Computing","CFD Analysis", "Aerodynamics", "Propulsion"],
    gradient: "from-purple-500 to-pink-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold inline-block relative mb-4">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className={`relative h-full bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-gray-700 overflow-hidden group-hover:border-transparent transition-colors duration-300`}>
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                
                <div className="relative z-10">
                  {/* Header with icon */}
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaGraduationCap size={24} />
                    </motion.div>
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                        {edu.type}
                      </h3>
                      <p className="text-sm text-gray-400">{edu.degree}</p>
                    </div>
                  </motion.div>

                  {/* Main info */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{edu.field}</h4>
                    <p className="text-gray-300 font-medium mb-3">{edu.institution}</p>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FaMapMarkerAlt size={14} className={`text-transparent bg-gradient-to-r ${edu.gradient} bg-clip-text`} />
                      <span>{edu.location}</span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                  </div>

                  {/* Details box */}
                  <motion.div
                    className={`bg-gradient-to-r ${edu.gradient} bg-opacity-10 px-4 py-3 rounded-lg mb-4 text-gray-200 text-sm font-medium border border-gray-600 group-hover:border-gray-500`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {edu.details}
                  </motion.div>

                  {/* Highlights */}
                  <div>
                    <p className="text-gray-400 text-xs font-semibold mb-2">KEY SKILLS:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className={`px-3 py-1 text-xs rounded-full border bg-gradient-to-r ${edu.gradient} bg-opacity-10 border-gray-600 text-gray-200 hover:border-gray-400 transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
