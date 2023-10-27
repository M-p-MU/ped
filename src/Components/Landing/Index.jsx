import React, { useEffect, useState } from 'react';
import Home from './Home';
import Footer from './Footer';
import Body from './Body';
import { useLocation } from 'react-router-dom';
import GlobalApi from '../../Services/GlobalApi';

const Index = () => {
  // get email from login option
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email') || '';
  console.log(email);

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts();
  }, [])
  const getPosts = async () => {
    GlobalApi.getMostTenBlogs.then(resp => {
      console.log(resp);
      const result = resp.data.topBlogs.map(item => ({
        id: item._id,
        title: item.title,
        content: item.content,
        tag: item.tag,
        coverImage: item.images,
        comments: item.comments,
        shares: item.shares,
        views: item.view,
        likes: item.likes,
        tags: item.tag,
        blogger: item.bloggerName,
      }));
      setPosts(result);
    })
  }


  return (
    <div>
      <Home email={email} />
      <Body posts={posts} />
      <Footer />
    </div>
  )
}

export default Index