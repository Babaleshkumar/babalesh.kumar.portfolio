import React, { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
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
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "backdrop-blur-sm bg-black/40 border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400 text-gray-900 font-bold shadow">
                Bk
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-100">Babalesh Kumar</div>
                <div className="text-xs text-gray-400">Python Developer</div>
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`text-sm px-3 py-2 rounded-md transition-colors duration-150 ${
                    isActive ? "text-yellow-400 font-semibold" : "text-gray-300 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Right: menu */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700/40"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/70 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {LINKS.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id + "-m"}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                  className={`text-left w-full px-3 py-3 rounded-md transition-colors ${
                    isActive ? "text-yellow-400 font-semibold" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <div className="pt-3 border-t border-gray-800 mt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
                className="block px-3 py-2 rounded-md bg-yellow-400 text-gray-900 text-center font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
