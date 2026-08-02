import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

/**
 * TeamCard component for Section 6.
 * Replaces the old Cards.jsx which used dangerouslySetInnerHTML.
 */
const TeamCard = ({ name, role, description, image, twitterUrl, linkedinUrl }) => {
  return (
    <div className="group relative flex flex-col w-full max-w-sm rounded-3xl border border-white/10 bg-[#0a0a16] overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300">
      
      {/* Image Header */}
      <div className="w-full h-80 overflow-hidden relative bg-black">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient fade to blend image with card body */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a16] to-transparent pointer-events-none" />
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 px-6 pb-8 pt-2 relative z-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 font-semibold text-sm mb-4">{role}</p>
        
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
          {description}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-auto border-t border-white/10 pt-5">
          {twitterUrl && (
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-200"
              aria-label={`${name}'s Twitter`}
            >
              <FaTwitter className="text-xl" />
            </a>
          )}
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-200"
              aria-label={`${name}'s LinkedIn`}
            >
              <FaLinkedin className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
