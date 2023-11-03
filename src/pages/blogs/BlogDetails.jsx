import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Services/GlobalApi';
import Header from '../../Components/Blogs/Header';
// import { Markdown } from 'react-markdown';
import photo from "../../Assets/images/avatar/avatar-s-11.jpg";

function BlogDetails() {
    const { id } = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        console.log("Id", id)
        getBlogById();
    }, [])

    const getBlogById = () => {
        GlobalApi.getPostsById(id).then(resp => {
            const item = resp.data.blog;
            const result = {
                id: item._id,
                title: item.title,
                content: item.content,
                tag: item.tag ? item.tags : "News",
                coverImage: item.image,
                comments: item.comments,
                likes: item.likes,
                authorId: item.authorId,
                blogger: item.author,
                shares: item.shares,
                views: item.view,
                // tags: item.tag,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            };
            setPost(result);
            console.log("Result", result);
        })
    }
    return (
        <>
            <Header />
            <div>

            </div>
            <div className='px-6 md:px-20 lg:px-56 mt-10'>
                <h3 className='text-red-500 text-[12px]'>
                    <a
                        href="#"
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                        {post.tag.lenght === 0 ? "TAG" : post.tag.split()[0]}
                        {/* {post.category.title} */}
                    </a>
                </h3>
                <h3 className='text-[23px] font-bold'>{post.title}</h3>
                <div className='flex items-center mt-5'>
                    <img src={photo} alt='' className='w-[35px] rounded-full' />
                    {/* <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png" alt='' className='w-[35px] rounded-full' /> */}
                    <div className='ml-2'>
                        <h3 className='font-bold text-[12px]'>{post.blogger}</h3>
                        <h3 className='text-gray-500 text-[10px]'>{GlobalApi.formatDate(post.createdAt) ? GlobalApi.formatDate(post.createdAt) : "24 Sept 2024"}</h3>
                    </div>
                </div>
                <img src={`https://pedbackend.onrender.com/blogImages/${post.coverImage}`} alt="Image Description" className="rounded-2xl mt-5 mb-5 w-full" />
                {/* <h3>{post.desc}</h3> */}
                <p escapeHtml={false} className='leading-9'>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </p>
                {/* <Markdown children={post.desc}
                    escapeHtml={false} className='leading-9' /> */}
            </div>
        </>

    )
}

export default BlogDetails