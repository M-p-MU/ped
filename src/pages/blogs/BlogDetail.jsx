import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../../Services/GlobalApi';
import Header from '../../Components/Blogs/Header';
// import { Markdown } from 'react-markdown';
import photo from "../../Assets/images/avatar/avatar-s-11.jpg";

function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState([])
    useEffect(() => {
        console.log("Id", id)
        getBlogById();
    }, [])

    const getBlogById = () => {
        GlobalApi.getPostById(id).then(resp => {

            const item = resp.data.data;
            const result = {
                id: item.id,
                title: item.attributes.title,
                desc: item.attributes.description,
                tag: item.attributes.tag,
                coverImage: item.attributes.coverImage.data.attributes.url,
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
                <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
                <h3 className='text-[23px] font-bold'>{post.title}</h3>
                <div className='flex items-center mt-5'>
                    <img src={photo} alt='' className='w-[35px] rounded-full' />
                    {/* <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png" alt='' className='w-[35px] rounded-full' /> */}
                    <div className='ml-2'>
                        <h3 className='font-bold text-[12px]'>Tubeguruji</h3>
                        <h3 className='text-gray-500 text-[10px]'>24 Sept 2024</h3>
                    </div>
                </div>
                <img src={post.coverImage} alt='' className='rounded-2xl mt-5 mb-5 w-full' />
                <h3>{post.desc}</h3>
                <p escapeHtml={false} className='leading-9'>
                    {post.desc}
                </p>
                {/* <Markdown children={post.desc}
                    escapeHtml={false} className='leading-9' /> */}
            </div>
        </>

    )
}

export default BlogDetail