import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const items = [
  {
    id: 1,
    year: "Oct 2025",
    title: "Senior TechLead",
    company: "HCLTech, Chennai",
    body:
      "Promoted to Senior TechLead overseeing technical strategy, team leadership, and architecture decisions. Leading cross-functional teams and driving innovation in software development.",
  },
  {
    id: 2,
    year: "Oct 2023",
    title: "TechLead",
    company: "HCLTech, Chennai",
    body:
      "Leading technical initiatives and driving innovation in software development. Responsible for architecture design, mentoring team members, and ensuring high-quality deliverables. Working on advanced projects involving temporal systems and enterprise solutions.",
  },
  {
    id: 3,
    year: "Sep 2023",
    title: "Web Development Trainee",
    company: "CODSOFT",
    body:
      "Developed Netflix Landing page clone using HTML, CSS, Bootstrap, and jQuery. Created a personal Portfolio website and a Calculator interface. Gained hands-on experience in front-end technologies and responsive design principles.",
  },
  {
    id: 4,
    year: "Jul 2023",
    title: "Teaching Assistant",
    company: "IIT Guwahati - Data Acquisition Lab",
    body:
      "Assisted Prof. Vinayak Kulkarni in conducting Data Acquisition Lab sessions. Guided students through experimental procedures, data collection methods, and analysis techniques in mechanical engineering.",
  },
  {
    id: 5,
    year: "Jul 2018",
    title: "Industrial Trainee",
    company: "UPSRTC Lucknow",
    body:
      "Completed four-week industrial training program. Gained practical knowledge about vehicle maintenance, servicing operations, and industrial problem-solving approaches in the transportation sector.",
  },
];

export default function Experience() {
  const ref = useScrollAnimation();

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      id="experience"
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
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Experience
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Animated vertical timeline line */}
        <motion.div
          className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-orange-500 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((it, idx) => (
            <motion.div
              key={it.id}
              className="relative group"
              custom={idx}
              variants={itemVariants}
            >
              {/* year tag - mobile on top, desktop on left side */}
              <motion.div
                className="mb-3 md:absolute md:mb-0 md:left-0 md:top-0 md:w-32 md:z-10"
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg shadow-orange-500/30 whitespace-nowrap w-full md:w-auto text-center md:text-left">
                    {it.year}
                  </div>
                </div>
              </motion.div>

              {/* Timeline dot */}
              <motion.div
                className="hidden md:block absolute left-14 top-5 w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-orange-500/50 -translate-x-2 z-20"
                whileInView={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              />

              {/* content - mobile no left padding, desktop with left padding for timeline */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-lg p-6 md:pl-40 md:p-6 border border-gray-700 group-hover:border-orange-500/30 transition-colors duration-300 backdrop-blur">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{it.title}</h3>
                <div className="text-sm bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-semibold mb-3">
                  {it.company}
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl group-hover:text-gray-200 transition-colors">
                  {it.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </motion.section>
  );
}
