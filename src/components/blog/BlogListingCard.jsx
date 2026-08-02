import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaUser } from "react-icons/fa";

// Category badge colour map
const CATEGORY_COLORS = {
  "Event Coverage": "bg-blue-600",
  "Press Release":  "bg-purple-600",
  "Analysis":       "bg-emerald-600",
};

const BlogListingCard = ({ post }) => {
  const badgeColor = CATEGORY_COLORS[post.category] || "bg-blue-600";

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/60 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt || post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide`}
        >
          {post.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-blue-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser className="text-blue-400" />
            {post.author}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bold text-white text-base leading-snug mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm line-clamp-3 flex-1 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-200">
          Read More
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
};

export default BlogListingCard;
