import React from 'react';
import { Link } from 'react-router-dom';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { Header } from '../../../Components/admin';
// import { FiArrowRight } from "react-icons/fi";
import P1 from "../../../Assets/images/posts/post1.png";
// import P2 from "../../../Assets/images/posts/post2.png";
// import photo from '../../../Assets/images/avatar/avatar-s-11.jpg';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Index = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="My Blogs" />
      {/* POSTS */}
      <div>
        {/* <div className='flex-col lg:flex-row-reverse'> */}
        {/* </div> */}
        <div className="flex flex-wrap items-stretch space-x-3 md:flex-row gap-4">
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
          <div className="card w-96 glass">
            <figure><img src={P1} alt="Shoes" /></figure>
            <h1 className="card-title m-2 text-2xl e-text-center">John  Doe</h1>
            <div className="card-body pl-3 pt-3">
              <p>Hi everyone ! Frist of all thanks to  Ped to give me the opportunity ...</p>
              <div className='flex flex-row'>
                <div className='w-5/6'>
                  <div className="card-actions justify-start">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
                <div className='gap-4'>
                  <span>
                    <Link to='/blg/blogs-edit'><EditIcon style={{ fontSize: 24, color: 'blue' }} /></Link>
                  </span>
                  <span>
                    <DeleteIcon onClick={() => document.getElementById('confirm_delete').showModal()} style={{ fontSize: 24, color: 'red' }} />
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" >open modal</button> */}
                    <dialog id="confirm_delete" className="modal">
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
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default Index;