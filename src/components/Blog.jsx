// import React from 'react';
import React, { useEffect, useState } from 'react';

import { FaGlobe } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import b1img from '/assets/img/blog1/pepe.jpg';
import b1img1 from '/assets/img/blog1/pepe1.png';
import b2img from '/assets/img/blog2/ibw.jpg';
import b3img from '/assets/img/blog3/ibw.jpg';
// import b4img from '/assets/img/blog4/octaloop.avif'
import b4img from '/assets/img/blog4/ibt25.png'


const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/assets/blogData.json')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div id='blog' className="m-auto pt-20 pb-10 md:px-10 text-white lg:px-20 min-h-screen px-5 lg:px md:min-h-[100vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">

            <div className='lg:mx-8 md:mx-5'>
                <h1 className='mx-auto text-center text-5xl'>Blog</h1>
                {/* {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))} */}
                {/* {posts.map((post) => (
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5' key={post.id}>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>{post.title}</h1>
                        <p className='text-sm'>By {post.author} on {post.date}</p>
                        <p>{post.content}</p>
                        <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p>
                        <h2 className='text-2xl my-2 font-bold'>{post.sub_title1}</h2>
                        <p>{post.content1}</p>
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={post.image} alt={post.title} />
                        </div>
                        <h2 className='text-2xl my-2 font-bold'>{post.sub_title2}</h2>
                        <p>{post.content2}</p>
                        <h2 className='text-2xl my-2 font-bold'>{post.sub_title3}</h2>
                        <p>{post.content3}</p>
                        <h2 className='text-2xl my-2 font-bold'>{post.sub_title4}</h2>
                        <p>{post.content4}</p>
                        <h2 className='text-2xl my-2 font-bold'>{post.sub_title5}</h2>
                        <p>{post.content5}</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='rounded-xl my-2 md:w-[50%] w-full' src={post.image1} alt={post.title} />
                    </div>
                    <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p>
                    
                </div>
                ))} */}

                {/* BLOG NO. 4 */}
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5'>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>Octaloop Announces India Blockchain Tour 2025: Driving Web3 Conversations Across Eight Indian Cities</h1>
                        <p className='text-sm'>By CryptoWaley on 20-06-2025</p>
                        {/* <p className='my-6'><i>Octaloop, a crypto-native community, kicks off India Blockchain Tour 2025 with events across eight cities, uniting developers, entrepreneurs, and policymakers to fuel the Web3 revolution across India.</i></p> */}
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={b4img} alt="ibt 2025 banner" />
                        </div>

                        <p className='mb-6'><b>New Delhi, 17 June, 2025</b> – Octaloop, one of India’s pioneering crypto-native communities, has announced the fourth edition of the India Blockchain Tour (IBT) 2025. This multi-city initiative will span eight locations from Hyderabad (28 June) to Bengaluru (30 November), with the flagship Metamorphosis 2025 summit taking place in New Delhi on 27–28 September. The tour aims to unite policymakers, developers, entrepreneurs, and crypto enthusiasts from all corners of the country.</p>

                        <p className='my-6'>“India doesn’t need to catch up - it’s ready to lead,” said Anupam Varshney, Founder, Octaloop. “IBT 2025 will amplify India’s Web3 voice, connect global projects with local innovators, and showcase our rapidly growing ecosystem to the world.”</p>

                        <h2 className='text-2xl my-2 font-bold'>IBT 2025: A Nationwide Web3 Engagement Strategy</h2>
                        <p className='my-6'>Each city on the India Blockchain Tour-Hyderabad, Ahmedabad, Kolkata, Goa, Mumbai, Chennai, Bengaluru, and New Delhi-will feature:</p>
                        <ul className='list-disc lg:px-10'>
                            <li>Fireside discussions with global blockchain leaders and exchange executives</li>
                            <li>Policy sessions with lawmakers shaping India’s digital asset regulations</li>
                            <li>Builder-focused workshops and startup showcases</li>
                            <li>Regional language brand experiences to connect beyond metro audiences</li>
                        </ul>

                        <h2 className='text-2xl my-2 font-bold'>Major Exchanges Lend Global Backing</h2>
                        <p className='my-6'>The tour has attracted early sponsorship from three leading global exchanges, highlighting its worldwide relevance.</p>
                        <p className='my-6'>Bybit, the Title Sponsor, emphasizes India’s Web3 opportunity. “By partnering with the India Blockchain Tour 2025, we reaffirm our long-term commitment to empowering India’s crypto community through education and builder support,” said Vikas Gupta, Head of India at Bybit.</p>
                        <p className='my-6'>Also joining as a Title Sponsor, MEXC brings a global vision to the Indian market. “India is bursting with creativity, resilience, and energy,” said Tracy Jin, COO of MEXC. “Through IBT 2025 we will connect with talented developers, share global insights, and help foster an inclusive, thriving blockchain future.”</p>
                        <p className='my-6'>Bitget, the Powered By Sponsor, is betting big on India’s next generation of builders. “India is a marathon, not a sprint,” noted Jyotsna Hirdyani, Head of South Asia at Bitget. “We’re investing in grassroots Web3 communities, nurturing founders, and building secure, AI-powered tools to serve India’s next wave of users.”</p>

                        <h2 className='text-2xl my-2 font-bold'>Metamorphosis 2025: A New Chapter in New Delhi</h2>
                        <p className='my-6'>Moving from Bengaluru to New Delhi, Metamorphosis 2025 brings a new energy to the tour. The summit begins with closed-door regulatory roundtables, providing builders and investors a chance to hear directly from policymakers.</p>

                        <p className='my-6'>The focus then shifts to the innovation economy, with live product launches, curated showcases of DeFi, gaming, and infrastructure projects, and a high-stakes Demo Day connecting top startups with leading venture capitalists.</p>

                        <h2 className='text-2xl my-2 font-bold'>Get Involved</h2>
                        <p className='my-6'>Applications are now open for speakers, sponsors, exhibitors, and media partners.</p>
                        <div className='grid md:grid-cols-4 gap-4 gap-3 w-auto justify-center items-center font-bold'>
                            <a href="https://octaloop.com/indiablockchaintour" className='flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6'>
                                <FaGlobe />Learn More
                            </a>
                        </div>
                        <p className='my-6'>Contact: events@octaloop.com</p>

                        <h2 className='text-2xl my-2 font-bold'>About Octaloop</h2>
                        <p className='my-6'>Founded in 2020, Octaloop began as a series of grassroots crypto meetups in Delhi cafés. It has since grown into one of India’s most recognized Web3 event platforms. Through initiatives like the India Blockchain Tour and Metamorphosis, Octaloop brings together global projects and India’s vibrant builder community.</p>

                        <h2 className='text-2xl my-2 font-bold'>Partnerships, press access, speaker applications, and sponsorships are now open.</h2>
                        <p><b>Learn more: </b><a className='underline text-blue-600' href="http://octaloop.com/indiablockchaintour/">http://octaloop.com/indiablockchaintour/</a></p>
                        <p><b>Contact: </b><a className='underline text-blue-600' href="mailto:jeevesh@octaloop.com">jeevesh@octaloop.com</a></p>
                        <p><b>TG:</b><a className=''> @GvOctaloop</a></p>

                    </div>

                    <div className='flex justify-center'>
                        {/* Add an additional image here if needed */}
                    </div>
                </div>





                {/* BLOG NO. 3 */}
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5'>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>India Blockchain Week 2024 Conference Reveals Remarkable Web3 Ecosystem Growth</h1>
                        <p className='text-sm'>By CryptoWaley on 19-12-2024</p>
                        <p className=' my-6'><i>The web3 ecosystem saw $462M in investments in the first nine months of 2024, an 82% growth from last year. With 1,000 startups, the world’s third-largest founder base, and 12% of global crypto developers, India is set to become the largest developer hub by 2027.</i></p>
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={b3img} alt="ibw img" />
                        </div>
                        {/* <h2 className='text-2xl my-2 font-bold'>Introduction</h2> */}
                        <p className=' mb-6'><b><i>BANGALORE, December 6th, 2024</i></b> – India Blockchain Week (IBW) Conference, the 2-day headline conference anchoring the India Blockchain Week series of 100+ Web3 events in Bangalore, is delighted to share that the week-long Web3 gathering has been a roaring success, solidifying India’s position as a global leader in Web3 adoption and innovation. The country’s entrepreneurial culture is setting global benchmarks for success, inspiring innovation, and charting a pioneering path for emerging nations.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Financial Landscape: Betting on Memes</h2> */}
                        <p className='my-6'>The 2-day headline conference welcomed over 3500 enthusiasts, including investors, developers, and stakeholders, enabling them to explore the future of blockchain technology, digital innovation, and its impact on various industries. Throughout the week, there were 100+ side events offering builders and users a chance to receive advice from industry thought leaders, try out new products, and engage with community members.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Why PEPE Stands Out</h2> */}
                        <p className='my-6'>The IBW2024 Conference featured 150+ visionary speakers including industry leaders such as Aptos Co-founder & CTO Avery Ching, Supra CEO & Co-Founder Joshua Tobkin, Polygon Co-founder Sandeep Nailwal, Monad CEO Keone Hon, and BitGo COO Chen Fang and many others, who shared their insights on the rapidly evolving Web3 landscape.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>PEPE’s Unique Edge</h2> */}
                        <p className='my-6'>Marking the occasion,<b><i> Tak Lee, CEO & Managing Partner at Hashed Emergent, said</i></b>,<i> "India serves as a global microcosm, with its success stories inspiring global hope by showcasing how a nation reflecting the world's diverse realities can achieve population-scale impact. As India rapidly emerges as a key consumer of open network applications, we are deeply grateful to all our sponsors, speakers, and partners for making the India Blockchain Week 2024 Conference a tremendous success. We look forward to continuing this journey of innovation and collaboration, fostering a thriving blockchain ecosystem that bridges India with the world.”</i></p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Conclusion</h2> */}
                        <p className='my-6'>Hashed Emergent, the organizers of the flagship IBW 2024 Conference, offered an exclusive preview of their upcoming annual Indian Web3 Landscape report. Built with its knowledge partners, the report provides an overview of India's evolving Web3 landscape, covering topics such as the rise in digital asset adoption, growth in Web3 gaming, and the burgeoning startup ecosystem with a focus on blockchain technology and increased developer participation. Some of the key highlights include:</p>

                        <ul className='list-disc lg:px-10'>
                            <li>India has the 3rd largest Web3 founder base in the world, housing 1000+ start-ups. </li>
                            <li>In the first nine months of 2024, the ecosystem attracted $462 million in investments, reflecting an 82% growth from the previous year.</li>
                            <li>Web3 gamers have almost doubled their wallet size as compared to that of Web2 gamers, with more Web2 gamers venturing into Web3 gaming.</li>
                            <li>From Coinbase Ventures, Y Combinator, Animoca Brands, IOSG & LD Capital to the homegrown champions such as Hashed Emergent, CoinDCX, PeakXV, Borderless, and Alpha Wave are aggressively investing in Indian projects. It's a global vote of confidence in Indian Web3 innovation.</li>
                            <li>Web3 gamers spend nearly double what traditional gamers do: $220 versus $120 annually. Not only that, they're more likely to be paying users – 64% compared to 56% in Web2.</li>
                            <li>India saw the highest YoY developer growth at around 28%, adding more than 4.7M developers to GitHub in 2024.</li>

                        </ul>


                        <p className='my-6'>The conference also witnessed several partnerships, product launches, and other initiatives. Nazara Technologies and Lysto launched the Growth Protocol, a purpose-built Layer-1 blockchain for digital marketing and growth initiatives. Huddle01, the leading decentralised video conferencing platform, announced at IBW that it is reaching 4 million new users through a strategic partnership with SocialFi FanTV.</p>
                        <p className='my-6'>Mudrex, a leading Indian crypto exchange, launched #LearnwithMudrex - India’s first multilingual crypto learning platform. It will partner with educators and top Indian investors to educate people in crypto as an asset class.</p>
                        <p className='my-6'>The IBW2024 Conference organizers are thankful to all the attendees who traveled all the way to Bangalore to participate in the most significant Web3 event in India, as well as the sponsors Aptos, Supra, Polygon, Starknet and others who made it all possible. They also express their sincere gratitude to the 150+ speakers who took part in giving keynotes or panels at the conference.</p>
                        <p>Next year, IBW Conference aims to partner with more stakeholders joining the conference and highlighting India's catalysing role in the global web3 industry.</p>
                        <h2 className='text-2xl my-2 font-bold'>About India Blockchain Week (IBW)</h2>
                        <p >India Blockchain Week (IBW) is a movement unifying the Indian web3 ecosystem and a platform to connect with the global community. It is India’s biggest pan-industry series of blockchain and web3 events, spanning from November 30th- December 8th 2024 across Bangalore, India. IBW is a week-long array of 100+ web3 events, including flagship events such as the headline IBW Conference, ETHIndia, FILBangalore and many other side-events, networking events, workshops, parties etc hosted by Indian & global blockchain industry stakeholders.</p>
                        <p>The IBW Conference is the two-day headline event anchoring India Blockchain Week (IBW) on 4-5 December 2024 at the Sheraton Grand, Bangalore and hosted by Hashed Emergent - a web3 venture capital firm dedicated to accelerating the mass adoption of web3 in India.</p>
                        <p>For more information about IBW, visit:
                            <div className='grid md:grid-cols-4 gap-4 gap-3 w-auto justify-center items-center font-bold'>
                                <a href="https://indiablockchainweek.com/" className='flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6'>
                                    <FaGlobe />Website
                                </a>
                                <a href="https://twitter.com/IBWofficial" className='flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6'>
                                    <FaXTwitter />Twitter
                                </a>
                                <a href="https://www.linkedin.com/company/ibwofficial/" className='flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6'>
                                    <FaLinkedin />LinkedIn
                                </a>
                                <a href="https://t.me/ibw_official" className='flex gap-2 justify-center items-center border-2 border-blue-300 rounded hover:bg-blue-300 p-2 px-6'>
                                    <FaTelegram />Telegram
                                </a>
                            </div>
                        </p>

                        <h2 className='text-2xl my-2 font-bold'><a href="https://www.hashedem.com/">About Hashed Emergent</a></h2>
                        <p>Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier. It invests at the earliest stages of a web3 startup's journey, using its expertise, experience, and network to amplify their growth and success. The team is rooted in the cultural hubspots of web3 in emerging markets, spanning across Bangalore, Seoul, Singapore, Lagos and Dubai. Hashed Emergent drives web3 focused ecosystem and community expansion in these markets through its purpose-built initiatives. </p>

                        <h2 className='text-2xl my-2 font-bold'>For media queries, Please contact: </h2>
                        <p><b>Ridhima Bhasin - </b><a className='underline text-blue-600' href="mailto:press@indiablockchainweek.com">press@indiablockchainweek.com</a></p>



                    </div>
                    <div className='flex justify-center'>
                        {/* <img className='rounded-xl my-2 md:w-[50%] w-full' src={b1img1} alt="PEPE: The King of MemesCoins" /> */}
                    </div>
                    {/* <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p> */}

                </div>
                {/* BLOG NO. 2 */}
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5'>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>Press Release: Global Web3 Stakeholders to Explore Collaboration with Indian Tech Ecosystem at India Blockchain Week 2024</h1>
                        <p className='text-sm'>By CryptoWaley on 02-11-2024</p>
                        <p className=' my-6'><b>Bangalore, 15th October 2024:</b> Top international Web3 players are coming to India Blockchain Week (IBW) from 30th November to 8th December 2024 in Bangalore, to foster purposeful collaboration with the Indian innovation ecosystem. Returning this year with over 100 exciting events, IBW is the country’s first-ever multi-chain platform catalyzing mass adoption of blockchain innovation across industries. Some of the events include the flagship IBW Conference, IBW chain-agnostic Hackathon, IBW Web3 Demo Day, ETH India Hackathon, and more, bringing together the brightest minds in the Web3 ecosystem along with policymakers to create a conducive environment for cross-border partnerships.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Introduction</h2> */}
                        <p className=' mb-6'>The Indian government's growing focus on blockchain innovation has driven initiatives like the National Blockchain Framework (NBF) to enhance information security, transparency, and efficiency for digital governance and service delivery. Launched under the same initiative by the Ministry of Electronics and  Information Technology (MeitY), the Vishvasya Technology Stack offers Blockchain-as-a-Service (BaaS) through data centers across Pune, Hyderabad, and Bhubaneswar, supporting various permissioned blockchain applications. These efforts reflect the government's commitment to advancing and implementing blockchain solutions.</p>
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={b2img} alt="ibw img" />
                        </div>
                        {/* <h2 className='text-2xl my-2 font-bold'>Financial Landscape: Betting on Memes</h2> */}
                        <p className='my-6'>Hosted by Hashed Emergent, a Web3 Venture Capital firm, the 2-day flagship IBW Conference will take place on the 4th and 5th of December at the Sheraton Grand Bengaluru Whitefield Hotel & Convention Center, hosting prominent speakers including Sandeep Nailwal, Co-founder of Polygon, Avery Ching, Co-founder and CTO of Aptos, Keone Hon, CEO of Monad, and Chen Fang, COO of BitGo. Alongside Indian policymakers, entrepreneurs, and developers, the conference will facilitate discussions on India’s vibrant tech talent, its market adaptability for technological advancements, and the evolving regulatory landscape. </p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Why PEPE Stands Out</h2> */}
                        <p className='my-6'><b>Avery Ching, <i>the Co-founder & CTO of Aptos Labs</i></b><i>, commented, “India is home to incredibly talented developers and leaders who are advancing web3 in remarkable ways. It’s inspiring to see the impact builders in India have had on the entire Aptos ecosystem, and I hope to see more builders after our activation at IBW this year.”</i></p>
                        {/* <h2 className='text-2xl my-2 font-bold'>PEPE’s Unique Edge</h2> */}
                        <p className='my-6'><i>"India is at a unique inflection point in Web3 adoption, with its thriving developer community, commitment to entrepreneurship, and pace of economic activity. I am excited to speak about opportunities for Monad Labs to collaborate with the local Web3 ecosystem in advancing blockchain innovation,"</i><b> added Keone Hon, CEO of Monad.</b></p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Conclusion</h2> */}
                        <p className='my-6'>A consultation panel, led by the Department of Economic Affairs (DEA), is currently collaborating with industry stakeholders, including experts, companies, and the public, to establish regulations for cryptocurrency in India. IBW Conference will act as a vital platform for dialogue between policymakers and industry experts, providing a roadmap for India's potential in this sector.</p>
                        <p className='my-6'><i>“As a host of India Blockchain Week Conference, we are committed to amplifying India’s thriving web3 landscape on the global stage,” <b>said Tak Lee, CEO & Managing Partner of Hashed Emergent.</b> “Our goal is to foster collaboration across the Indian ecosystem by bringing together local innovators and global stakeholders. We’re excited to return with the second edition of IBW, continuing our work to nurture and grow the web3 community in India and other emerging markets.”</i></p>
                        <p className='my-6'>India’s innovation ecosystem is fueling global blockchain growth contributing to over 12% of the world’s Web3 developers and housing more than 1,000 startups, according to a joint report by Hashed Emergent and KPMG India. To further drive this momentum, IBW Demo-Day on December 4th will spotlight 15 leading Indian Web3 startups, showcasing their projects to an audience of investors, founders, and developers. ETH India Hackathon, running from December 6-8, will host over 1,500 developers, making it one of the country’s largest Ethereum hackathons. The IBW Hackathon will see 250+ participants, with the top ten projects competing for prizes and a chance to present at IBW2024 Conference.  </p>
                        <p className='my-6'>With sponsors like Polygon, Aptos, Starkware, and Starknet Foundation, IBW 2024 Conference will unite the largest ecosystems of start-ups, developers, and investors in the global web3 industry. Last year’s IBW Conference featured Vitalik Buterin (Ethereum), Jayant Sinha (Former Member of Parliament), Sebastien Borget (Sandbox), Charles Guillemet (Ledger) among others as speakers. </p>
                        <h2 className='text-2xl my-2 font-bold'><a href="https://indiablockchainweek.com/">About India Blockchain Week (IBW)</a></h2>
                        <p >India Blockchain Week (IBW) is India’s largest series of blockchain and Web3 events, set to unify the global and local blockchain communities from November 30th to December 8th, 2024. With over 100 events, including the IBW2024 Conference, ETHIndia,  IBW Demo-day, IBW Hackathon, and other networking opportunities, IBW provides a platform for thought leadership and collaboration across the blockchain ecosystem.</p>

                        <h2 className='text-2xl my-2 font-bold'><a href="https://www.hashedem.com/">About Hashed Emergent</a></h2>
                        <p>Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier. It invests at the earliest stages of a web3 startup's journey, using its expertise, experience, and network to amplify their growth and success. The team is rooted in the cultural hubspots of web3 in emerging markets, spanning across Bangalore, Seoul, Singapore, Lagos and Dubai. Hashed Emergent drives web3 focused ecosystem and community expansion in these markets through its purpose-built initiatives. </p>

                    </div>
                    <div className='flex justify-center'>
                        {/* <img className='rounded-xl my-2 md:w-[50%] w-full' src={b1img1} alt="PEPE: The King of MemesCoins" /> */}
                    </div>
                    {/* <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p> */}

                </div>




                {/* BLOG NO. 1 */}
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5'>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>PEPE: The King of MemesCoins</h1>
                        <p className='text-sm'>By CryptoWaley on 24-06-2024</p>
                        {/* <p>content</p> */}
                        <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p>
                        <h2 className='text-2xl my-2 font-bold'>Introduction</h2>
                        <p>PEPE, the internet’s favorite frog, is making waves in the memecoin world. As we enter a new era of digital finance, this meme legend is set to dominate. This article, crafted by Cryptowaley and Bitmart, explores why PEPE has what it takes to lead the memecoin market.</p>
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={b1img} alt="PEPE: The King of MemesCoins" />
                        </div>
                        <h2 className='text-2xl my-2 font-bold'>Financial Landscape: Betting on Memes</h2>
                        <p>Today’s financial scene is tough. With social mobility at a low, many turn to high-risk bets, including memecoins, hoping for a big win. Memecoins like Dogecoin and Shiba Inu rose only after Bitcoin and Ethereum soared. But this time, memecoins are leading the charge.</p>
                        <h2 className='text-2xl my-2 font-bold'>Why PEPE Stands Out</h2>
                        <p>PEPE isn't just a crypto meme; it’s a global icon. Created in 2005 by Matt Furie for *Boys Club*, PEPE exploded on 4chan and quickly became a social media sensation. Despite a rocky history, including being hijacked by the alt-right, PEPE’s image has been reclaimed and celebrated worldwide.</p>
                        <h2 className='text-2xl my-2 font-bold'>PEPE’s Unique Edge</h2>
                        <p>Unlike other memecoins, PEPE’s appeal reaches beyond crypto enthusiasts. Everyone from your grandma to your neighbor’s dog knows PEPE. Its universal presence and rich history give it an edge. People love familiarity, and PEPE is a meme for every mood—sad, happy, rich, poor.</p>
                        <h2 className='text-2xl my-2 font-bold'>Conclusion</h2>
                        <p>With memecoins blazing a new trail, PEPE’s deep cultural roots and widespread recognition make it a prime candidate for the top spot. As the crypto market grows, don’t be surprised if PEPE becomes the first memecoin to hit the $100 billion mark. Get ready for PEPE to rule the memecoin kingdom!</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='rounded-xl my-2 md:w-[50%] w-full' src={b1img1} alt="PEPE: The King of MemesCoins" />
                    </div>
                    <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en" target='_blank'>Bitmart.</a></p>

                </div>



            </div>

        </div>
    );
};

export default Blog;