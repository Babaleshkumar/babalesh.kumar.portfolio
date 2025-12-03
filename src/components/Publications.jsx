import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    ]
  }
];

export default function Publications() {
  const ref = useScrollAnimation();

  return (
    <section id="publications" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>Publications</h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {publicationsData.map((pub, idx) => (
          <div
            key={pub.id}
            className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
            style={{ animation: `fadeInUp 0.6s ease-out ${(idx + 1) * 0.15}s forwards`, opacity: 0 }}
          >
            {/* Header with title and link */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-sm text-gray-400">{pub.date}</p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-semibold hover:bg-yellow-500 transition-colors flex items-center gap-2"
              >
                <span>View</span>
                <FaExternalLinkAlt size={16} />
              </a>
            </div>

            {/* Key points */}
            <div className="space-y-3">
              {pub.points.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
