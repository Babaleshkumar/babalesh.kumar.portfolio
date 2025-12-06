import React, { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  { id: 1, title: "CODESOFT Internship", img: "/portfolio-1.jpg", subtitle: "Web Design", github: "https://github.com/Babaleshkumar/CODSOFT" },
  { id: 2, title: "Numerical Methods", img: "/portfolio-2.jpg", subtitle: "IITG Lab", github: "https://github.com/Babaleshkumar/Numerical-Methods-" },
  { id: 3, title: "Genetic Algorithm", img: "/portfolio-3.jpg", subtitle: "Soft Computing", github: "https://github.com/Babaleshkumar/Genetic-Algorithm" },
  { id: 4, title: "Tic-Tac-Toe", img: "/portfolio-4.jpg", subtitle: "Java Project", github: "https://github.com/Babaleshkumar/Tic-Tac-Toe-Game" },
  { id: 5, title: "2D Lid Driven Cavity", img: "/portfolio-5.jpg", subtitle: "Lid Driven Cavity", github: "https://github.com/Babaleshkumar/2-D-Lid-driven-Cavity" },
  { id: 6, title: "RAG pdf search", img: "/portfolio-6.jpg", subtitle: "RAG pdf search", github: "https://github.com/Babaleshkumar/rag-application-pdf-search" },
  
];

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const ref = useScrollAnimation();
  const itemsPerPage = 6;
  const displayedProjects = showMore ? projects : projects.slice(0, itemsPerPage);
  return (
    <section id="portfolio" className="py-16" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {displayedProjects.map((p, idx) => (
          <div
            key={p.id}
            className="relative group overflow-hidden rounded-sm"
            style={{ minHeight: 1, animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s forwards`, opacity: 0 }}
          >
            {/* IMPORTANT: image forced to display as block and zIndex 0 */}
            <img
              src={p.img}
              alt={p.title}
              loading="eager"
              style={{
                display: "block",
                width: "100%",
                height: "14rem", // tailwind h-56
                objectFit: "cover",
                transformOrigin: "center",
                zIndex: 0,
                // debug border (remove later)
                border: "1px solid rgba(255,255,255,0.03)",
                backgroundColor: "#2b2b2b"
              }}
              className="group-hover:scale-110 transition-transform duration-500 ease-out"
              onError={(e) => {
                // fallback to a working placeholder so tiles never stay black
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://picsum.photos/800/600?random=${p.id}`;
                e.currentTarget.style.objectFit = "cover";
              }}
            />

            {/* overlay: use inline rgba style to force correct opacity (avoids tailwind class issues) */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                zIndex: 10,
                backgroundColor: "rgba(0,0,0,0.18)", // subtle dark overlay
                transition: "background-color .25s ease"
              }}
            >
              {/* inner content area; starts hidden & fades in on hover */}
              <div
                className="text-center px-4"
                style={{
                  opacity: 0,
                  transform: "translateY(6px)",
                  transition: "opacity .25s ease, transform .25s ease"
                }}
              >
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{p.subtitle}</p>
                <a 
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-md text-sm hover:bg-yellow-500 transition-colors"
                >
                  See More
                </a>
              </div>
            </div>

            {/* Hover behavior controlled by a small scriptable class toggle using CSS selectors.
                We add an extra element to handle the fade-in so the overlay doesn't hide the image. */}
            <style>{`
              .group:hover > img { transform: scale(1.05); }
              .group:hover > div.absolute > div { opacity: 1 !important; transform: translateY(0) !important; }
              /* on very narrow screens, lower the overlay darkness */
              @media (max-width: 640px) {
                .group > div.absolute { background-color: rgba(0,0,0,0.12); }
              }
            `}</style>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button 
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 rounded-md bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition-colors"
        >
          {showMore ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
