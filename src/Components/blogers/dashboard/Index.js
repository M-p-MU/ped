import React from 'react'
import Navbar from '../../Landing/trash/Navbar';
import SideBar from './SideBar';
import Content from './Content';

function Index() {
  return (
    <>
    <div className='flex'>
          <SideBar/>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
            <h1>Home Page</h1>
        </div>
    </div>
    </>
  )
}

export default Index
