import React from 'react'
import Logo from '../../Assets/images/error/404.svg';
import '../../styles/error/index.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error-content'>
          <img src={Logo} alt="Page not found" />
          <button className="erro-btn"><Link to='/'className='text'>Back Home</Link></button>
    </div>
  )
}

export default NotFound