import React from 'react'
// import logo from '../../Assets/images/logo3.png'
// import { IoLogoYoutube } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
// import { FiArrowRight } from "react-icons/fi";
import photo from '../../Assets/images/avatar/avatar-s-11.jpg';
import { Link } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Header(props) {
    // const navigate = useNavigate();
    return (
        <>
        {/* <div className='flex justify-between items-center'>
            <img src={logo} className='w-[180px]' />
            <ul className='hidden md:flex gap-4 md:gap-14'>
                <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/')}>Home</li>
                <li className='hover:font-bold cursor-pointer'>About Us</li>
                <li className='hover:font-bold cursor-pointer'>Contact Us</li>
            </ul>
            <button className='bg-red-500 rounded-full text-white flex items-center text-[14px]'>
                Subscribe <IoLogoYoutube className='ml-3 text-[20px]' /> </button>
        </div> */}
        <div className="navbar bg-base-100">
        <div className="flex-1 gap-4">
          <a className="btn btn-ghost text-lg hover:bg-transparent normal-case text-xl text-sky-600">Ped</a>
          <div className='flex gap-3'>
            <Link className='text-sm' to='/'>About Us</Link>
            <Link className='text-sm' to='/'><MoreHorizIcon /></Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered rounded-full w-24 h-8 md:w-auto" />
          </div>
          { props.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={photo} alt='photo' />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><Link to='/login-with'>Logout</Link></li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-x-6">
              <Link to="login" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-slate-400 hover:text rounded-full px-3.5 py-1">
                Sign in
              </Link>
              <Link to="register" className="rounded-full bg-black px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Register
              </Link>
            </div>
          )}

        </div>
      </div>
      </>
    )
}

export default Header