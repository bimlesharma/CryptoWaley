import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { getPostBySlug, getRelatedPosts } from "../../data/blogData";
import BlogListingCard from "./BlogListingCard";

// ── Icon resolver ────────────────────────────────────────────────────────────
const LinkIcon = ({ type }) => {
  const icons = {
    globe:    <FaGlobe />,
    twitter:  <FaXTwitter />,
    linkedin: <FaLinkedin />,
    telegram: <FaTelegram />,
  };
  return icons[type] || null;
};

// ── Category colours ─────────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  "Event Coverage": "bg-blue-600",
  "Press Release":  "bg-purple-600",
  "Analysis":       "bg-emerald-600",
};

// ────────────────────────────────────────────────────────────────────────────

const BlogPost = () => {
  const { slug } = useParams();
  const navigate  = useNavigate();
  const post      = getPostBySlug(slug);
  const related   = post ? getRelatedPosts(post.id, 2) : [];

  // Scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // 404 fallback
  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-400 underline">← Back to Blog</Link>
      </div>
    );
  }

  const badgeColor = CATEGORY_COLORS[post.category] || "bg-blue-600";

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── Hero Image ───────────────────────────────────────────────────────── */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt || post.title}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        {/* Title overlay at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 lg:px-20 pb-8">
          <span className={`inline-block ${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide mb-3`}>
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl drop-shadow-lg">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ── Article Container ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-5 md:px-8 pb-24">

        {/* Breadcrumb + Back button */}
        <div className="flex items-center gap-2 text-sm text-gray-500 py-6 border-b border-white/10">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            <FaArrowLeft className="text-xs" />
            Back to Blog
          </button>
          <span className="text-gray-700">/</span>
          <span className="text-gray-400 truncate max-w-[200px] md:max-w-xs">{post.title}</span>
        </div>

        {/* Author & Date meta */}
        <div className="flex items-center gap-6 text-gray-400 text-sm mt-6 mb-8">
          <span className="flex items-center gap-1.5">
            <FaUser className="text-blue-400" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-blue-400" />
            {post.date}
          </span>
        </div>

        {/* Intro / lede */}
        {post.intro && (
          <p className="italic text-gray-300 text-lg leading-relaxed border-l-4 border-blue-600 pl-5 mb-8 bg-white/5 py-4 pr-4 rounded-r-lg">
            {post.intro}
          </p>
        )}

        {/* Body paragraphs */}
        {post.paragraphs.map((para, i) => (
          <p key={i} className="text-gray-300 leading-relaxed mb-5 text-base">
            {para}
          </p>
        ))}

        {/* Sections */}
        {post.sections.map((section, i) => (
          <div key={i} className="mb-7">
            {section.heading && (
              <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 pb-2 border-b border-white/10">
                {section.heading}
              </h2>
            )}
            {section.content && (
              <p className="text-gray-300 leading-relaxed text-base">{section.content}</p>
            )}
            {section.list && section.list.length > 0 && (
              <ul className="list-none mt-3 space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-300 text-base">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Secondary image */}
        {post.secondaryImage && (
          <div className="flex justify-center my-8">
            <img
              src={post.secondaryImage}
              alt={post.secondaryImageAlt || post.title}
              className="rounded-xl max-w-full md:max-w-[60%] border border-white/10"
            />
          </div>
        )}

        {/* External links */}
        {post.links && post.links.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Official Links
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-blue-500/50 text-blue-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <LinkIcon type={link.iconType} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Affiliate link */}
        {post.affiliateLink && (
          <p className="mt-8 text-gray-400 text-sm border-t border-white/10 pt-6">
            {post.affiliateLink.text}{" "}
            <a
              href={post.affiliateLink.href}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 font-bold hover:underline"
            >
              {post.affiliateLink.linkText}
            </a>
          </p>
        )}

        {/* ── Related Posts ──────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-xl font-bold mb-6 text-white">More from CryptoWaley</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rp) => (
                <BlogListingCard key={rp.id} post={rp} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/blog"
            className="flex items-center gap-2 border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 px-6 py-3 rounded-full text-sm font-medium"
          >
            <FaArrowLeft />
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
