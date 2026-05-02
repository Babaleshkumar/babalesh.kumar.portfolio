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
    title: "Senior TechLead",
    company: "hctech",
    duration: "Oct 2025 - Present",
    description: "Promoted to Senior TechLead overseeing technical strategy, team leadership, and architecture decisions. Leading cross-functional teams and driving innovation.",
  },
  {
    title: "Senior Web Developer",
    company: "hctech",
    duration: "2022 - Sep 2025",
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
  {
    id: 1,
    title: "Store Support Agent",
    duration: "2025",
    category: "AI/ML",
    description: "Built a multi-agent AI order support system using PyVegas, LangGraph, and LangChain with a Supervisor routing Slack messages to specialized agents.",
    highlights: [
      "Designed multi-agent AI order support system using PyVegas, LangGraph, and LangChain with Supervisor routing intelligent message dispatch.",
      "Developed Slack bot with real-time thread-aware context management enabling multi-turn conversations with seamless order parameter persistence.",
      "Integrated enterprise order management APIs with multi-step validation (fraud, payment, shipment), MTN-based activation with fallback logic, and Docker-ready deployment."
    ],
    tech: ["Python", "PyVegas", "LangGraph", "LangChain", "Slack API", "Docker"],
    colors: ["#306998", "#FF8C42", "#8B0000", "#4A90E2", "#FFD700", "#FF6B6B"],
    gradient: "from-blue-600 to-indigo-600",
    icon: "🤖"
  },
  {
    id: 2,
    title: "Fetch Similar AYS Tickets",
    duration: "2024",
    category: "AI/ML",
    description: "Developed AI-powered semantic ticket search using PyVegas, Vegas LLM, and ChromaDB for efficient incident retrieval with real-time analytics.",
    highlights: [
      "Engineered semantic ticket search using PyVegas, Vegas LLM, and ChromaDB for efficient and accurate incident retrieval.",
      "Automated ServiceNow incident data pipeline with intelligent deduplication and vector embeddings for similarity matching.",
      "Built Streamlit analytics dashboard with real-time charts, ticket trend insights, and pattern recognition capabilities."
    ],
    tech: ["Python", "PyVegas", "ChromaDB", "Streamlit", "LLM", "ServiceNow API"],
    colors: ["#306998", "#FF6B6B", "#4A90E2", "#50C878", "#FFD700", "#FF8C42"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "🔍"
  },
  {
    id: 3,
    title: "Ops Report UI",
    duration: "2026",
    category: "Full Stack Development",
    description: "Built a full-stack Ops Reporting tool with React, Python/Flask, and Oracle DB for automated report generation and real-time preview.",
    highlights: [
      "Developed full-stack Ops Reporting tool using React frontend with Vite and Tailwind CSS, Python/Flask backend, and Oracle DB persistence.",
      "Created Python REST APIs for dynamic Oracle SQL execution, comprehensive query sanitization, and secure report persistence.",
      "Implemented multi-step form for report onboarding, scheduling, and email automation with live preview functionality."
    ],
    tech: ["React", "Python", "Flask", "OracleDB", "Vite", "Tailwind CSS"],
    colors: ["#61dafb", "#306998", "#FF6B6B", "#FF8C42", "#50C878", "#4A90E2"],
    gradient: "from-green-500 to-cyan-500",
    icon: "📊"
  },
  {
    id: 4,
    title: "Genetic Algorithm Optimizer",
    duration: "Aug 2023 – Sep 2023",
    category: "AI/ML",
    description: "Implemented advanced genetic algorithm for solving complex optimization problems with visualization dashboard.",
    highlights: [
      "Developed GA framework with mutation, crossover, and selection operations for population evolution.",
      "Created interactive dashboard with D3.js for real-time visualization of population fitness metrics.",
      "Optimized algorithm performance achieving 40% faster convergence with adaptive parameters.",
      "Tested on multiple benchmark functions (Sphere, Rastrigin, Rosenbrock) with excellent results."
    ],
    tech: ["Python", "NumPy", "D3.js", "React", "TensorFlow", "Matplotlib"],
    colors: ["#306998", "#0071ba", "#f7931e", "#61dafb", "#ff6b6b", "#ee5a6f"],
    gradient: "from-orange-500 to-red-500",
    icon: "🧬",
    github: "https://github.com/Babaleshkumar/Genetic-Algorithm"
  },
  {
    id: 5,
    title: "RAG PDF Search Engine",
    duration: "Jun 2023 – Aug 2023",
    category: "AI/ML",
    description: "Retrieval Augmented Generation system for intelligent PDF search and Q&A using LLMs and vector embeddings.",
    highlights: [
      "Implemented semantic search using OpenAI embeddings with vector database (Pinecone) for efficient retrieval.",
      "Built RAG pipeline combining document retrieval with LLM for accurate context-aware responses.",
      "Created user-friendly interface with real-time search results and source citation tracking.",
      "Achieved 95% accuracy in answer relevance with sub-100ms query response times."
    ],
    tech: ["Python", "OpenAI API", "Pinecone", "LangChain", "FastAPI", "React"],
    colors: ["#306998", "#00a8e8", "#00c9ff", "#92fe9d", "#61dafb", "#ff6b6b"],
    gradient: "from-cyan-500 to-blue-500",
    icon: "📄",
    github: "https://github.com/Babaleshkumar/rag-application-pdf-search"
  },
  {
    id: 6,
    title: "2D Lid-Driven Cavity Simulation",
    duration: "Mar 2023 – May 2023",
    category: "Computational Physics",
    description: "CFD simulation project implementing Navier-Stokes equations for fluid dynamics visualization.",
    highlights: [
      "Implemented finite difference method for solving Navier-Stokes equations with GPU acceleration.",
      "Achieved stable simulations for Reynolds numbers up to 5000 with minimal numerical diffusion.",
      "Created real-time 3D visualization of velocity and pressure fields using Matplotlib and VTK.",
      "Validated results against published benchmark data with excellent agreement."
    ],
    tech: ["Python", "NumPy", "SciPy", "CUDA", "VTK", "Matplotlib"],
    colors: ["#306998", "#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6"],
    gradient: "from-purple-500 to-pink-500",
    icon: "🌊"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Github Copilot",
    issuer: "Microsoft",
    issued: "Feb 2026",
    expires: "Feb 2028",
    credentialId: "630A98F601A13EB5",
    gradient: "from-blue-500 to-cyan-500",
    icon: "🤖"
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jun 2024",
    expires: "Jun 2027",
    credentialId: "AWS04464505",
    gradient: "from-purple-500 to-pink-500",
    icon: "☁️"
  }
];

export const contact = {
  email: "your.email@example.com",
  github: "https://github.com/Babaleshkumar",
  linkedin: "https://linkedin.com/in/yourprofile",
};