import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaExternalLinkAlt, FaBook } from "react-icons/fa";

const publicationsData = [
  {
    id: 1,
    title: "Underwater Blast Studies Using Shock Tube",
    date: "March 2025",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-6776-2_2",
    points: [
      "Two cases were studied with the same distance from the pipe bend's end to the water surface but different immersion depths.",
      "A white, conical dome forms on the water surface when the shock wave is introduced.",
      "Case I (immersion depth: 11 cm): Produced a splash height of 1.15 m with less water volume thrown into the air.",
      "Case II (immersion depth: 10.1 cm): Resulted in a higher splash of 2.35 m and a greater volume of water ejected."
    ],
    gradient: "from-indigo-500 to-blue-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Publications() {
  const ref = useScrollAnimation();

  return (
    <section id="publications" className="py-20 relative" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold inline-block relative">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Publications
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {publicationsData.map((pub) => (
          <motion.div
            key={pub.id}
            variants={cardVariants}
            whileHover="hover"
            className="relative group"
          >
            <div className={`relative h-full bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-gray-700 overflow-hidden group-hover:border-transparent transition-colors duration-300`}>
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative z-10">
                {/* Header with icon and title */}
                <motion.div
                  className="flex items-start justify-between gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex-1 flex gap-4 items-start">
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${pub.gradient} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaBook size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">{pub.date}</p>
                    </div>
                  </div>
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 border border-gray-600 text-gray-200 hover:border-indigo-400 hover:text-indigo-300 transition-colors duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View</span>
                    <FaExternalLinkAlt size={16} />
                  </motion.a>
                </motion.div>

                {/* Key points */}
                <div className="space-y-3">
                  {pub.points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + idx * 0.05 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${pub.gradient}`}
                        whileInView={{ scale: [0.5, 1.2, 1] }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                      />
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </section>
  );
}
