import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = LINKS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity, height: 0 };
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return { id, top, height: el.offsetHeight };
      });

      const scrollPos = window.scrollY + window.innerHeight * 0.25;
      let current = offsets[0].id;
      for (let i = 0; i < offsets.length; i++) {
        const { id, top, height } = offsets[i];
        if (scrollPos >= top && scrollPos < top + height) {
          current = id;
          break;
        }
        if (i === offsets.length - 1 && scrollPos >= top) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const getHeaderHeight = () => {
    const el = headerRef.current;
    if (el) {
      const h = el.getBoundingClientRect().height;
      if (h > 0) return Math.round(h);
    }
    const cssVal = getComputedStyle(document.documentElement).getPropertyValue("--site-header-height");
    if (cssVal) {
      const n = parseInt(cssVal.replace("px", "").trim(), 10);
      if (!isNaN(n)) return n;
    }
    return 64;
  };

  const scrollToId = (id) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) {
        window.location.hash = id;
        return;
      }
      const headerHeight = getHeaderHeight();
      const targetY = Math.max(0, el.offsetTop - headerHeight - 8);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }, 80);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/50 border-b border-gray-700/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* propagate "logoHover" to children */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer"
              whileHover="logoHover"
            >
              {/* Avatar with glow ring */}
              <div className="relative w-10 h-10">
                {/* pulsing glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-yellow-400 pointer-events-none"
                  initial={{ scale: 1, opacity: 0 }}
                  variants={{
                    logoHover: {
                      scale: [1, 1.5, 1.8],
                      opacity: [0, 0.5, 0],
                      transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 },
                    },
                  }}
                />
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 font-bold"
                  variants={{
                    logoHover: {
                      rotate: 360,
                      boxShadow: "0 0 18px rgba(250,204,21,0.75), 0 0 36px rgba(250,204,21,0.3)",
                      scale: 1.08,
                    },
                  }}
                  transition={{ duration: 0.55 }}
                >
                  Bk
                </motion.div>
              </div>

              {/* Name + title */}
              <div className="hidden sm:block overflow-hidden">
                <motion.div
                  className="text-sm font-semibold text-gray-100"
                  variants={{ logoHover: { color: "#fbbf24", x: 3 } }}
                  transition={{ duration: 0.2 }}
                >
                  Babalesh Kumar
                </motion.div>
                <motion.div
                  className="text-xs text-gray-400"
                  variants={{ logoHover: { color: "#fcd34d", x: 3 } }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                >
                  Python Developer
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Desktop nav ── */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {LINKS.map((l, idx) => {
              const isActive = active === l.id;
              return (
                /* entry animation wrapper */
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  {/* hover propagation wrapper */}
                  <motion.div
                    className="relative"
                    whileHover="hovered"
                  >
                    {/* subtle background pill on hover */}
                    {!isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-md pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(59,130,246,0.12), rgba(168,85,247,0.12))",
                        }}
                        initial={{ opacity: 0 }}
                        variants={{ hovered: { opacity: 1 } }}
                        transition={{ duration: 0.18 }}
                      />
                    )}

                    <motion.a
                      href={`#${l.id}`}
                      onClick={(e) => handleClick(e, l.id)}
                      className={`text-sm px-4 py-2 rounded-md relative block ${
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "text-gray-300"
                      }`}
                      variants={{
                        hovered: {
                          scale: 1.05,
                          y: -1,
                          color: isActive ? "#facc15" : "#ffffff",
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {l.label}

                      {/* active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                          layoutId="navbar-underline"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* hover underline (non-active) — slides in from centre */}
                      {!isActive && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                          style={{ originX: 0.5 }}
                          initial={{ scaleX: 0 }}
                          variants={{ hovered: { scaleX: 1 } }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* ── Hamburger ── */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="md:hidden p-2 rounded-md text-gray-200 transition-colors"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              whileHover={{
                scale: 1.12,
                color: "#fbbf24",
                backgroundColor: "rgba(250,204,21,0.1)",
                boxShadow: "0 0 12px rgba(250,204,21,0.25)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${
          open ? "bg-black/80 border-t border-gray-700/50" : ""
        }`}
      >
        <motion.div
          className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1"
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          {LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <motion.div
                key={l.id + "-m"}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <motion.a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                  className={`text-left w-full px-3 py-3 rounded-md block relative ${
                    isActive
                      ? "text-yellow-400 font-semibold bg-gray-800/50"
                      : "text-gray-200"
                  }`}
                  whileHover={{
                    x: 6,
                    backgroundColor: isActive
                      ? "rgba(31,41,55,0.6)"
                      : "rgba(59,130,246,0.08)",
                    color: isActive ? "#facc15" : "#ffffff",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-500"
                      layoutId="mobile-sidebar"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {l.label}
                </motion.a>
              </motion.div>
            );
          })}

          <motion.div
            className="pt-3 border-t border-gray-700/50 mt-2"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              className="block px-3 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-center font-semibold shadow-lg shadow-yellow-400/30"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(250,204,21,0.6), 0 0 50px rgba(250,204,21,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
