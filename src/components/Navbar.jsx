import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import cwlogo from "/assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

// ── Nav item definitions ──────────────────────────────────────────────────────

// Scroll links: navigate to a section on the home page
const MAIN_LINKS = [
  { label: "Features",    scrollId: "features"    },
  { label: "About",       scrollId: "about"       },
  { label: "Testimonial", scrollId: "testimonial" },
  { label: "Stats",       scrollId: "stats"       },
  { label: "Team",        scrollId: "team"        },
];

// Page links: route to a different URL
const PAGE_LINKS = [
  { label: "Blog",    path: "/blog"    },
  { label: "Pricing", path: "/pricing" },
];

// ─────────────────────────────────────────────────────────────────────────────

function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate  = useNavigate();
  const pathname  = location.pathname;

  // ── Scroll-aware background ─────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount to handle page refresh mid-scroll
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close menu on Escape key ───────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // ── Lock body scroll when drawer is open ───────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ── Close drawer on route change ───────────────────────────────────────
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // ── Navigate to a section on the home page ─────────────────────────────
  const handleScrollNav = (scrollId) => {
    closeMenu();
    if (pathname === "/") {
      document.getElementById(scrollId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToId: scrollId } });
    }
  };

  return (
    <>
      {/* ── Fixed Navbar ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[70px] px-5 md:px-10 lg:px-20 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={cwlogo} alt="CryptoWaley" className="h-14" />
        </Link>

        {/* Desktop: Main scroll links */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-7"
          aria-label="Main navigation"
        >
          {MAIN_LINKS.map((link) => (
            <button
              key={link.scrollId}
              onClick={() => handleScrollNav(link.scrollId)}
              className="text-sm font-normal text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop: Page links + CTA */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {/* Vertical divider */}
          <div className="h-4 w-px bg-white/20 mx-1" />

          {PAGE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium whitespace-nowrap transition-all duration-200 pb-0.5 ${
                pathname === link.path
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="https://linktr.ee/cryptowaley"
            target="_blank"
            rel="noreferrer"
            className="ml-1 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile: Hamburger button */}
        <button
          className="md:hidden text-white text-xl p-1 rounded-md hover:bg-white/10 transition-colors duration-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* ── Mobile: Backdrop overlay ─────────────────────────────────────── */}
      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile: Slide-in Drawer ──────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#06060f] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <img src={cwlogo} alt="CryptoWaley" className="h-10" />
          <button
            onClick={closeMenu}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
            aria-label="Close menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav
          className="flex flex-col flex-1 px-4 py-5 gap-0.5 overflow-y-auto text-white"
          aria-label="Mobile navigation"
        >
          {/* Section links */}
          <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest px-3 mb-2">
            Explore
          </p>
          {MAIN_LINKS.map((link) => (
            <button
              key={link.scrollId}
              onClick={() => handleScrollNav(link.scrollId)}
              className="text-left text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium px-3 py-2.5 rounded-lg transition-all duration-200"
            >
              {link.label}
            </button>
          ))}

          {/* Page links */}
          <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest px-3 mt-5 mb-2">
            Pages
          </p>
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`text-base font-medium px-3 py-2.5 rounded-lg transition-all duration-200 ${
                pathname === link.path
                  ? "text-white bg-blue-600/20 border-l-2 border-blue-500 pl-[10px]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA at drawer bottom */}
        <div className="px-4 py-5 border-t border-white/10">
          <a
            href="https://linktr.ee/cryptowaley"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-200"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
