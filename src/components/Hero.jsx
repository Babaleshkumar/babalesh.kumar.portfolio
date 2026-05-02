import React from "react";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

/**
 * Update the `links` array below with your real profile URLs.
 * If you want the click to open in same tab, remove `target`/`rel`.
 */

const links = [
  { id: "github", href: "https://github.com/Babaleshkumar", label: "GitHub", icon: <FaGithub /> },
  { id: "email", href: "mailto:babaleshkumar97iitg@gmail.com", label: "Email", icon: <FaEnvelope /> },
  { id: "linkedin", href: "https://www.linkedin.com/in/babalesh-kumar-369887225/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { id: "whatsapp", href: "https://wa.me/9457754711", label: "WhatsApp", icon: <SiWhatsapp /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(250, 204, 21, 0.3)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

export default function Hero() {
  return (
    <motion.section 
      className="hero-wrap grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT content */}
      <motion.div className="pr-6 md:pr-12" variants={itemVariants}>
        <motion.p 
          className="text-sm text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I'M
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-6xl font-display font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Babalesh Kumar
        </motion.h1>

        <TypewriterText />

        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg border-2 border-yellow-400 text-yellow-400 font-semibold hover:text-gray-900 transition-all duration-300 bg-gradient-to-r from-transparent to-transparent hover:from-yellow-400 hover:to-yellow-500"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {links.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT portrait + social stack */}
      <motion.div 
        className="relative flex items-center justify-end"
        variants={imageVariants}
      >
        {/* portrait container */}
        <div className="w-full max-w-[380px] h-[470px] rounded-l-2xl overflow-hidden relative">
          <img
            src="/hero-photo.png"
            alt="portrait"
            className="block w-full h-full object-cover object-center grayscale contrast-[1.15] brightness-[0.85]"
          />
          {/* Smooth fade effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-950 via-gray-950/50 to-transparent pointer-events-none rounded-l-2xl" />
        </div>
      </motion.div>
    </motion.section>
  );
}
