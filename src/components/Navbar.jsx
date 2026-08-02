import React, { useState } from "react";
import cwlogo from "/assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import NavButton from "./NavButton";

// ── Single source of truth for all nav items ──────────────────────────────
const NAV_ITEMS = [
  { label: "Home",        id: "home"        },
  { label: "Features",    id: "features"    },
  { label: "About us",   id: "about"       },
  { label: "Testimonial", id: "testimonial" },
  { label: "Stats",       id: "stats"       },
  { label: "Team",        id: "team"        },
  { label: "Contact",     id: "footer"      },
  { label: "Blogs",       id: "blog"        },
  { label: "Pricing",     id: "pricing"     },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="text-white absolute w-full font-bold bg-transparent flex justify-between items-center h-[10vh] px-6 md:px-10 lg:px-20 z-50">
      {/* Logo */}
      <div className="left">
        <a href="/" className="h-12">
          <img src={cwlogo} alt="CryptoWaley Logo" className="h-16" />
        </a>
      </div>

      {/* Hamburger icon — mobile only */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white text-xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FaTimes className="transition duration-300 transform rotate-45" />
          ) : (
            <FaBars className="transition duration-300" />
          )}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-center items-center space-x-5">
        {NAV_ITEMS.map((item) => (
          <NavButton key={item.id} data={item.label} id={item.id} />
        ))}
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute flex justify-end -ml-6 top-[10vh] w-full h-screen p-5 text-white z-20 transition-opacity duration-300 opacity-100 bg-gradient-to-r from-[rgba(0,0,0,.3)] via-[rgba(0,0,0,0.8)] to-[#181481]">
          <ul className="text-center py-4 text-right text-xl mr-0 mt-5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="block py-3 text-white">
                {/* Pass closeMenu so the overlay hides after navigation */}
                <NavButton data={item.label} id={item.id} onNavigate={closeMenu} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
