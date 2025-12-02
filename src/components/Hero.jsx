import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

/**
 * Update the `links` array below with your real profile URLs.
 * If you want the click to open in same tab, remove `target`/`rel`.
 */

const links = [
  { id: "facebook", href: "https://www.facebook.com/babalesh.kumar.iitg/", label: "Facebook", icon: <FaFacebookF /> },
    { id: "twitter", href: "https://x.com/BABALESH1", label: "Twitter", icon: <FaTwitter /> },
    { id: "linkedin", href: "https://www.linkedin.com/in/babalesh-kumar-369887225/", label: "LinkedIn", icon: <FaLinkedinIn /> },
    { id: "whatsapp", href: "https://wa.me/9457754711", label: "WhatsApp", icon: <SiWhatsapp /> }
];

export default function Hero() {
  return (
    <section className="hero-wrap grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      {/* LEFT content */}
      <div className="pr-6 md:pr-12">
        <p className="text-sm text-gray-400 mb-4" style={{ animation: "fadeInUp 0.6s ease-out forwards" }}>I'M</p>
        <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight" style={{ animation: "fadeInUp 0.6s ease-out 0.1s forwards", opacity: 0 }}>
          <span className="text-gray-300">Babalesh </span>
          <span className="text-yellow-400">Kumar</span>
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl" style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
          M.Tech in Aerodynamics & Propulsion | Python Developer | TechLead at HCLTech
        </p>

        <div className="mt-8" style={{ animation: "fadeInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}>
          <a
            href="#contact"
            className="inline-block px-5 py-2 rounded-lg border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT portrait + social stack */}
      <div className="relative flex items-center justify-end" style={{ animation: "slideInRight 0.6s ease-out 0.2s forwards", opacity: 0 }}>
        {/* portrait container */}
        <div className="w-full max-w-[420px] h-[420px] rounded-l-2xl overflow-hidden shadow-soft-card relative">
          <img
            src="/hero-photo.png"
            alt="portrait"
            className="block w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.85]"
          />
        </div>

        {/* social vertical stack: positioned to the right of portrait */}
        <div className="hidden md:flex flex-col items-center ml-6 relative z-20">
          {/* gold accent vertical line */}
          <div
            className="w-0.5 h-36 mb-6"
            style={{ background: "linear-gradient(180deg, rgba(224,178,91,1), rgba(224,178,91,0.45))" }}
            aria-hidden="true"
          />

          {/* icons */}
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <div key={l.id} className="relative group">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-[#111214]/50 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 text-white shadow"
                  title={l.label}
                >
                  <span className="text-sm">{l.icon}</span>
                </a>
                {/* Tooltip on hover */}
                <div className="absolute left-full ml-3 px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-2">
                  {l.icon}
                  <span>{l.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For small screens: show icons below portrait (optional) */}
        <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {links.map((l) => (
            <a
              key={l.id + "-sm"}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#111214]/50 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 text-white shadow"
              title={l.label}
            >
              <span className="text-sm">{l.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
