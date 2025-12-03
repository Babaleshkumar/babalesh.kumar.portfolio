import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>About</h2>
        <p className="text-gray-300 leading-relaxed text-justify animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
          I am Babalesh Kumar, a passionate M.Tech graduate in Aerodynamic and Propulsion from IIT Guwahati with a strong background in Mechanical Engineering from IET Lucknow. Currently working as a TechLead at HCLTech, I specialize in combining cutting-edge technology with practical problem-solving. My expertise spans across Python programming, web development, CAD/CAM tools, and numerical computing. I am driven by a passion for innovation and continuous learning, with a proven track record of delivering high-quality solutions in both academic and professional settings. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of technology.
        </p>
      </div>
    </section>
  )
}
