import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SkillCard from "./SkillCard";
import { 
  FaPython, FaGitAlt, FaHtml5, FaDatabase, FaBrain
} from "react-icons/fa";

import { 
  SiJavascript, SiReact, SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "Prompt Engineering", icon: <FaBrain size={40} color="#10B981" /> },
  { name: "Gen AI", icon: <FaBrain size={40} color="#8B5CF6" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05133" /> },
  { name: "HTML & CSS", icon: <FaHtml5 size={40} color="#E34F26" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "ReactJS", icon: <SiReact size={40} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
  { name: "Database", icon: <FaDatabase size={40} color="#336791" /> },
  { name: "Data Science", icon: <FaBrain size={40} color="#FF6B6B" /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold mb-4 inline-block relative">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((s) => (
          <motion.div key={s.name} variants={itemVariants}>
            <SkillCard 
              name={s.name}
              icon={s.icon}
              highlighted={s.highlighted}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </section>
  );
}
