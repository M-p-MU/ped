import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiPipette } from "react-icons/ti";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GlobalApi from "../../../Services/GlobalApi";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Header } from "../../../Components/admin";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(1);
  const [userId, setUserId] = useState();
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
const readBlog =(url)=>{
  window.location.href = url;
}
  useEffect(() => {
    if (authToken) {
      const user = jwt_decode(authToken);
      if (user) {
        setUserId(user.input._id);
        getMyBlogs(user.input._id);
      }
    }
  }, []);

  const deleteBlog = async (blogId) => {
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.delete(
        `https://pedbackend.onrender.com/api/v1/ped/blogs/${blogId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Blog deleted successfully!");
        // Instead of using window.location.href, you can use React Router for navigation
        // Example: history.push('/blg/blogs');
      }
    } catch (error) {
      alert("Something went wrong while deleting the blog. Please try again.");
      console.error("Error deleting the blog: ", error);
    }
  };

  const getMyBlogs = async (userId) => {
    // if(previousPage > 0) {
    //   setPreviousPage(nextPage - 1);
    //   setNextPage(previousPage + 1);
    // }
    // if(nextPage <= 0) {
    setNextPage(previousPage + 1);
    setPreviousPage(nextPage - 1);
    // }
    try {
      const response = await GlobalApi.myBlogs(userId);
      const result = response.userBlogs.map((item) => ({
        id: item._id,
        title: item.title,
        content: item.content,
        tag: item.tag,
        coverImage: item.image,
        comments: item.comments,
        shares: item.shares,
        views: item.view,
        likes: item.likes,
        tags: item.tag,
        blogger: item.bloggerName,
      }));
      setPosts(result);
    } catch (error) {
      console.error("Error fetching my blogs:", error);
    }
  };

  const images = ['https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171793/angular_vs_react_1024x512_12233d6004.png',
'https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171980/How_to_stay_focused_on_Revenue_Marketing_Practices_4_d128dc86aa.jpg',
'https://res.cloudinary.com/dknvsbuyy/image/upload/v1684246282/97069080_d012_11ea_9317_a871d5105486_f2df24134c.png',
'https://res.cloudinary.com/dknvsbuyy/image/upload/v1684246461/CM_Flutter_vs_RN_81f074bfd9.jpg'];

function getRandomImageURL(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
  const editBlog = (blogId) => {
   navigate(`/blg/blogs-edit/${blogId}`);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="My Blogs" />
      <div className="flex justify-end mt-6">
        <button className="btn btn-primary">
          <Link to="/blg/blogs-add">
            Write <TiPipette />
          </Link>
        </button>
      </div>
      <div className="mt-6">
        {posts.length === 0 ? (
          <div className="modal-box">
            <h1 className="font-bold text-lg e-align-center">😊</h1>
            <h3 className="font-bold text-lg">No blogs found for this user</h3>
            <p className="py-4">You can start by creating a blog now.</p>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap items-stretch space-x-3 md:flex-row gap-4">
              {posts.map((post) => (
                <div className="card w-96 glass" key={post.id} onClick={()=> readBlog('/blog-detail/' + post.id)}>
                  <figure>
                    <img src={getRandomImageURL(images)}
                      alt="Blog Image" />
                      {/* <img src={`https://pedbackend.onrender.com/blogImages/${post.coverImage}`}
                      alt="Blog Image" /> */}
                  </figure>
                  <h1 className="card-title m-2 text-2xl e-text-center">
                    {post.title}
                  </h1>
                  <div className="card-body pl-3 pt-3">
                    <p>
                      {post.content ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.content.slice(0, 70),
                          }}
                        />
                      ) : (
                        ""
                      )}
                      ...
                    </p>
                    <div className="flex flex-row">
                      <div className="w-5/6"></div>
                      <div className="gap-4">
                        <span>
                          <button onClick={() => editBlog(post.id)}>
                            <EditIcon style={{ fontSize: 24, color: "blue" }} />
                          </button>
                        </span>
                        <span>
                          <DeleteIcon
                            onClick={() =>
                              document
                                .getElementById(`confirm_delete${post.id}`)
                                .showModal()
                            }
                            style={{ fontSize: 24, color: "red" }}
                          />
                          <dialog
                            id={`confirm_delete${post.id}`}
                            className="modal"
                          >
                            <div className="modal-box">
                              <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                  ✕
                                </button>
                              </form>
                              <h3 className="font-bold text-lg">
                                Confirmation
                              </h3>
                              <p className="py-4">
                                Are you sure that you want to delete this blog?
                              </p>
                              <div className="modal-action">
                                <form method="dialog" className="gap-2">
                                  <button
                                    onClick={() => deleteBlog(post.id)}
                                    className="btn btn-sm"
                                  >
                                    Confirm
                                  </button>
                                  <button className="btn btn-outline btn-error btn-sm">
                                    Cancel
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex mb-6 mt-6">
              <button
                onClick={() => getMyBlogs(`${userId}?page=${previousPage}`)}
                className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Previous
              </button>
              <button
                onClick={() => getMyBlogs(`${userId}?page=${nextPage}`)}
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
