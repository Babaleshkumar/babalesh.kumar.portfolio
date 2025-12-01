import React from "react";
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

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-center text-4xl font-bold mb-10">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((s, idx) => (
          <div key={s.name} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s forwards`, opacity: 0 }}>
            <SkillCard 
              name={s.name}
              icon={s.icon}
              highlighted={s.highlighted}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
