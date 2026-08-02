import React, { useState } from "react";
import { blogPosts } from "../../data/blogData";
import BlogListingCard from "./BlogListingCard";

const CATEGORIES = ["All", "Event Coverage", "Press Release", "Analysis"];

const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-black via-black to-[rgba(47,40,255,0.4)] text-white">
      {/* ── Hero Header ─────────────────────────────────────────────────────── */}
      <div className="pt-32 pb-12 px-5 md:px-10 lg:px-20 text-center relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3 relative">
          CryptoWaley Media
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 relative">
          Blog &amp; Insights
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto relative">
          Event coverage, press releases, and deep dives into India's Web3 ecosystem.
        </p>

        {/* Stats bar */}
        <div className="flex justify-center gap-8 mt-8 relative">
          {[
            { value: "5+",   label: "Articles" },
            { value: "100+", label: "Events Covered" },
            { value: "150+", label: "Partnerships" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Category Filter ──────────────────────────────────────────────────── */}
      <div className="flex justify-center gap-3 flex-wrap px-5 pb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/40"
                : "border-white/20 text-gray-400 hover:border-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Card Grid ───────────────────────────────────────────────────────── */}
      <div className="px-5 md:px-10 lg:px-20 pb-20">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No posts in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogListingCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListing;
