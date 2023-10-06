import React from 'react';
import Home from './Home';
import Footer from './Footer';
import Body from './Body';
import {useLocation} from 'react-router-dom';

const Index = () => {
  // get email from login option
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email') || '';
  console.log(email);
  return (
    <div>
        <Home email={email}/>
        <Body />
        <Footer />
    </div>
  )
}

export default Index