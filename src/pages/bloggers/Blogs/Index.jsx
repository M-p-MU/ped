import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../../../Components/admin';
// import { FiArrowRight } from "react-icons/fi";
import { TiPipette } from "react-icons/ti";
import P1 from "../../../Assets/images/posts/post1.png";
// import P2 from "../../../Assets/images/posts/post2.png";
// import photo from '../../../Assets/images/avatar/avatar-s-11.jpg';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GlobalApi from '../../../Services/GlobalApi';
import jwt_decode from "jwt-decode";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const token = sessionStorage.getItem("authToken");
  useEffect(() => {
    if (token) {
      const user = jwt_decode(token);
      if (user) {
        myBlogs(user.input._id);
      }
    }

  }, []);

  const myBlogs = async (userId) => {
    GlobalApi.myBlogs(userId).then(resp => {
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

  const editBog = (blogId) => {
    sessionStorage.setItem('blogToEdit', blogId);
    window.location.href = '/blg/blogs-edit';
  }

  // const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="My Blogs" />
      <div className="flex justify-content-end mt-6">
        <button className="btn btn-primary">
          <Link to='/blg/blogs-add'>
            Write <TiPipette />
          </Link>
        </button>
      </div>
      {/* POSTS */}
      <div>

        {posts.length === 0 ? (
          <div className="modal-box">
            <h1 className='font-bold text-lg e-align-center'>😊</h1>
            <h3 className="font-bold text-lg">Not blogs found for this user</h3>
            <p className="py-4">You can start by creating a blog now.</p>
          </div>
        ) : (
          <div className="flex flex-wrap items-stretch space-x-3 md:flex-row gap-4">
            {posts.map((post) => (
              <div className="card w-96 glass">
                <figure><img src={P1} alt="Shoes" /></figure>
                <h1 className="card-title m-2 text-2xl e-text-center">{post.blogger}</h1>
                <div className="card-body pl-3 pt-3">
                  <p>{post.content ? post.content.slice(0, 70) : ''} ...</p>
                  <div className='flex flex-row'>
                    <div className='w-5/6'>
                      {/* <div className="card-actions justify-start">
                      <div className="badge badge-outline">Fashion</div>
                      <div className="badge badge-outline">Products</div>
                    </div> */}
                    </div>
                    <div className='gap-4'>
                      <span>
                        <button onClick={editBog(post.id)}><EditIcon style={{ fontSize: 24, color: 'blue' }} /></button>
                      </span>
                      <span>
                        <DeleteIcon onClick={() => document.getElementById(`confirm_delete${post.iid}`).showModal()} style={{ fontSize: 24, color: 'red' }} />
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" >open modal</button> */}
                        <dialog id={"confirm_delete" + post.id} className="modal">
                          <div className="modal-box">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Confirmation</h3>
                            <p className="py-4">Are you sure that you want to delete this blog ?</p>
                            <div className="modal-action">
                              <form method="dialog" className='gap-2'>
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm">Confirm</button>
                                <button className="btn btn-outline btn-error btn-sm">Cancel</button>
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
        )}
      </div>
      {/*  */}
    </div>
  );
};
export default Index;