import React from 'react';
import { FaGlobe } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

/**
 * BlogCard - A reusable component for rendering a single blog post article.
 *
 * Props:
 *  - title (string): The main heading of the blog post.
 *  - author (string): The author string, e.g. "CryptoWaley on 24-06-2024"
 *  - intro (string|node): Optional italic intro paragraph.
 *  - mainImage (string): URL for the primary hero image.
 *  - mainImageAlt (string): Alt text for the hero image.
 *  - paragraphs (Array<string>): Array of body paragraph strings.
 *  - sections (Array<{heading: string, content: string|node, list: Array<string>}>):
 *      Optional array of sub-sections, each with a heading and content/list.
 *  - links (Array<{href: string, label: string, icon: node}>): Social/external links.
 *  - secondaryImage (string): Optional secondary image URL.
 *  - secondaryImageAlt (string): Alt text for the secondary image.
 *  - footerNote (node): Optional footer note (e.g. affiliate link).
 */
const BlogCard = ({
  title,
  author,
  intro,
  mainImage,
  mainImageAlt,
  paragraphs = [],
  sections = [],
  links = [],
  secondaryImage,
  secondaryImageAlt,
  footerNote,
}) => {
  return (
    <div className="flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5">
      <div className="content">
        <h2 className="text-3xl my-2 font-bold">{title}</h2>
        <p className="text-sm">By {author}</p>

        {intro && <p className="my-6 italic">{intro}</p>}

        {mainImage && (
          <div className="flex justify-center">
            <img
              className="rounded-xl border-2 my-2 md:w-[50%] w-full"
              src={mainImage}
              alt={mainImageAlt || title}
            />
          </div>
        )}

        {paragraphs.map((para, i) => (
          <p key={i} className="my-6">{para}</p>
        ))}

        {sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h3 className="text-2xl my-2 font-bold">{section.heading}</h3>
            )}
            {section.content && (
              typeof section.content === 'string'
                ? <p className="my-6">{section.content}</p>
                : <div className="my-6">{section.content}</div>
            )}
            {section.list && section.list.length > 0 && (
              <ul className="list-disc lg:px-10 my-4">
                {section.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}

        {links.length > 0 && (
          <div className="grid md:grid-cols-4 gap-4 gap-3 w-auto justify-center items-center font-bold mt-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6"
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}{link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {secondaryImage && (
        <div className="flex justify-center">
          <img
            className="rounded-xl my-2 md:w-[50%] w-full"
            src={secondaryImage}
            alt={secondaryImageAlt || title}
          />
        </div>
      )}

      {footerNote && <div className="mt-4">{footerNote}</div>}
    </div>
  );
};

export default BlogCard;
