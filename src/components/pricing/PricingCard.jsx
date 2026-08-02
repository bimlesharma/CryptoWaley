import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";

// Badge colour map
const BADGE_COLORS = {
  "Most Popular": "bg-blue-600 text-white",
  "Best Value":   "bg-emerald-600 text-white",
  "High Reach":   "bg-purple-600 text-white",
  "Popular":      "bg-blue-600 text-white",
};

const PricingCard = ({ service }) => {
  const badgeClass = service.badge ? BADGE_COLORS[service.badge] || "bg-blue-600 text-white" : null;
  const primaryPrice = service.prices[0];
  const extraPrices  = service.prices.slice(1);

  return (
    <div className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden">
      {/* Top accent line for cards with a badge */}
      {service.badge && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />
      )}

      <div className="flex flex-col flex-1 p-6 pt-7">

        {/* Badge */}
        {service.badge && (
          <span className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-4 ${badgeClass}`}>
            {service.badge}
          </span>
        )}

        {/* Service name + tagline */}
        <h2 className="text-xl font-bold text-white mb-1 leading-snug">{service.name}</h2>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">{service.tagline}</p>

        {/* Divider */}
        <div className="border-t border-white/10 mb-5" />

        {/* Primary price — large */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold text-white">{primaryPrice.amount}</span>
            {primaryPrice.unit && (
              <span className="text-gray-400 text-sm font-medium">{primaryPrice.unit}</span>
            )}
          </div>
          {primaryPrice.note && (
            <p className="text-gray-500 text-xs mt-0.5">{primaryPrice.note}</p>
          )}
        </div>

        {/* Extra pricing tiers */}
        {extraPrices.length > 0 && (
          <div className="mt-3 space-y-2 mb-2">
            {extraPrices.map((p, i) => (
              <div key={i} className="bg-white/5 rounded-lg px-3 py-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-blue-300">{p.amount}</span>
                  {p.unit && <span className="text-gray-400 text-xs">{p.unit}</span>}
                </div>
                {p.note && <p className="text-gray-500 text-xs mt-0.5">{p.note}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-white/10 my-4" />

        {/* Feature list */}
        <ul className="flex-1 space-y-2 mb-6">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <FaCheck className="flex-shrink-0 mt-0.5 text-blue-400 text-xs" />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={service.ctaHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-200 group mt-auto"
        >
          Get Started
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-xs" />
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
