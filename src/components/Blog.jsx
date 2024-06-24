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

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Blog;











// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Blog = () => {
//     const { id } = useParams();
//     const [article, setArticle] = useState(null);

//     useEffect(() => {
//         fetch('/assets/blogData.json')
//             .then((response) => response.json())
//             .then((data) => {
//                 const foundArticle = data.find((post) => post.id === parseInt(id, 10));
//                 setArticle(foundArticle);
//             });
//     }, [id]);

//     if (!article) {
//         return <div id='blog' className="m-auto md:px-10 text-white lg:px-20 min-h-screen px-5 lg:px md:min-h-[100vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">Loading...</div>;
//     }

//     return (
//         <div id='blog' className="m-auto md:px-10 text-white lg:px-20 min-h-screen px-5 lg:px md:min-h-[100vh] w-full  flex flex-col md:flex-row md:justify-center md:items-center justify-center bg-black items-center bg-gradient-to-r from-black via-black  to-[rgba(47,40,255,0.5)] ">
//             <h1>{article.title}</h1>
//             <p>By {article.author} on {article.date}</p>
//             <p>{article.content}</p>
//             <h2>{article.sub_title1}</h2>
//             <p>{article.content1}</p>
//             <h2>{article.sub_title2}</h2>
//             <p>{article.content2}</p>
//             <h2>{article.sub_title3}</h2>
//             <p>{article.content3}</p>
//             <h2>{article.sub_title4}</h2>
//             <p>{article.content4}</p>
//             <h2>{article.sub_title5}</h2>
//             <p>{article.content5}</p>
//         </div>
//     );
// };

// export default Blog;
