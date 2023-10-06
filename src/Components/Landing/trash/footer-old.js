import React from 'react'

function footerold() {
  return (
    <div>
      <div className='footer-page-wrapper'>
        <div className='top'>
          <div className='item1'>
            <span className='logo-name'>Ped</span>
            {/* <img src={Logo} alt="Ped" className='' /> */}
          </div>
          <div className='item2'>
            <h3 className='header'>Follow us</h3>
            <div className='follow-icons'>
              <LinkedInIcon className='icon' />
              <YouTubeIcon className='icon' />
              <FacebookIcon className='icon' />
            </div>
          </div>
          <div className='item3'>
            <sapn className='header'>Subscribe to our news letters</sapn>
            <div className='contact'>
              <div className='border'> <input type='text' placeholder='your e-mail addres. e.g: text@gmail.com' className='input' /></div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
              <button className='btn'><span>Submit</span><SendIcon className='icon' /></button>
            </div>
          </div>
        </div>
        <div className='copy'>
          <div className='content'>
            <span >© Copyright Ped. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer-old
