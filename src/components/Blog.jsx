// import React from 'react';
import React, { useEffect, useState } from 'react';

import b1img from '/assets/img/blog1/pepe.jpg';
import b1img1 from '/assets/img/blog1/pepe1.png';
import b2img from '/assets/img/blog2/ibw.jpg';
import b3img from '/assets/img/blog3/ibw.jpg';

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

                


                {/* BLOG NO. 3 */}
                <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5'>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>India Blockchain Week 2024 Conference Reveals Remarkable Web3 Ecosystem Growth</h1>
                        <p className='text-sm'>By CryptoWaley on 19-12-2024</p>
                        <p className=' my-6'>-The web3 ecosystem saw $462M in investments in the first nine months of 2024, an 82% growth from last year. With 1,000 startups, the world’s third-largest founder base, and 12% of global crypto developers, India is set to become the largest developer hub by 2027.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Introduction</h2> */}
                        <p className=' mb-6'>BANGALORE, December 6th, 2024 – India Blockchain Week (IBW) Conference, the 2-day headline conference anchoring the India Blockchain Week series of 100+ Web3 events in Bangalore, is delighted to share that the week-long Web3 gathering has been a roaring success, solidifying India’s position as a global leader in Web3 adoption and innovation. The country’s entrepreneurial culture is setting global benchmarks for success, inspiring innovation, and charting a pioneering path for emerging nations.</p>
                        <div className='flex justify-center'>
                            <img className='rounded-xl border-2 my-2 md:w-[50%] w-full' src={b3img} alt="ibw img" />
                        </div>
                        {/* <h2 className='text-2xl my-2 font-bold'>Financial Landscape: Betting on Memes</h2> */}
                        <p className='my-6'>The 2-day headline conference welcomed over 3500 enthusiasts, including investors, developers, and stakeholders, enabling them to explore the future of blockchain technology, digital innovation, and its impact on various industries. Throughout the week, there were 100+ side events offering builders and users a chance to receive advice from industry thought leaders, try out new products, and engage with community members.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>Why PEPE Stands Out</h2> */}
                        <p className='my-6'>The IBW2024 Conference featured 150+ visionary speakers including industry leaders such as Aptos Co-founder & CTO Avery Ching, Supra CEO & Co-Founder Joshua Tobkin, Polygon Co-founder Sandeep Nailwal, Monad CEO Keone Hon, and BitGo COO Chen Fang and many others, who shared their insights on the rapidly evolving Web3 landscape.</p>
                        {/* <h2 className='text-2xl my-2 font-bold'>PEPE’s Unique Edge</h2> */}
                        <p className='my-6'>Marking the occasion, Tak Lee, CEO & Managing Partner at Hashed Emergent, said, "India serves as a global microcosm, with its success stories inspiring global hope by showcasing how a nation reflecting the world's diverse realities can achieve population-scale impact. As India rapidly emerges as a key consumer of open network applications, we are deeply grateful to all our sponsors, speakers, and partners for making the India Blockchain Week 2024 Conference a tremendous success. We look forward to continuing this journey of innovation and collaboration, fostering a thriving blockchain ecosystem that bridges India with the world.”</p>
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
                            <a className='text-blue-600 underline' href="https://indiablockchainweek.com/"> Website </a>
                            <a className='text-blue-600 underline' href="https://twitter.com/IBWofficial">Twitter </a>
                            <a className='text-blue-600 underline' href="https://www.linkedin.com/company/ibwofficial/">LinkedIn </a>
                            <a className='text-blue-600 underline' href="https://t.me/ibw_official">Telegram</a>
                        </p>

                        <h2 className='text-2xl my-2 font-bold'><a href="https://www.hashedem.com/">About Hashed Emergent</a></h2>
                        <p>Hashed Emergent is the venture capital arm of Hashed, backing builders from India and emerging markets shaping the on-chain frontier. It invests at the earliest stages of a web3 startup's journey, using its expertise, experience, and network to amplify their growth and success. The team is rooted in the cultural hubspots of web3 in emerging markets, spanning across Bangalore, Seoul, Singapore, Lagos and Dubai. Hashed Emergent drives web3 focused ecosystem and community expansion in these markets through its purpose-built initiatives. </p>
                        
                        <h2 className='text-2xl my-2 font-bold'>For media queries, Please contact: </h2>
                        <p>Ridhima Bhasin - press@indiablockchainweek.com</p>

                        

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