import React from "react";
import banner from "../../../Assets/images/banner.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <>
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
