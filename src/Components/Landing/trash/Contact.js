import React from 'react';

const Contact = () => {
  return (
    <div className='footer-page-wrapper h3'>
          <h3 className='primary-text'>Question ?</h3>
          <div className='contact-form-container'>
              <input type='text' placeholder='yourmail@gmail.com' />
        <button className='submit-new-btn'>Submit</button>
          </div>
    </div>
  )
}

export default Contact