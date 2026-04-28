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

      // scroll spy: mark which section is active
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
    onScroll(); // initial call

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // helper to get header height (fallback to CSS var)
  const getHeaderHeight = () => {
    const el = headerRef.current;
    if (el) {
      const h = el.getBoundingClientRect().height;
      if (h > 0) return Math.round(h);
    }
    // fallback to CSS var or default
    const cssVal = getComputedStyle(document.documentElement).getPropertyValue("--site-header-height");
    if (cssVal) {
      const n = parseInt(cssVal.replace("px", "").trim(), 10);
      if (!isNaN(n)) return n;
    }
    return 64; // default
  };

  // Smooth scroll with offset — fixed: use offsetTop and clamp to >= 0
  const scrollToId = (id) => {
    setOpen(false); // close mobile menu first (if open)
    // wait for menu close animation (if any) to finish before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) {
        // fallback jump to hash
        window.location.hash = id;
        return;
      }
      const headerHeight = getHeaderHeight();

      // Use offsetTop (document coordinate) rather than relying on getBoundingClientRect + scrollY
      const targetYUnclamped = el.offsetTop - headerHeight - 8; // 8px extra spacing
      const targetY = Math.max(0, targetYUnclamped);

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }, 80);
  };

  // click handler for anchor-like behavior (prevents default instant jump)
  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/50 border-b border-gray-700/50 shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 font-bold shadow-lg shadow-yellow-400/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                Bk
              </motion.div>
              <div className="hidden sm:block">
                <motion.div 
                  className="text-sm font-semibold text-gray-100"
                  whileHover={{ color: '#fbbf24' }}
                >
                  Babalesh Kumar
                </motion.div>
                <motion.div 
                  className="text-xs text-gray-400"
                  whileHover={{ color: '#fcd34d' }}
                >
                  Python Developer
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop nav */}
          <motion.nav 
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {LINKS.map((l, idx) => {
              const isActive = active === l.id;
              return (
                <motion.div
                  key={l.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <motion.a
                    href={`#${l.id}`}
                    onClick={(e) => handleClick(e, l.id)}
                    className={`text-sm px-4 py-2 rounded-md transition-colors duration-200 relative ${
                      isActive ? "text-yellow-400 font-semibold" : "text-gray-300 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {l.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500"
                        layoutId="navbar-underline"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.nav>

          {/* Right: menu */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="md:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700/40 transition-colors"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${open ? "bg-black/80 border-t border-gray-700/50" : ""}`}
      >
        <motion.div 
          className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1"
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
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
                  className={`text-left w-full px-3 py-3 rounded-md transition-all duration-200 block relative ${
                    isActive ? "text-yellow-400 font-semibold bg-gray-800/50" : "text-gray-200 hover:text-white hover:bg-gray-800/30"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {l.label}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-500"
                      layoutId="mobile-sidebar"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              </motion.div>
            );
          })}
          <motion.div 
            className="pt-3 border-t border-gray-700/50 mt-2"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              className="block px-3 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-center font-semibold shadow-lg shadow-yellow-400/30 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)" }}
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
