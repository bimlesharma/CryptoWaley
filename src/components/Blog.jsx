// import React from 'react';
import React, { useEffect, useState } from 'react';

import b1img from '/assets/img/blog1/pepe.jpg';
import b1img1 from '/assets/img/blog1/pepe1.png';
import b2img from '/assets/img/blog2/ibw.jpg';

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