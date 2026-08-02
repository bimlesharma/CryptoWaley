import React, { useState } from "react";
import { FaStar, FaHandshake, FaVideo } from "react-icons/fa";
import { advertisingServices, mediaServices } from "../data/pricingData";
import PricingCard from "./pricing/PricingCard";

// ─────────────────────────────────────────────────────────────────────────────
// Set to true to show the "Media Production" tab in the UI
// ─────────────────────────────────────────────────────────────────────────────
const SHOW_MEDIA_TAB = false;

const TABS = [
  { id: "advertising", label: "Advertising Services", icon: <FaStar /> },
  // Media tab is defined here — it appears in the UI only when SHOW_MEDIA_TAB is true
  ...(SHOW_MEDIA_TAB
    ? [{ id: "media", label: "Media Production", icon: <FaVideo /> }]
    : []),
];

const STATS = [
  { value: "10K+",  label: "Guaranteed Views"   },
  { value: "150+",  label: "Media Partnerships"  },
  { value: "100+",  label: "Events Covered"      },
  { value: "45+",   label: "Cities Reached"      },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("advertising");

  const services =
    activeTab === "advertising" ? advertisingServices : mediaServices;

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-black via-black to-[rgba(47,40,255,0.4)] text-white">

      {/* ── Hero Header ───────────────────────────────────────────────────── */}
      <div className="pt-32 pb-12 px-5 md:px-10 lg:px-20 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3 relative">
          CryptoWaley Media
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 relative">
          Advertise with CW
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto relative">
          Reach India's fastest-growing Web3 &amp; crypto community through
          exclusive interviews, event coverage, educational content, and branded campaigns.
        </p>

        {/* Stats bar */}
        <div className="flex justify-center flex-wrap gap-8 md:gap-16 mt-10 relative">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tab Switcher (only visible when SHOW_MEDIA_TAB = true) ────────── */}
      {SHOW_MEDIA_TAB && (
        <div className="flex justify-center gap-3 flex-wrap px-5 pb-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/40"
                  : "border-white/20 text-gray-400 hover:border-blue-500 hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Pricing Cards Grid ────────────────────────────────────────────── */}
      <div className="px-5 md:px-10 lg:px-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <PricingCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* ── Custom Package CTA Banner ─────────────────────────────────────── */}
      <div className="mx-5 md:mx-10 lg:mx-20 mb-20 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-blue-900/30 px-8 py-10 text-center relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />

        <FaHandshake className="text-blue-400 text-4xl mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Need a Custom Package?
        </h2>
        <p className="text-gray-400 text-base mb-6 max-w-lg mx-auto">
          We offer free consultations to build a package tailored to your brand, budget, and goals.
          Let's talk!
        </p>
        <a
          href="https://linktr.ee/cryptowaley"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
        >
          Get in Touch →
        </a>
      </div>
    </div>
  );
};

export default Pricing;
