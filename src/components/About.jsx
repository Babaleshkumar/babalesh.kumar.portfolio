import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>About</h2>
        <p className="text-gray-300 leading-relaxed text-justify animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
        I am Babalesh Kumar, a Tech Lead at HCLTech and an M.Tech graduate in Aerodynamic and Propulsion from Indian Institute of Technology Guwahati with a strong foundation in Mechanical Engineering from Institute of Engineering and Technology Lucknow. I specialize in AI-driven application development, full-stack engineering, and automation solutions using technologies such as Python, React.js, LangChain, LangGraph, Flask, and Oracle DB. I have experience leading and developing enterprise-grade AI systems, including multi-agent workflows, semantic search platforms, Slack-based automation tools, and reporting dashboards. Passionate about innovation and continuous learning, I enjoy building scalable solutions that solve real-world problems and improve operational efficiency. I thrive in collaborative environments and actively explore emerging technologies in AI, GenAI, and software engineering.
        </p>
      </div>
    </section>
  )
}
