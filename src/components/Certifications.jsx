import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const ref = useScrollAnimation();

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
        <h2 className="text-5xl font-bold inline-block relative mb-4">
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
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
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
            >
              <div className={`relative h-full bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-gray-700 overflow-hidden group-hover:border-transparent transition-colors duration-300`}>
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                
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
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-lg text-2xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                    </div>
                  </motion.div>

                  {/* Main info */}
                  <div className="mb-4">
                    {/* Dates */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm font-medium">Issued:</span>
                        <span className="text-gray-200 text-sm font-semibold">{cert.issued}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm font-medium">Expires:</span>
                        <span className="text-gray-200 text-sm font-semibold">{cert.expires}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details box */}
                  <motion.div
                    className={`bg-gradient-to-r ${cert.gradient} bg-opacity-10 px-4 py-3 rounded-lg mb-4 text-gray-200 text-sm font-medium border border-gray-600 group-hover:border-gray-500 font-mono break-all`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Credential ID</p>
                    {cert.credentialId}
                  </motion.div>

                  {/* Status badge */}
                  <div>
                    <motion.span
                      className={`inline-block px-3 py-1.5 text-xs rounded-full font-semibold border bg-gradient-to-r ${cert.gradient} bg-opacity-20 border-gray-600 text-gray-200`}
                      whileHover={{ scale: 1.05 }}
                    >
                      ✓ Verified Credential
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </motion.section>
  );
}
