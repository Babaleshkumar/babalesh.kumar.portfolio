import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 relative">
      <StarsBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pt-10">
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Education />
          <Experience />
          <Publications />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}
