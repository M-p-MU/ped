import React, { useState, useEffect } from "react";
import Navbar from "./trash/Navbar";
import banner from "../../Assets/images/banner.png";
import { FiArrowRight } from "react-icons/fi";
import photo from "../../Assets/images/avatar/avatar-s-11.jpg";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import jwt_decode from "jwt-decode";
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import { Button, Modal } from "flowbite-react";
import Profil from "./Profil";
import PropTypes from 'prop-types';

const Home = () => {
  const [openModal, setOpenModal] = useState();
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const props = { openModal, setOpenModal };
  Home.propTypes = {
    setOpenModal: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    // ... other prop validations if needed
  };
  // console.log(props.email);
  const token = sessionStorage.getItem("authToken");
  console.log(token);
  useEffect(() => {
    if (token) {
      const user = jwt_decode(token);
      if (user) {
        setName(user.input.username)
        setMail(user.input.email);
      }
    }

  }, []);
  const logout = () => {
    sessionStorage.removeItem("authToken");
  };
  return (
    <>
      {/* where the user is connected */}
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-4">
          <a className="btn btn-ghost text-lg hover:bg-transparent normal-case text-xl text-sky-600">
            Ped
          </a>
          <div className="flex gap-3">
            <Link className="text-sm" to="/">
              About Us
            </Link>
            <Link className="text-sm" to="/">
              <MoreHorizIcon />
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-full w-24 h-8 md:w-auto"
            />
          </div>
          {token ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0}
                htmlFor="inputField"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={photo} alt="img" />
                </div>

              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Button
                    onClick={() => document.getElementById('show_profil').showModal()}
                    className="justify-between"
                  >
                    Profile
                  </Button>
                </li>
                <dialog id="show_profil" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <Profil username={name} email={mail} />
                  </div>
                </dialog>
                <li>
                  <Link to='/blg/blogs'>My Blogs</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logout()}>
                    Logout
                  </button>
                </li>
                <dialog id="logout" className="modal">
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
                        <button onClick={() => logout()} className="btn btn-sm">Confirm</button>
                        <button className="btn btn-outline btn-error btn-sm">Cancel</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </ul>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-x-6">
              <Link
                to="login"
                className="text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-400 hover:text rounded-full px-3.5 py-1"
              >
                Sign in
              </Link>
              <Link
                to="register"
                className="rounded-full bg-black px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* end */}
      {/* Hero section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} alt="img" />
          <div>
            <h1 className="text-5xl font-bold">
              Level up with the Blogger&apos;s community{" "}
            </h1>
            <p className="py-6">
              {" "}
              Join over 14M+ bloggers to share, stress test, get propositions
              about your topic and stay up-to-date on all the latest World
              techniques and technologies. Discover a huge repository of
              community-published models, data & code for your next project.
            </p>
            <button className="btn btn-primary">
              Get Started <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default Home;
