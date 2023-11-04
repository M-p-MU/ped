import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../Services/GlobalApi";
import Navbar from "../../Components/Landing/Header/Navbar";
// import { Markdown } from 'react-markdown';
import photo from "../../Assets/images/avatar/avatar-s-11.jpg";
// import CommentSection from "./CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbsUp, faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons";


const Comment = ({ comment }) => (
    <div className="border p-4 rounded-md my-4">
      <p className="text-lg">{comment.text}</p>
      <p className="text-gray-600 text-sm">Posted by: {comment.user.username}</p>
      <p className="text-gray-600 text-sm">Posted at: {new Date(comment.createdAt).toLocaleString()}</p>
      <p className="text-gray-600 text-sm">Updated at: {new Date(comment.updatedAt).toLocaleString()}</p>
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-4 mt-2 border-l pl-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );

function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    console.log("Id", id);
    getBlogById();
  }, []);

  const images = [
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171793/angular_vs_react_1024x512_12233d6004.png",
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171980/How_to_stay_focused_on_Revenue_Marketing_Practices_4_d128dc86aa.jpg",
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684246282/97069080_d012_11ea_9317_a871d5105486_f2df24134c.png",
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684246461/CM_Flutter_vs_RN_81f074bfd9.jpg",
  ];

  function getRandomImageURL(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  const getBlogById = () => {
    GlobalApi.getPostsById(id).then((resp) => {
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
        updatedAt: item.updatedAt,
      };
      setPost(result);
      console.log("Result", result);
    });
  };

  
  const handleCommentSubmit = () => {
    // Make an API request to post the new comment
    // Update the UI to display the new comment
    // You can use setPost to update the comments list
    // You may also want to clear the comment input field (newComment)
  };

  const handleLikeClick = () => {
    if (!isLiked) {
      // Make an API request to like the blog
      // Update the UI to reflect the like action
      setIsLiked(true);
    }
  };

  return (
    <>
      <Navbar />
      <div></div>
      <div className="px-6 md:px-20 lg:px-56 mt-10">
        <h3 className="text-red-500 text-[12px]">
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            {post.tag ? "TAG" : post.tag}
            {/* {post.category.title} */}
          </a>
        </h3>
        <h3 className="text-[23px] font-bold">{post.title}</h3>
        <div className="flex items-center mt-5">
          <img src={photo} alt="" className="w-[35px] rounded-full" />
          {/* <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png" alt='' className='w-[35px] rounded-full' /> */}
          <div className="ml-2">
            <h3 className="font-bold text-[12px]">{post.blogger}</h3>
            <h3 className="text-gray-500 text-[10px]">
              {GlobalApi.formatDate(post.createdAt)
                ? GlobalApi.formatDate(post.createdAt)
                : "24 Sept 2024"}
            </h3>
          </div>
        </div>
        <img
          src={getRandomImageURL(images)}
          alt="Image Description"
          className="rounded-2xl mt-5 mb-5 w-full"
        />
        {/* <img src={`https://pedbackend.onrender.com/blogImages/${post.coverImage}`} alt="Image Description" className="rounded-2xl mt-5 mb-5 w-full" /> */}
        {/* <h3>{post.desc}</h3> */}
        <p escapeHtml={false} className="leading-9">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </p>
        {/* <Markdown children={post.desc}
                    escapeHtml={false} className='leading-9' /> */}
      </div>
      <div>
        {post.comments ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <div className="space-y-4">
              {post.comments.map((comment, index) => (
                // Your existing CommentSection component
                <Comment key={index} comment={comment} />
              ))}
            </div>
            <div className="mt-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-2 border rounded-md"
              />
              <button
                onClick={handleCommentSubmit}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Post Comment
              </button>
            </div>
          </div>
        ) : (
          <p>No comments available</p>
        )}
         <div className="mt-4">
          <div>
            {isLiked ? (
              <FontAwesomeIcon
                icon={solidThumbsUp}
                onClick={handleLikeClick}
                className="text-blue-500 cursor-pointer hover:text-blue-600"
              />
            ) : (
              <FontAwesomeIcon
                icon={solidThumbsUp}
                onClick={handleLikeClick}
                className="text-gray-500 cursor-pointer hover:text-blue-500"
              />
            )}
            <span className="ml-2">{isLiked ? "Liked" : "Like"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
