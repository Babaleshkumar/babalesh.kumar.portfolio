import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const ref = useScrollAnimation();

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="certifications"
      className="py-20 relative"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold inline-block relative">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certifications
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              custom={idx}
              variants={certVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className={`relative h-full bg-gradient-to-br from-gray-950 to-gray-900 p-6 rounded-xl border border-gray-700 overflow-hidden group-hover:border-transparent transition-all duration-300`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{cert.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                    {cert.issuer}
                  </p>

                  {/* Dates */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Issued:</span>
                      <span className="text-gray-300 text-sm font-medium">{cert.issued}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Expires:</span>
                      <span className="text-gray-300 text-sm font-medium">{cert.expires}</span>
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500 mb-1">Credential ID</p>
                    <p className="text-sm text-gray-300 font-mono break-all">{cert.credentialId}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </motion.section>
  );
}
