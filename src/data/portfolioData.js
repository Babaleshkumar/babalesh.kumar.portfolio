// src/data/portfolioData.js

export const bio = {
  name: "Babalesh Kumar",
  title: "Full Stack Developer | React & Node.js Enthusiast",
  tagline: "Building seamless, scalable, and modern web applications.",
  about: "This is the About section content, where you detail your professional background, philosophy, and personal interests. Replace this placeholder with the text from your 'about.html' file.",
  resumeLink: "/your-resume.pdf" // Update this link
};

// export const skills = [
//   "JavaScript (ES6+)",
//   "React",
//   "Tailwind CSS",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Git & GitHub",
//   "Vite"
// ];
// src/data/portfolioData.js (Updated Skills Array)

export const skills = [
  { name: "Python", color: "#306998", icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  { name: "Flutter", color: "#42A5F5", icon: 'M10 20v-2h2v2h-2zm4-4v-2h2v2h-2zm4-4v-2h2v2h-2zm-8-4v-2h2v2h-2zm-4 4v-2h2v2H6zm0-4v-2h2v2H6zm8 8v-2h2v2h-2zm-4 0v-2h2v2h-2zm0-4v-2h2v2h-2zm-4-4v-2h2v2H6z' },
  { name: "Ubuntu", color: "#E95420", icon: 'M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm0 4a8 8 0 110 16 8 8 0 010-16z' }, // The specific orange color
  { name: "Git Source Control", color: "#F05032", icon: 'M10 20v-2h2v2h-2zm4-4v-2h2v2h-2zm4-4v-2h2v2h-2zm-8-4v-2h2v2h-2zm-4 4v-2h2v2H6zm0-4v-2h2v2H6zm8 8v-2h2v2h-2zm-4 0v-2h2v2h-2zm0-4v-2h2v2h-2zm-4-4v-2h2v2H6z' },
  // Add other skills like ERPNext, Mongodb, etc. here...
];

export const experience = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description: "Led development of new features for the flagship product using React and Tailwind. Managed backend services with Node.js.",
  },
  {
    title: "Junior Frontend Engineer",
    company: "Innovation Hub",
    duration: "2020 - 2022",
    description: "Contributed to UI/UX improvements and implemented responsive designs across several client projects.",
  },
];

export const projects = [
  { name: "E-commerce Platform", description: "A scalable MERN stack application with payment integration." },
  { name: "Real-time Chat App", description: "Built using Socket.IO for instant messaging capabilities." },
  { name: "Portfolio Site (This one!)", description: "Demonstrating modern React, Vite, and Tailwind CSS." },
];

export const contact = {
  email: "your.email@example.com",
  github: "https://github.com/Babaleshkumar",
  linkedin: "https://linkedin.com/in/yourprofile",
};