import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * Feature block for Section 3.
 * 
 * @param {string} heading - Feature title
 * @param {string} description - Feature body text
 * @param {string} img - URL/path for the feature image
 * @param {boolean} reverse - If true, image is on left and text on right.
 * @param {string} linkText - Text for the CTA link
 * @param {string} linkUrl - URL for the CTA link
 */
function Feature({ heading, description, img, reverse = false, linkText, linkUrl }) {
  return (
    <div className={`py-12 px-6 md:px-10 lg:px-20 flex flex-col gap-10 lg:gap-20 items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Text Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            {heading}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {description}
          </p>
          
          {linkText && linkUrl && (
            <a 
              href={linkUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors duration-200 group"
            >
              {linkText}
              <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-lg aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl shadow-blue-900/20">
          <img 
            src={img} 
            alt={heading} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Subtle gradient overlay to blend with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>

    </div>
  );
}

export default Feature;
