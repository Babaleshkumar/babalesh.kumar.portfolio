import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const items = [
  {
    id: 1,
    year: "Oct 2023",
    title: "TechLead",
    company: "HCLTech, Chennai",
    body:
      "Leading technical initiatives and driving innovation in software development. Responsible for architecture design, mentoring team members, and ensuring high-quality deliverables. Working on advanced projects involving temporal systems and enterprise solutions.",
  },
  {
    id: 2,
    year: "Sep 2023",
    title: "Web Development Trainee",
    company: "CODSOFT",
    body:
      "Developed Netflix Landing page clone using HTML, CSS, Bootstrap, and jQuery. Created a personal Portfolio website and a Calculator interface. Gained hands-on experience in front-end technologies and responsive design principles.",
  },
  {
    id: 3,
    year: "Jul 2023",
    title: "Teaching Assistant",
    company: "IIT Guwahati - Data Acquisition Lab",
    body:
      "Assisted Prof. Vinayak Kulkarni in conducting Data Acquisition Lab sessions. Guided students through experimental procedures, data collection methods, and analysis techniques in mechanical engineering.",
  },
  {
    id: 4,
    year: "Jul 2018",
    title: "Industrial Trainee",
    company: "UPSRTC Lucknow",
    body:
      "Completed four-week industrial training program. Gained practical knowledge about vehicle maintenance, servicing operations, and industrial problem-solving approaches in the transportation sector.",
  },
];

export default function Experience() {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="py-14" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold mb-10 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>Experience</h2>

      <div className="relative">
        {/* vertical timeline line */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-px bg-gray-600" />

        <div className="space-y-12">
          {items.map((it, idx) => (
            <div key={it.id} className="relative md:pl-28 pl-4" style={{ animation: `fadeInUp 0.6s ease-out ${(idx + 1) * 0.15}s forwards`, opacity: 0 }}>
              {/* year tag */}
              <div className="absolute -left-2 md:left-6 top-0">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm">{it.year}</div>
                  {/* small golden dot */}
                  {/* <div className="w-3 h-3 rounded-full shadow-md" /> */}
                </div>
              </div>

              <div className="bg-transparent">
                <h3 className="text-xl font-semibold text-gray-100">{it.title}</h3>
                <div className="text-sm text-gray-300 mb-3">{it.company}</div>
                <p className="text-gray-400 leading-relaxed max-w-3xl">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
