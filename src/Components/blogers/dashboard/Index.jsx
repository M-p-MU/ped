import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import SideBar from './SideBar';

function Index() {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/';
    }
  }, [])

  return (
    <>
      {/* <Router> */}
      <div className='flex'>
        {/* <div className='flex relative dark:bg-main-dark-bg'> */}
        <div>
          {/* <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'> */}
          <SideBar />
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
      {/* </Router> */}
    </>
  )
}

export default Index
