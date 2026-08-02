// ---------------------------------------------------------------------------
// Pricing data — normalised schema for all services.
// To enable Media Production tab in the UI, update SHOW_MEDIA_TAB in Pricing.jsx.
// ---------------------------------------------------------------------------

export const advertisingServices = [
  {
    id: 1,
    name: "Event Organisation",
    tagline: "Host your own Web3 event in Delhi NCR",
    badge: null,
    prices: [
      { amount: "$599", unit: "/event", note: null },
    ],
    features: [
      "Co-Working Space (Delhi NCR)",
      "Snacks — Sandwiches, Coffee, Water, Soft Drinks, Tea",
      "Projector setup included",
      "3-hour event duration",
      "Seating capacity: 50–100 attendees",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 2,
    name: "Founder & Executive Interviews",
    tagline: "Long-format video interviews distributed across platforms",
    badge: "Most Popular",
    prices: [
      { amount: "$99",  unit: "/interview", note: "Short format (~5–10 mins)"  },
      { amount: "$499", unit: "/interview", note: "Long format (~45–60 mins)"  },
    ],
    features: [
      "Distribution: YouTube, X, LinkedIn, Instagram",
      "Minimum 10K collective views guaranteed",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 3,
    name: "Reels & Short-Form Clips",
    tagline: "Bite-sized content for maximum social reach",
    badge: "Best Value",
    prices: [
      { amount: "$29", unit: "/video", note: "Reel/Short bundled with Long Format" },
      { amount: "$49", unit: "/video", note: "Standalone Reel/Short only"         },
    ],
    features: [
      "Distribution: YouTube, X, LinkedIn, Instagram",
      "Minimum 10K collective views guaranteed",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 4,
    name: "Educational Content",
    tagline: "Platform tutorials presented by the CryptoWaley team",
    badge: null,
    prices: [
      { amount: "$199", unit: "/video", note: null },
    ],
    features: [
      "5–10 minute tutorial by a CW presenter",
      "Minimum 15K views guaranteed",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 5,
    name: "Sponsorships & Brand Promotion",
    tagline: "Ongoing brand visibility across all CryptoWaley channels",
    badge: "High Reach",
    prices: [
      { amount: "$499", unit: "/month", note: null },
    ],
    features: [
      "Distribution: YouTube, X, LinkedIn, Instagram",
      "Brand graphic featured in every video",
      "Physical standees at events",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 6,
    name: "Thought Leadership Shoutouts",
    tagline: "Quick, powerful mentions in CryptoWaley videos",
    badge: null,
    prices: [
      { amount: "$25", unit: "/video", note: null },
    ],
    features: [
      "Shoutouts placed within video content",
      "Choose one platform: YouTube, X, LinkedIn, or Instagram",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
];

// ---------------------------------------------------------------------------
// Media Production services — included in data but tab hidden in UI.
// To show: set SHOW_MEDIA_TAB = true in Pricing.jsx
// ---------------------------------------------------------------------------

export const mediaServices = [
  {
    id: 1,
    name: "Video Editing",
    tagline: "Professional editing for long-form and short-form content",
    badge: null,
    prices: [
      { amount: "$9",  unit: "/min",   note: "Long-format video (e.g. 4 min = ~$40)" },
      { amount: "$15", unit: "/video", note: "Reels & Shorts (30 or 60 sec)"          },
    ],
    features: [
      "Colour grading & audio sync",
      "Captions & lower thirds",
      "Platform-optimised exports",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 2,
    name: "Podcast Editing",
    tagline: "Crisp, polished edits for podcast episodes",
    badge: "Popular",
    prices: [
      { amount: "$69",  unit: "",  note: "~30-minute episode"   },
      { amount: "$119", unit: "",  note: "~60-minute episode"   },
      { amount: "$169", unit: "",  note: "~90-minute episode"   },
    ],
    features: [
      "Noise reduction & audio mastering",
      "Add +$20 for custom thumbnail",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
  {
    id: 3,
    name: "Podcast Shoot",
    tagline: "Full studio setup in Delhi/NCR for your podcast",
    badge: null,
    prices: [
      { amount: "$49", unit: "", note: "Single podcast shoot"  },
      { amount: "$79", unit: "", note: "Double podcast shoot"  },
    ],
    features: [
      "Green screen with stand",
      "2 microphones (1 wireless, 1 wired)",
      "Cameraperson included",
      "Monopods & tripods available",
      "Location: Delhi / NCR",
    ],
    ctaHref: "https://linktr.ee/cryptowaley",
  },
];
