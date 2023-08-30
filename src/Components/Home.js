import React from 'react';
import Navbar from './Navbar';
import banner from "../Assets/images/banner.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
      <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={banner} /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Level up with the Blogger’s community 
          </h1>
          <p className="primary-text">
            Join over 14M+ bloggers to share, stress test, get propositions about your topic and stay up-to-date on all the latest World techniques and technologies. Discover a huge repository of community-published models, data & code for your next project.
          </p>
          <button className="secondary-auth-button">
            Get started <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
            <img src={banner} />
        </div>
      </div>
    </div>
  )
}

export default Home