import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

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
    highlights: ["Solidworks", "ANSYS", "Thermal Engineering", "Heat Transfer"]
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
    highlights: ["CFD Analysis", "Aerodynamics", "Propulsion", "ANSYS"]
  }
];

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>Education</h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, idx) => (
            <div key={edu.id} className="flex flex-col" style={{ animation: `fadeInUp 0.6s ease-out ${(idx + 1) * 0.2}s forwards`, opacity: 0 }}>
              {/* Card */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-yellow-400/20 transition-all h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400">{edu.type}</h3>
                    <p className="text-sm text-gray-400">{edu.degree}</p>
                  </div>
                </div>

                {/* Main info */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{edu.field}</h4>
                  <p className="text-gray-300 font-medium mb-3">{edu.institution}</p>

                  <div className="flex flex-col gap-2 text-gray-400 text-sm mb-4">
                    {/*  */}
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={14} className="text-yellow-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                </div>

                {/* Details box */}
                <div className="bg-gray-700 px-4 py-3 rounded mb-4 text-gray-200 text-sm font-medium">
                  {edu.details}
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-gray-400 text-xs font-semibold mb-2">KEY SKILLS:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full border border-yellow-400/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
