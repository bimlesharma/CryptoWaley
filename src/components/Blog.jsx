// import React from 'react';
import React, { useEffect, useState } from 'react';

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
                {posts.map((post) => (
                    <div className='flex-col md:flex-row items-center gap-5 text-black bg-white border-4 rounded-xl mt-5 p-5' key={post.id}>

                    <div className="content">
                        <h1 className='text-3xl my-2 font-bold'>{post.title}</h1>
                        <p className='text-sm'>By {post.author} on {post.date}</p>
                        <p>{post.content}</p>
                        <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en">Bitmart.</a></p>
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
                    <p>You can buy cryptocurrencies like PEPE on <a className='text-blue-700 font-bold' href="https://www.bitmart.com/invite/7MC9jA/en">Bitmart.</a></p>
                    
                </div>
                ))}
            </div>

        </div>
    );
};

export default Blog;