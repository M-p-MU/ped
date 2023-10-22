import React, { useEffect, useState } from 'react';
import Header from '../../Components/Blogs/Header';
import Search from '../../Components/Blogs/Search';
import IntroPost from '../../Components/Blogs/IntroPost';
import Blogs from '../../Components/Blogs/Blogs';
// import Footer from '../../Components/Blogs/Footer';
import GlobalApi from '../../Services/GlobalApi';

function Home() {
    const [post, setPost] = useState([])
    const [orgPost, setOrgPost] = useState([])

    useEffect(() => {
        getPost();
    }, [])
    const getPost = () => {
        GlobalApi.getPost.then(resp => {
            const result = resp.data.data.map(item => ({
                id: item.id,
                title: item.attributes.title,
                desc: item.attributes.description,
                tag: item.attributes.tag,
                coverImage: item.attributes.coverImage.data.attributes.url,
            }));
            setPost(result);
            setOrgPost(result);
        })
    }

    const filterPost = (tag) => {
        if (tag == 'All') {
            setPost(orgPost);
            return;
        }
        const result = orgPost.filter(item => item.tag == tag);
        setPost(result);
    }
    return (
        <div >
            <Header />
            {/* Search */}
            <Search selectedTag={(tag) => filterPost(tag)} />
            {/* IntroPost */}
            {post.length > 0 ? <IntroPost post={post[0]} /> : null}
            {/* Blogs */}
            {post.length > 0 ? <Blogs posts={post} /> : null}

        </div>
    )
}

export default Home