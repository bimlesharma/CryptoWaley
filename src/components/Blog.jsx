import React from 'react';
import { FaGlobe } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import BlogCard from './BlogCard';

import b1img from '/assets/img/blog1/pepe.jpg';
import b1img1 from '/assets/img/blog1/pepe1.png';
import b2img from '/assets/img/blog2/ibw.jpg';
import b3img from '/assets/img/blog3/ibw.jpg';
import b4img from '/assets/img/blog4/ibt25.png';
import b5img from '/assets/img/blog5/ibw2025.jpg';

// ---------------------------------------------------------------------------
// Blog post data — add new posts here. Newest first.
// ---------------------------------------------------------------------------

const IBW_LINKS_2024 = [
  { href: "https://indiablockchainweek.com/", label: "Website", icon: <FaGlobe /> },
  { href: "https://twitter.com/IBWofficial", label: "X", icon: <FaXTwitter /> },
  { href: "https://www.linkedin.com/company/ibwofficial/", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://t.me/ibw_official", label: "Telegram", icon: <FaTelegram /> },
];

const blogPosts = [
  // ── Blog 5 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    title: "Bengaluru Gears Up for IBW2025, India's Biggest Web3 Summit",
    author: "CryptoWaley on 20-11-2025",
    mainImage: b5img,
    mainImageAlt: "IBW 2025",
    paragraphs: [
      "Bengaluru, November 19, 2025: As India strengthens its position as one of the world's fastest-growing markets in the global Web3 economy, India Blockchain Week (IBW 2025) returns for its third and largest edition from December 1–7, 2025. The week-long series will convene global investors, policymakers, and innovators in Bengaluru, with the main IBW 2025 Conference scheduled for December 2–3 at the Sheraton Grand Convention Centre. Binance and Aptos Foundation, globally recognized leaders in blockchain, are Title Sponsors of IBW2025, reinforcing the conference as a hub for Web3 innovation and talent.",
      "Renowned for uniting India's Web3 ecosystem with global leaders, IBW 2025 will feature more than 100 side events, workshops, and networking sessions, hosted by organizations including Hashed Emergent, Binance, Aptos Foundation, Polygon, Devfolio, TON, Cardano, and others.",
      "With over 1,200 web3 startups, 35 million active crypto users across centralized exchanges, the second largest Web3 developer base, and the highest crypto adoption rate in the world for the third consecutive year, India represents one of the most important markets for the future of crypto.",
      "Hosted by Hashed Emergent, a web3 venture capital firm dedicated to accelerating mass adoption of web3 in emerging markets, the IBW 2025 Conference will feature 100+ speakers spanning entrepreneurs, policymakers, and investors.",
    ],
    sections: [
      {
        heading: "Government Leadership and Support",
        content: "Shri Priyank M. Kharge, Minister for Electronics, Information Technology, Biotechnology, and Rural Development & Panchayat Raj, Government of Karnataka will be delivering the opening keynote on Day 2 of the conference. This comes at a pivotal moment when the government of Karnataka has announced a INR 518 Crore Start-up policy 2025-2030 to support the state's innovation ecosystem, including blockchain start-ups.",
      },
      {
        heading: "Notable Industry Speakers",
        content: "Other notable industry speakers include Sreeram Kannan (Founder & CEO, Eigen Labs), Sandeep Nailwal (Co-Founder, Polygon), Avery Ching (Co-Founder & CEO, Aptos Labs), Kushal Manupati (Regional Growth & Ops Lead of South Asia, Binance), Akshay BD (NCMO, Solana Foundation), Sébastien Borget (Co-Founder & COO, The Sandbox), Mark Rydon (Co-Founder & CEO, Aethir), John O'Loghlen (Managing Director, APAC – Coinbase), and many more.",
      },
      {
        heading: "Sponsor Statements",
        content: 'Speaking ahead of the IBW Conference, Kushal Manupati, Regional Growth & Ops Lead of South Asia at Binance, said "India is home to one of the largest and most dynamic Web3 developer communities in the world, with builders whose innovations are already shaping global blockchain trends."',
      },
      {
        heading: "Demo Day and Hackathon",
        content: "For Indian Web3 founders, Aptos Foundation and Avalanche will jointly sponsor the IBW Demo Day, offering early-stage startups a platform to present their innovations to global investors. Hashed Emergent will extend up to $250,000 in investment commitments distributed among promising teams.",
      },
      {
        heading: "Expected Attendance and Sponsors",
        content: "This year's event is expected to attract 5,000+ participants from 40+ countries. Other sponsors include Cardano, Polygon Labs, Bitget, Ledger, Bybit, KGEN, 0G Labs, Bullbit, A7A5, BitGo, XDC Network, Endless Domains, XYO, Coinscope, and The reliable jobs.",
      },
      {
        heading: "About India Blockchain Week (IBW)",
        content: "India Blockchain Week (IBW) is a movement unifying the Indian Web3 ecosystem and a platform to connect with the global community. It is India's biggest pan-industry series of blockchain and web3 events, spanning from December 1-7 2025 across Bangalore, India.",
      },
      {
        heading: "About Hashed Emergent",
        content: "Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier.",
      },
    ],
    links: IBW_LINKS_2024,
  },

  // ── Blog 4 ────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "Octaloop Announces India Blockchain Tour 2025: Driving Web3 Conversations Across Eight Indian Cities",
    author: "CryptoWaley on 20-06-2025",
    mainImage: b4img,
    mainImageAlt: "ibt 2025 banner",
    paragraphs: [
      "New Delhi, 17 June, 2025 – Octaloop, one of India's pioneering crypto-native communities, has announced the fourth edition of the India Blockchain Tour (IBT) 2025. This multi-city initiative will span eight locations from Hyderabad (28 June) to Bengaluru (30 November), with the flagship Metamorphosis 2025 summit taking place in New Delhi on 27–28 September.",
      '"India doesn\'t need to catch up - it\'s ready to lead," said Anupam Varshney, Founder, Octaloop. "IBT 2025 will amplify India\'s Web3 voice, connect global projects with local innovators, and showcase our rapidly growing ecosystem to the world."',
    ],
    sections: [
      {
        heading: "IBT 2025: A Nationwide Web3 Engagement Strategy",
        content: "Each city on the India Blockchain Tour—Hyderabad, Ahmedabad, Kolkata, Goa, Mumbai, Chennai, Bengaluru, and New Delhi—will feature:",
        list: [
          "Fireside discussions with global blockchain leaders and exchange executives",
          "Policy sessions with lawmakers shaping India's digital asset regulations",
          "Builder-focused workshops and startup showcases",
          "Regional language brand experiences to connect beyond metro audiences",
        ],
      },
      {
        heading: "Major Exchanges Lend Global Backing",
        content: "The tour has attracted early sponsorship from three leading global exchanges. Bybit (Title Sponsor), MEXC (Title Sponsor), and Bitget (Powered By Sponsor) are all participating.",
      },
      {
        heading: "Metamorphosis 2025: A New Chapter in New Delhi",
        content: "Moving from Bengaluru to New Delhi, Metamorphosis 2025 brings a new energy to the tour. The summit begins with closed-door regulatory roundtables, followed by live product launches, curated showcases of DeFi, gaming, and infrastructure projects, and a high-stakes Demo Day.",
      },
      {
        heading: "Get Involved",
        content: "Applications are now open for speakers, sponsors, exhibitors, and media partners. Contact: events@octaloop.com",
      },
      {
        heading: "About Octaloop",
        content: "Founded in 2020, Octaloop began as a series of grassroots crypto meetups in Delhi cafés. It has since grown into one of India's most recognized Web3 event platforms.",
      },
    ],
    links: [
      { href: "https://octaloop.com/indiablockchaintour", label: "Learn More", icon: <FaGlobe /> },
    ],
  },

  // ── Blog 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "India Blockchain Week 2024 Conference Reveals Remarkable Web3 Ecosystem Growth",
    author: "CryptoWaley on 19-12-2024",
    intro: "The web3 ecosystem saw $462M in investments in the first nine months of 2024, an 82% growth from last year. With 1,000 startups, the world's third-largest founder base, and 12% of global crypto developers, India is set to become the largest developer hub by 2027.",
    mainImage: b3img,
    mainImageAlt: "ibw img",
    paragraphs: [
      "BANGALORE, December 6th, 2024 – India Blockchain Week (IBW) Conference, the 2-day headline conference anchoring the India Blockchain Week series of 100+ Web3 events in Bangalore, is delighted to share that the week-long Web3 gathering has been a roaring success.",
      "The 2-day headline conference welcomed over 3500 enthusiasts, including investors, developers, and stakeholders, enabling them to explore the future of blockchain technology, digital innovation, and its impact on various industries.",
      "The IBW2024 Conference featured 150+ visionary speakers including industry leaders such as Aptos Co-founder & CTO Avery Ching, Supra CEO & Co-Founder Joshua Tobkin, Polygon Co-founder Sandeep Nailwal, Monad CEO Keone Hon, and BitGo COO Chen Fang and many others.",
    ],
    sections: [
      {
        heading: "Key Highlights from the Report",
        list: [
          "India has the 3rd largest Web3 founder base in the world, housing 1000+ start-ups.",
          "In the first nine months of 2024, the ecosystem attracted $462 million in investments, reflecting an 82% growth from the previous year.",
          "Web3 gamers have almost doubled their wallet size as compared to that of Web2 gamers.",
          "From Coinbase Ventures, Y Combinator, Animoca Brands, IOSG & LD Capital to the homegrown champions such as Hashed Emergent, CoinDCX, PeakXV, Borderless, and Alpha Wave are aggressively investing in Indian projects.",
          "Web3 gamers spend nearly double what traditional gamers do: $220 versus $120 annually.",
          "India saw the highest YoY developer growth at around 28%, adding more than 4.7M developers to GitHub in 2024.",
        ],
      },
      {
        heading: "Notable Partnerships & Launches",
        content: "Nazara Technologies and Lysto launched the Growth Protocol. Huddle01 announced it is reaching 4 million new users through a strategic partnership with SocialFi FanTV. Mudrex launched #LearnwithMudrex — India's first multilingual crypto learning platform.",
      },
      {
        heading: "About India Blockchain Week (IBW)",
        content: "India Blockchain Week (IBW) is a movement unifying the Indian web3 ecosystem and a platform to connect with the global community.",
      },
      {
        heading: "About Hashed Emergent",
        content: "Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier.",
      },
    ],
    links: IBW_LINKS_2024,
  },

  // ── Blog 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "Press Release: Global Web3 Stakeholders to Explore Collaboration with Indian Tech Ecosystem at India Blockchain Week 2024",
    author: "CryptoWaley on 02-11-2024",
    mainImage: b2img,
    mainImageAlt: "ibw img",
    paragraphs: [
      "Bangalore, 15th October 2024: Top international Web3 players are coming to India Blockchain Week (IBW) from 30th November to 8th December 2024 in Bangalore, to foster purposeful collaboration with the Indian innovation ecosystem.",
      "The Indian government's growing focus on blockchain innovation has driven initiatives like the National Blockchain Framework (NBF) to enhance information security, transparency, and efficiency for digital governance and service delivery.",
      "Hosted by Hashed Emergent, a Web3 Venture Capital firm, the 2-day flagship IBW Conference will take place on the 4th and 5th of December at the Sheraton Grand Bengaluru Whitefield Hotel & Convention Center.",
      "India's innovation ecosystem is fueling global blockchain growth contributing to over 12% of the world's Web3 developers and housing more than 1,000 startups.",
    ],
    sections: [
      {
        heading: "About India Blockchain Week (IBW)",
        content: "India Blockchain Week (IBW) is India's largest series of blockchain and Web3 events, set to unify the global and local blockchain communities from November 30th to December 8th, 2024.",
      },
      {
        heading: "About Hashed Emergent",
        content: "Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier.",
      },
    ],
    links: IBW_LINKS_2024,
  },

  // ── Blog 1 ────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "PEPE: The King of MemesCoins",
    author: "CryptoWaley on 24-06-2024",
    mainImage: b1img,
    mainImageAlt: "PEPE: The King of MemesCoins",
    secondaryImage: b1img1,
    secondaryImageAlt: "PEPE: The King of MemesCoins",
    paragraphs: [
      "PEPE, the internet's favorite frog, is making waves in the memecoin world. As we enter a new era of digital finance, this meme legend is set to dominate. This article, crafted by Cryptowaley and Bitmart, explores why PEPE has what it takes to lead the memecoin market.",
    ],
    sections: [
      {
        heading: "Financial Landscape: Betting on Memes",
        content: "Today's financial scene is tough. With social mobility at a low, many turn to high-risk bets, including memecoins, hoping for a big win. Memecoins like Dogecoin and Shiba Inu rose only after Bitcoin and Ethereum soared. But this time, memecoins are leading the charge.",
      },
      {
        heading: "Why PEPE Stands Out",
        content: "PEPE isn't just a crypto meme; it's a global icon. Created in 2005 by Matt Furie for Boys Club, PEPE exploded on 4chan and quickly became a social media sensation. Despite a rocky history, PEPE's image has been reclaimed and celebrated worldwide.",
      },
      {
        heading: "PEPE's Unique Edge",
        content: "Unlike other memecoins, PEPE's appeal reaches beyond crypto enthusiasts. Everyone from your grandma to your neighbor's dog knows PEPE. Its universal presence and rich history give it an edge.",
      },
      {
        heading: "Conclusion",
        content: "With memecoins blazing a new trail, PEPE's deep cultural roots and widespread recognition make it a prime candidate for the top spot. Get ready for PEPE to rule the memecoin kingdom!",
      },
    ],
    footerNote: (
      <p>
        You can buy cryptocurrencies like PEPE on{" "}
        <a className="text-blue-700 font-bold" href="https://www.bitmart.com/invite/7MC9jA/en" target="_blank" rel="noreferrer">
          Bitmart.
        </a>
      </p>
    ),
  },
];

// ---------------------------------------------------------------------------

const Blog = () => {
  return (
    <div
      id="blog"
      className="m-auto pt-20 pb-10 md:px-10 text-white lg:px-20 min-h-screen px-5 md:min-h-[100vh] w-full flex flex-col md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black to-[rgba(47,40,255,0.5)]"
    >
      <div className="lg:mx-8 md:mx-5">
        <h1 className="mx-auto text-center text-5xl">Blog</h1>

        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;